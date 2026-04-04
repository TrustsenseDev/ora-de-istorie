import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, RotateCcw } from 'lucide-react';
import { lessonContent } from '../data/lessonContent';

interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  lessonId: string;
}

export default function GlobalQuiz() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [finished, setFinished] = useState(false);

  useEffect(() => { startNew(); }, []);

  const startNew = () => {
    const all: Question[] = [];
    Object.values(lessonContent).forEach(lesson => {
      lesson.quiz?.forEach(q => all.push({ ...q, lessonId: lesson.id }));
    });
    setQuestions(all.sort(() => Math.random() - 0.5));
    setCurrentIndex(0);
    setAnswers({});
    setFinished(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelect = (idx: number) => {
    if (answers[currentIndex] !== undefined) return;
    setAnswers(prev => ({ ...prev, [currentIndex]: idx }));
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(c => c + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setFinished(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (!questions.length) {
    return (
      <div style={{ padding: '80px 24px', textAlign: 'center' }}>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)', letterSpacing: '0.1em' }}>
          Se generează testul...
        </p>
      </div>
    );
  }

  if (finished) {
    const correct = questions.reduce((acc, q, i) => acc + (answers[i] === q.correctAnswer ? 1 : 0), 0);
    const pct = Math.round((correct / questions.length) * 100);

    return (
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px 80px' }}>
        {/* Results header */}
        <div style={{ padding: '48px 0 40px', borderBottom: '1px solid var(--border)' }}>
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em',
            textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 20,
            fontWeight: 600,
          }}>
            Simulare finalizată
          </div>
          <div style={{
            display: 'flex', alignItems: 'baseline', gap: 24, flexWrap: 'wrap',
          }}>
            <div style={{
              fontFamily: 'var(--font-display)', fontStyle: 'italic',
              fontSize: 'clamp(64px, 14vw, 112px)',
              color: pct >= 80 ? 'var(--green)' : pct >= 50 ? 'var(--gold)' : 'var(--accent)',
              lineHeight: 1, letterSpacing: '-0.03em',
            }}>
              {pct}%
            </div>
            <div>
              <p style={{ fontSize: 15, color: 'var(--text-secondary)', margin: '0 0 12px', fontWeight: 300 }}>
                {correct} / {questions.length} răspunsuri corecte
              </p>
              <button
                onClick={startNew}
                style={{
                  padding: '10px 24px',
                  background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-light) 100%)',
                  border: 'none',
                  color: 'white', cursor: 'pointer',
                  fontFamily: 'var(--font-mono)', fontSize: 11,
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  borderRadius: 8,
                  display: 'flex', alignItems: 'center', gap: 8,
                }}
              >
                <RotateCcw size={13} />
                Reîncepe
              </button>
            </div>
          </div>
        </div>

        {/* Answer review */}
        <div style={{ paddingTop: 40 }}>
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.14em',
            textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 24,
            fontWeight: 600,
          }}>
            Analiza răspunsurilor
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {questions.map((q, i) => {
              const userAns = answers[i];
              const ok = userAns === q.correctAnswer;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.03 }}
                  style={{
                    padding: '20px',
                    background: ok ? 'var(--green-dim)' : 'var(--accent-dim)',
                    borderLeft: `2px solid ${ok ? 'var(--green)' : 'var(--accent)'}`,
                    borderRadius: '0 8px 8px 0',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10, alignItems: 'flex-start', gap: 12 }}>
                    <p style={{ fontSize: 14, color: 'var(--text-primary)', margin: 0, lineHeight: 1.5, fontWeight: 400 }}>
                      {q.question}
                    </p>
                    <span style={{
                      fontFamily: 'var(--font-mono)', fontSize: 11,
                      color: ok ? 'var(--green)' : 'var(--accent)',
                      flexShrink: 0,
                    }}>
                      {ok ? '✓' : '✗'}
                    </span>
                  </div>

                  {!ok && (
                    <p style={{ fontSize: 12, color: 'var(--text-secondary)', margin: 0, fontWeight: 300 }}>
                      <span style={{ color: 'var(--gold)', fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.08em' }}>Corect: </span>
                      {q.options[q.correctAnswer]}
                    </p>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  const q = questions[currentIndex];
  const hasAnswered = answers[currentIndex] !== undefined;
  const correctCount = Object.entries(answers).filter(([i, a]) => questions[Number(i)].correctAnswer === a).length;
  const progressPct = (currentIndex / questions.length) * 100;

  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px 80px' }}>

      {/* Header */}
      <div style={{ padding: '32px 0 28px', borderBottom: '1px solid var(--border)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16, flexWrap: 'wrap', gap: 12 }}>
          <Link to="/istorie" style={{
            fontSize: 13, color: 'var(--text-muted)', textDecoration: 'none',
            display: 'flex', alignItems: 'center', gap: 6,
            transition: 'color 0.15s',
          }}>
            <ArrowLeft size={14} />
            Înapoi
          </Link>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)' }}>
              <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{currentIndex + 1}</span>/{questions.length}
            </span>
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--green)',
              padding: '3px 8px', background: 'var(--green-dim)', borderRadius: 4,
            }}>
              ✓ {correctCount}
            </span>
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--accent)',
              padding: '3px 8px', background: 'var(--accent-dim)', borderRadius: 4,
            }}>
              ✗ {Object.keys(answers).length - correctCount}
            </span>
          </div>
        </div>

        {/* Progress */}
        <div style={{ height: 3, background: 'var(--bg-muted)', position: 'relative', borderRadius: 2, overflow: 'hidden' }}>
          <motion.div
            animate={{ width: `${progressPct}%` }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'absolute', left: 0, top: 0, bottom: 0,
              background: 'linear-gradient(90deg, var(--accent) 0%, var(--accent-light) 100%)',
              borderRadius: 2,
            }}
          />
        </div>
      </div>

      {/* Question */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -16 }}
          transition={{ duration: 0.18 }}
          style={{ paddingTop: 40 }}
        >
          <h2 style={{
            fontFamily: 'var(--font-display)', fontStyle: 'italic',
            fontSize: 'clamp(18px, 3.5vw, 26px)',
            color: 'var(--text-primary)', margin: '0 0 36px',
            lineHeight: 1.4, letterSpacing: '-0.01em',
          }}>
            {q.question}
          </h2>

          {/* Options */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 32 }}>
            {q.options.map((opt, idx) => {
              const isSelected = answers[currentIndex] === idx;
              const isCorrect = idx === q.correctAnswer;
              const showResult = hasAnswered;

              let bg = 'var(--bg-card)';
              let border = 'var(--border)';
              let color = 'var(--text-secondary)';

              if (showResult) {
                if (isCorrect) { bg = 'var(--green-dim)'; border = 'rgba(52,211,153,0.25)'; color = 'var(--green)'; }
                else if (isSelected) { bg = 'var(--accent-dim)'; border = 'var(--accent-border)'; color = 'var(--accent)'; }
                else { bg = 'transparent'; color = 'var(--text-muted)'; }
              }

              const labels = ['A', 'B', 'C', 'D'];

              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  disabled={hasAnswered}
                  style={{
                    display: 'flex', alignItems: 'flex-start', gap: 16,
                    padding: '15px 18px',
                    background: bg, border: `1px solid ${border}`,
                    cursor: hasAnswered ? 'default' : 'pointer',
                    textAlign: 'left', transition: 'all 0.15s', width: '100%',
                    borderRadius: 8,
                  }}
                >
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-muted)', flexShrink: 0, marginTop: 2 }}>
                    {labels[idx]}
                  </span>
                  <span style={{ fontSize: 14, color, lineHeight: 1.6 }}>{opt}</span>
                  {showResult && isCorrect && <span style={{ marginLeft: 'auto', color: 'var(--green)', flexShrink: 0 }}>✓</span>}
                  {showResult && isSelected && !isCorrect && <span style={{ marginLeft: 'auto', color: 'var(--accent)', flexShrink: 0 }}>✗</span>}
                </button>
              );
            })}
          </div>

          {hasAnswered && (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
              <button
                onClick={handleNext}
                style={{
                  width: '100%', padding: '14px',
                  background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-light) 100%)',
                  border: 'none',
                  color: 'white', cursor: 'pointer',
                  fontFamily: 'var(--font-mono)', fontSize: 12,
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  borderRadius: 8,
                }}
              >
                {currentIndex === questions.length - 1 ? 'Vezi rezultatele →' : 'Continuă →'}
              </button>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
