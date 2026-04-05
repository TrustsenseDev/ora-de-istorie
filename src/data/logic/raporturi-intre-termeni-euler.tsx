import type { ReactNode } from 'react';
import type { Proposition } from '../../components/logic/PropositionEvaluator';

export type EulerRelation = 'identitate' | 'subordonare' | 'incrucisare' | 'contrarietate' | 'opozitie' | 'contradictie';

export interface EulerRule {
  a: string;
  b: string;
  relation: EulerRelation;
}

export interface EulerTermDef {
  id: string;
  label: string;
  color: string;
  r: number;
}

export interface ConditionLine {
  terms: [string, string];
  relation: EulerRelation;
  text: string;
}

export interface EulerExerciseDef {
  id: string;
  title?: string;
  conditions: ConditionLine[];
  impliedRelations: string[];
  terms: EulerTermDef[];
  rules: EulerRule[];
  propositions: Proposition[];
}

// Stroke colors from EULER_COLORS in EulerDiagram.tsx
const COLORS: Record<string, string> = {
  A: 'rgba(192,57,43,0.7)',
  B: 'rgba(52,152,219,0.7)',
  C: 'rgba(39,174,96,0.7)',
  D: 'rgba(155,89,182,0.7)',
  E: 'rgba(230,126,34,0.7)',
};
const c = (id: string) => COLORS[id] ?? '#aaa';

