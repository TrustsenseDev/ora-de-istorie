import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, XCircle, ChevronRight } from 'lucide-react';

export interface Proposition {
  id: string;          // 'a', 'b', 'c', ...
  text: string;        // Full proposition text
  answer: 'A' | 'F';  // A = adevărată, F = falsă
  explanation: string; // Why it's true/false
}

interface PropositionEvaluatorProps {
  propositions: Proposition[];
  title?: string;
}

export default function PropositionEvaluator({ propositions, title }: PropositionEvaluatorProps) {
  const [selected, setSelected] = useState<Record<string, 'A' | 'F'>>({});
  const [submitted, setSubmitted] = useState(false);
  const [showExpl, setShowExpl] = useState<string | null>(null);

  const allAnswered = propositions.every(p => selected[p.id] !== undefined);
  const score = submitted
    ? propositions.filter(p => selected[p.id] === p.answer).length
    : 0;
  const pct = submitted ? Math.round((score / propositions.length) * 100) : 0;

  const handleSelect = (id: string, val: 'A' | 'F') => {
    if (submitted) return;
    setSelected(prev => ({ ...prev, [id]: val }));
  };

  const handleSubmit = () => {
    if (!allAnswered) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSelected({});
    setSubmitted(false);
    setShowExpl(null);
  };

  return (
    <div style={{
      background: 'var(--bg-card)',
      border: '1px solid var(--border)',
      borderRadius: 14,
      overflow: 'hidden',
    }}>
      {/* Header */}
      <div style={{
        padding: '18px 24px',
        borderBottom: '1px solid var(--border)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap',
      }}>
        <div>
          <div style={{ fontSize: 10, fontFamily: 'var(--font-mono)', color: 'var(--logic)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 4 }}>
            Exercițiu interactiv
          </div>
          <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--text-primary)' }}>
            {title || 'Evaluează propozițiile — A (adevărată) sau F (falsă)'}
          </div>
        </div>
        {submitted && (
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: 20, fontWeight: 700,
            color: pct >= 75 ? 'var(--green)' : pct >= 50 ? 'var(--gold)' : 'var(--accent)',
          }}>
            {pct}%
          </div>
        )}
      </div>

      {/* Propositions */}
      <div style={{ padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 6 }}>
        {propositions.map((prop, i) => {
          const userVal = selected[prop.id];
          const isCorrect = submitted && userVal === prop.answer;
          const isWrong = submitted && userVal !== prop.answer;
          const expandedExpl = showExpl === prop.id;

          return (
            <motion.div
              key={prop.id}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '28px 1fr auto auto',
                  alignItems: 'center',
                  gap: '0 12px',
                  padding: '12px 14px',
                  background: submitted
                    ? isCorrect ? 'var(--green-dim)' : 'var(--accent-dim)'
                    : 'var(--bg-muted)',
                  border: `1px solid ${submitted ? isCorrect ? 'rgba(52,211,153,0.2)' : 'var(--accent-border)' : 'var(--border)'}`,
                  borderRadius: 8,
                  transition: 'all 0.2s',
                }}
              >
                {/* Letter */}
                <div style={{
                  fontSize: 12, fontFamily: 'var(--font-mono)', fontWeight: 700,
                  color: submitted ? (isCorrect ? 'var(--green)' : 'var(--accent)') : 'var(--text-muted)',
                }}>
                  {prop.id})
                </div>

                {/* Proposition text */}
                <div style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {prop.text}
                </div>

                {/* A/F buttons */}
                <div style={{ display: 'flex', gap: 4 }}>
                  {(['A', 'F'] as const).map(val => {
                    const chosen = userVal === val;
                    const isThisRight = submitted && prop.answer === val;
                    return (
                      <button
                        key={val}
                        onClick={() => handleSelect(prop.id, val)}
                        style={{
                          width: 32, height: 32,
                          borderRadius: 6,
                          border: `1px solid ${chosen
                            ? (submitted ? (isCorrect ? 'rgba(52,211,153,0.6)' : 'var(--accent-border)') : 'var(--logic-border)')
                            : 'var(--border)'}`,
                          background: chosen
                            ? (submitted ? (isCorrect ? 'var(--green-dim)' : 'var(--accent-dim)') : 'var(--logic-dim)')
                            : 'transparent',
                          color: chosen
                            ? (submitted ? (isCorrect ? 'var(--green)' : 'var(--accent)') : 'var(--logic)')
                            : (submitted && isThisRight ? 'var(--green)' : 'var(--text-muted)'),
                          fontFamily: 'var(--font-mono)',
                          fontSize: 12, fontWeight: 700,
                          cursor: submitted ? 'default' : 'pointer',
                          transition: 'all 0.15s',
                          outline: 'none',
                        }}
                      >
                        {val}
                      </button>
                    );
                  })}
                </div>

                {/* Result icon + expand */}
                {submitted && (
                  <button
                    onClick={() => setShowExpl(expandedExpl ? null : prop.id)}
                    style={{
                      background: 'none', border: 'none', cursor: 'pointer',
                      display: 'flex', alignItems: 'center', gap: 4, padding: '4px',
                      color: isCorrect ? 'var(--green)' : 'var(--accent)',
                    }}
                  >
                    {isCorrect
                      ? <CheckCircle size={16} />
                      : <XCircle size={16} />}
                    <ChevronRight
                      size={12}
                      style={{ transition: 'transform 0.2s', transform: expandedExpl ? 'rotate(90deg)' : 'none' }}
                    />
                  </button>
                )}
              </div>

              {/* Explanation dropdown */}
              <AnimatePresence>
                {submitted && expandedExpl && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div style={{
                      margin: '4px 0 0 40px',
                      padding: '12px 16px',
                      background: 'var(--gold-dim)',
                      borderLeft: '2px solid var(--gold)',
                      borderRadius: '0 8px 8px 0',
                    }}>
                      <div style={{ fontSize: 10, fontFamily: 'var(--font-mono)', color: 'var(--gold)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6 }}>
                        Explicație · Răspuns corect: <strong>{prop.answer === 'A' ? 'Adevărată' : 'Falsă'}</strong>
                      </div>
                      <p style={{ fontSize: 13, color: 'var(--text-secondary)', margin: 0, lineHeight: 1.65 }}>
                        {prop.explanation}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Footer */}
      <div style={{
        padding: '16px 24px',
        borderTop: '1px solid var(--border)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap',
      }}>
        {!submitted ? (
          <>
            <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>
              {Object.keys(selected).length} / {propositions.length} bifate
            </span>
            <button
              onClick={handleSubmit}
              disabled={!allAnswered}
              style={{
                padding: '10px 28px',
                background: allAnswered
                  ? 'linear-gradient(135deg, var(--logic) 0%, var(--logic-light) 100%)'
                  : 'var(--bg-muted)',
                border: 'none', borderRadius: 8,
                color: allAnswered ? 'white' : 'var(--text-muted)',
                fontFamily: 'var(--font-mono)', fontSize: 11,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                cursor: allAnswered ? 'pointer' : 'not-allowed',
                transition: 'all 0.2s',
              }}
            >
              Verifică răspunsurile →
            </button>
          </>
        ) : (
          <>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontSize: 13, color: pct >= 75 ? 'var(--green)' : 'var(--accent)', fontWeight: 500 }}>
                {score} / {propositions.length} corecte
              </span>
              <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>
                · {pct >= 75 ? 'Excelent! 🎉' : pct >= 50 ? 'Bine, mai exersează!' : 'Revizuiește teoria și încearcă din nou.'}
              </span>
            </div>
            <button
              onClick={handleReset}
              style={{
                padding: '10px 20px',
                background: 'transparent',
                border: '1px solid var(--border-strong)',
                borderRadius: 8,
                color: 'var(--text-secondary)',
                fontFamily: 'var(--font-mono)', fontSize: 11,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                cursor: 'pointer', transition: 'all 0.15s',
              }}
            >
              Încearcă din nou
            </button>
          </>
        )}
      </div>
    </div>
  );
}
