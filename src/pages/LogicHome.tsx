import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Search, Brain, Clock, ArrowRight, Lock } from 'lucide-react';
import { logicExercises } from '../data/logicExercises';

const DIFFICULTY_COLOR: Record<string, string> = {
  'ușor': 'var(--green)',
  'mediu': 'var(--gold)',
  'greu': 'var(--accent)',
};
const DIFFICULTY_DIM: Record<string, string> = {
  'ușor': 'var(--green-dim)',
  'mediu': 'var(--gold-dim)',
  'greu': 'var(--accent-dim)',
};

export default function LogicHome() {
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = logicExercises.filter(e => {
    const q = searchQuery.toLowerCase();
    return (
      e.title.toLowerCase().includes(q) ||
      e.description.toLowerCase().includes(q) ||
      e.category.toLowerCase().includes(q)
    );
  });

  const available = logicExercises.filter(e => e.available).length;

  return (
    <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 24px 80px' }}>

      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ padding: '48px 0 40px', borderBottom: '1px solid var(--border)' }}
      >
        <div style={{
          fontSize: 11, fontFamily: 'var(--font-mono)', color: 'var(--logic)',
          letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 16, fontWeight: 600,
        }}>
          ← <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Toate materiile</Link>
          <span style={{ color: 'var(--text-muted)', margin: '0 8px' }}>·</span>
          Pregătire Bacalaureat 2026
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 12 }}>
          <div style={{
            width: 44, height: 44,
            background: 'linear-gradient(135deg, var(--logic) 0%, var(--logic-light) 100%)',
            borderRadius: 10, display: 'grid', placeItems: 'center', flexShrink: 0,
          }}>
            <Brain size={22} color="white" />
          </div>
          <h1 style={{
            fontSize: 'clamp(26px, 5vw, 40px)',
            fontWeight: 700, color: 'var(--text-primary)',
            margin: 0, lineHeight: 1.15, letterSpacing: '-0.03em',
          }}>
            Logică
          </h1>
        </div>
        <p style={{
          fontSize: 16, color: 'var(--text-secondary)', margin: '0 0 28px',
          maxWidth: 520, lineHeight: 1.6,
        }}>
          Exerciții interactive pentru Bacalaureat la Logică — diagrame Euler, raporturi între termeni, silogisme.
        </p>
        <div style={{ display: 'flex', gap: 20, alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 8,
            padding: '8px 14px',
            background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 8,
          }}>
            <Brain size={14} style={{ color: 'var(--text-muted)' }} />
            <span style={{ fontSize: 13, color: 'var(--text-secondary)' }}>
              {available} exerciț{available === 1 ? 'iu' : 'ii'} disponibil{available === 1 ? '' : 'e'}
            </span>
          </div>
        </div>
      </motion.div>

      {/* Search */}
      <div style={{ padding: '20px 0 8px' }}>
        <div style={{ position: 'relative', maxWidth: 400 }}>
          <Search size={15} style={{
            position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)',
            color: 'var(--text-muted)', pointerEvents: 'none',
          }} />
          <input
            type="text"
            placeholder="Caută exercițiu sau categorie..."
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
              e.target.style.borderColor = 'var(--logic-border)';
              e.target.style.boxShadow = '0 0 0 3px var(--logic-dim)';
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
              cursor: 'pointer', fontSize: 12, padding: '2px 6px', borderRadius: 4,
            }}>×</button>
          )}
        </div>
      </div>

      {/* Exercise cards */}
      <AnimatePresence mode="wait">
        {filtered.length > 0 ? (
          <motion.div
            key="list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ display: 'flex', flexDirection: 'column', gap: 6, paddingTop: 12 }}
          >
            {filtered.map((exercise, i) => (
              <ExerciseCard key={exercise.id} exercise={exercise} index={i} />
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
    </div>
  );
}

function ExerciseCard({ exercise, index }: any) {
  const available = exercise.available;
  const diffColor = DIFFICULTY_COLOR[exercise.difficulty];
  const diffDim = DIFFICULTY_DIM[exercise.difficulty];

  const inner = (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      style={{
        display: 'grid',
        gridTemplateColumns: '36px 1fr auto',
        alignItems: 'start',
        gap: '0 18px',
        padding: '18px 20px',
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        borderRadius: 10,
        opacity: available ? 1 : 0.45,
        cursor: available ? 'pointer' : 'default',
        transition: 'all 0.2s ease',
      }}
      whileHover={available ? {
        borderColor: 'var(--logic-border)',
        background: 'var(--bg-elevated)',
      } : {}}
    >
      {/* Number / Icon */}
      <div style={{
        width: 36, height: 36,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: available ? 'var(--logic-dim)' : 'var(--bg-muted)',
        borderRadius: 8, flexShrink: 0,
      }}>
        {available
          ? <Brain size={16} style={{ color: 'var(--logic)' }} />
          : <Lock size={14} style={{ color: 'var(--text-muted)' }} />
        }
      </div>

      {/* Content */}
      <div style={{ minWidth: 0 }}>
        <div style={{ fontSize: 15, fontWeight: 500, color: 'var(--text-primary)', lineHeight: 1.4, marginBottom: 4 }}>
          {exercise.title}
        </div>
        <div style={{
          fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.5,
          overflow: 'hidden', display: '-webkit-box',
          WebkitLineClamp: 1, WebkitBoxOrient: 'vertical' as any,
        }}>
          {exercise.description}
        </div>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' as const, marginTop: 8, alignItems: 'center' }}>
          <span style={{
            fontSize: 10, color: 'var(--logic)',
            padding: '2px 8px', background: 'var(--logic-dim)',
            borderRadius: 4, letterSpacing: '0.02em', border: '1px solid var(--logic-border)',
            fontFamily: 'var(--font-mono)', fontWeight: 600,
          }}>
            {exercise.category}
          </span>
          <span style={{
            fontSize: 10, color: diffColor,
            padding: '2px 8px', background: diffDim,
            borderRadius: 4, letterSpacing: '0.02em', border: `1px solid ${diffColor}30`,
          }}>
            {exercise.difficulty}
          </span>
        </div>
      </div>

      {/* Right */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6, paddingTop: 2, minWidth: 70 }}>
        {!available && (
          <span style={{ fontSize: 11, color: 'var(--text-muted)', letterSpacing: '0.04em' }}>curând</span>
        )}
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <Clock size={12} style={{ color: 'var(--text-muted)' }} />
          <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>{exercise.duration}</span>
        </div>
        {available && <ArrowRight size={14} style={{ color: 'var(--logic)' }} />}
      </div>
    </motion.div>
  );

  if (!available) return inner;
  return (
    <Link to={`/logica/exercitiu/${exercise.id}`} style={{ textDecoration: 'none', display: 'block' }}>
      {inner}
    </Link>
  );
}
