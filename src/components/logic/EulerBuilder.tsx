/**
 * EulerBuilder.tsx — Production-ready interactive SVG drag-and-drop
 *
 * THREE ROOT CAUSES FIXED:
 *
 * ① Coordinate mismatch
 *    Framer Motion's `drag` works in screen pixels. Our SVG uses viewBox units.
 *    FIX: Abandon `motion.g drag` entirely. Use raw pointer events + `svgPoint()`
 *    which uses `getScreenCTM().inverse()` to convert client coords → SVG units,
 *    regardless of browser zoom, container size, or SVG scaling.
 *
 * ② Grab-offset jump
 *    If you click the edge of a circle, the center should NOT snap to the cursor.
 *    FIX: On `pointerdown`, record `grabOffset = cursorSVGPos − circleCenter`.
 *    On every `pointermove`, the new center = `cursorSVGPos − grabOffset`.
 *
 * ③ State/render desync jump
 *    Framer Motion's internal drag transform conflicts with React `animate` state.
 *    FIX: Use a separate `drag` state for the currently-dragged element. During drag,
 *    `getPos(id)` returns `drag.pos` (live) not `settled[id]` (stale). On `pointerup`,
 *    we write the final position to `settled` and clear `drag`. React renders once
 *    with the exact final position — there is no intermediate state to cause a jump.
 *
 * ④ Magnet snap (bonus)
 *    Identity-paired circles glow and snap if released within SNAP_DIST SVG units.
 */

import React, { useState, useRef, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, XCircle, RefreshCw, HelpCircle, Magnet, Info } from 'lucide-react';
import type { EulerRule, EulerRelation } from '../../data/logic/raporturi-intre-termeni-euler';
import { EULER_COLORS } from './EulerDiagram';

// ─── Constants ────────────────────────────────────────────────────────────────

const W = 400;           // SVG viewBox width
const H = 280;           // SVG viewBox height
const SNAP_DIST = 32;    // SVG units — how close for magnetic snap

// ─── Types ────────────────────────────────────────────────────────────────────

interface Pt { x: number; y: number }

interface BuilderTerm {
  id: string;
  label: string;
  color: string;
  r: number;    // radius in SVG units
}

interface EulerBuilderProps {
  terms: BuilderTerm[];
  rules: EulerRule[];
  title?: string;
  statement?: React.ReactNode;
  onSuccess?: () => void;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

/**
 * Convert a client-space point (e.clientX/Y) to SVG viewBox coordinates.
 * This is the ONLY correct way to go from pointer events to SVG units —
 * it accounts for CSS scaling, browser zoom, device pixel ratio, and scroll.
 */
function svgPoint(svg: SVGSVGElement, clientX: number, clientY: number): Pt {
  const pt = svg.createSVGPoint();
  pt.x = clientX;
  pt.y = clientY;
  const ctm = svg.getScreenCTM();
  if (!ctm) return { x: clientX, y: clientY }; // fallback (should never happen)
  const converted = pt.matrixTransform(ctm.inverse());
  return { x: converted.x, y: converted.y };
}

const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v));

/**
 * Classify the geometric relationship between two circles from their positions.
 * Returns one of the four Euler relation types.
 */
