import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { BookOpen, Brain, ArrowRight, CheckCircle } from 'lucide-react';
import { useProgress } from '../hooks/useProgress';
import { lessons } from '../data/lessons';
import { logicExercises } from '../data/logicExercises';

export default function SubjectHome() {
  const { completedCount } = useProgress();
  const totalHistory = lessons.filter(l => l.available).length;
  const totalLogic = logicExercises.filter(e => e.available).length;
  const historyPct = totalHistory > 0 ? Math.round((completedCount / totalHistory) * 100) : 0;

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px 80px' }}>

      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ padding: '56px 0 48px', borderBottom: '1px solid var(--border)' }}
      >
        <div style={{
          fontSize: 11, fontFamily: 'var(--font-mono)', color: 'var(--text-muted)',
          letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 16, fontWeight: 600,
        }}>
          Pregătire Bacalaureat 2026
        </div>
        <h1 style={{
          fontSize: 'clamp(28px, 5vw, 44px)',
          fontWeight: 700, color: 'var(--text-primary)',
          margin: '0 0 14px', lineHeight: 1.15, letterSpacing: '-0.03em',
        }}>
          Alege materia
        </h1>
        <p style={{
          fontSize: 16, color: 'var(--text-secondary)', margin: 0,
          maxWidth: 480, lineHeight: 1.6,
        }}>
          Tot ce ai nevoie pentru Bacalaureat, organizat pe discipline cu lecții interactive și exerciții practice.
        </p>
      </motion.div>

      {/* Subject Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 16,
        paddingTop: 36,
      }}>
        {/* History Card */}
        <SubjectCard
          to="/istorie"
          index={0}
          color="var(--accent)"
          colorLight="var(--accent-light)"
          colorDim="var(--accent-dim)"
          colorBorder="var(--accent-border)"
          icon={<BookOpen size={22} />}
          label="Materia 01"
          title="Istorie"
          description="Lecții complete pentru Bacalaureat, de la Autonomii locale la Războiul Rece, cu quiz-uri interactive."
          stats={[
            { value: totalHistory, label: 'lecții' },
            { value: 120, label: 'întrebări' },
          ]}
          progress={completedCount > 0 ? historyPct : null}
          progressLabel={completedCount > 0 ? `${completedCount} completate` : null}
          available={true}
        />

        {/* Logic Card */}
        <SubjectCard
          to="/logica"
          index={1}
          color="var(--logic)"
          colorLight="var(--logic-light)"
          colorDim="var(--logic-dim)"
          colorBorder="var(--logic-border)"
          icon={<Brain size={22} />}
          label="Materia 02"
          title="Logică"
          description="Exerciții cu diagrame Euler, raporturi între termeni, silogisme și propoziții categorice."
          stats={[
            { value: totalLogic, label: 'exerciții' },
          ]}
          progress={null}
          progressLabel={null}
          available={true}
        />
      </div>

      {/* Info strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        style={{
          marginTop: 48,
          padding: '20px 24px',
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          borderRadius: 12,
          display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap',
        }}
      >
        <CheckCircle size={16} style={{ color: 'var(--green)', flexShrink: 0 }} />
        <p style={{ fontSize: 13, color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>
          Progresul tău este salvat local în browser. Poți continua oricând de unde ai rămas.
        </p>
      </motion.div>
    </div>
  );
}

function SubjectCard({ to, index, color, colorLight, colorDim, colorBorder, icon, label, title, description, stats, progress, progressLabel, available }: any) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 + 0.15 }}
    >
      <Link
        to={to}
        style={{ textDecoration: 'none', display: 'block' }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div style={{
          padding: '28px 28px 24px',
          background: hovered ? 'var(--bg-elevated)' : 'var(--bg-card)',
          border: `1px solid ${hovered ? colorBorder : 'var(--border)'}`,
          borderRadius: 14,
          transition: 'all 0.2s ease',
          transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
          boxShadow: hovered ? `0 12px 40px rgba(0,0,0,0.3)` : 'none',
          height: '100%',
          display: 'flex', flexDirection: 'column', gap: 20,
        }}>
          {/* Icon + label */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{
              width: 44, height: 44,
              background: `linear-gradient(135deg, ${color} 0%, ${colorLight} 100%)`,
              borderRadius: 10,
              display: 'grid', placeItems: 'center',
              color: 'white',
            }}>
              {icon}
            </div>
            <span style={{
              fontSize: 10, fontFamily: 'var(--font-mono)',
              color: 'var(--text-muted)', letterSpacing: '0.12em', textTransform: 'uppercase',
            }}>
              {label}
            </span>
          </div>

          {/* Title + description */}
          <div>
            <div style={{
              fontSize: 22, fontWeight: 700,
              color: 'var(--text-primary)',
              marginBottom: 8, letterSpacing: '-0.02em',
            }}>
              {title}
            </div>
            <p style={{ fontSize: 14, color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>
              {description}
            </p>
          </div>

          {/* Stats */}
          <div style={{ display: 'flex', gap: 20, marginTop: 'auto' }}>
            {stats.map((s: any) => (
              <div key={s.label}>
                <div style={{ fontSize: 20, fontWeight: 700, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>{s.value}</div>
                <div style={{ fontSize: 11, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Progress */}
          {progress !== null && (
            <div>
              <div style={{ height: 3, background: 'var(--bg-muted)', borderRadius: 2, overflow: 'hidden', marginBottom: 6 }}>
                <div style={{ width: `${progress}%`, height: '100%', background: `linear-gradient(90deg, ${color}, ${colorLight})`, borderRadius: 2, transition: 'width 1s ease' }} />
              </div>
              <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>{progressLabel} · {progress}%</div>
            </div>
          )}

          {/* CTA */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            paddingTop: 4, borderTop: '1px solid var(--border)',
          }}>
            <span style={{ fontSize: 13, color, fontWeight: 500 }}>Începe acum</span>
            <ArrowRight size={16} style={{ color, transition: 'transform 0.2s', transform: hovered ? 'translateX(3px)' : 'translateX(0)' }} />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