export const eulerExercisesCollection: Record<string, EulerExerciseDef> = {

  // ─── Exercițiul 1 (Model Bacalaureat - Mediu) ─────────────────────────
  'raporturi-intre-termeni-euler': {
    id: 'raporturi-intre-termeni-euler',
    title: 'Exercițiul 1 — Identitate și Încrucișări Multiple',
    conditions: [
      { terms: ['A', 'B'], relation: 'identitate',    text: 'Termenii A și B se află în raport de identitate' },
      { terms: ['C', 'A'], relation: 'subordonare',   text: 'Termenul C este specie a termenului A' },
      { terms: ['D', 'B'], relation: 'subordonare',   text: 'Termenul D este specie a termenului B' },
      { terms: ['D', 'C'], relation: 'incrucisare',   text: 'Termenul D se încrucișează cu C' },
      { terms: ['E', 'A'], relation: 'incrucisare',   text: 'Termenul E se încrucișează cu A' },
      { terms: ['E', 'C'], relation: 'contrarietate', text: 'Termenul E se află în contrarietate cu C' },
      { terms: ['E', 'D'], relation: 'contrarietate', text: 'Termenul E se află în contrarietate cu D' },
    ],
    impliedRelations: [
      'A = B → orice proprietate a lui A o are și B și invers.',
      'C ⊂ A și A = B → C ⊂ B (C este implicit și specie a lui B).',
      'D ⊂ B și A = B → D ⊂ A (D este specie și a lui A).',
      'E ⊥ C și E ⊥ D, dar E ∩ A → E ocupă zona din A neacoperită de C și D.',
    ],
    terms: [
      { id: 'A', label: 'Termenul A', color: c('A'), r: 85 },
      { id: 'B', label: 'Termenul B', color: c('B'), r: 85 },
      { id: 'C', label: 'Termenul C', color: c('C'), r: 35 },
      { id: 'D', label: 'Termenul D', color: c('D'), r: 35 },
      { id: 'E', label: 'Termenul E', color: c('E'), r: 40 },
    ],
    rules: [
      { a: 'A', b: 'B', relation: 'identitate' },
      { a: 'C', b: 'A', relation: 'subordonare' },
      { a: 'D', b: 'B', relation: 'subordonare' },
      { a: 'D', b: 'C', relation: 'incrucisare' },
      { a: 'E', b: 'A', relation: 'incrucisare' },
      { a: 'E', b: 'C', relation: 'contrarietate' },
      { a: 'E', b: 'D', relation: 'contrarietate' },
    ],
    propositions: [
      { id: 'a', text: 'Unii E nu sunt C.', answer: 'A', explanation: 'E și C sunt în contrarietate, deci niciun E nu este C, ceea ce face ca "Unii E nu sunt C" să fie adevărată.' },
      { id: 'b', text: 'Toți C sunt B.', answer: 'A', explanation: 'C ⊂ A și A = B → C ⊂ B. Orice element al lui C este și element al lui B.' },
      { id: 'c', text: 'Niciun B nu este C.', answer: 'F', explanation: 'B = A și C ⊂ A → C ⊂ B. Există elemente B care sunt și C.' },
      { id: 'd', text: 'Unii D sunt E.', answer: 'F', explanation: 'D și E sunt în raport de contrarietate — sferele lor nu se intersectează.' },
      { id: 'e', text: 'Niciun A nu este D.', answer: 'F', explanation: 'D ⊂ B și A = B → D ⊂ A. Există elemente A care sunt și D.' },
      { id: 'f', text: 'Unii A sunt E.', answer: 'A', explanation: 'E ∩ A → există elemente comune lui A și E.' },
      { id: 'g', text: 'Toți D sunt B.', answer: 'A', explanation: 'D ⊂ B prin definiție, deci orice D este un B.' },
      { id: 'h', text: 'Unii C sunt D.', answer: 'A', explanation: 'C și D se încrucișează, așadar împart o zonă comună.' },
    ],
  },

  // ─── Exercițiul 2 (Lanț liniar + Elemente Externe - Ușor spre Mediu) ──
  'euler-lant-subordonare': {
    id: 'euler-lant-subordonare',
    title: 'Exercițiul 2 — Subordonare în Cascadă',
    conditions: [
      { terms: ['A', 'B'], relation: 'subordonare',   text: 'Termenul A este specie a termenului B (A ⊂ B)' },
      { terms: ['B', 'C'], relation: 'subordonare',   text: 'Termenul B este specie a termenului C (B ⊂ C)' },
      { terms: ['D', 'C'], relation: 'contrarietate', text: 'Termenul D se află în contrarietate cu C (D ⊥ C)' },
      { terms: ['E', 'D'], relation: 'subordonare',   text: 'Termenul E este specie a termenului D (E ⊂ D)' },
      { terms: ['A', 'D'], relation: 'contrarietate', text: 'Termenul A se află în contrarietate cu D' },
      { terms: ['B', 'D'], relation: 'contrarietate', text: 'Termenul B se află în contrarietate cu D' },
    ],
    impliedRelations: [
      'A ⊂ B și B ⊂ C → A ⊂ C (tranzitivitatea subordonării).',
      'D ⊥ C → D nu se intersectează deloc cu sfera mare C.',
      'E ⊂ D și D ⊥ C → E este și el separat complet de C, B și A.',
    ],
    terms: [
      { id: 'A', label: 'Termenul A', color: c('A'), r: 30 },
      { id: 'B', label: 'Termenul B', color: c('B'), r: 55 },
      { id: 'C', label: 'Termenul C', color: c('C'), r: 85 },
      { id: 'D', label: 'Termenul D', color: c('D'), r: 60 },
      { id: 'E', label: 'Termenul E', color: c('E'), r: 30 },
    ],
    rules: [
      { a: 'A', b: 'B', relation: 'subordonare' },
      { a: 'B', b: 'C', relation: 'subordonare' },
      { a: 'D', b: 'C', relation: 'contrarietate' },
      { a: 'E', b: 'D', relation: 'subordonare' },
      { a: 'A', b: 'D', relation: 'contrarietate' },
      { a: 'B', b: 'D', relation: 'contrarietate' },
    ],
    propositions: [
      { id: 'a', text: 'Toți A sunt C.', answer: 'A', explanation: 'A ⊂ B și B ⊂ C, deci implicit A ⊂ C.' },
      { id: 'b', text: 'Niciun A nu este D.', answer: 'A', explanation: 'A se află în C, iar D este în contrarietate cu C. Deci sunt complet separați.' },
      { id: 'c', text: 'Unii E sunt C.', answer: 'F', explanation: 'E ⊂ D, iar D ⊥ C. E este total în afara lui C.' },
      { id: 'd', text: 'Toți E sunt D.', answer: 'A', explanation: 'Este stipulat clar că E este specie a lui D (E ⊂ D).' },
      { id: 'e', text: 'Unii C sunt B.', answer: 'A', explanation: 'B este specie pentru C, deci C conține B. Există elemente în C care aparțin lui B.' },
      { id: 'f', text: 'Niciun E nu este B.', answer: 'A', explanation: 'E este în D, iar B este în C. Cum D ⊥ C, nicio subspecie a lor nu se atinge.' },
      { id: 'g', text: 'Toți C sunt A.', answer: 'F', explanation: 'A ⊂ C, nu invers. Sfera C este mult mai mare decât A.' },
      { id: 'h', text: 'Niciun D nu este B.', answer: 'A', explanation: 'B este inclus în C, iar D respinge complet pe C. Astfel, D respinge și pe B.' },
    ],
  },

  // ─── Exercițiul 3 (Steaua Intersecțiilor - Mediu) ─────────────────────
  'euler-steaua-incrucisarilor': {
    id: 'euler-steaua-incrucisarilor',
    title: 'Exercițiul 3 — Intersecții Complexe în Formă de Stea',
    conditions: [
      { terms: ['A', 'B'], relation: 'incrucisare',   text: 'Termenii A și B se încrucișează' },
      { terms: ['C', 'A'], relation: 'subordonare',   text: 'Termenul C este specie a lui A (C ⊂ A)' },
      { terms: ['C', 'B'], relation: 'contrarietate', text: 'Termenul C se află în contrarietate cu B' },
      { terms: ['D', 'B'], relation: 'subordonare',   text: 'Termenul D este specie a lui B (D ⊂ B)' },
      { terms: ['D', 'A'], relation: 'contrarietate', text: 'Termenul D se află în contrarietate cu A' },
      { terms: ['E', 'A'], relation: 'incrucisare',   text: 'Termenul E se încrucișează cu A' },
      { terms: ['E', 'B'], relation: 'incrucisare',   text: 'Termenul E se încrucișează cu B' },
      { terms: ['E', 'C'], relation: 'contrarietate', text: 'Termenul E se află în contrarietate cu C' },
      { terms: ['E', 'D'], relation: 'contrarietate', text: 'Termenul E se află în contrarietate cu D' },
    ],
    impliedRelations: [
      'C se află exclusiv în porțiunea lui A liberă de B.',
      'D se află exclusiv în porțiunea lui B liberă de A.',
      'C ⊥ B și D ⊂ B → C ⊥ D.',
      'E se suprapune fix peste zona de intersecție A ∩ B, ocolind subspeciile specifice (C și D).',
    ],
    terms: [
      { id: 'A', label: 'Termenul A', color: c('A'), r: 65 },
      { id: 'B', label: 'Termenul B', color: c('B'), r: 65 },
      { id: 'C', label: 'Termenul C', color: c('C'), r: 26 },
      { id: 'D', label: 'Termenul D', color: c('D'), r: 26 },
      { id: 'E', label: 'Termenul E', color: c('E'), r: 35 },
    ],
    rules: [
      { a: 'A', b: 'B', relation: 'incrucisare' },
      { a: 'C', b: 'A', relation: 'subordonare' },
      { a: 'C', b: 'B', relation: 'contrarietate' },
      { a: 'D', b: 'B', relation: 'subordonare' },
      { a: 'D', b: 'A', relation: 'contrarietate' },
      { a: 'E', b: 'A', relation: 'incrucisare' },
      { a: 'E', b: 'B', relation: 'incrucisare' },
      { a: 'E', b: 'C', relation: 'contrarietate' },
      { a: 'E', b: 'D', relation: 'contrarietate' },
    ],
    propositions: [
      { id: 'a', text: 'Unii A sunt B.', answer: 'A', explanation: 'A ∩ B → există elemente comune.' },
      { id: 'b', text: 'Niciun C nu este B.', answer: 'A', explanation: 'C ⊥ B → sferele nu se intersectează deloc.' },
      { id: 'c', text: 'Niciun D nu este A.', answer: 'A', explanation: 'D ⊥ A → sferele nu se intersectează deloc.' },
      { id: 'd', text: 'Toți C sunt A.', answer: 'A', explanation: 'C ⊂ A → orice element din C aparține lui A.' },
      { id: 'e', text: 'Toți D sunt B.', answer: 'A', explanation: 'D ⊂ B → orice element din D aparține lui B.' },
      { id: 'f', text: 'Niciun C nu este D.', answer: 'A', explanation: 'C e doar în A, D e doar în B. Se exclud reciproc.' },
      { id: 'g', text: 'Unii E sunt A.', answer: 'A', explanation: 'E se încrucișează cu A.' },
      { id: 'h', text: 'Niciun E nu este C.', answer: 'A', explanation: 'Condiția stipulează explicit că E este în contrarietate cu C.' },
    ],
  },

  // ─── Exercițiul 4 (Identitate Dublă - Dificil) ────────────────────────
  'euler-identitate-dubla': {
    id: 'euler-identitate-dubla',
    title: 'Exercițiul 4 — Dublă Identitate Suprapusă',
    conditions: [
      { terms: ['A', 'C'], relation: 'identitate',    text: 'Termenii A și C se află în raport de identitate (A = C)' },
      { terms: ['B', 'A'], relation: 'subordonare',   text: 'Termenul B este specie a termenului A (B ⊂ A)' },
      { terms: ['D', 'B'], relation: 'identitate',    text: 'Termenii D și B se află în raport de identitate (D = B)' },
      { terms: ['E', 'C'], relation: 'incrucisare',   text: 'Termenul E se încrucișează cu C' },
      { terms: ['E', 'B'], relation: 'contrarietate', text: 'Termenul E se află în contrarietate cu B' },
      { terms: ['E', 'A'], relation: 'incrucisare',   text: 'Termenul E se încrucișează cu A' },
      { terms: ['D', 'A'], relation: 'subordonare',   text: 'Termenul D este specie a termenului A' },
    ],
    impliedRelations: [
      'A și C formează un singur cerc mare.',
      'B și D formează un singur cerc mic, situat în întregime în A (și C).',
      'E ∩ C și A = C → E ∩ A.',
      'E ⊥ B și D = B → E ⊥ D. E taie doar porțiunea din A/C neocupată de B/D.',
    ],
    terms: [
      { id: 'A', label: 'Termenul A', color: c('A'), r: 80 },
      { id: 'B', label: 'Termenul B', color: c('B'), r: 40 },
      { id: 'C', label: 'Termenul C', color: c('C'), r: 80 },
      { id: 'D', label: 'Termenul D', color: c('D'), r: 40 },
      { id: 'E', label: 'Termenul E', color: c('E'), r: 45 },
    ],
    rules: [
      { a: 'A', b: 'C', relation: 'identitate' },
      { a: 'B', b: 'A', relation: 'subordonare' },
      { a: 'D', b: 'B', relation: 'identitate' },
      { a: 'E', b: 'C', relation: 'incrucisare' },
      { a: 'E', b: 'B', relation: 'contrarietate' },
      { a: 'E', b: 'A', relation: 'incrucisare' },
      { a: 'D', b: 'A', relation: 'subordonare' },
    ],
    propositions: [
      { id: 'a', text: 'Toți D sunt A.', answer: 'A', explanation: 'D = B și B ⊂ A → D ⊂ A. Tot ce e D e și A.' },
      { id: 'b', text: 'Toți B sunt C.', answer: 'A', explanation: 'B ⊂ A și A = C → B ⊂ C.' },
      { id: 'c', text: 'Unii E sunt A.', answer: 'A', explanation: 'E se încrucișează cu C, care este A.' },
      { id: 'd', text: 'Niciun E nu este D.', answer: 'A', explanation: 'E ⊥ B și D = B → E ⊥ D.' },
      { id: 'e', text: 'Unii E sunt B.', answer: 'F', explanation: 'E este declarat în contrarietate cu B.' },
      { id: 'f', text: 'Toți A sunt B.', answer: 'F', explanation: 'B ⊂ A, dar A este sfera mare (genul). Există A care nu sunt B.' },
      { id: 'g', text: 'Unii C nu sunt D.', answer: 'A', explanation: 'C e identic cu A, D e identic cu B. Deoarece B ⊂ A strict, unii C sunt în afara lui D.' },
      { id: 'h', text: 'Toți C sunt E.', answer: 'F', explanation: 'Intersecție parțială: E acoperă doar o parte din C, nu tot.' },
    ],
  },

  // ─── Exercițiul 5 (Două Ramuri Separate - Mediu) ──────────────────────
  'euler-doua-ramuri': {
    id: 'euler-doua-ramuri',
    title: 'Exercițiul 5 — Două Ramuri Gen-Specie și Punte',
    conditions: [
      { terms: ['A', 'B'], relation: 'contrarietate', text: 'Termenii A și B sunt în contrarietate (A ⊥ B)' },
      { terms: ['C', 'A'], relation: 'subordonare',   text: 'Termenul C este specie a lui A (C ⊂ A)' },
      { terms: ['D', 'B'], relation: 'subordonare',   text: 'Termenul D este specie a lui B (D ⊂ B)' },
      { terms: ['E', 'A'], relation: 'incrucisare',   text: 'Termenul E se încrucișează cu A' },
      { terms: ['E', 'B'], relation: 'incrucisare',   text: 'Termenul E se încrucișează cu B' },
      { terms: ['E', 'C'], relation: 'contrarietate', text: 'Termenul E se află în contrarietate cu C' },
      { terms: ['E', 'D'], relation: 'contrarietate', text: 'Termenul E se află în contrarietate cu D' },
      { terms: ['C', 'B'], relation: 'contrarietate', text: 'Termenul C se află în contrarietate cu B' },
      { terms: ['D', 'A'], relation: 'contrarietate', text: 'Termenul D se află în contrarietate cu A' },
    ],
    impliedRelations: [
      'A și B sunt două lumi complet separate.',
      'C este înghițit de A, D este înghițit de B.',
      'E acționează ca o punte peste ambele emisfere, intersectând genurile mari A și B, dar evitând atent speciile mici C și D.',
    ],
    terms: [
      { id: 'A', label: 'Termenul A', color: c('A'), r: 70 },
      { id: 'B', label: 'Termenul B', color: c('B'), r: 70 },
      { id: 'C', label: 'Termenul C', color: c('C'), r: 25 },
      { id: 'D', label: 'Termenul D', color: c('D'), r: 25 },
      { id: 'E', label: 'Termenul E', color: c('E'), r: 40 },
    ],
    rules: [
      { a: 'A', b: 'B', relation: 'contrarietate' },
      { a: 'C', b: 'A', relation: 'subordonare' },
      { a: 'D', b: 'B', relation: 'subordonare' },
      { a: 'E', b: 'A', relation: 'incrucisare' },
      { a: 'E', b: 'B', relation: 'incrucisare' },
      { a: 'E', b: 'C', relation: 'contrarietate' },
      { a: 'E', b: 'D', relation: 'contrarietate' },
      { a: 'C', b: 'B', relation: 'contrarietate' },
      { a: 'D', b: 'A', relation: 'contrarietate' },
    ],
    propositions: [
      { id: 'a', text: 'Niciun A nu este B.', answer: 'A', explanation: 'Sunt declarate explict în contrarietate.' },
      { id: 'b', text: 'Niciun C nu este D.', answer: 'A', explanation: 'Fiind în A, respectiv B, care nu se ating, nici C și D nu se pot atinge.' },
      { id: 'c', text: 'Unii E sunt C.', answer: 'F', explanation: 'E este în contrarietate cu C.' },
      { id: 'd', text: 'Niciun E nu este D.', answer: 'A', explanation: 'E este în contrarietate cu D.' },
      { id: 'e', text: 'Unii E sunt A.', answer: 'A', explanation: 'E se încrucișează cu A.' },
      { id: 'f', text: 'Unii E sunt B.', answer: 'A', explanation: 'E se încrucișează și cu B.' },
      { id: 'g', text: 'Toți C sunt A.', answer: 'A', explanation: 'C ⊂ A, orice element al speciei C aparține genului A.' },
      { id: 'h', text: 'Unii A nu sunt E.', answer: 'A', explanation: 'Intersecția este doar parțială, deci rămân porțiuni din A neacoperite de E.' },
    ],
  },

  // ─── Exercițiul 6 (Subordonare Profundă / Matrioșka - Dificil) ────────
  'euler-subordonare-profunda': {
    id: 'euler-subordonare-profunda',
    title: 'Exercițiul 6 — Matrioșka logică cu specii disjuncte',
    conditions: [
      { terms: ['A', 'B'], relation: 'identitate',    text: 'A și B se află în raport de identitate (A = B)' },
      { terms: ['C', 'A'], relation: 'subordonare',   text: 'C este specie a lui A (C ⊂ A)' },
      { terms: ['D', 'A'], relation: 'subordonare',   text: 'D este specie a lui A (D ⊂ A)' },
      { terms: ['C', 'D'], relation: 'contrarietate', text: 'C și D se află în contrarietate (C ⊥ D)' },
      { terms: ['E', 'C'], relation: 'subordonare',   text: 'E este specie a lui C (E ⊂ C)' },
      { terms: ['E', 'D'], relation: 'contrarietate', text: 'E se află în contrarietate cu D' },
      { terms: ['E', 'A'], relation: 'subordonare',   text: 'E este specie a lui A' },
    ],
    impliedRelations: [
      'A și B sunt același domeniu.',
      'C și D sunt două subspecii complet disjuncte în interiorul lui A(B).',
      'E este înăuntrul lui C (fiind specia speciei).',
    ],
    terms: [
      { id: 'A', label: 'Termenul A', color: c('A'), r: 85 },
      { id: 'B', label: 'Termenul B', color: c('B'), r: 85 },
      { id: 'C', label: 'Termenul C', color: c('C'), r: 40 },
      { id: 'D', label: 'Termenul D', color: c('D'), r: 30 },
      { id: 'E', label: 'Termenul E', color: c('E'), r: 20 },
    ],
    rules: [
      { a: 'A', b: 'B', relation: 'identitate' },
      { a: 'C', b: 'A', relation: 'subordonare' },
      { a: 'D', b: 'A', relation: 'subordonare' },
      { a: 'C', b: 'D', relation: 'contrarietate' },
      { a: 'E', b: 'C', relation: 'subordonare' },
      { a: 'E', b: 'D', relation: 'contrarietate' },
      { a: 'E', b: 'A', relation: 'subordonare' },
    ],
    propositions: [
      { id: 'a', text: 'Toți E sunt A.', answer: 'A', explanation: 'E ⊂ C și C ⊂ A → E ⊂ A (prin tranzitivitate).' },
      { id: 'b', text: 'Toți E sunt B.', answer: 'A', explanation: 'Deoarece E ⊂ A și A = B, rezultă clar E ⊂ B.' },
      { id: 'c', text: 'Niciun E nu este D.', answer: 'A', explanation: 'E este complet în C, iar C ⊥ D. Ceea ce evită genul, evită și specia.' },
      { id: 'd', text: 'Unii C sunt D.', answer: 'F', explanation: 'Sunt clar în contrarietate, se resping total.' },
      { id: 'e', text: 'Unii A sunt E.', answer: 'A', explanation: 'E este inclus în A, așadar măcar o mică porțiune din A este ocupată de E.' },
      { id: 'f', text: 'Toți C sunt B.', answer: 'A', explanation: 'C ⊂ A și A = B → C ⊂ B.' },
      { id: 'g', text: 'Toți B sunt A.', answer: 'A', explanation: 'O consecință directă a raportului de identitate A = B.' },
      { id: 'h', text: 'Unii D sunt E.', answer: 'F', explanation: 'E și D sunt disjuncte (nu au elemente comune).' },
    ],
  },

  // ─── Exercițiul 7 (Încrucișare Liniară - Dificil) ─────────────────────
  'euler-incrucisare-liniara': {
    id: 'euler-incrucisare-liniara',
    title: 'Exercițiul 7 — Liniaritate și Intersecții Secvențiale',
    conditions: [
      { terms: ['A', 'B'], relation: 'incrucisare',   text: 'A și B se încrucișează' },
      { terms: ['B', 'C'], relation: 'incrucisare',   text: 'B și C se încrucișează' },
      { terms: ['A', 'C'], relation: 'contrarietate', text: 'A se află în contrarietate cu C (A ⊥ C)' },
      { terms: ['D', 'B'], relation: 'subordonare',   text: 'D este specie a lui B' },
      { terms: ['D', 'A'], relation: 'contrarietate', text: 'D se află în contrarietate cu A' },
      { terms: ['D', 'C'], relation: 'contrarietate', text: 'D se află în contrarietate cu C' },
      { terms: ['E', 'A'], relation: 'subordonare',   text: 'E este specie a lui A' },
      { terms: ['E', 'B'], relation: 'contrarietate', text: 'E se află în contrarietate cu B' },
      { terms: ['E', 'C'], relation: 'contrarietate', text: 'E se află în contrarietate cu C' },
    ],
    impliedRelations: [
      'A, B, C formează un șir lung (A atinge B, B atinge C, dar A nu atinge C).',
      'D stă protejat doar în centrul lui B, ocolind intersecțiile cu vecinii.',
      'E stă protejat în extrema pură a lui A, refuzând contactul cu B.',
    ],
    terms: [
      { id: 'A', label: 'Termenul A', color: c('A'), r: 60 },
      { id: 'B', label: 'Termenul B', color: c('B'), r: 60 },
      { id: 'C', label: 'Termenul C', color: c('C'), r: 60 },
      { id: 'D', label: 'Termenul D', color: c('D'), r: 25 },
      { id: 'E', label: 'Termenul E', color: c('E'), r: 20 },
    ],
    rules: [
      { a: 'A', b: 'B', relation: 'incrucisare' },
      { a: 'B', b: 'C', relation: 'incrucisare' },
      { a: 'A', b: 'C', relation: 'contrarietate' },
      { a: 'D', b: 'B', relation: 'subordonare' },
      { a: 'D', b: 'A', relation: 'contrarietate' },
      { a: 'D', b: 'C', relation: 'contrarietate' },
      { a: 'E', b: 'A', relation: 'subordonare' },
      { a: 'E', b: 'B', relation: 'contrarietate' },
      { a: 'E', b: 'C', relation: 'contrarietate' },
    ],
    propositions: [
      { id: 'a', text: 'Niciun A nu este C.', answer: 'A', explanation: 'Sunt declarate direct în contrarietate.' },
      { id: 'b', text: 'Niciun D nu este A.', answer: 'A', explanation: 'D se află în zona lui B care nu se suprapune cu A.' },
      { id: 'c', text: 'Niciun D nu este C.', answer: 'A', explanation: 'D evită și intersecția lui B cu C.' },
      { id: 'd', text: 'Toți D sunt B.', answer: 'A', explanation: 'D ⊂ B prin definiție.' },
      { id: 'e', text: 'Toți E sunt A.', answer: 'A', explanation: 'E ⊂ A prin definiție.' },
      { id: 'f', text: 'Niciun E nu este B.', answer: 'A', explanation: 'E trăiește doar în partea pură a lui A, evitând B.' },
      { id: 'g', text: 'Unii A sunt B.', answer: 'A', explanation: 'A ∩ B → au elemente la comun.' },
      { id: 'h', text: 'Niciun E nu este C.', answer: 'A', explanation: 'E este în A. Din moment ce A ⊥ C, nicio porțiune din E nu poate atinge C.' },
    ],
  },

  // ─── Exercițiul 8 (Genul Universal - Mediu) ───────────────────────────
  'euler-gen-universal': {
    id: 'euler-gen-universal',
    title: 'Exercițiul 8 — Genul Universal și Conflict Intern',
    conditions: [
      { terms: ['B', 'A'], relation: 'subordonare',   text: 'B este specie a lui A (B ⊂ A)' },
      { terms: ['C', 'A'], relation: 'subordonare',   text: 'C este specie a lui A (C ⊂ A)' },
      { terms: ['D', 'A'], relation: 'subordonare',   text: 'D este specie a lui A (D ⊂ A)' },
      { terms: ['E', 'A'], relation: 'subordonare',   text: 'E este specie a lui A (E ⊂ A)' },
      { terms: ['B', 'C'], relation: 'identitate',    text: 'B și C se află în raport de identitate (B = C)' },
      { terms: ['D', 'B'], relation: 'incrucisare',   text: 'D se încrucișează cu B' },
      { terms: ['D', 'C'], relation: 'incrucisare',   text: 'D se încrucișează cu C' },
      { terms: ['E', 'B'], relation: 'contrarietate', text: 'E se află în contrarietate cu B' },
      { terms: ['E', 'C'], relation: 'contrarietate', text: 'E se află în contrarietate cu C' },
      { terms: ['E', 'D'], relation: 'contrarietate', text: 'E se află în contrarietate cu D' },
    ],
    impliedRelations: [
      'A este un tărâm universal care conține pe toți: B, C, D și E.',
      'B și C sunt una și aceeași grupare.',
      'D interacționează parțial cu B(C).',
      'E stă retras în colțul lui, în cadrul lui A, dar total izolat de B, C și D.',
    ],
    terms: [
      { id: 'A', label: 'Termenul A', color: c('A'), r: 90 },
      { id: 'B', label: 'Termenul B', color: c('B'), r: 40 },
      { id: 'C', label: 'Termenul C', color: c('C'), r: 40 },
      { id: 'D', label: 'Termenul D', color: c('D'), r: 35 },
      { id: 'E', label: 'Termenul E', color: c('E'), r: 25 },
    ],
    rules: [
      { a: 'B', b: 'A', relation: 'subordonare' },
      { a: 'C', b: 'A', relation: 'subordonare' },
      { a: 'D', b: 'A', relation: 'subordonare' },
      { a: 'E', b: 'A', relation: 'subordonare' },
      { a: 'B', b: 'C', relation: 'identitate' },
      { a: 'D', b: 'B', relation: 'incrucisare' },
      { a: 'D', b: 'C', relation: 'incrucisare' },
      { a: 'E', b: 'B', relation: 'contrarietate' },
      { a: 'E', b: 'C', relation: 'contrarietate' },
      { a: 'E', b: 'D', relation: 'contrarietate' },
    ],
    propositions: [
      { id: 'a', text: 'Toți B sunt A.', answer: 'A', explanation: 'B ⊂ A.' },
      { id: 'b', text: 'Toți C sunt A.', answer: 'A', explanation: 'C ⊂ A.' },
      { id: 'c', text: 'Unii D sunt C.', answer: 'A', explanation: 'D ∩ B, dar B = C, așadar D ∩ C.' },
      { id: 'd', text: 'Niciun E nu este C.', answer: 'A', explanation: 'E este izolat de B. B fiind totuna cu C, E este izolat și de C.' },
      { id: 'e', text: 'Toți E sunt A.', answer: 'A', explanation: 'E trăiește strict între granițele lumii A.' },
      { id: 'f', text: 'Unii A nu sunt B.', answer: 'A', explanation: 'Lumea A este mare și cuprinde D, E etc. Deci există porțiuni din A care nu sunt B.' },
      { id: 'g', text: 'Toți D sunt B.', answer: 'F', explanation: 'D și B se încrucișează. Înseamnă că doar unii D sunt B, nu toți.' },
      { id: 'h', text: 'Niciun E nu este D.', answer: 'A', explanation: 'Sunt declarate ca neavând contact (contrarietate).' },
    ],
  },
};

