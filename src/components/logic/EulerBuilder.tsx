import { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'motion/react';
import { CheckCircle, XCircle, RefreshCw, Info, HelpCircle, Magnet } from 'lucide-react';
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
  const HEIGHT = 280;

  // Final positions in SVG units
  const [placed, setPlaced] = useState<Record<string, { x: number, y: number, r: number }>>({});
  const [feedback, setFeedback] = useState<{ status: 'idle' | 'success' | 'refused', message: string }>({ status: 'idle', message: '' });
  const [showRules, setShowRules] = useState(false);
  const [isSnapping, setIsSnapping] = useState<string | null>(null);

  const svgRef = useRef<SVGSVGElement>(null);

  // Initial distribution
  const getInitialPos = (id: string) => {
    const idx = terms.findIndex(t => t.id === id);
    return {
      x: idx * 65 + 60,
      y: HEIGHT - 45
    };
  };

  const handleReset = () => {
    setPlaced({});
    setFeedback({ status: 'idle', message: '' });
    setIsSnapping(null);
  };

  const getRelation = (t1: TermState, t2: TermState): EulerRelation => {
    const dx = t1.x - t2.x;
    const dy = t1.y - t2.y;
    const d = Math.sqrt(dx * dx + dy * dy);
    
    // Snapping / Identity threshold
    if (d < 15 && Math.abs(t1.r - t2.r) < 15) return 'identitate';
    if (d + t1.r < t2.r + 5) return 'subordonare'; // T1 inside T2
    if (d + t2.r < t1.r + 5) return 'subordonare'; // T2 inside T1
    if (d > t1.r + t2.r - 5) return 'contrarietate';
    return 'incrucisare';
  };

  const verify = () => {
    if (Object.keys(placed).length < terms.length) {
      setFeedback({ status: 'refused', message: 'Te rog să plasezi toți termenii pe diagramă.' });
      return;
    }

    const errors: string[] = [];
    rules.forEach(rule => {
      const tA = { id: rule.a, ...placed[rule.a] };
      const tB = { id: rule.b, ...placed[rule.b] };
      const realRel = getRelation(tA, tB);
      
      if (rule.relation === 'identitate') {
        if (realRel !== 'identitate') errors.push(`A și B trebuie să fie identici (complet suprapuși).`);
      } else if (rule.relation === 'subordonare') {
        const dx = tA.x - tB.x;
        const dy = tA.y - tB.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        // rule.a is species of rule.b
        if (d + tA.r > tB.r + 8) errors.push(`Termenul ${rule.a} trebuie să fie o specie a termenului ${rule.b} (complet inclus).`);
      } else if (rule.relation === 'incrucisare') {
        if (realRel !== 'incrucisare') errors.push(`${rule.a} și ${rule.b} trebuie să se intersecteze parțial.`);
      } else if (rule.relation === 'contrarietate') {
        if (realRel !== 'contrarietate') errors.push(`${rule.a} și ${rule.b} trebuie să fie complet separați.`);
      }
    });

    if (errors.length === 0) {
      setFeedback({ status: 'success', message: 'Excelent! Reprezentarea ta respectă toate condițiile logice.' });
      if (onSuccess) onSuccess();
    } else {
      setFeedback({ status: 'refused', message: errors[0] });
    }
  };

  // Helper to convert screen coordinates to SVG units
  const screenToSVG = (x: number, y: number) => {
    if (!svgRef.current) return { x, y };
    const svg = svgRef.current;
    const CTM = svg.getScreenCTM();
    if (!CTM) return { x, y };
    const pt = svg.createSVGPoint();
    pt.x = x;
    pt.y = y;
    const svgPt = pt.matrixTransform(CTM.inverse());
    return { x: svgPt.x, y: svgPt.y };
  };

  return (
    <div style={{
      background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 20,
      overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: '0 12px 48px rgba(0,0,0,0.3)'
    }}>
      {/* Top Banner */}
      <div style={{ padding: '24px 28px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(255,255,255,0.01)' }}>
        <div>
           <div style={{ fontSize: 11, fontFamily: 'var(--font-mono)', color: 'var(--logic)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 6, fontWeight: 600 }}>BacPrep Logic Lab</div>
           <div style={{ fontSize: 20, fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>{title || 'Constructor Diagrame Euler'}</div>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <button onClick={() => handleReset()} style={{ padding: '8px 12px', borderRadius: 10, background: 'var(--bg-muted)', border: '1px solid var(--border)', color: 'var(--text-muted)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 500 }}>
             <RefreshCw size={14} /> Resetează
          </button>
          <button onClick={() => setShowRules(!showRules)} style={{ padding: 8, borderRadius: 10, background: 'var(--bg-muted)', border: '1px solid var(--border)', color: 'var(--text-muted)', cursor: 'pointer' }}>
            <HelpCircle size={18} />
          </button>
        </div>
      </div>

      {/* Main Interaction Area */}
      <div style={{ position: 'relative', background: '#08080a' }}>
        <svg
          ref={svgRef}
          viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
          style={{ width: '100%', height: 'auto', display: 'block', touchAction: 'none' }}
        >
          <defs>
            <radialGradient id="grad-center" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(99,102,241,0.05)" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
            <pattern id="dot-pattern" width="25" height="25" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.5" fill="rgba(255,255,255,0.04)" />
            </pattern>
          </defs>
          <rect width={WIDTH} height={HEIGHT} fill="url(#dot-pattern)" />
          <rect width={WIDTH} height={HEIGHT} fill="url(#grad-center)" />

          {/* Circles */}
          {terms.map((t, idx) => {
            const colors = EULER_COLORS[t.id as keyof typeof EULER_COLORS] || EULER_COLORS.A;
            const current = placed[t.id] || getInitialPos(t.id);
            const isIdentityPartner = rules.find(r => r.relation === 'identitate' && (r.a === t.id || r.b === t.id));

            return (
              <motion.g
                key={t.id}
                drag
                dragMomentum={false}
                dragElastic={0}
                layoutId={t.id}
                onDragStart={() => {
                   setFeedback({ status: 'idle', message: '' });
                }}
                onDrag={(e, info) => {
                   // Check for identity snapping candidate in real-time
                   if (isIdentityPartner) {
                      const partnerId = isIdentityPartner.a === t.id ? isIdentityPartner.b : isIdentityPartner.a;
                      const partner = placed[partnerId];
                      if (partner) {
                         const currentPt = screenToSVG(info.point.x, info.point.y);
                         const d = Math.sqrt(Math.pow(currentPt.x - partner.x, 2) + Math.pow(currentPt.y - partner.y, 2));
                         if (d < 30) setIsSnapping(t.id);
                         else setIsSnapping(null);
                      }
                   }
                }}
                onDragEnd={(e, info) => {
                   const svgPos = screenToSVG(info.point.x, info.point.y);
                   let finalX = svgPos.x;
                   let finalY = svgPos.y;

                   // Magnet Logic: If near identity partner, snap to it
                   if (isIdentityPartner) {
                      const partnerId = isIdentityPartner.a === t.id ? isIdentityPartner.b : isIdentityPartner.a;
                      const partner = placed[partnerId];
                      if (partner) {
                         const d = Math.sqrt(Math.pow(finalX - partner.x, 2) + Math.pow(finalY - partner.y, 2));
                         if (d < 30) {
                            finalX = partner.x;
                            finalY = partner.y;
                         }
                      }
                   }

                   setIsSnapping(null);
                   setPlaced(prev => ({
                     ...prev,
                     [t.id]: { x: finalX, y: finalY, r: t.r }
                   }));
                }}
                animate={{ x: current.x, y: current.y }}
                transition={{ type: 'spring', damping: 22, stiffness: 220 }}
                style={{ cursor: 'grab', zIndex: isSnapping === t.id ? 100 : 10 }}
              >
                {/* Glow during snap */}
                {isSnapping === t.id && (
                  <circle r={t.r + 10} fill={colors.stroke} opacity={0.2}>
                    <animate attributeName="r" values={`${t.r + 5};${t.r + 12};${t.r + 5}`} dur="1.5s" repeatCount="indefinite" />
                  </circle>
                )}
                
                <circle
                  r={t.r}
                  fill={colors.fill}
                  stroke={isSnapping === t.id ? 'white' : colors.stroke}
                  strokeWidth={isSnapping === t.id ? 3 : 2.5}
                  style={{ backdropFilter: 'blur(3px)' }}
                />
                
                <circle r={14} cy={-t.r + 4} fill={colors.stroke} />
                <text y={-t.r + 8.5} textAnchor="middle" fill="white" fontSize="13" fontWeight="900" fontFamily="var(--font-mono)">
                  {t.id}
                </text>

                {/* Identity symbol if snapped */}
                {Object.keys(placed).some(pid => pid !== t.id && placed[pid]?.x === current.x && placed[pid]?.y === current.y && pid === isIdentityPartner?.a) && (
                   <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                     <circle r={10} cx={t.r - 8} cy={-t.r + 8} fill="var(--green)" />
                     <path d={`M ${t.r-12} ${-t.r+8} L ${t.r-4} ${-t.r+8} M ${t.r-12} ${-t.r+11} L ${t.r-4} ${-t.r+11}`} stroke="white" strokeWidth="2" />
                   </motion.g>
                )}
              </motion.g>
            );
          })}
        </svg>

        {/* Requirements Overlay */}
        <AnimatePresence>
          {showRules && (
            <motion.div 
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}
              style={{ position: 'absolute', top: 20, right: 20, width: 240, background: 'rgba(15,15,20,0.95)', border: '1px solid var(--border)', borderRadius: 16, padding: 20, zIndex: 200, backdropFilter: 'blur(12px)' }}
            >
               <h4 style={{ margin: '0 0 12px', fontSize: 13, color: 'var(--logic)', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Info size={14} /> Cerințe Exercițiu
               </h4>
               <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                 {rules.map((rule, i) => (
                    <li key={i} style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                       <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{rule.a}</span> 
                       {' '}{rule.relation === 'identitate' ? 'este identic cu' : rule.relation === 'subordonare' ? 'este specie a' : rule.relation === 'incrucisare' ? 'se intersectează cu' : 'este separat de'}{' '}
                       <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{rule.b}</span>
                    </li>
                 ))}
               </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Persistence Bar */}
      <div style={{ padding: '24px 28px', borderTop: '1px solid var(--border)', background: 'rgba(255,255,255,0.01)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, flex: 1 }}>
          <div style={{ width: 44, height: 44, borderRadius: 12, background: feedback.status === 'success' ? 'rgba(34,197,94,0.1)' : feedback.status === 'refused' ? 'rgba(239,68,68,0.1)' : 'var(--bg-muted)', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
             {feedback.status === 'success' ? <CheckCircle size={22} color="var(--green)" /> : feedback.status === 'refused' ? <XCircle size={22} color="var(--accent)" /> : <Magnet size={20} color="var(--text-muted)" />}
          </div>
          <p style={{ fontSize: 14, fontWeight: 500, color: feedback.status === 'success' ? 'var(--green)' : feedback.status === 'refused' ? 'var(--accent)' : 'var(--text-muted)', margin: 0 }}>
            {feedback.message || 'Sfat: Atunci când doi termeni sunt identici, aceștia se vor „magnetiza” automat dacă îi apropii.'}
          </p>
        </div>
        
        <button onClick={verify} style={{ height: 48, padding: '0 32px', background: 'linear-gradient(135deg, var(--logic) 0%, var(--logic-light) 100%)', border: 'none', borderRadius: 14, color: 'white', fontWeight: 700, fontSize: 14, cursor: 'pointer', boxShadow: '0 6px 16px rgba(79,70,229,0.3)', transition: 'transform 0.2s' }}>
           Verifică Rezolvarea
        </button>
      </div>
    </div>
  );
}
