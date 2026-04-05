import { useState } from 'react';
import type { ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, HelpCircle, CheckCircle, ChevronDown, ChevronUp, Info, ChevronLeft, ChevronRight } from 'lucide-react';
import { logicExercises } from '../data/logicExercises';
import { useParams } from 'react-router-dom';
import EulerDiagram from '../components/logic/EulerDiagram';
import RelationCard from '../components/logic/RelationCard';
import EulerBuilder from '../components/logic/EulerBuilder';
import PropositionEvaluator from '../components/logic/PropositionEvaluator';
import { EULER_EXERCISES, RELATION_CARDS } from '../data/logic/raporturi-intre-termeni-euler';
import { EULER_COLORS } from '../components/logic/EulerDiagram';
import { useScrollProgress } from '../hooks/useScrollProgress';

export default function LogicExercise() {
  const { id } = useParams();
  const meta = logicExercises.find(e => e.id === id);
  const scroll = useScrollProgress();
  const [currentIdx, setCurrentIdx] = useState(0);

  const currentExercise = EULER_EXERCISES[currentIdx];

  if (!meta) {
    return (
      <div style={{ maxWidth: 760, margin: '0 auto', padding: '80px 24px', textAlign: 'center' }}>
        <p style={{ color: 'var(--text-muted)', fontSize: 15 }}>Exercițiul nu a fost găsit.</p>
        <Link to="/logica" style={{ color: 'var(--logic)', fontSize: 14, textDecoration: 'none' }}>← Înapoi la Logică</Link>
      </div>
    );
  }

  return (
    <>
      {/* Scroll progress */}
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, height: 3, zIndex: 100, pointerEvents: 'none' }}>
        <div style={{
          width: `${scroll}%`, height: '100%',
          background: 'linear-gradient(90deg, var(--logic) 0%, var(--logic-light) 100%)',
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
            to="/logica"
            style={{
              fontSize: 13, color: 'var(--text-muted)', textDecoration: 'none',
              display: 'flex', alignItems: 'center', gap: 6, transition: 'color 0.15s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
          >
            <ArrowLeft size={14} />
            Toate exercițiile
          </Link>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
            <span style={{
              fontSize: 11, color: 'var(--logic)',
              padding: '3px 8px', background: 'var(--logic-dim)',
              borderRadius: 4, fontFamily: 'var(--font-mono)',
              letterSpacing: '0.04em', fontWeight: 600,
            }}>
              {meta.category}
            </span>
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
              <HelpCircle size={13} /> {currentExercise.propositions.length} propoziții
            </span>
          </div>
        </div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{ padding: '40px 0 36px', borderBottom: '1px solid var(--border)' }}
        >
          <div style={{ marginBottom: 16 }}>
            <span style={{
              fontSize: 10, color: 'var(--logic)',
              padding: '4px 10px',
              background: 'var(--logic-dim)',
              borderRadius: 5,
              letterSpacing: '0.05em', textTransform: 'uppercase',
              border: '1px solid var(--logic-border)',
              fontFamily: 'var(--font-mono)', fontWeight: 600,
            }}>
              {meta.difficulty}
            </span>
          </div>
          <h1 style={{
            fontSize: 'clamp(22px, 4vw, 32px)',
            fontWeight: 700, color: 'var(--text-primary)',
            margin: '0 0 14px', lineHeight: 1.25, letterSpacing: '-0.025em',
          }}>
            {meta.title}
          </h1>
          <p style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>
            {meta.description}
          </p>
        </motion.div>

        {/* Content */}
        <div style={{ paddingTop: 48, display: 'flex', flexDirection: 'column', gap: 64 }}>

          {/* Section 1: Navigation & Quick Info */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              padding: '16px 24px',
              background: 'rgba(255, 255, 255, 0.02)',
              backdropFilter: 'blur(10px)',
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              boxShadow: '0 8px 32px -4px rgba(0, 0, 0, 0.3)',
              gap: 20
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ 
                fontSize: 12, 
                fontWeight: 700, 
                color: 'var(--text-muted)', 
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                Varianta:
              </div>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {EULER_EXERCISES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIdx(i)}
                    style={{
                      width: 36, height: 36, borderRadius: 10,
                      display: 'grid', placeItems: 'center',
                      fontSize: 14, fontWeight: 700,
                      cursor: 'pointer',
                      transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                      border: '1px solid',
                      background: currentIdx === i ? 'var(--logic)' : 'rgba(255, 255, 255, 0.03)',
                      color: currentIdx === i ? 'white' : 'var(--text-secondary)',
                      borderColor: currentIdx === i ? 'var(--logic)' : 'rgba(255, 255, 255, 0.1)',
                      boxShadow: currentIdx === i ? '0 0 15px var(--logic-dim)' : 'none',
                      transform: currentIdx === i ? 'scale(1.05)' : 'scale(1)',
                    }}
                    onMouseEnter={e => {
                      if (currentIdx !== i) {
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                      }
                    }}
                    onMouseLeave={e => {
                      if (currentIdx !== i) {
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                      }
                    }}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: 10 }}>
              <button 
                onClick={() => setCurrentIdx(Math.max(0, currentIdx - 1))}
                disabled={currentIdx === 0}
                style={{ 
                  width: 40, height: 40, 
                  borderRadius: 12, 
                  display: 'grid', placeItems: 'center',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  background: 'rgba(255, 255, 255, 0.03)',
                  color: currentIdx === 0 ? 'rgba(255, 255, 255, 0.1)' : 'var(--text-primary)',
                  cursor: currentIdx === 0 ? 'default' : 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={() => setCurrentIdx(Math.min(EULER_EXERCISES.length - 1, currentIdx + 1))}
                disabled={currentIdx === EULER_EXERCISES.length - 1}
                style={{ 
                  width: 40, height: 40, 
                  borderRadius: 12, 
                  display: 'grid', placeItems: 'center',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  background: 'rgba(255, 255, 255, 0.03)',
                  color: currentIdx === EULER_EXERCISES.length - 1 ? 'rgba(255, 255, 255, 0.1)' : 'var(--text-primary)',
                  cursor: currentIdx === EULER_EXERCISES.length - 1 ? 'default' : 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </motion.div>

          {/* Section 2: Theory recap */}
          <ExerciseSection index={1} title="Teoria raporturilor între termeni">
            <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7, marginTop: 0 }}>
              Înainte de a rezolva, reamintim cele patru tipuri de raporturi între sferele termenilor:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 12, marginTop: 4 }}>
              {RELATION_CARDS.map((card, i) => (
                <RelationCard
                  key={card.name}
                  name={card.name}
                  symbol={card.symbol}
                  color={card.color}
                  colorDim={card.colorDim}
                  definition={card.definition}
                  example={card.example}
                  miniDiagram={card.miniDiagram}
                  index={i}
                />
              ))}
            </div>
          </ExerciseSection>

          {/* Section 3: Step-by-step solution */}
          <ExerciseSection index={2} title="Rezolvare pas cu pas">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <StepCard step={1} title="Stabilim structura din enunț">
                <p>Din enunț extragem toate relațiile:</p>
                <ul style={{ margin: '8px 0', paddingLeft: 18, fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.9 }}>
                  {currentExercise.solutionSteps.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ul>
              </StepCard>

              <StepCard step={2} title="Construiește diagrama Euler">
                <p style={{ marginBottom: 20 }}>
                  Trage termenii din partea de jos în spațiul diagramei pentru a reprezenta raporturile corect. 
                </p>
                <div style={{ marginTop: 16 }}>
                  <EulerBuilder 
                    key={`builder-${currentIdx}`}
                    title={currentExercise.title}
                    statement={currentExercise.statement}
                    terms={currentExercise.terms.map(t => ({
                      ...t,
                      color: EULER_COLORS[t.id as keyof typeof EULER_COLORS]?.stroke || '#fff'
                    }))}
                    rules={currentExercise.rules}
                  />
                </div>
              </StepCard>


            </div>
          </ExerciseSection>

          {/* Section 4: Interactive proposition evaluator */}
          <ExerciseSection index={3} title="Evaluează propozițiile — exercițiu interactiv">
            <p style={{ fontSize: 14, color: 'var(--text-secondary)', marginTop: 0, marginBottom: 20, lineHeight: 1.7 }}>
              Pe baza diagramei de mai sus, marchează fiecare propoziție ca <strong>A</strong> (adevărată) sau <strong>F</strong> (falsă), exact ca la examen. Apasă pe iconiță după corectare pentru a vedea explicația.
            </p>
            <PropositionEvaluator
              key={`evaluator-${currentIdx}`}
              propositions={currentExercise.propositions}
              title="Stabiliți care propoziții sunt adevărate (A) și care sunt false (F)"
            />
          </ExerciseSection>

          {/* Section 5: Extra practice */}
          <ExerciseSection index={4} title="Recapitulare — reguli de aur">
            <div style={{ display: 'grid', gap: 10 }}>
              {[
                { rule: 'Identitate → același cerc', detail: 'Dacă A = B, orice proprietate a lui A o ai și cu B și viceversa.' },
                { rule: 'Specie → cerc interior', detail: 'Dacă C ⊂ A: "Toți C sunt A" este adevărat; "Toți A sunt C" este fals.' },
                { rule: 'Încrucișare → suprapunere parțială', detail: '"Unii X sunt Y" — adevărat. "Toți X sunt Y" sau "Niciun X nu e Y" — false.' },
                { rule: 'Contrarietate → cercuri separate', detail: '"Niciun X nu este Y" — adevărat. "Unii X sunt Y" — fals.' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  style={{
                    display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 12,
                    padding: '14px 18px',
                    background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 8,
                    alignItems: 'start',
                  }}
                >
                  <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--logic)', fontFamily: 'var(--font-mono)' }}>
                    {item.rule}
                  </div>
                  <div style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {item.detail}
                  </div>
                </motion.div>
              ))}
            </div>
          </ExerciseSection>

        </div>
      </div>
    </>
  );
}