// Map the collection to the array format required by LogicExercise.tsx
export const EULER_EXERCISES = Object.values(eulerExercisesCollection).map(ex => ({
  ...ex,
  title: ex.title || 'Exercițiu Euler',
  statement: (
    <>
      Se dau termenii <strong>{ex.terms.map(t => t.id).join(', ')}</strong> astfel încât:
      <ul style={{ marginTop: 8, paddingLeft: 20 }}>
        {ex.conditions.map((c, i) => (
          <li key={i}>{c.text}.</li>
        ))}
      </ul>
    </>
  ),
  solutionSteps: ex.impliedRelations,
}));

export const RELATION_CARDS = [
  {
    name: 'Identitate',
    symbol: '≡',
    color: '#c0392b',
    colorDim: 'rgba(192,57,43,0.08)',
    definition: 'Doi termeni sunt în raport de identitate dacă sferele lor se suprapun complet — înseamnă același lucru, se referă la aceleași obiecte.',
    example: 'A ≡ B (toate elementele lui A sunt în B și viceversa)',
    miniDiagram: (
      <>
        <ellipse cx="40" cy="40" rx="28" ry="22" fill="rgba(192,57,43,0.15)" stroke="rgba(192,57,43,0.7)" strokeWidth="1.5" />
        <ellipse cx="40" cy="40" rx="28" ry="22" fill="rgba(52,152,219,0.10)" stroke="rgba(52,152,219,0.7)" strokeWidth="1.5" strokeDasharray="4 2" />
        <text x="34" y="37" fontSize="9" fontWeight="700" fill="#e74c3c" fontFamily="monospace">A</text>
        <text x="42" y="47" fontSize="9" fontWeight="700" fill="#3498db" fontFamily="monospace">B</text>
      </>
    ),
  },
  {
    name: 'Subordonare (Specie–Gen)',
    symbol: '⊂',
    color: '#27ae60',
    colorDim: 'rgba(39,174,96,0.08)',
    definition: 'Un termen (specia) este inclus complet în celălalt (genul). Orice element al speciei este și element al genului, dar nu invers.',
    example: 'C ⊂ A: toți C sunt A, dar nu toți A sunt C',
    miniDiagram: (
      <>
        <ellipse cx="40" cy="42" rx="30" ry="26" fill="rgba(192,57,43,0.12)" stroke="rgba(192,57,43,0.6)" strokeWidth="1.5" />
        <ellipse cx="36" cy="44" rx="14" ry="12" fill="rgba(39,174,96,0.2)" stroke="rgba(39,174,96,0.7)" strokeWidth="1.5" />
        <text x="56" y="32" fontSize="9" fontWeight="700" fill="#e74c3c" fontFamily="monospace">A</text>
        <text x="31" y="47" fontSize="9" fontWeight="700" fill="#27ae60" fontFamily="monospace">C</text>
      </>
    ),
  },
  {
    name: 'Încrucișare (Intersecție)',
    symbol: '∩',
    color: '#9b59b6',
    colorDim: 'rgba(155,89,182,0.08)',
    definition: 'Doi termeni se încrucișează dacă au elemente comune, dar fiecare are și elemente proprii. Sferele lor se suprapun parțial.',
    example: 'D ∩ C ≠ ∅, dar există D ∉ C și C ∉ D',
    miniDiagram: (
      <>
        <ellipse cx="30" cy="40" rx="22" ry="18" fill="rgba(155,89,182,0.15)" stroke="rgba(155,89,182,0.7)" strokeWidth="1.5" />
        <ellipse cx="50" cy="40" rx="22" ry="18" fill="rgba(39,174,96,0.15)" stroke="rgba(39,174,96,0.7)" strokeWidth="1.5" />
        <text x="14" y="43" fontSize="9" fontWeight="700" fill="#9b59b6" fontFamily="monospace">D</text>
        <text x="55" y="43" fontSize="9" fontWeight="700" fill="#27ae60" fontFamily="monospace">C</text>
      </>
    ),
  },
  {
    name: 'Contrarietate',
    symbol: '⊥',
    color: '#e67e22',
    colorDim: 'rgba(230,126,34,0.08)',
    definition: 'Doi termeni sunt contradictorii dacă sferele lor nu se intersectează deloc și nu există niciun element comun.',
    example: 'E și C: niciun E nu este C și niciun C nu este E',
    miniDiagram: (
      <>
        <ellipse cx="22" cy="40" rx="16" ry="14" fill="rgba(230,126,34,0.15)" stroke="rgba(230,126,34,0.7)" strokeWidth="1.5" />
        <ellipse cx="58" cy="40" rx="16" ry="14" fill="rgba(39,174,96,0.15)" stroke="rgba(39,174,96,0.7)" strokeWidth="1.5" />
        <text x="16" y="43" fontSize="9" fontWeight="700" fill="#e67e22" fontFamily="monospace">E</text>
        <text x="53" y="43" fontSize="9" fontWeight="700" fill="#27ae60" fontFamily="monospace">C</text>
      </>
    ),
  },
];

export const EXERCISE_CONTENT = {
  id: 'raporturi-intre-termeni-euler',
  eulerExercises: EULER_EXERCISES,
  relationCards: RELATION_CARDS,
};
