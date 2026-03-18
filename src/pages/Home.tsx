import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { lessons } from '../data/lessons';
import { useProgress } from '../hooks/useProgress';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const { isCompleted, getScore, completedCount } = useProgress();

  const totalAvailable = lessons.filter(l => l.available).length;
  const pct = totalAvailable > 0 ? Math.round((completedCount / totalAvailable) * 100) : 0;

  const filteredLessons = lessons.filter(l => {
    const q = searchQuery.toLowerCase();
    return (
      l.title.toLowerCase().includes(q) ||
      l.description.toLowerCase().includes(q) ||
      l.topics.some(t => t.toLowerCase().includes(q))
    );
  });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsFocused(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>

      {/* HERO */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={{
          paddingTop: 72, paddingBottom: 64,
          borderBottom: '1px solid var(--border)',
          display: 'grid', gridTemplateColumns: '1fr auto',
          alignItems: 'end', gap: 40,
        }}
        className="hero-grid"
      >
        <div>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            marginBottom: 28,
          }}>
            <div style={{ width: 6, height: 6, background: 'var(--accent)', borderRadius: '50%' }} />
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: 11,
              letterSpacing: '0.14em', textTransform: 'uppercase',
              color: 'var(--text-muted)',
            }}>
              Pregătire Bacalaureat · Istorie
            </span>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(42px, 7vw, 84px)',
            lineHeight: 1.05,
            fontStyle: 'italic',
            color: 'var(--text-primary)',
            margin: '0 0 24px',
            letterSpacing: '-0.02em',
          }}>
            Istoria,<br />
            <span style={{ color: 'var(--accent)' }}>fără scuze.</span>
          </h1>

          <p style={{
            fontSize: 16, color: 'var(--text-secondary)',
            maxWidth: 480, lineHeight: 1.7,
            fontWeight: 300, margin: 0,
          }}>
            Opt lecții complete cu cronologii, concepte și teste. Tot materialul necesar pentru examen, structurat ca pentru cineva care chiar vrea să înțeleagă.
          </p>
        </div>

        {/* Stats block */}
        <div style={{
          display: 'flex', flexDirection: 'column', gap: 1,
          border: '1px solid var(--border)',
          minWidth: 180,
        }} className="stats-block">
          <StatBox label="Lecții disponibile" value={String(totalAvailable)} />
          <StatBox label="Întrebări totale" value="120+" />
          <StatBox label="Completate" value={`${completedCount}/${totalAvailable}`} accent />
        </div>
      </motion.section>

      {/* PROGRESS BAR (only if started) */}
      {completedCount > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            padding: '20px 0',
            borderBottom: '1px solid var(--border)',
            display: 'flex', alignItems: 'center', gap: 20,
          }}
        >
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
            Progres
          </span>
          <div style={{ flex: 1, height: 2, background: 'var(--bg-muted)', position: 'relative', overflow: 'hidden' }}>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${pct}%` }}
              transition={{ duration: 1, ease: 'easeOut' }}
              style={{ position: 'absolute', inset: 0, background: 'var(--accent)', right: 'auto' }}
            />
          </div>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-secondary)', whiteSpace: 'nowrap' }}>
            {pct}%
          </span>
        </motion.div>
      )}

      {/* SEARCH */}
      <div style={{ padding: '32px 0 24px' }} ref={searchRef}>
        <div style={{ position: 'relative', maxWidth: 500 }}>
          <span style={{
            position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)',
            fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)',
            letterSpacing: '0.05em', userSelect: 'none',
          }}>
            /
          </span>
          <input
            type="text"
            placeholder="Caută o lecție, perioadă, concept..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            style={{
              width: '100%', boxSizing: 'border-box',
              padding: '14px 20px 14px 36px',
              background: 'var(--bg-card)',
              border: `1px solid ${isFocused ? 'var(--border-strong)' : 'var(--border)'}`,
              color: 'var(--text-primary)',
              fontSize: 14,
              fontFamily: 'var(--font-sans)',
              outline: 'none',
              transition: 'border-color 0.15s',
            }}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              style={{
                position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)',
                background: 'none', border: 'none',
                color: 'var(--text-muted)', cursor: 'pointer', fontSize: 16, lineHeight: 1,
              }}
            >×</button>
          )}
        </div>
      </div>

      {/* LESSON GRID */}
      <AnimatePresence mode="wait">
        {filteredLessons.length > 0 ? (
          <motion.div
            key="grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Section header */}
            <div style={{
              display: 'flex', alignItems: 'baseline', gap: 16,
              paddingBottom: 16, marginBottom: 2,
              borderBottom: '1px solid var(--border)',
            }}>
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: 10,
                letterSpacing: '0.14em', textTransform: 'uppercase',
                color: 'var(--text-muted)',
              }}>Lecții</span>
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: 10,
                color: 'var(--text-muted)',
              }}>— {filteredLessons.length} {filteredLessons.length === 1 ? 'rezultat' : 'rezultate'}</span>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: 0,
            }}>
              {filteredLessons.map((lesson, i) => {
                const done = isCompleted(lesson.id);
                const score = getScore(lesson.id);
                return (
                  <LessonCard
                    key={lesson.id}
                    lesson={lesson}
                    index={i}
                    done={done}
                    score={score}
                  />
                );
              })}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ padding: '80px 0', textAlign: 'center' }}
          >
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-muted)', letterSpacing: '0.08em' }}>
              Niciun rezultat pentru „{searchQuery}"
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Exam shortcut */}
      <div style={{ marginTop: 0, borderTop: '1px solid var(--border)', padding: '40px 0 80px' }}>
        <Link
          to="/simulare"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 16,
            padding: '20px 28px',
            background: 'var(--accent)',
            textDecoration: 'none',
            border: 'none',
            transition: 'opacity 0.15s',
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.9')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
        >
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: 4 }}>
              Pregătire examen
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 22, color: 'white' }}>
              Simulare Bacalaureat →
            </div>
          </div>
          <div style={{ marginLeft: 'auto', fontFamily: 'var(--font-mono)', fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>
            120+ întrebări
          </div>
        </Link>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .stats-block { display: none !important; }
        }
      `}</style>
    </div>
  );
}

