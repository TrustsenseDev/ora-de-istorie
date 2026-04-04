import { useState } from 'react';
import type { ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, HelpCircle, CheckCircle, ChevronDown, ChevronUp, Info } from 'lucide-react';
import { logicExercises } from '../data/logicExercises';
import { useParams } from 'react-router-dom';
import EulerDiagram from '../components/logic/EulerDiagram';
import RelationCard from '../components/logic/RelationCard';
import EulerBuilder from '../components/logic/EulerBuilder';
import PropositionEvaluator from '../components/logic/PropositionEvaluator';
import { EULER_TERMS, PROPOSITIONS, RELATION_CARDS, EULER_RULES } from '../data/logic/raporturi-intre-termeni-euler';
import { EULER_COLORS } from '../components/logic/EulerDiagram';
import { useScrollProgress } from '../hooks/useScrollProgress';

export default function LogicExercise() {
  const { id } = useParams();
  const meta = logicExercises.find(e => e.id === id);
  const scroll = useScrollProgress();

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
              <HelpCircle size={13} /> {PROPOSITIONS.length} propoziții
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

          {/* Section 1: The exercise problem */}
          <ExerciseSection index={0} title="Enunțul exercițiului">
            <div style={{
              padding: '20px 24px',
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderLeft: '3px solid var(--logic)',
              borderRadius: '0 10px 10px 0',
            }}>
              <p style={{ fontSize: 14, color: 'var(--text-secondary)', margin: '0 0 14px', lineHeight: 1.8 }}>
                <strong style={{ color: 'var(--text-primary)' }}>B.</strong>{' '}
                Se dau termenii <Term>A</Term>, <Term>B</Term>, <Term>C</Term>, <Term>D</Term> și <Term>E</Term> astfel încât:
              </p>
              <ul style={{ margin: 0, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 8 }}>
                <li style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  Termenii <Term>A</Term> și <Term>B</Term> se află în <Rel>raport de identitate</Rel>
                </li>
                <li style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  Termenul <Term>C</Term> este o <Rel>specie</Rel> a termenului <Term>A</Term>
                </li>
                <li style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  Termenul <Term>D</Term> este specie a termenului <Term>B</Term>, aflată în <Rel>raport de încrucișare</Rel> cu <Term>C</Term>
                </li>
                <li style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  Termenul <Term>E</Term> se află în <Rel>raport de încrucișare</Rel> cu <Term>A</Term> și de <Rel>contrarietate</Rel> cu termenii <Term>C</Term> și <Term>D</Term>
                </li>
              </ul>
              <div style={{
                marginTop: 20, padding: '12px 16px',
                background: 'var(--bg-muted)', borderRadius: 8,
                display: 'flex', gap: 10, alignItems: 'flex-start',
              }}>
                <Info size={14} style={{ color: 'var(--logic)', flexShrink: 0, marginTop: 1 }} />
                <div>
                  <div style={{ fontSize: 13, color: 'var(--text-primary)', fontWeight: 500, marginBottom: 4 }}>Cerințe:</div>
                  <div style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    1. Reprezentați <strong>diagrama Euler comună</strong> pentru cei cinci termeni. (2 puncte)<br />
                    2. Stabiliți care propoziții sunt <strong>adevărate (A)</strong> și care sunt <strong>false (F)</strong>.
                  </div>
                </div>
              </div>
            </div>
          </ExerciseSection>

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
                  <li><code style={{ color: 'var(--logic)' }}>A = B</code> — identitate: același cerc</li>
                  <li><code style={{ color: 'var(--logic)' }}>C ⊂ A</code> — C este interior lui A</li>
                  <li><code style={{ color: 'var(--logic)' }}>D ⊂ B</code> și <code style={{ color: 'var(--logic)' }}>D ∩ C ≠ ∅</code> — D e în A, se suprapune cu C</li>
                  <li><code style={{ color: 'var(--logic)' }}>E ∩ A ≠ ∅</code>, <code style={{ color: 'var(--logic)' }}>E ∩ C = ∅</code>, <code style={{ color: 'var(--logic)' }}>E ∩ D = ∅</code> — E depășește A, separat de C și D</li>
                </ul>
              </StepCard>

              <StepCard step={2} title="Construiește diagrama Euler">
                <p style={{ marginBottom: 20 }}>
                  Trage termenii din partea de jos în spațiul diagramei pentru a reprezenta raporturile corect. 
                  <strong> A și B</strong> sunt identice, <strong>C și D</strong> sunt în interior, iar <strong>E</strong> este la margine.
                </p>
                <div style={{ marginTop: 16 }}>
                  <EulerBuilder 
                    title="Diagramă Interactivă — Rezolvă exercițiul"
                    terms={[
                      { id: 'A', label: 'Termenul A', color: EULER_COLORS.A.stroke, r: 75 },
                      { id: 'B', label: 'Termenul B', color: EULER_COLORS.B.stroke, r: 75 },
                      { id: 'C', label: 'Termenul C', color: EULER_COLORS.C.stroke, r: 35 },
                      { id: 'D', label: 'Termenul D', color: EULER_COLORS.D.stroke, r: 35 },
                      { id: 'E', label: 'Termenul E', color: EULER_COLORS.E.stroke, r: 40 },
                    ]}
                    rules={EULER_RULES}
                  />
                </div>
                <div style={{ marginTop: 24, padding: '12px 16px', background: 'var(--bg-muted)', borderRadius: 8, fontSize: 13 }}>
                  <span style={{ color: 'var(--text-muted)' }}>Sfat: Pentru <strong>identitate</strong>, pune cercurile A și B exact unul peste celălalt.</span>
                </div>
              </StepCard>

              <StepCard step={3} title="Deducem relațiile implicite">
                <p>Din relațiile date putem deduce:</p>
                <ul style={{ margin: '8px 0', paddingLeft: 18, fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.9 }}>
                  <li>Deoarece <code style={{ color: 'var(--logic)' }}>A = B</code> și <code style={{ color: 'var(--logic)' }}>C ⊂ A</code> → <code style={{ color: 'var(--logic)' }}>C ⊂ B</code></li>
                  <li>Deoarece <code style={{ color: 'var(--logic)' }}>A = B</code> și <code style={{ color: 'var(--logic)' }}>D ⊂ B</code> → <code style={{ color: 'var(--logic)' }}>D ⊂ A</code></li>
                  <li>E se încrucișează cu A, dar este separat de C și D</li>
                </ul>
              </StepCard>
            </div>
          </ExerciseSection>

          {/* Section 4: Interactive proposition evaluator */}
          <ExerciseSection index={3} title="Evaluează propozițiile — exercițiu interactiv">
            <p style={{ fontSize: 14, color: 'var(--text-secondary)', marginTop: 0, marginBottom: 20, lineHeight: 1.7 }}>
              Pe baza diagramei de mai sus, marchează fiecare propoziție ca <strong>A</strong> (adevărată) sau <strong>F</strong> (falsă), exact ca la examen. Apasă pe iconiță după corectare pentru a vedea explicația.
            </p>
            <PropositionEvaluator
              propositions={PROPOSITIONS}
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
