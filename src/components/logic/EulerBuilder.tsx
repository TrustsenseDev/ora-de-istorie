import { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'motion/react';
import { CheckCircle, XCircle, RefreshCw, Info, HelpCircle } from 'lucide-react';
import { EulerRule, EulerRelation } from '../../data/logic/raporturi-intre-termeni-euler';

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

const COLORS: Record<string, { fill: string, stroke: string, label: string }> = {
  A: { fill: 'rgba(192,57,43,0.12)', stroke: 'rgba(192,57,43,0.7)', label: '#e74c3c' },
  B: { fill: 'rgba(52,152,219,0.12)', stroke: 'rgba(52,152,219,0.7)', label: '#3498db' },
  C: { fill: 'rgba(39,174,96,0.12)', stroke: 'rgba(39,174,96,0.7)', label: '#27ae60' },
  D: { fill: 'rgba(155,89,182,0.12)', stroke: 'rgba(155,89,182,0.7)', label: '#9b59b6' },
  E: { fill: 'rgba(230,126,34,0.12)', stroke: 'rgba(230,126,34,0.7)', label: '#e67e22' },
};

export default function EulerBuilder({ terms, rules, title, onSuccess }: EulerBuilderProps) {
  // SVG dimensions
  const WIDTH = 400;
  const HEIGHT = 300;

  // State for circle positions
  const [placed, setPlaced] = useState<Record<string, { x: number, y: number, r: number }>>({});
  const [feedback, setFeedback] = useState<{ status: 'idle' | 'success' | 'refused', message: string }>({ status: 'idle', message: '' });
  const [showRules, setShowRules] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const handleReset = () => {
    setPlaced({});
    setFeedback({ status: 'idle', message: '' });
  };

  const getRelation = (t1: TermState, t2: TermState): EulerRelation => {
    const dx = t1.x - t2.x;
    const dy = t1.y - t2.y;
    const d = Math.sqrt(dx * dx + dy * dy);
    
    // Thresholds
    const EPSILON = 10; 

    // Identitate
    if (d < EPSILON && Math.abs(t1.r - t2.r) < EPSILON) return 'identitate';
    
    // Subordonare
    if (d + t1.r < t2.r + 2) return 'subordonare'; // T1 inside T2
    if (d + t2.r < t1.r + 2) return 'subordonare'; // T2 inside T1 (not exactly what rule might mean, but we'll check id order)

    // Contrarietate
    if (d > t1.r + t2.r - 2) return 'contrarietate';

    // Încrucișare
    return 'incrucisare';
  };

  const verify = () => {
    // Ensure all terms are placed
    if (Object.keys(placed).length < terms.length) {
      setFeedback({ status: 'refused', message: 'Plasează toți termenii pe diagramă!' });
      return;
    }

    const errors: string[] = [];

    rules.forEach(rule => {
      const tA = { id: rule.a, ...placed[rule.a] };
      const tB = { id: rule.b, ...placed[rule.b] };
      
      const realRel = getRelation(tA, tB);
      
      if (rule.relation === 'identitate') {
        if (realRel !== 'identitate') errors.push(`Termenii ${rule.a} și ${rule.b} trebuie să fie identici (suprapuși).`);
      } else if (rule.relation === 'subordonare') {
        // Rule: a is species of b (a inside b)
        const dx = tA.x - tB.x;
        const dy = tA.y - tB.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d + tA.r > tB.r + 5) errors.push(`Termenul ${rule.a} trebuie să fie complet în interiorul lui ${rule.b}.`);
      } else if (rule.relation === 'incrucisare') {
        if (realRel !== 'incrucisare') errors.push(`Termenii ${rule.a} și ${rule.b} trebuie să se intersecteze parțial.`);
      } else if (rule.relation === 'contrarietate') {
        if (realRel !== 'contrarietate') errors.push(`Termenii ${rule.a} și ${rule.b} trebuie să fie separați (fără zone comune).`);
      }
    });

    if (errors.length === 0) {
      setFeedback({ status: 'success', message: 'Bravo! Diagramele Euler sunt corect reprezentate.' });
      if (onSuccess) onSuccess();
    } else {
      setFeedback({ status: 'refused', message: errors[0] });
    }
  };

  return (
    <div style={{
      background: 'var(--bg-card)',
      border: '1px solid var(--border)',
      borderRadius: 14,
      overflow: 'hidden',
      display: 'flex', flexDirection: 'column'
    }}>
      {/* Header */}
      <div style={{
        padding: '18px 24px',
        borderBottom: '1px solid var(--border)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12,
      }}>
        <div>
          <div style={{ fontSize: 10, fontFamily: 'var(--font-mono)', color: 'var(--logic)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 4 }}>
            Laborator Interactiv
          </div>
          <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.01em' }}>
            {title || 'Construiește diagrama Euler'}
          </div>
        </div>
        <button 
          onClick={() => setShowRules(!showRules)}
          style={{
            background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer',
            padding: 8, borderRadius: 8, transition: 'all 0.2s',
          }}
        >
          <HelpCircle size={20} />
        </button>
      </div>

      {/* Palette / Instructions */}
      <div style={{ padding: '16px 24px', background: 'var(--bg-muted)', borderBottom: '1px solid var(--border)' }}>
         <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
            <span style={{ fontSize: 12, color: 'var(--text-secondary)', fontWeight: 500 }}>Termeni de plasat:</span>
            {terms.map(t => (
              <div key={t.id} style={{
                padding: '4px 10px', background: 'var(--bg-card)', border: '1px solid var(--border)',
                borderRadius: 7, fontSize: 13, color: COLORS[t.id]?.label, fontWeight: 600,
                display: 'flex', alignItems: 'center', gap: 6,
                opacity: placed[t.id] ? 0.4 : 1, transition: 'opacity 0.2s'
              }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: COLORS[t.id]?.stroke }} />
                {t.id}
              </div>
            ))}
         </div>
         {showRules && (
           <motion.div 
             initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
             style={{ marginTop: 12, padding: 12, background: 'rgba(99,102,241,0.05)', borderRadius: 8, border: '1px dashed var(--logic-border)' }}
           >
             <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--logic)', marginBottom: 6, textTransform: 'uppercase' }}>Reguli de construcție:</div>
             <ul style={{ margin: 0, paddingLeft: 18, fontSize: 12, color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: 4 }}>
               <li>Trage cercurile în spațiul de mai jos.</li>
               <li>Poziționează-le astfel încât să respecte relațiile din enunț.</li>
               <li>Apasă „Verifică” pentru a primi scorul.</li>
             </ul>
           </motion.div>
         )}
      </div>

      {/* Canvas */}
      <div 
        ref={containerRef}
        style={{ 
          position: 'relative', width: '100%', height: HEIGHT, 
          background: 'radial-gradient(circle at center, rgba(255,255,255,0.02) 0%, transparent 100%)',
          cursor: 'crosshair', userSelect: 'none'
        }}
      >
        <svg width="100%" height="100%" viewBox={`0 0 ${WIDTH} ${HEIGHT}`}>
           <defs>
            <pattern id="grid-builder" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-builder)" />
          
          {/* Static terms if any (e.g. background) */}
          
          {/* Active terms overlay handles logic */}
        </svg>

        {terms.map(t => {
          const c = COLORS[t.id] || COLORS.A;
          const isPlaced = !!placed[t.id];
          
          return (
            <motion.div
              key={t.id}
              drag
              dragMomentum={false}
              dragConstraints={containerRef}
              onDragEnd={(_, info) => {
                const rect = containerRef.current?.getBoundingClientRect();
                if (rect) {
                  const x = placed[t.id]?.x ?? (t.id === 'A' || t.id === 'B' ? 100 : t.id === 'C' ? 150 : 200);
                  const y = placed[t.id]?.y ?? 100;
                  
                  // we update state with new position
                  // we use the transform to get the relative coords inside the SVG
                  setPlaced(prev => ({
                    ...prev,
                    [t.id]: {
                       x: (prev[t.id]?.x ?? 50) + info.offset.x, 
                       y: (prev[t.id]?.y ?? 50) + info.offset.y,
                       r: t.r 
                    }
                  }));
                }
              }}
              style={{
                position: 'absolute',
                // Start positions staggered if not placed
                left: placed[t.id] ? placed[t.id].x - t.r : (terms.indexOf(t) * 70 + 40),
                top: placed[t.id] ? placed[t.id].y - t.r : (HEIGHT - 60),
                width: t.r * 2,
                height: t.r * 2,
                borderRadius: '50%',
                background: c.fill,
                border: `2px solid ${c.stroke}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'grab',
                zIndex: placed[t.id] ? 10 : 5,
                boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
              }}
              whileHover={{ scale: 1.05 }}
              whileDrag={{ scale: 1.1, cursor: 'grabbing', boxShadow: '0 12px 24px rgba(0,0,0,0.4)', zIndex: 50 }}
            >
               <span style={{ 
                 fontFamily: 'var(--font-mono)', fontWeight: 800, fontSize: 13, 
                 color: c.label, textShadow: '0 1px 2px rgba(0,0,0,0.5)'
               }}>{t.id}</span>
            </motion.div>
          );
        })}
      </div>

      {/* Footer / Controls */}
      <div style={{
        padding: '16px 24px', borderTop: '1px solid var(--border)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flex: 1 }}>
          {feedback.status === 'success' && <CheckCircle size={18} style={{ color: 'var(--green)' }} />}
          {feedback.status === 'refused' && <XCircle size={18} style={{ color: 'var(--accent)' }} />}
          <span style={{ 
            fontSize: 13, fontWeight: 500,
            color: feedback.status === 'success' ? 'var(--green)' : feedback.status === 'refused' ? 'var(--accent)' : 'var(--text-muted)'
          }}>
            {feedback.message || 'Aranjează termenii și apasă Verifică.'}
          </span>
        </div>
        
        <div style={{ display: 'flex', gap: 8 }}>
          <button
            onClick={handleReset}
            style={{
              width: 38, height: 38, display: 'grid', placeItems: 'center',
              background: 'transparent', border: '1px solid var(--border-strong)',
              borderRadius: 8, color: 'var(--text-secondary)', cursor: 'pointer'
            }}
            title="Resetează diagrama"
          >
            <RefreshCw size={16} />
          </button>
          <button
            onClick={verify}
            style={{
              padding: '0 24px', height: 38,
              background: 'linear-gradient(135deg, var(--logic) 0%, var(--logic-light) 100%)',
              border: 'none', borderRadius: 8, color: 'white',
              fontSize: 12, fontWeight: 700, fontFamily: 'var(--font-mono)',
              letterSpacing: '0.05em', textTransform: 'uppercase', cursor: 'pointer',
              boxShadow: '0 4px 10px rgba(99,102,241,0.3)',
            }}
          >
            Verifică →
          </button>
        </div>
      </div>
    </div>
  );
}