function StatBox({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div style={{
      padding: '16px 20px',
      borderBottom: '1px solid var(--border)',
      background: accent ? 'var(--accent-dim)' : 'var(--bg-card)',
    }}>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-muted)', letterSpacing: '0.08em', marginBottom: 6, textTransform: 'uppercase' }}>
        {label}
      </div>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 22, color: accent ? 'var(--accent)' : 'var(--text-primary)', fontWeight: 500 }}>
        {value}
      </div>
    </div>
  );
}

function LessonCard({ lesson, index, done, score }: any) {
  const available = lesson.available;

  const card = (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      style={{
        borderBottom: '1px solid var(--border)',
        borderRight: '1px solid var(--border)',
        padding: '28px 28px 24px',
        background: 'transparent',
        position: 'relative',
        opacity: available ? 1 : 0.4,
        transition: 'background 0.15s',
        cursor: available ? 'pointer' : 'default',
      }}
      whileHover={available ? { background: 'var(--bg-card)' } : {}}
    >
      {/* Index number */}
      <div style={{
        fontFamily: 'var(--font-mono)', fontSize: 11,
        color: 'var(--text-muted)', letterSpacing: '0.1em',
        marginBottom: 20,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <span>#{String(index + 1).padStart(2, '0')}</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {done && (
            <span style={{
              padding: '3px 8px',
              background: 'rgba(34, 197, 94, 0.1)',
              border: '1px solid rgba(34, 197, 94, 0.2)',
              fontSize: 10, color: '#4ade80',
              letterSpacing: '0.1em', textTransform: 'uppercase',
            }}>
              ✓ Completat
            </span>
          )}
          {score !== undefined && (
            <span style={{
              padding: '3px 8px',
              background: 'var(--accent-dim)',
              border: '1px solid var(--accent-border)',
              fontSize: 10, color: 'var(--accent)',
              letterSpacing: '0.08em', fontWeight: 500,
            }}>
              {score}%
            </span>
          )}
          {!available && (
            <span style={{
              padding: '3px 8px',
              background: 'var(--bg-muted)',
              border: '1px solid var(--border)',
              fontSize: 10, color: 'var(--text-muted)',
              letterSpacing: '0.1em', textTransform: 'uppercase',
            }}>
              În curând
            </span>
          )}
        </div>
      </div>

      {/* Title */}
      <h2 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(17px, 2.5vw, 21px)',
        color: 'var(--text-primary)',
        margin: '0 0 12px',
        lineHeight: 1.3,
        fontStyle: 'italic',
        letterSpacing: '-0.01em',
      }}>
        {lesson.title}
      </h2>

      {/* Description */}
      <p style={{
        fontSize: 13, color: 'var(--text-secondary)',
        margin: '0 0 20px', lineHeight: 1.65,
        fontWeight: 300, display: '-webkit-box',
        WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' as any,
        overflow: 'hidden',
      }}>
        {lesson.description}
      </p>

      {/* Topics */}
      <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: 6, marginBottom: 20 }}>
        {lesson.topics.slice(0, 4).map((t: string) => (
          <span key={t} style={{
            fontFamily: 'var(--font-mono)', fontSize: 10,
            color: 'var(--text-muted)', letterSpacing: '0.08em',
            padding: '3px 8px',
            border: '1px solid var(--border)',
            background: 'transparent',
          }}>
            {t}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        paddingTop: 16, borderTop: '1px solid var(--border)',
      }}>
        <div style={{ display: 'flex', gap: 20 }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-muted)' }}>
            {lesson.duration}
          </span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-muted)' }}>
            {lesson.questionsCount} întrebări
          </span>
        </div>
        {available && (
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: 11,
            color: done ? 'rgba(74, 222, 128, 0.7)' : 'var(--text-muted)',
            letterSpacing: '0.05em',
          }}>
            {done ? 'Reia →' : 'Studiază →'}
          </span>
        )}
      </div>
    </motion.div>
  );

  if (!available) return card;
  return <Link to={`/lesson/${lesson.id}`} style={{ textDecoration: 'none', display: 'block' }}>{card}</Link>;
}
