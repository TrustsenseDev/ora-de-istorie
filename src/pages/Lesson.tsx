import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { lessons } from '../data/lessons';
import { lessonContent } from '../data/lessonContent';
import Timeline from '../components/lesson/Timeline';
import ConceptCards from '../components/lesson/ConceptCards';
import Quiz from '../components/lesson/Quiz';
import { useProgress } from '../hooks/useProgress';
import { useScrollProgress } from '../hooks/useScrollProgress';

export default function Lesson() {
  const { id } = useParams();
  const lessonMeta = lessons.find(l => l.id === id);
  const content = id ? lessonContent[id] : null;
  const { isCompleted, markCompleted, getScore } = useProgress();
  const scrollPct = useScrollProgress();

  if (!lessonMeta || !content) {
    return (
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '80px 24px', textAlign: 'center' }}>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-muted)' }}>
          Lecția nu a fost găsită.
        </p>
        <Link to="/" style={{ color: 'var(--accent)', fontSize: 13, fontFamily: 'var(--font-mono)' }}>
          ← Înapoi
        </Link>
      </div>
    );
  }

  const done = id ? isCompleted(id) : false;
  const score = id ? getScore(id) : undefined;

  return (
    <>
      {/* Scroll progress line */}
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        height: 2, background: 'transparent',
      }}>
        <motion.div
          style={{ height: '100%', background: 'var(--accent)', width: `${scrollPct}%`, right: 'auto' }}
        />
      </div>

      <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px 80px' }}>

        {/* Back + meta */}
        <div style={{
          padding: '28px 0 24px',
          borderBottom: '1px solid var(--border)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: 12,
        }}>
          <Link
            to="/"
            style={{
              fontFamily: 'var(--font-mono)', fontSize: 11,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              color: 'var(--text-muted)', textDecoration: 'none',
              display: 'flex', alignItems: 'center', gap: 8,
              transition: 'color 0.15s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
          >
            ← Toate lecțiile
          </Link>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
            {done && (
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: 10,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                color: '#4ade80', padding: '4px 10px',
                border: '1px solid rgba(74, 222, 128, 0.2)',
                background: 'rgba(74, 222, 128, 0.06)',
              }}>
                ✓ Completat {score !== undefined ? `· ${score}%` : ''}
              </span>
            )}
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-muted)' }}>
              {lessonMeta.duration}
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-muted)' }}>
              {lessonMeta.questionsCount} întrebări
            </span>
          </div>
        </div>

        {/* Title block */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ padding: '48px 0 40px', borderBottom: '1px solid var(--border)' }}
        >
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 24 }}>
            {lessonMeta.topics.map(t => (
              <span key={t} style={{
                fontFamily: 'var(--font-mono)', fontSize: 10,
                color: 'var(--text-muted)', letterSpacing: '0.08em',
                padding: '3px 8px', border: '1px solid var(--border)',
              }}>
                {t}
              </span>
            ))}
          </div>

          <h1 style={{
            fontFamily: 'var(--font-display)', fontStyle: 'italic',
            fontSize: 'clamp(28px, 5vw, 48px)',
            color: 'var(--text-primary)', margin: '0 0 16px',
            lineHeight: 1.2, letterSpacing: '-0.02em',
          }}>
            {lessonMeta.title}
          </h1>
          <p style={{
            fontSize: 15, color: 'var(--text-secondary)',
            lineHeight: 1.7, margin: 0, fontWeight: 300,
          }}>
            {lessonMeta.description}
          </p>
        </motion.div>

        {/* Content sections */}
        <div style={{ paddingTop: 48 }}>
          {content.sections.map((section, idx) => (
            <motion.section
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45 }}
              style={{
                marginBottom: 64,
                paddingBottom: 64,
                borderBottom: '1px solid var(--border)',
              }}
            >
              {/* Section header */}
              <div style={{
                display: 'flex', alignItems: 'baseline', gap: 20,
                marginBottom: 32,
              }}>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: 11,
                  color: 'var(--text-muted)', letterSpacing: '0.1em',
                  flexShrink: 0,
                }}>
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <h2 style={{
                  fontFamily: 'var(--font-display)', fontStyle: 'italic',
                  fontSize: 'clamp(18px, 3vw, 26px)',
                  color: 'var(--text-primary)', margin: 0,
                  lineHeight: 1.3, letterSpacing: '-0.01em',
                }}>
                  {section.title}
                </h2>
              </div>

              {section.type === 'text' && (
                <div className="lesson-text-content" style={{
                  fontSize: 15, color: 'var(--text-secondary)',
                  lineHeight: 1.75, fontWeight: 300,
                }}>
                  {section.content}
                </div>
              )}
              {section.type === 'timeline' && section.items && <Timeline items={section.items} />}
              {section.type === 'cards' && section.items && <ConceptCards items={section.items} />}
            </motion.section>
          ))}

          {/* Quiz section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div style={{
              display: 'flex', alignItems: 'baseline', gap: 20,
              marginBottom: 40,
            }}>
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: 11,
                color: 'var(--text-muted)', letterSpacing: '0.1em',
              }}>
                Test
              </span>
              <h2 style={{
                fontFamily: 'var(--font-display)', fontStyle: 'italic',
                fontSize: 'clamp(18px, 3vw, 26px)',
                color: 'var(--text-primary)', margin: 0,
                lineHeight: 1.3, letterSpacing: '-0.01em',
              }}>
                Verifică-ți cunoștințele
              </h2>
            </div>

            <Quiz
              questions={content.quiz}
              onComplete={pct => id && markCompleted(id, pct)}
            />
          </motion.section>
        </div>
      </div>

      {/* Lesson text content styles */}
      <style>{`
        .lesson-text-content strong {
          color: var(--text-primary);
          font-weight: 500;
        }
        .lesson-text-content ul, .lesson-text-content ol {
          padding-left: 24px;
        }
        .lesson-text-content li {
          margin-bottom: 8px;
        }
        .lesson-text-content p {
          margin-bottom: 16px;
        }
        .lesson-text-content em {
          color: var(--text-primary);
          font-style: italic;
        }
      `}</style>
    </>
  );
}
