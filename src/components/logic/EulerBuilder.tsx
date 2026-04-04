import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, XCircle, RefreshCw, Info, HelpCircle } from 'lucide-react';
import { EulerRule, EulerRelation } from '../../data/logic/raporturi-intre-termeni-euler';
import { EULER_COLORS } from './EulerDiagram';

interface BuilderTerm {
  id: string;
  label: string;
  color: string;
  r: number;
}

interface TermState {
  id: string;
  x: number;
  y: number;
  r: number;
}

interface EulerBuilderProps {
  terms: BuilderTerm[];
  rules: EulerRule[];
  title?: string;
  onSuccess?: () => void;
}

export default function EulerBuilder({ terms, rules, title, onSuccess }: EulerBuilderProps) {
  const WIDTH = 400;
  const HEIGHT = 260; // Slightly shorter for better fitting

  // State for circle positions (SVG coordinates)
  const [placed, setPlaced] = useState<Record<string, { x: number, y: number, r: number }>>({});
  const [feedback, setFeedback] = useState<{ status: 'idle' | 'success' | 'refused', message: string }>({ status: 'idle', message: '' });
  const [showRules, setShowRules] = useState(false);

  const svgRef = useRef<SVGSVGElement>(null);

  // Ref to store the offset between mouse click and circle center
  const grabOffset = useRef({ x: 0, y: 0 });

  const handleReset = () => {
    setPlaced({});
    setFeedback({ status: 'idle', message: '' });
  };

  const getRelation = (t1: TermState, t2: TermState): EulerRelation => {
    const dx = t1.x - t2.x;
    const dy = t1.y - t2.y;
    const d = Math.sqrt(dx * dx + dy * dy);
    const EPSILON = 12; // Flexible identity threshold

    if (d < EPSILON && Math.abs(t1.r - t2.r) < EPSILON) return 'identitate';
    if (d + t1.r < t2.r + 3) return 'subordonare'; // T1 inside T2
    if (d + t2.r < t1.r + 3) return 'subordonare'; // T2 inside T1
    if (d > t1.r + t2.r - 3) return 'contrarietate';
    return 'incrucisare';
  };

  const verify = () => {
    if (Object.keys(placed).length < terms.length) {
      setFeedback({ status: 'refused', message: 'Trage toți termenii pe diagramă!' });
      return;
    }

    const errors: string[] = [];
    rules.forEach(rule => {
      const tA = { id: rule.a, ...placed[rule.a] };
      const tB = { id: rule.b, ...placed[rule.b] };
      const realRel = getRelation(tA, tB);
      
      if (rule.relation === 'identitate') {
        if (realRel !== 'identitate') errors.push(`A și B trebuie să fie suprapuși (identitate).`);
      } else if (rule.relation === 'subordonare') {
        const dx = tA.x - tB.x;
        const dy = tA.y - tB.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d + tA.r > tB.r + 6) errors.push(`${rule.a} trebuie să fie în interiorul lui ${rule.b} (specie).`);
      } else if (rule.relation === 'incrucisare') {
        if (realRel !== 'incrucisare') errors.push(`${rule.a} și ${rule.b} trebuie să se intersecteze parțial.`);
      } else if (rule.relation === 'contrarietate') {
        if (realRel !== 'contrarietate') errors.push(`${rule.a} și ${rule.b} trebuie să fie separați (contrarietate).`);
      }
    });

    if (errors.length === 0) {
      setFeedback({ status: 'success', message: 'Corect! Ai reprezentat corect toate raporturile.' });
      if (onSuccess) onSuccess();
    } else {
      setFeedback({ status: 'refused', message: errors[0] });
    }
  };

  return (
    <div style={{
      background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 16,
      overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: '0 8px 32px rgba(0,0,0,0.2)'
    }}>
      {/* Header */}
      <div style={{ padding: '20px 24px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
           <div style={{ fontSize: 10, fontFamily: 'var(--font-mono)', color: 'var(--logic)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 4 }}>Laborator de Logică</div>
           <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--text-primary)' }}>{title || 'Diagramă Euler'}</div>
        </div>
        <button onClick={() => setShowRules(!showRules)} style={{ background: 'var(--bg-muted)', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: 10, borderRadius: 10 }}>
          <HelpCircle size={18} />
        </button>
      </div>

      {/* Palette Info */}
      <div style={{ padding: '12px 24px', background: 'var(--bg-muted)', borderBottom: '1px solid var(--border)', display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap' }}>
        <span style={{ fontSize: 12, color: 'var(--text-secondary)', fontWeight: 600 }}>Târăște simbolurile:</span>
        {terms.map(t => (
          <div key={t.id} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: EULER_COLORS[t.id as keyof typeof EULER_COLORS]?.label, fontWeight: 700, opacity: placed[t.id] ? 0.35 : 1 }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: EULER_COLORS[t.id as keyof typeof EULER_COLORS]?.stroke }} />
            {t.id}
          </div>
        ))}
      </div>

      {/* SVG Canvas with draggable elements inside */}
      <div style={{ padding: 0, position: 'relative', background: '#0a0a0c', cursor: 'pointer' }}>
        <svg
          ref={svgRef}
          viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
          style={{ width: '100%', height: 'auto', display: 'block', touchAction: 'none' }}
        >
          <defs>
            <pattern id="dot-grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="rgba(255,255,255,0.05)" />
            </pattern>
          </defs>
          <rect width={WIDTH} height={HEIGHT} fill="url(#dot-grid)" />

          {/* Terms */}
          {terms.map((t, idx) => {
            const colors = EULER_COLORS[t.id as keyof typeof EULER_COLORS] || EULER_COLORS.A;
            const state = placed[t.id];
            
            const initialX = idx * 65 + 60;
            const initialY = HEIGHT - 45;

            const cx = state ? state.x : initialX;
            const cy = state ? state.y : initialY;

            return (
              <motion.g
                key={t.id}
                drag
                dragMomentum={false}
                onDragStart={(_, info) => {
                  const svg = svgRef.current;
                  if (svg) {
                    const CTM = svg.getScreenCTM()?.inverse();
                    if (CTM) {
                      const pt = svg.createSVGPoint();
                      pt.x = info.point.x;
                      pt.y = info.point.y;
                      const svgPt = pt.matrixTransform(CTM);
                      // Offset from cursor to center
                      grabOffset.current = {
                        x: svgPt.x - cx,
                        y: svgPt.y - cy
                      };
                    }
                  }
                }}
                onDragEnd={(_, info) => {
                   const svg = svgRef.current;
                   if (svg) {
                     const CTM = svg.getScreenCTM()?.inverse();
                     if (CTM) {
                       const pt = svg.createSVGPoint();
                       pt.x = info.point.x;
                       pt.y = info.point.y;
                       const svgPt = pt.matrixTransform(CTM);
                       
                       setPlaced(prev => ({
                         ...prev,
                         [t.id]: { 
                           x: svgPt.x - grabOffset.current.x, 
                           y: svgPt.y - grabOffset.current.y, 
                           r: t.r 
                         }
                       }));
                     }
                   }
                }}
                animate={{ x: cx, y: cy }}
                transition={{ type: 'spring', damping: 30, stiffness: 300, mass: 0.8 }}
                style={{ cursor: 'grab' }}
              >
                <circle
                  r={t.r}
                  fill={colors.fill}
                  stroke={colors.stroke}
                  strokeWidth="2.5"
                  style={{ backdropFilter: 'blur(2px)' }}
                />
                <circle
                  r={12}
                  cy={-t.r + 5}
                  fill={colors.stroke}
                />
                <text
                  y={-t.r + 9}
                  textAnchor="middle"
                  fill="white"
                  fontSize="12"
                  fontWeight="800"
                  fontFamily="var(--font-mono)"
                >
                  {t.id}
                </text>
              </motion.g>
            );
          })}
        </svg>

        {showRules && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} style={{ position: 'absolute', top: 12, left: 12, right: 12, padding: 16, background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(10px)', border: '1px solid var(--logic-border)', borderRadius: 12, zIndex: 100 }}>
             <p style={{ margin: '0 0 8px', fontSize: 12, color: 'white', fontWeight: 600 }}>Cerință:</p>
             <p style={{ margin: 0, fontSize: 13, color: 'rgba(255,255,255,0.8)', lineHeight: 1.5 }}>
                Aranjează cercurile pentru a respecta relațiile de identitate, specia/gen, încrucișare și contrarietate precizate în enunț.
             </p>
          </motion.div>
        )}
      </div>

      {/* Controls */}
      <div style={{ padding: '20px 24px', borderTop: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          {feedback.status === 'success' ? <CheckCircle size={20} color="var(--green)" /> : feedback.status === 'refused' ? <XCircle size={20} color="var(--accent)" /> : <RefreshCw size={20} color="var(--text-muted)" />}
          <span style={{ fontSize: 14, fontWeight: 500, color: feedback.status === 'success' ? 'var(--green)' : feedback.status === 'refused' ? 'var(--accent)' : 'var(--text-muted)' }}>
            {feedback.message || 'Trage cercurile în zonă.'}
          </span>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <button onClick={handleReset} style={{ height: 44, padding: '0 16px', background: 'none', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--text-muted)', cursor: 'pointer' }}>Resetează</button>
          <button onClick={verify} style={{ height: 44, padding: '0 28px', background: 'linear-gradient(135deg, var(--logic) 0%, var(--logic-light) 100%)', border: 'none', borderRadius: 12, color: 'white', fontWeight: 700, cursor: 'pointer', boxShadow: '0 4px 12px rgba(79,70,229,0.3)' }}>Verifică</button>
        </div>
      </div>
    </div>
  );
}
