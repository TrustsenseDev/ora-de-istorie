import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Search, BookOpen, Clock, CheckCircle, ArrowRight, FlaskConical } from 'lucide-react';
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
    <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 24px 80px' }}>

      {/* HERO SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          padding: '48px 0 40px',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div style={{
          fontSize: 11, fontFamily: 'var(--font-mono)', color: 'var(--accent)',
          letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 16, fontWeight: 600,
        }}>
          Pregătire Bacalaureat 2026
        </div>
        <h1 style={{
          fontSize: 'clamp(28px, 5vw, 42px)',
          fontWeight: 700, color: 'var(--text-primary)',
          margin: '0 0 12px', lineHeight: 1.15, letterSpacing: '-0.03em',
        }}>
          Lecții de Istorie
        </h1>
        <p style={{
          fontSize: 16, color: 'var(--text-secondary)', margin: '0 0 28px',
          maxWidth: 520, lineHeight: 1.6, fontWeight: 400,
        }}>
          Tot ce ai nevoie pentru Bacalaureat la Istorie, organizat pe lecții cu quiz-uri interactive.
        </p>

        {/* Stats row */}
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', alignItems: 'center' }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 8,
            padding: '8px 14px',
            background: 'var(--bg-card)', border: '1px solid var(--border)',
            borderRadius: 8,
          }}>
            <BookOpen size={14} style={{ color: 'var(--text-muted)' }} />
            <span style={{ fontSize: 13, color: 'var(--text-secondary)' }}>
              {totalAvailable} lecții
            </span>
          </div>

          {completedCount > 0 && (
            <div style={{
              display: 'flex', alignItems: 'center', gap: 8,
              padding: '8px 14px',
              background: 'var(--green-dim)', border: '1px solid rgba(52,211,153,0.15)',
              borderRadius: 8,
            }}>
              <CheckCircle size={14} style={{ color: 'var(--green)' }} />
              <span style={{ fontSize: 13, color: 'var(--green)' }}>
                {completedCount} completate · {pct}%
              </span>
            </div>
          )}

          {completedCount > 0 && (
            <div style={{ flex: '0 1 140px', height: 4, background: 'var(--bg-muted)', borderRadius: 2, position: 'relative', overflow: 'hidden' }}>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${pct}%` }}
                transition={{ duration: 1 }}
                style={{ position: 'absolute', inset: 0, right: 'auto', background: 'var(--green)', borderRadius: 2 }}
              />
            </div>
          )}
        </div>
      </motion.div>

      {/* SEARCH BAR */}
      <div style={{ padding: '20px 0 8px' }}>
        <div style={{ position: 'relative', maxWidth: 400 }}>
          <Search size={15} style={{
            position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)',
            color: 'var(--text-muted)', pointerEvents: 'none',
          }} />
          <input
            type="text"
            placeholder="Caută lecție sau subiect..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            style={{
              width: '100%', boxSizing: 'border-box',
              padding: '10px 36px 10px 40px',
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              color: 'var(--text-primary)',
              fontSize: 14, outline: 'none',
              fontFamily: 'var(--font-sans)',
              borderRadius: 10,
              transition: 'border-color 0.2s, box-shadow 0.2s',
            }}
            onFocus={e => {
              e.target.style.borderColor = 'var(--border-strong)';
              e.target.style.boxShadow = '0 0 0 3px rgba(255,255,255,0.03)';
            }}
            onBlur={e => {
              e.target.style.borderColor = 'var(--border)';
              e.target.style.boxShadow = 'none';
            }}
          />
          {searchQuery && (
            <button onClick={() => setSearchQuery('')} style={{
              position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)',
              background: 'var(--bg-muted)', border: 'none', color: 'var(--text-muted)',
              cursor: 'pointer', fontSize: 12, lineHeight: 1, padding: '2px 6px',
              borderRadius: 4,
            }}>×</button>
          )}
        </div>
      </div>

      {/* LESSON CARDS */}
      <AnimatePresence mode="wait">
        {filtered.length > 0 ? (
          <motion.div
            key="list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ display: 'flex', flexDirection: 'column', gap: 6, paddingTop: 12 }}
          >
            {filtered.map((lesson, i) => (
              <LessonCard
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

      {/* SIMULARE CTA */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        style={{ paddingTop: 24, marginTop: 8 }}
      >
        <Link to="/simulare" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '20px 24px',
          background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-light) 100%)',
          textDecoration: 'none',
          borderRadius: 12,
          transition: 'transform 0.15s, box-shadow 0.15s',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'translateY(-1px)';
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(192,57,43,0.3)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <FlaskConical size={20} style={{ color: 'rgba(255,255,255,0.7)' }} />
            <div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)', marginBottom: 2, letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600 }}>
                Test complet
              </div>
              <div style={{ fontSize: 15, color: 'white', fontWeight: 500 }}>
                Simulare Bacalaureat — 120+ întrebări
              </div>
            </div>
          </div>
          <ArrowRight size={18} style={{ color: 'rgba(255,255,255,0.6)' }} />
        </Link>
      </motion.div>
    </div>
  );
}

function LessonCard({ lesson, index, done, score }: any) {
  const available = lesson.available;

  const inner = (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04 }}
      style={{
        display: 'grid',
        gridTemplateColumns: '36px 1fr auto',
        alignItems: 'start',
        gap: '0 18px',
        padding: '18px 20px',
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        borderRadius: 10,
        opacity: available ? 1 : 0.4,
        cursor: available ? 'pointer' : 'default',
        transition: 'all 0.2s ease',
      }}
      whileHover={available ? {
        borderColor: 'rgba(255,255,255,0.12)',
        background: 'var(--bg-elevated)',
      } : {}}
    >
      {/* Number */}
      <div style={{
        width: 36, height: 36,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: done ? 'var(--green-dim)' : 'var(--bg-muted)',
        borderRadius: 8,
        flexShrink: 0,
      }}>
        {done ? (
          <CheckCircle size={16} style={{ color: 'var(--green)' }} />
        ) : (
          <span style={{
            fontSize: 12, color: 'var(--text-muted)',
            fontWeight: 600, fontFamily: 'var(--font-mono)',
          }}>
            {String(index + 1).padStart(2, '0')}
          </span>
        )}
      </div>

      {/* Content */}
      <div style={{ minWidth: 0 }}>
        <div style={{
          fontSize: 15, fontWeight: 500,
          color: 'var(--text-primary)',
          lineHeight: 1.4, marginBottom: 4,
        }}>
          {lesson.title}
        </div>
        <div style={{
          fontSize: 13, color: 'var(--text-muted)',
          lineHeight: 1.5,
          overflow: 'hidden',
          display: '-webkit-box',
          WebkitLineClamp: 1,
          WebkitBoxOrient: 'vertical' as any,
        }}>
          {lesson.description}
        </div>
        <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' as const, marginTop: 8 }}>
          {lesson.topics.slice(0, 4).map((t: string) => (
            <span key={t} style={{
              fontSize: 10, color: 'var(--text-muted)',
              padding: '2px 8px',
              background: 'var(--bg-muted)',
              borderRadius: 4,
              letterSpacing: '0.02em',
            }}>
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Right meta */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6, paddingTop: 2, minWidth: 70 }}>
        {done ? (
          <span style={{
            fontSize: 11, color: 'var(--green)',
            padding: '3px 8px',
            background: 'var(--green-dim)',
            borderRadius: 4,
            fontWeight: 500,
            letterSpacing: '0.02em', whiteSpace: 'nowrap',
          }}>
            {score !== undefined ? `${score}%` : 'gata'}
          </span>
        ) : !available ? (
          <span style={{ fontSize: 11, color: 'var(--text-muted)', letterSpacing: '0.04em' }}>
            curând
          </span>
        ) : null}
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <Clock size={12} style={{ color: 'var(--text-muted)' }} />
          <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>
            {lesson.duration}
          </span>
        </div>
        {available && !done && (
          <ArrowRight size={14} style={{ color: 'var(--accent)' }} />
        )}
      </div>
    </motion.div>
  );

  if (!available) return inner;
  return <Link to={`/lesson/${lesson.id}`} style={{ textDecoration: 'none', display: 'block' }}>{inner}</Link>;
}
