import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface QuizProps {
  questions: {
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
  }[];
  onComplete?: (score: number) => void;
}

export default function Quiz({ questions, onComplete }: QuizProps) {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleSelect = (idx: number) => {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
    if (idx === questions[currentQ].correctAnswer) setScore(s => s + 1);
  };

  const handleNext = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(c => c + 1);
      setSelected(null);
      setAnswered(false);
    } else {
      const pct = Math.round((score / questions.length) * 100);
      setFinished(true);
      onComplete?.(pct);
    }
  };

  const reset = () => {
    setCurrentQ(0);
    setSelected(null);
    setAnswered(false);
    setScore(0);
    setFinished(false);
  };

  if (finished) {
    const pct = Math.round((score / questions.length) * 100);
    const good = pct >= 60;
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        style={{
          border: '1px solid var(--border)',
          padding: '48px 40px',
          textAlign: 'center',
          background: 'var(--bg-card)',
          borderRadius: 12,
        }}
      >
        {/* Score display */}
        <div style={{ marginBottom: 32 }}>
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: 11,
            letterSpacing: '0.14em', textTransform: 'uppercase',
            color: 'var(--text-muted)', marginBottom: 20,
            fontWeight: 600,
          }}>
            Rezultat final
          </div>
          <div style={{
            fontFamily: 'var(--font-display)', fontStyle: 'italic',
            fontSize: 'clamp(60px, 12vw, 100px)',
            color: good ? 'var(--green)' : 'var(--accent)',
            lineHeight: 1,
            letterSpacing: '-0.03em',
          }}>
            {pct}<span style={{ fontSize: '0.4em', color: 'var(--text-muted)' }}>%</span>
          </div>
          <p style={{
            fontSize: 14, color: 'var(--text-secondary)',
            marginTop: 16, fontWeight: 300,
          }}>
            {score} din {questions.length} răspunsuri corecte
          </p>
        </div>

        {/* Progress bar */}
        <div style={{
          height: 2, background: 'var(--bg-muted)',
          marginBottom: 32, position: 'relative', overflow: 'hidden',
        }}>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${pct}%` }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            style={{
              position: 'absolute', left: 0, top: 0, bottom: 0,
              background: good ? 'var(--green)' : 'var(--accent)',
            }}
          />
        </div>

        <p style={{
          fontSize: 13, color: good ? 'var(--green)' : 'var(--accent)',
          fontFamily: 'var(--font-mono)', letterSpacing: '0.06em',
          marginBottom: 32,
        }}>
          {good ? '→ Lecția marcată ca finalizată' : '→ Mai recitește lecția și încearcă din nou'}
        </p>

        <button
          onClick={reset}
          style={{
            padding: '12px 28px',
            background: 'transparent',
            border: '1px solid var(--border-strong)',
            color: 'var(--text-secondary)',
            cursor: 'pointer',
            fontFamily: 'var(--font-mono)', fontSize: 12,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            transition: 'all 0.15s',
            borderRadius: 8,
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = 'var(--border-strong)';
            e.currentTarget.style.color = 'var(--text-primary)';
            e.currentTarget.style.background = 'var(--bg-muted)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = 'var(--text-secondary)';
          }}
        >
          Reîncepe testul
        </button>
      </motion.div>
    );
  }

  const q = questions[currentQ];
  const progressPct = (currentQ / questions.length) * 100;

  return (
    <div>
      {/* Header */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        marginBottom: 24,
      }}>
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: 11,
          color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase',
        }}>
          Întrebarea {currentQ + 1} / {questions.length}
        </span>
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: 11,
          color: 'var(--text-muted)',
        }}>
          Scor curent: <span style={{ color: 'var(--text-primary)' }}>{score}</span>
        </span>
      </div>

      {/* Progress line */}
      <div style={{ height: 1, background: 'var(--bg-muted)', marginBottom: 32, position: 'relative' }}>
        <motion.div
          animate={{ width: `${progressPct}%` }}
          transition={{ duration: 0.4 }}
          style={{
            position: 'absolute', left: 0, top: 0, bottom: 0,
            background: 'var(--accent)',
          }}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQ}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2 }}
        >
          {/* Question */}
          <h3 style={{
            fontFamily: 'var(--font-display)', fontStyle: 'italic',
            fontSize: 'clamp(18px, 3vw, 24px)',
            color: 'var(--text-primary)',
            margin: '0 0 32px', lineHeight: 1.4,
            letterSpacing: '-0.01em',
          }}>
            {q.question}
          </h3>

          {/* Options */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 32 }}>
            {q.options.map((opt, idx) => {
              const isCorrect = idx === q.correctAnswer;
              const isSelected = idx === selected;
              const showResult = answered;

              let bg = 'var(--bg-card)';
              let border = 'var(--border)';
              let color = 'var(--text-secondary)';
              let labelColor = 'var(--text-muted)';

              if (showResult) {
                if (isCorrect) {
                  bg = 'var(--green-dim)';
                  border = 'rgba(52, 211, 153, 0.25)';
                  color = 'var(--green)';
                  labelColor = 'var(--green)';
                } else if (isSelected && !isCorrect) {
                  bg = 'var(--accent-dim)';
                  border = 'var(--accent-border)';
                  color = 'var(--accent)';
                  labelColor = 'var(--accent)';
                } else {
                  bg = 'transparent';
                  color = 'var(--text-muted)';
                }
              }

              const labels = ['A', 'B', 'C', 'D'];

              return (
                <motion.button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  disabled={answered}
                  style={{
                    display: 'flex', alignItems: 'flex-start', gap: 16,
                    padding: '16px 20px',
                    background: bg,
                    border: `1px solid ${border}`,
                    cursor: answered ? 'default' : 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.15s',
                    width: '100%',
                    borderRadius: 8,
                  }}
                  whileHover={!answered ? { background: 'var(--bg-muted)' } : {}}
                >
                  <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: 11,
                    color: labelColor, letterSpacing: '0.06em',
                    flexShrink: 0, marginTop: 2,
                    transition: 'color 0.12s',
                  }}>
                    {labels[idx]}
                  </span>
                  <span style={{
                    fontSize: 14, color, lineHeight: 1.6,
                    fontWeight: showResult && isCorrect ? 500 : 400,
                    transition: 'color 0.12s',
                  }}>
                    {opt}
                  </span>
                  {showResult && isCorrect && (
                    <span style={{ marginLeft: 'auto', color: 'var(--green)', fontSize: 12, flexShrink: 0 }}>✓</span>
                  )}
                  {showResult && isSelected && !isCorrect && (
                    <span style={{ marginLeft: 'auto', color: 'var(--accent)', fontSize: 12, flexShrink: 0 }}>✗</span>
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Explanation + Next */}
          <AnimatePresence>
            {answered && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.25 }}
                style={{ overflow: 'hidden' }}
              >
                <div style={{
                  padding: '16px 20px',
                  background: 'var(--gold-dim)',
                  borderLeft: '2px solid var(--gold)',
                  marginBottom: 24,
                  borderRadius: '0 8px 8px 0',
                }}>
                  <div style={{
                    fontFamily: 'var(--font-mono)', fontSize: 10,
                    letterSpacing: '0.12em', textTransform: 'uppercase',
                    color: 'var(--gold)', marginBottom: 8,
                  }}>
                    Explicație
                  </div>
                  <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0, fontWeight: 300 }}>
                    {q.explanation}
                  </p>
                </div>

                <button
                  onClick={handleNext}
                  style={{
                      padding: '14px 32px',
                      background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-light) 100%)',
                      border: 'none',
                      color: 'white',
                      cursor: 'pointer',
                      fontFamily: 'var(--font-mono)', fontSize: 12,
                      letterSpacing: '0.1em', textTransform: 'uppercase',
                      transition: 'opacity 0.15s',
                      width: '100%',
                      borderRadius: 8,
                  }}
                  onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
                  onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                >
                  {currentQ < questions.length - 1 ? 'Următoarea →' : 'Finalizează →'}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
