import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { lessons } from '../data/lessons';
import { useProgress } from '../hooks/useProgress';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const { isCompleted, getScore, completedCount } = useProgress();

  const totalAvailable = lessons.filter(l => l.available).length;
  const pct = totalAvailable > 0 ? Math.round((completedCount / totalAvailable) * 100) : 0;

  const filtered = lessons.filter(l => {
    const q = searchQuery.toLowerCase();
    return (
      l.title.toLowerCase().includes(q) ||
      l.description.toLowerCase().includes(q) ||
      l.topics.some(t => t.toLowerCase().includes(q))
    );
  });

  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 20px 80px' }}>

      {/* TOP BAR — status + search */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 16,
        padding: '20px 0 18px',
        borderBottom: '1px solid var(--border)',
        flexWrap: 'wrap',
      }}>
        <span style={{ fontSize: 13, fontWeight: 400, color: 'var(--text-muted)' }}>
          {completedCount > 0
            ? `${completedCount} din ${totalAvailable} completate · ${pct}%`
            : `${totalAvailable} lecții disponibile`
          }
        </span>

        {completedCount > 0 && (
          <div style={{ flex: '1 1 80px', height: 2, background: 'var(--bg-muted)', position: 'relative', maxWidth: 160, minWidth: 60 }}>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${pct}%` }}
              transition={{ duration: 0.8 }}
              style={{ position: 'absolute', inset: 0, right: 'auto', background: 'var(--accent)' }}
            />
          </div>
        )}

        <div style={{ flex: '1 1 160px', position: 'relative', maxWidth: 300, marginLeft: 'auto' }}>
          <input
            type="text"
            placeholder="Caută lecție..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            style={{
              width: '100%', boxSizing: 'border-box',
              padding: '8px 32px 8px 12px',
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              color: 'var(--text-primary)',
              fontSize: 13, outline: 'none',
              fontFamily: 'var(--font-sans)',
            }}
            onFocus={e => e.target.style.borderColor = 'var(--border-strong)'}
            onBlur={e => e.target.style.borderColor = 'var(--border)'}
          />
          {searchQuery && (
            <button onClick={() => setSearchQuery('')} style={{
              position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)',
              background: 'none', border: 'none', color: 'var(--text-muted)',
              cursor: 'pointer', fontSize: 16, lineHeight: 1, padding: 0,
            }}>×</button>
          )}
        </div>
      </div>

      {/* LESSON LIST */}
      <AnimatePresence mode="wait">
        {filtered.length > 0 ? (
          <motion.div key="list" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {filtered.map((lesson, i) => (
              <LessonRow
                key={lesson.id}
                lesson={lesson}
                index={i}
                done={isCompleted(lesson.id)}
                score={getScore(lesson.id)}
              />
            ))}
          </motion.div>
        ) : (
          <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            style={{ padding: '60px 0', textAlign: 'center' }}>
            <p style={{ fontSize: 14, color: 'var(--text-muted)' }}>
              Niciun rezultat pentru „{searchQuery}"
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* EXAM LINK */}
      <div style={{ borderTop: '1px solid var(--border)', paddingTop: 20, marginTop: 4 }}>
        <Link to="/simulare" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '18px 22px',
          background: 'var(--accent)',
          textDecoration: 'none',
        }}
        onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
        onMouseLeave={e => e.currentTarget.style.opacity = '1'}
        >
          <div>
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', marginBottom: 2, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Test complet
            </div>
            <div style={{ fontSize: 15, color: 'white', fontWeight: 500 }}>
              Simulare Bacalaureat — 120+ întrebări
            </div>
          </div>
          <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 18 }}>→</span>
        </Link>
      </div>
    </div>
  );
}

function LessonRow({ lesson, index, done, score }: any) {
  const available = lesson.available;

  const inner = (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.035 }}
      style={{
        display: 'grid',
        gridTemplateColumns: '28px 1fr auto',
        alignItems: 'start',
        gap: '0 18px',
        padding: '16px 10px',
        borderBottom: '1px solid var(--border)',
        opacity: available ? 1 : 0.4,
        cursor: available ? 'pointer' : 'default',
        transition: 'background 0.12s',
        margin: '0 -10px',
      }}
      whileHover={available ? { background: 'var(--bg-card)' } : {}}
    >
      {/* Number */}
      <span style={{
        fontSize: 11, color: 'var(--text-muted)',
        fontWeight: 500, paddingTop: 3,
      }}>
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* Content */}
      <div>
        <div style={{
          fontSize: 14, fontWeight: 500,
          color: 'var(--text-primary)',
          lineHeight: 1.45, marginBottom: 3,
        }}>
          {lesson.title}
        </div>
        <div style={{
          fontSize: 12, color: 'var(--text-muted)',
          lineHeight: 1.5,
          overflow: 'hidden',
          display: '-webkit-box',
          WebkitLineClamp: 1,
          WebkitBoxOrient: 'vertical' as any,
        }}>
          {lesson.description}
        </div>
        <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' as const, marginTop: 7 }}>
          {lesson.topics.slice(0, 3).map((t: string) => (
            <span key={t} style={{
              fontSize: 10, color: 'var(--text-muted)',
              padding: '1px 6px',
              border: '1px solid var(--border)',
            }}>
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Right meta */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 5, paddingTop: 2, minWidth: 70 }}>
        {done ? (
          <span style={{
            fontSize: 10, color: '#4ade80',
            padding: '2px 6px',
            border: '1px solid rgba(74,222,128,0.22)',
            background: 'rgba(74,222,128,0.05)',
            letterSpacing: '0.04em', whiteSpace: 'nowrap',
          }}>
            ✓ {score !== undefined ? `${score}%` : 'gata'}
          </span>
        ) : !available ? (
          <span style={{ fontSize: 10, color: 'var(--text-muted)', letterSpacing: '0.04em' }}>
            curând
          </span>
        ) : null}
        <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>
          {lesson.duration}
        </span>
        {available && !done && (
          <span style={{ fontSize: 11, color: 'var(--accent)' }}>→</span>
        )}
      </div>
    </motion.div>
  );

  if (!available) return inner;
  return <Link to={`/lesson/${lesson.id}`} style={{ textDecoration: 'none', display: 'block' }}>{inner}</Link>;
}