/* ─── Sub-components ─────────────────────────────────────────────────────── */

function ExerciseSection({ index, title, children }: { index: number; title: string; children: ReactNode }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4 }}
      style={{ borderBottom: '1px solid var(--border)', paddingBottom: 64 }}
    >
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 18, marginBottom: 28 }}>
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: 11,
          color: 'var(--logic)', letterSpacing: '0.1em', flexShrink: 0, fontWeight: 600,
        }}>
          {String(index + 1).padStart(2, '0')}
        </span>
        <h2 style={{
          fontSize: 'clamp(17px, 2.5vw, 21px)',
          fontWeight: 700, color: 'var(--text-primary)',
          margin: 0, lineHeight: 1.3, letterSpacing: '-0.015em',
        }}>
          {title}
        </h2>
      </div>
      {children}
    </motion.section>
  );
}

function StepCard({ step, title, children }: { step: number; title: string; children: ReactNode }) {
  const [open, setOpen] = useState(step <= 2);
  return (
    <div style={{
      background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 10, overflow: 'hidden',
    }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: '100%', padding: '14px 18px',
          display: 'flex', alignItems: 'center', gap: 12,
          background: 'none', border: 'none', cursor: 'pointer',
          textAlign: 'left',
        }}
      >
        <div style={{
          width: 26, height: 26, borderRadius: 6, flexShrink: 0,
          background: 'var(--logic-dim)', border: '1px solid var(--logic-border)',
          display: 'grid', placeItems: 'center',
          fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--logic)', fontWeight: 700,
        }}>
          {step}
        </div>
        <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-primary)', flex: 1 }}>{title}</span>
        {open ? <ChevronUp size={15} style={{ color: 'var(--text-muted)', flexShrink: 0 }} />
               : <ChevronDown size={15} style={{ color: 'var(--text-muted)', flexShrink: 0 }} />}
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{
              padding: '0 18px 18px 56px',
              fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.75,
            }}>
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Term({ children }: { children: ReactNode }) {
  return (
    <strong style={{
      color: 'var(--logic-light)', fontFamily: 'var(--font-mono)',
      background: 'var(--logic-dim)', padding: '1px 6px', borderRadius: 4,
      fontSize: '0.92em',
    }}>
      {children}
    </strong>
  );
}

function Rel({ children }: { children: ReactNode }) {
  return (
    <em style={{ color: 'var(--text-primary)', fontStyle: 'normal', fontWeight: 500 }}>
      {children}
    </em>
  );
}
