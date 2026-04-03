import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Clock, HelpCircle, CheckCircle } from 'lucide-react';
import { lessons } from '../data/lessons';
import { lessonContent } from '../data/lessonContent';
import Timeline from '../components/lesson/Timeline';
import ConceptCards from '../components/lesson/ConceptCards';
import Quiz from '../components/lesson/Quiz';
import { useProgress } from '../hooks/useProgress';
import { useScrollProgress } from '../hooks/useScrollProgress';

export default function Lesson() {
  const { id } = useParams();
  const meta = lessons.find(l => l.id === id);
  const content = id ? lessonContent[id] : null;
  const { isCompleted, markCompleted, getScore } = useProgress();
  const scroll = useScrollProgress();

  if (!meta || !content) {
    return (
      <div style={{ maxWidth: 760, margin: '0 auto', padding: '80px 24px', textAlign: 'center' }}>
        <p style={{ color: 'var(--text-muted)', fontSize: 15 }}>Lecția nu a fost găsită.</p>
        <Link to="/" style={{ color: 'var(--accent)', fontSize: 14, textDecoration: 'none' }}>← Înapoi</Link>
      </div>
    );
  }

  const done = id ? isCompleted(id) : false;
  const score = id ? getScore(id) : undefined;

  return (
    <>
      {/* Scroll progress line */}
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, height: 3, zIndex: 100, pointerEvents: 'none' }}>
        <div style={{
          width: `${scroll}%`, height: '100%',
          background: 'linear-gradient(90deg, var(--accent) 0%, var(--accent-light) 100%)',
          transition: 'width 0.12s linear',
          borderRadius: '0 2px 2px 0',
        }} />
      </div>

      <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 24px 100px' }}>

        {/* Back + meta */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '22px 0 20px', borderBottom: '1px solid var(--border)',
          flexWrap: 'wrap', gap: 12,
        }}>
          <Link
            to="/"
            style={{
              fontSize: 13, color: 'var(--text-muted)', textDecoration: 'none',
              transition: 'color 0.15s',
              display: 'flex', alignItems: 'center', gap: 6,
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
          >
            <ArrowLeft size={14} />
            Toate lecțiile
          </Link>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
            {done && (
              <span style={{
                fontSize: 12, color: 'var(--green)',
                padding: '4px 10px',
                background: 'var(--green-dim)',
                borderRadius: 6,
                display: 'flex', alignItems: 'center', gap: 5,
                fontWeight: 500,
              }}>
                <CheckCircle size={13} />
                completat {score !== undefined ? `· ${score}%` : ''}
              </span>
            )}
            <span style={{
              fontSize: 12, color: 'var(--text-muted)',
              display: 'flex', alignItems: 'center', gap: 4,
            }}>
              <Clock size={13} /> {meta.duration}
            </span>
            <span style={{
              fontSize: 12, color: 'var(--text-muted)',
              display: 'flex', alignItems: 'center', gap: 4,
            }}>
              <HelpCircle size={13} /> {meta.questionsCount} întrebări
            </span>
          </div>
        </div>

        {/* Title block */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{ padding: '40px 0 36px', borderBottom: '1px solid var(--border)' }}
        >
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 18 }}>
            {meta.topics.map(t => (
              <span key={t} style={{
                fontSize: 10, color: 'var(--text-muted)',
                padding: '3px 10px',
                background: 'var(--bg-muted)',
                borderRadius: 4,
                letterSpacing: '0.05em', textTransform: 'uppercase',
              }}>{t}</span>
            ))}
          </div>
          <h1 style={{
            fontSize: 'clamp(24px, 4vw, 36px)',
            fontWeight: 700,
            color: 'var(--text-primary)',
            margin: '0 0 14px',
            lineHeight: 1.25,
            letterSpacing: '-0.025em',
          }}>
            {meta.title}
          </h1>
          <p style={{ fontSize: 16, color: 'var(--text-muted)', lineHeight: 1.65, margin: 0, fontWeight: 400 }}>
            {meta.description}
          </p>
        </motion.div>

        {/* Content sections */}
        <div style={{ paddingTop: 48 }}>
          {content.sections.map((section, idx) => (
            <motion.section
              key={section.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4 }}
              style={{
                marginBottom: 64,
                paddingBottom: 64,
                borderBottom: '1px solid var(--border)',
              }}
            >
              {/* Section header */}
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 18, marginBottom: 32 }}>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: 11,
                  color: 'var(--accent)', letterSpacing: '0.1em',
                  flexShrink: 0, fontWeight: 600,
                }}>
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <h2 style={{
                  fontSize: 'clamp(18px, 2.5vw, 22px)',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  margin: 0,
                  lineHeight: 1.3,
                  letterSpacing: '-0.015em',
                }}>
                  {section.title}
                </h2>
              </div>

              {section.type === 'text' && (
                <div className="prose-content">{section.content}</div>
              )}
              {section.type === 'timeline' && section.items && <Timeline items={section.items} />}
              {section.type === 'cards' && section.items && <ConceptCards items={section.items} />}
            </motion.section>
          ))}

          {/* Quiz */}
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div style={{
              display: 'flex', alignItems: 'baseline', gap: 18, marginBottom: 36,
              paddingBottom: 20, borderBottom: '1px solid var(--border)',
            }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--accent)', letterSpacing: '0.1em', fontWeight: 600 }}>
                test
              </span>
              <h2 style={{
                fontSize: 'clamp(18px, 2.5vw, 22px)',
                fontWeight: 700,
                color: 'var(--text-primary)',
                margin: 0, lineHeight: 1.3,
                letterSpacing: '-0.015em',
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
    </>
  );
}