function detectRelation(
  ax: number, ay: number, rA: number,
  bx: number, by: number, rB: number,
  tolerance = 8,
): EulerRelation {
  const d = Math.hypot(ax - bx, ay - by);
  if (d < 12 && Math.abs(rA - rB) < 12) return 'identitate';
  if (d + rA <= rB + tolerance) return 'subordonare';  // A ⊂ B
  if (d + rB <= rA + tolerance) return 'subordonare';  // B ⊂ A
  if (d >= rA + rB - tolerance) return 'contrarietate';
  return 'incrucisare';
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function EulerBuilder({ terms, rules, title, statement, onSuccess }: EulerBuilderProps) {

  // ── Initial layout: spread terms evenly along the bottom of the canvas
  const initPositions = (): Record<string, Pt> =>
    Object.fromEntries(
      terms.map((t, i) => [
        t.id,
        { x: (i + 1) * (W / (terms.length + 1)), y: H - 52 },
      ])
    );

  // ── State ────────────────────────────────────────────────────────────────

  /**
   * `settled` = committed positions for ALL circles.
   * Updated only on pointerup (never mid-drag).
   */
  const [settled, setSettled] = useState<Record<string, Pt>>(initPositions);

  /**
   * `drag` = the id + live position of the currently-dragged circle.
   * While dragging, the dragged circle reads from `drag.pos`, not `settled`.
   * This is the key to eliminating the render-desync jump.
   */
  const [drag, setDrag] = useState<{ id: string; pos: Pt } | null>(null);

  /** Which circle is the identity snap target (shown with glow) */
  const [snapTarget, setSnapTarget] = useState<string | null>(null);

  const [feedback, setFeedback] = useState<{
    type: 'idle' | 'ok' | 'err';
    msg: string;
  }>({ type: 'idle', msg: '' });

  const [showHelp, setShowHelp] = useState(false);

  // ── Refs ─────────────────────────────────────────────────────────────────

  const svgRef = useRef<SVGSVGElement>(null);

  /**
   * grabOffset: the delta between where the user clicked (in SVG units)
   * and the circle's center. Stored in a ref (not state) so it doesn't
   * cause re-renders and is always current in event handlers.
   */
  const grabOffset = useRef<Pt>({ x: 0, y: 0 });

  /**
   * The identity-rule partner for the currently dragged term.
   * Computed once on pointerdown, read on pointermove/up.
   */
  const identityPartnerId = useRef<string | null>(null);

  // ── Derived ──────────────────────────────────────────────────────────────

  /**
   * The effective position of a circle — live during drag, settled otherwise.
   * All rendering reads through this function.
   */
  const getPos = (id: string): Pt =>
    drag?.id === id ? drag.pos : settled[id];

  // ── Pointer handlers ─────────────────────────────────────────────────────

  const handlePointerDown = useCallback(
    (e: React.PointerEvent, id: string) => {
      e.preventDefault();
      e.stopPropagation();
      if (!svgRef.current) return;

      // ✅ Fix ②: Capture the pointer so move/up fire even if cursor leaves element
      (e.currentTarget as Element).setPointerCapture(e.pointerId);

      // ✅ Fix ①: Convert client coords → SVG viewBox units
      const cursorSVG = svgPoint(svgRef.current, e.clientX, e.clientY);
      const center = settled[id];

      // ✅ Fix ②: Store where WITHIN the circle the user clicked
      grabOffset.current = {
        x: cursorSVG.x - center.x,
        y: cursorSVG.y - center.y,
      };

      // Pre-compute identity partner once
      const rule = rules.find(
        r => r.relation === 'identitate' && (r.a === id || r.b === id)
      );
      identityPartnerId.current = rule
        ? (rule.a === id ? rule.b : rule.a)
        : null;

      // ✅ Fix ③: Begin drag state with the circle's current settled position.
      // From now on, this circle renders from `drag.pos` not `settled`.
      setDrag({ id, pos: center });
      setFeedback({ type: 'idle', msg: '' });
    },
    [settled, rules]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!drag || !svgRef.current) return;
      e.preventDefault();

      // ✅ Fix ①: Convert client coords → SVG viewBox units
      const cursorSVG = svgPoint(svgRef.current, e.clientX, e.clientY);

      // ✅ Fix ②: Subtract the grab offset so the circle center tracks the grab point
      const newPos: Pt = {
        x: clamp(cursorSVG.x - grabOffset.current.x, 0, W),
        y: clamp(cursorSVG.y - grabOffset.current.y, 0, H),
      };

      // ✅ Fix ③: Update `drag.pos` — the dragged circle re-renders from this,
      // never from `settled`. No conflict with committed state.
      setDrag({ id: drag.id, pos: newPos });

      // Magnetic snap detection
      if (identityPartnerId.current) {
        const pPos = settled[identityPartnerId.current];
        const dist = Math.hypot(newPos.x - pPos.x, newPos.y - pPos.y);
        const candidate = dist < SNAP_DIST ? identityPartnerId.current : null;
        // Avoid unnecessary state updates that would cause extra renders
        setSnapTarget(prev => (prev === candidate ? prev : candidate));
      }
    },
    [drag, settled]
  );

  const handlePointerUp = useCallback(
    (e: React.PointerEvent) => {
      if (!drag) return;

      let finalPos = drag.pos;

      // Apply magnetic snap if within range
      if (identityPartnerId.current && snapTarget === identityPartnerId.current) {
        finalPos = { ...settled[identityPartnerId.current] };
      }

      // ✅ Fix ③: Commit to settled state. React renders once with the exact
      // final position. `drag` is cleared simultaneously so no intermediate
      // state exists where the circle has no position source.
      setSettled(prev => ({ ...prev, [drag.id]: finalPos }));
      setDrag(null);
      setSnapTarget(null);
      identityPartnerId.current = null;
    },
    [drag, settled, snapTarget]
  );

  // ── Reset ─────────────────────────────────────────────────────────────────

  const handleReset = () => {
    setSettled(initPositions());
    setDrag(null);
    setSnapTarget(null);
    setFeedback({ type: 'idle', msg: '' });
  };

  // ── Verification ──────────────────────────────────────────────────────────

  const verify = () => {
    const errors: string[] = [];

    for (const rule of rules) {
      const posA = getPos(rule.a);
      const posB = getPos(rule.b);
      if (!posA || !posB) { errors.push('Plasează toți termenii pe diagramă.'); break; }

      const rA = terms.find(t => t.id === rule.a)!.r;
      const rB = terms.find(t => t.id === rule.b)!.r;
      const d = Math.hypot(posA.x - posB.x, posA.y - posB.y);

      switch (rule.relation) {
        case 'identitate':
          if (d >= 14)
            errors.push(`${rule.a} și ${rule.b} trebuie să fie suprapuși complet (identitate ≡).`);
          break;

        case 'subordonare': {
          // rule.a is the species → must be fully inside rule.b
          const inner = rA, outer = rB;
          if (d + inner > outer + 10)
            errors.push(`${rule.a} trebuie să fie complet în interiorul lui ${rule.b} (subordonare ⊂).`);
          break;
        }

        case 'incrucisare': {
          const rel = detectRelation(posA.x, posA.y, rA, posB.x, posB.y, rB);
          if (rel !== 'incrucisare')
            errors.push(`${rule.a} și ${rule.b} trebuie să se intersecteze parțial (încrucișare ∩).`);
          break;
        }

        case 'contrarietate':
        case 'contradictie':
        case 'opozitie':
          if (d <= rA + rB - 6)
            errors.push(`${rule.a} și ${rule.b} trebuie să fie complet separați (raport de ${rule.relation}).`);
          break;
      }
    }

    if (errors.length === 0) {
      setFeedback({ type: 'ok', msg: 'Excelent! Reprezentarea ta respectă toate condițiile logice.' });
      onSuccess?.();
    } else {
      setFeedback({ type: 'err', msg: errors[0] });
    }
  };

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <div
      style={{
        border: '1px solid var(--border)',
        borderRadius: 16,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* ── Header ── */}
      <div
        style={{
          padding: '14px 20px',
          borderBottom: '1px solid var(--border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 12,
        }}
      >
        <span style={{
          fontSize: 13,
          fontWeight: 600,
          color: 'var(--text-primary)',
          letterSpacing: '-0.01em',
        }}>
          {title || 'Constructor Diagrame Euler'}
        </span>

        <div style={{ display: 'flex', gap: 6 }}>
          <button
            onClick={handleReset}
            title="Resetează"
            style={{
              width: 32, height: 32,
              borderRadius: 8,
              background: 'transparent',
              border: '1px solid var(--border)',
              color: 'var(--text-muted)',
              cursor: 'pointer',
              display: 'grid', placeItems: 'center',
              transition: 'all 0.15s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'var(--bg-muted)';
              e.currentTarget.style.color = 'var(--text-primary)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = 'var(--text-muted)';
            }}
          >
            <RefreshCw size={13} />
          </button>
          <button
            onClick={() => setShowHelp(h => !h)}
            title="Afișează cerințele"
            style={{
              width: 32, height: 32,
              borderRadius: 8,
              background: showHelp ? 'var(--logic-dim)' : 'transparent',
              border: `1px solid ${showHelp ? 'var(--logic-border)' : 'var(--border)'}`,
              color: showHelp ? 'var(--logic)' : 'var(--text-muted)',
              cursor: 'pointer',
              display: 'grid', placeItems: 'center',
              transition: 'all 0.15s',
            }}
          >
            <HelpCircle size={14} />
          </button>
        </div>
      </div>

      {/* ── Statement ── */}
      {statement && (
        <div style={{
          padding: '12px 20px',
          borderBottom: '1px solid var(--border)',
          fontSize: 13,
          color: 'var(--text-secondary)',
          lineHeight: 1.65,
          background: 'var(--bg-muted)',
        }}>
          {statement}
        </div>
      )}

      {/* ── SVG Canvas ── */}
      <div style={{ position: 'relative', flexShrink: 0 }}>
        <svg
          ref={svgRef}
          viewBox={`0 0 ${W} ${H}`}
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            touchAction: 'none',
            userSelect: 'none',
            WebkitUserSelect: 'none',
            background: '#0c0d10',
          }}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
        >
          <defs>
            <pattern id="eb-grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="0.5" cy="0.5" r="0.5" fill="rgba(255,255,255,0.07)" />
            </pattern>
            <radialGradient id="eb-vignette" cx="50%" cy="50%" r="70%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="100%" stopColor="rgba(0,0,0,0.45)" />
            </radialGradient>
            <filter id="eb-shadow">
              <feDropShadow dx="0" dy="3" stdDeviation="6" floodOpacity="0.4" />
            </filter>
          </defs>

          <rect width={W} height={H} fill="url(#eb-grid)" />
          <rect width={W} height={H} fill="url(#eb-vignette)" />

          {terms.map(term => {
            const pos = getPos(term.id);
            const colors = EULER_COLORS[term.id as keyof typeof EULER_COLORS] ?? EULER_COLORS.A;
            const isDragging = drag?.id === term.id;
            const isSnapping = isDragging && snapTarget !== null;
            const isSnapTarget = snapTarget === term.id && !isDragging;

            return (
              <g
                key={term.id}
                transform={`translate(${pos.x},${pos.y})`}
                onPointerDown={e => handlePointerDown(e, term.id)}
                style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
              >
                {(isSnapping || isSnapTarget) && (
                  <circle r={term.r + 8} fill="none" stroke={colors.stroke} strokeWidth="1" opacity="0.35">
                    <animate attributeName="r" values={`${term.r + 4};${term.r + 14};${term.r + 4}`} dur="1.1s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.4;0.08;0.4" dur="1.1s" repeatCount="indefinite" />
                  </circle>
                )}

                <circle
                  r={term.r}
                  fill={colors.fill}
                  stroke={isSnapping || isSnapTarget ? 'rgba(255,255,255,0.5)' : colors.stroke}
                  strokeWidth={isDragging ? 2 : 1.5}
                  opacity={isDragging ? 0.92 : 1}
                  filter={isDragging ? 'url(#eb-shadow)' : undefined}
                />

                {/* Label inside circle */}
                <text
                  textAnchor="middle"
                  y={5}
                  fontSize="13"
                  fontWeight="700"
                  fontFamily="var(--font-mono)"
                  fill={colors.stroke}
                  style={{ pointerEvents: 'none', userSelect: 'none' }}
                >
                  {term.id}
                </text>
              </g>
            );
          })}
        </svg>

        {/* ── Help overlay ── */}
        <AnimatePresence>
          {showHelp && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.15 }}
              style={{
                position: 'absolute',
                top: 12,
                right: 12,
                width: 210,
                background: 'rgba(12,13,16,0.96)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 12,
                padding: '14px 16px',
                backdropFilter: 'blur(12px)',
                zIndex: 20,
              }}
            >
              <div style={{
                fontSize: 10,
                fontFamily: 'var(--font-mono)',
                color: 'var(--logic)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontWeight: 700,
                marginBottom: 10,
              }}>
                Cerințe
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                {rules.map((r, i) => (
                  <div key={i} style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', lineHeight: 1.5 }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'rgba(255,255,255,0.9)' }}>{r.a}</span>
                    {' '}
                    <span style={{ color: 'var(--logic)' }}>
                      {r.relation === 'identitate' ? '≡' : r.relation === 'subordonare' ? '⊂' : r.relation === 'incrucisare' ? '∩' : '⊥'}
                    </span>
                    {' '}
                    <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'rgba(255,255,255,0.9)' }}>{r.b}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── Footer ── */}
      <div
        style={{
          padding: '12px 20px',
          borderTop: '1px solid var(--border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
        }}
      >
        {/* Status strip */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flex: 1, minWidth: 0 }}>
          <div style={{
            width: 6, height: 6, borderRadius: '50%', flexShrink: 0,
            background:
              feedback.type === 'ok' ? 'var(--green)'
                : feedback.type === 'err' ? 'var(--accent)'
                  : 'var(--border)',
            transition: 'background 0.2s',
          }} />
          <p style={{
            fontSize: 12, margin: 0, lineHeight: 1.5,
            color: feedback.type === 'ok'
              ? 'var(--green)'
              : feedback.type === 'err'
                ? 'var(--accent)'
                : 'var(--text-muted)',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
          }}>
            {feedback.msg || 'Trage cercurile pentru a reprezenta raporturile.'}
          </p>
        </div>

        {/* Verify */}
        <button
          onClick={verify}
          style={{
            height: 36,
            padding: '0 20px',
            background: 'var(--logic)',
            border: 'none',
            borderRadius: 8,
            color: 'white',
            fontWeight: 600,
            fontSize: 12,
            cursor: 'pointer',
            flexShrink: 0,
            letterSpacing: '-0.01em',
            transition: 'opacity 0.15s, transform 0.1s',
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          onMouseDown={e => (e.currentTarget.style.transform = 'scale(0.97)')}
          onMouseUp={e => (e.currentTarget.style.transform = 'scale(1)')}
        >
          Verifică
        </button>
      </div>
    </div>
  );
}
