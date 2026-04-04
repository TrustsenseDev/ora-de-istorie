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
  // ─── Exercițiul 1 (original) ───────────────────────────────────────────
  'raporturi-intre-termeni-euler': {
    id: 'raporturi-intre-termeni-euler',
    title: 'Exercițiul 1 (Model Bacalaureat)',
    conditions: [
      { terms: ['A', 'B'], relation: 'identitate',    text: 'Termenii A și B se află în raport de identitate' },
      { terms: ['C', 'A'], relation: 'subordonare',   text: 'Termenul C este specie a termenului A' },
      { terms: ['D', 'B'], relation: 'subordonare',   text: 'Termenul D este specie a termenului B, în încrucișare cu C' },
      { terms: ['D', 'C'], relation: 'incrucisare',   text: 'Termenul D se încrucișează cu C' },
      { terms: ['E', 'A'], relation: 'incrucisare',   text: 'Termenul E se încrucișează cu A' },
      { terms: ['E', 'C'], relation: 'contrarietate', text: 'Termenul E se află în contrarietate cu C' },
      { terms: ['E', 'D'], relation: 'contrarietate', text: 'Termenul E se află în contrarietate cu D' },
    ],
    impliedRelations: [
      'A = B → orice proprietate a lui A o are și B și invers',
      'C ⊂ A și A = B → C ⊂ B (C este implicit și specie a lui B)',
      'D ⊂ B și A = B → D ⊂ A (D este specie și a lui A)',
      'E ⊥ C și E ⊥ D, dar E ∩ A → E ocupă zona din A neacoperită de C și D',
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
      { id: 'a', text: 'Unii E nu sunt C.', answer: 'A',
        explanation: 'E se încrucișează cu A dar este în contrarietate cu C. Există elemente E care sunt în A dar nu în C → "Unii E nu sunt C" este adevărată.' },
      { id: 'b', text: 'Toți C sunt B.', answer: 'A',
        explanation: 'C ⊂ A și A = B → C ⊂ B. Orice element al lui C este și element al lui B.' },
      { id: 'c', text: 'Niciun B nu este C.', answer: 'F',
        explanation: 'B = A și C ⊂ A → C ⊂ B. Există elemente B care sunt și C.' },
      { id: 'd', text: 'Unii D sunt E.', answer: 'F',
        explanation: 'D și E sunt în raport de contrarietate — sferele lor nu se intersectează.' },
      { id: 'e', text: 'Niciun A nu este D.', answer: 'F',
        explanation: 'D ⊂ B și A = B → D ⊂ A. Există elemente A care sunt și D.' },
      { id: 'f', text: 'Unii A sunt E.', answer: 'A',
        explanation: 'E ∩ A → există elemente comune lui A și E.' },
      { id: 'g', text: 'Toți D sunt B.', answer: 'A',
        explanation: 'D ⊂ B prin definiție — orice element D este și B.' },
      { id: 'h', text: 'Unii C nu sunt A.', answer: 'F',
        explanation: 'C ⊂ A → orice C este și A. Nu există niciun C în afara lui A.' },
    ],
  },

  // ─── Exercițiul 2 — Subordonare + Contrarietate + Încrucișare ─────────
  'euler-subordonare-contrarietate': {
    id: 'euler-subordonare-contrarietate',
    title: 'Exercițiul 2 — Subordonare, Contrarietate, Încrucișare',
    conditions: [
      { terms: ['A', 'B'], relation: 'subordonare',   text: 'Termenul A este specie a termenului B (A ⊂ B)' },
      { terms: ['C', 'A'], relation: 'contrarietate', text: 'Termenul C se află în contrarietate cu A' },
      { terms: ['C', 'B'], relation: 'incrucisare',   text: 'Termenul C se încrucișează cu B' },
    ],
    impliedRelations: [
      'A ⊂ B → "Toți A sunt B" adevărat; "Toți B sunt A" fals',
      'C ⊥ A → niciun C nu este A și niciun A nu este C',
      'C ∩ B cu A ⊂ B → C se suprapune cu zona din B care nu conține A',
      'Unii C sunt B, dar unii C nu sunt B',
    ],
    terms: [
      { id: 'A', label: 'Termenul A', color: c('A'), r: 34 },
      { id: 'B', label: 'Termenul B', color: c('B'), r: 75 },
      { id: 'C', label: 'Termenul C', color: c('C'), r: 46 },
    ],
    rules: [
      { a: 'A', b: 'B', relation: 'subordonare' },
      { a: 'C', b: 'A', relation: 'contrarietate' },
      { a: 'C', b: 'B', relation: 'incrucisare' },
    ],
    propositions: [
      { id: 'a', text: 'Toți A sunt B.', answer: 'A',
        explanation: 'A ⊂ B prin definiție — orice element al lui A este și element al lui B.' },
      { id: 'b', text: 'Niciun A nu este C.', answer: 'A',
        explanation: 'C și A sunt în contrarietate → sferele lor nu se intersectează.' },
      { id: 'c', text: 'Unii B sunt C.', answer: 'A',
        explanation: 'C ∩ B → există elemente comune lui B și C.' },
      { id: 'd', text: 'Toți B sunt A.', answer: 'F',
        explanation: 'A ⊂ B dar nu B ⊂ A. B este mai mare decât A.' },
      { id: 'e', text: 'Niciun B nu este C.', answer: 'F',
        explanation: 'C ∩ B → există elemente comune; propoziția este falsă.' },
      { id: 'f', text: 'Unii C nu sunt B.', answer: 'A',
        explanation: 'C ∩ B (nu C ⊂ B) → există elemente C în afara lui B.' },
    ],
  },

  // ─── Exercițiul 3 — Identitate + Specie ──────────────────────────────
  'euler-identitate-specie': {
    id: 'euler-identitate-specie',
    title: 'Exercițiul 3 — Identitate și Specie',
    conditions: [
      { terms: ['A', 'B'], relation: 'identitate',  text: 'Termenii A și B se află în raport de identitate (A = B)' },
      { terms: ['C', 'A'], relation: 'subordonare', text: 'Termenul C este specie a termenului A (C ⊂ A)' },
    ],
    impliedRelations: [
      'A = B și C ⊂ A → C ⊂ B (C este implicit și specie a lui B)',
      '"Toți C sunt A" și "Toți C sunt B" — ambele adevărate',
      '"Toți A sunt C" — fals (A = B este mai mare decât C)',
      '"Unii A nu sunt C" — adevărat (există elemente A ce nu sunt C)',
    ],
    terms: [
      { id: 'A', label: 'Termenul A', color: c('A'), r: 70 },
      { id: 'B', label: 'Termenul B', color: c('B'), r: 70 },
      { id: 'C', label: 'Termenul C', color: c('C'), r: 30 },
    ],
    rules: [
      { a: 'A', b: 'B', relation: 'identitate' },
      { a: 'C', b: 'A', relation: 'subordonare' },
    ],
    propositions: [
      { id: 'a', text: 'Toți C sunt B.', answer: 'A',
        explanation: 'C ⊂ A și A = B → C ⊂ B. Orice element al lui C este și B.' },
      { id: 'b', text: 'Toți B sunt C.', answer: 'F',
        explanation: 'C ⊂ A = B → C este mai mic decât B. Nu toți B sunt neapărat C.' },
      { id: 'c', text: 'Niciun A nu este C.', answer: 'F',
        explanation: 'C ⊂ A → există elemente care sunt și A și C.' },
      { id: 'd', text: 'Unii A nu sunt C.', answer: 'A',
        explanation: 'C ⊂ A dar C este mai mic decât A → există elemente A care nu sunt C.' },
      { id: 'e', text: 'Toți C sunt A.', answer: 'A',
        explanation: 'C este specie a lui A (C ⊂ A) prin definiție.' },
      { id: 'f', text: 'Niciun C nu este B.', answer: 'F',
        explanation: 'C ⊂ A = B → orice C este și B. Propoziția este falsă.' },
    ],
  },

  // ─── Exercițiul 4 — Încrucișare cu specii separate ───────────────────
  'euler-incrucisare-specii': {
    id: 'euler-incrucisare-specii',
    title: 'Exercițiul 4 — Încrucișare și specii separate',
    conditions: [
      { terms: ['A', 'B'], relation: 'incrucisare',   text: 'Termenii A și B se încrucișează' },
      { terms: ['C', 'A'], relation: 'subordonare',   text: 'Termenul C este specie a lui A' },
      { terms: ['C', 'B'], relation: 'contrarietate', text: 'Termenul C se află în contrarietate cu B' },
      { terms: ['D', 'B'], relation: 'subordonare',   text: 'Termenul D este specie a lui B' },
      { terms: ['D', 'A'], relation: 'contrarietate', text: 'Termenul D se află în contrarietate cu A' },
    ],
    impliedRelations: [
      'C ⊂ A și C ⊥ B → C se află exclusiv în zona A (în afara lui B)',
      'D ⊂ B și D ⊥ A → D se află exclusiv în zona B (în afara lui A)',
      'C ⊥ B și D ⊂ B → C ⊥ D (C și D în regiuni complet separate)',
    ],
    terms: [
      { id: 'A', label: 'Termenul A', color: c('A'), r: 62 },
      { id: 'B', label: 'Termenul B', color: c('B'), r: 62 },
      { id: 'C', label: 'Termenul C', color: c('C'), r: 28 },
      { id: 'D', label: 'Termenul D', color: c('D'), r: 28 },
    ],
    rules: [
      { a: 'A', b: 'B', relation: 'incrucisare' },
      { a: 'C', b: 'A', relation: 'subordonare' },
      { a: 'C', b: 'B', relation: 'contrarietate' },
      { a: 'D', b: 'B', relation: 'subordonare' },
      { a: 'D', b: 'A', relation: 'contrarietate' },
    ],
    propositions: [
      { id: 'a', text: 'Unii A sunt B.', answer: 'A',
        explanation: 'A ∩ B → există elemente comune.' },
      { id: 'b', text: 'Niciun C nu este B.', answer: 'A',
        explanation: 'C ⊥ B → sferele nu se intersectează.' },
      { id: 'c', text: 'Niciun D nu este A.', answer: 'A',
        explanation: 'D ⊥ A → sferele nu se intersectează.' },
      { id: 'd', text: 'Toți C sunt A.', answer: 'A',
        explanation: 'C ⊂ A → orice C este A.' },
      { id: 'e', text: 'Toți D sunt B.', answer: 'A',
        explanation: 'D ⊂ B → orice D este B.' },
      { id: 'f', text: 'Niciun C nu este D.', answer: 'A',
        explanation: 'C în zona exclusivă A, D în zona exclusivă B → C ⊥ D.' },
    ],
  },

  // ─── Exercițiul 5 — Subordonare triplă + încrucișare ─────────────────
  'euler-subordonare-tripla': {
    id: 'euler-subordonare-tripla',
    title: 'Exercițiul 5 — Subordonare triplă și încrucișare',
    conditions: [
      { terms: ['A', 'B'], relation: 'subordonare',   text: 'Termenul A este specie a termenului B (A ⊂ B)' },
      { terms: ['C', 'A'], relation: 'subordonare',   text: 'Termenul C este specie a termenului A (C ⊂ A)' },
      { terms: ['D', 'B'], relation: 'incrucisare',   text: 'Termenul D se încrucișează cu B' },
      { terms: ['D', 'A'], relation: 'contrarietate', text: 'Termenul D se află în contrarietate cu A' },
    ],
    impliedRelations: [
      'C ⊂ A și A ⊂ B → C ⊂ B (prin tranzitivitate)',
      'D ⊥ A și C ⊂ A → D ⊥ C (dacă D nu atinge A, nu atinge nici subspecia C)',
      'D ∩ B dar D ⊥ A → D ocupă zona din B din afara lui A',
    ],
    terms: [
      { id: 'A', label: 'Termenul A', color: c('A'), r: 50 },
      { id: 'B', label: 'Termenul B', color: c('B'), r: 85 },
      { id: 'C', label: 'Termenul C', color: c('C'), r: 25 },
      { id: 'D', label: 'Termenul D', color: c('D'), r: 42 },
    ],
    rules: [
      { a: 'A', b: 'B', relation: 'subordonare' },
      { a: 'C', b: 'A', relation: 'subordonare' },
      { a: 'D', b: 'B', relation: 'incrucisare' },
      { a: 'D', b: 'A', relation: 'contrarietate' },
    ],
    propositions: [
      { id: 'a', text: 'Toți A sunt B.', answer: 'A',
        explanation: 'A ⊂ B prin definiție.' },
      { id: 'b', text: 'Toți C sunt B.', answer: 'A',
        explanation: 'C ⊂ A și A ⊂ B → prin tranzitivitate C ⊂ B.' },
      { id: 'c', text: 'Unii D sunt B.', answer: 'A',
        explanation: 'D ∩ B → există elemente comune.' },
      { id: 'd', text: 'Niciun D nu este A.', answer: 'A',
        explanation: 'D ⊥ A → nu există elemente comune.' },
      { id: 'e', text: 'Niciun D nu este C.', answer: 'A',
        explanation: 'C ⊂ A și D ⊥ A → D ⊥ C; nu există elemente comune lui D și C.' },
      { id: 'f', text: 'Unii B nu sunt A.', answer: 'A',
        explanation: 'A ⊂ B dar B mai mare — există elemente B care nu sunt A (de ex. zona D ∩ B).' },
    ],
  },

  // ─── Exercițiul 6 — Gen, identitate interioară, încrucișare ──────────
  'euler-gen-identitate': {
    id: 'euler-gen-identitate',
    title: 'Exercițiul 6 — Gen, identitate interioară, încrucișare',
    conditions: [
      { terms: ['B', 'A'], relation: 'subordonare',   text: 'Termenul B este specie a termenului A (B ⊂ A)' },
      { terms: ['C', 'B'], relation: 'identitate',    text: 'Termenii C și B se află în raport de identitate (C = B)' },
      { terms: ['D', 'A'], relation: 'incrucisare',   text: 'Termenul D se încrucișează cu A' },
      { terms: ['D', 'B'], relation: 'contrarietate', text: 'Termenul D se află în contrarietate cu B' },
    ],
    impliedRelations: [
      'C = B și B ⊂ A → C ⊂ A (C este și ea specie a lui A)',
      'C = B și D ⊥ B → D ⊥ C (ceea ce nu atinge B nu atinge nici identica C)',
      'D ∩ A dar D ⊥ B → D se află în zona din A neacoperită de B (și C)',
    ],
    terms: [
      { id: 'A', label: 'Termenul A', color: c('A'), r: 80 },
      { id: 'B', label: 'Termenul B', color: c('B'), r: 38 },
      { id: 'C', label: 'Termenul C', color: c('C'), r: 38 },
      { id: 'D', label: 'Termenul D', color: c('D'), r: 40 },
    ],
    rules: [
      { a: 'B', b: 'A', relation: 'subordonare' },
      { a: 'C', b: 'B', relation: 'identitate' },
      { a: 'D', b: 'A', relation: 'incrucisare' },
      { a: 'D', b: 'B', relation: 'contrarietate' },
    ],
    propositions: [
      { id: 'a', text: 'Toți B sunt A.', answer: 'A',
        explanation: 'B ⊂ A → orice element al lui B este și A.' },
      { id: 'b', text: 'Toți C sunt A.', answer: 'A',
        explanation: 'C = B și B ⊂ A → C ⊂ A; orice C este și A.' },
      { id: 'c', text: 'Unii D sunt A.', answer: 'A',
        explanation: 'D ∩ A → există elemente comune.' },
      { id: 'd', text: 'Niciun D nu este B.', answer: 'A',
        explanation: 'D ⊥ B → nu există elemente comune.' },
      { id: 'e', text: 'Niciun D nu este C.', answer: 'A',
        explanation: 'C = B și D ⊥ B → D ⊥ C.' },
      { id: 'f', text: 'Unii A nu sunt B.', answer: 'A',
        explanation: 'B ⊂ A dar A mai mare → există elemente A care nu sunt B.' },
    ],
  },

  // ─── Exercițiul 7 — Cinci termeni cu încrucișare centrală ────────────
  'euler-cinci-incrucisare': {
    id: 'euler-cinci-incrucisare',
    title: 'Exercițiul 7 — Cinci termeni cu încrucișare centrală',
    conditions: [
      { terms: ['A', 'B'], relation: 'incrucisare',   text: 'Termenii A și B se încrucișează' },
      { terms: ['C', 'A'], relation: 'subordonare',   text: 'Termenul C este specie a lui A' },
      { terms: ['C', 'B'], relation: 'contrarietate', text: 'Termenul C se află în contrarietate cu B' },
      { terms: ['D', 'B'], relation: 'subordonare',   text: 'Termenul D este specie a lui B' },
      { terms: ['D', 'A'], relation: 'contrarietate', text: 'Termenul D se află în contrarietate cu A' },
      { terms: ['E', 'A'], relation: 'incrucisare',   text: 'Termenul E se încrucișează cu A' },
      { terms: ['E', 'B'], relation: 'incrucisare',   text: 'Termenul E se încrucișează cu B' },
      { terms: ['E', 'C'], relation: 'contrarietate', text: 'Termenul E se află în contrarietate cu C' },
      { terms: ['E', 'D'], relation: 'contrarietate', text: 'Termenul E se află în contrarietate cu D' },
    ],
    impliedRelations: [
      'C ⊂ A și C ⊥ B → C exclusiv în zona A (în afara lui B)',
      'D ⊂ B și D ⊥ A → D exclusiv în zona B (în afara lui A)',
      'E ∩ A și E ∩ B → E se află în zona de suprapunere A ∩ B',
      'E ⊥ C și E ⊥ D → E este în A ∩ B, fără C și fără D',
      'C ⊥ B și D ⊂ B → C ⊥ D',
    ],
    terms: [
      { id: 'A', label: 'Termenul A', color: c('A'), r: 65 },
      { id: 'B', label: 'Termenul B', color: c('B'), r: 65 },
      { id: 'C', label: 'Termenul C', color: c('C'), r: 27 },
      { id: 'D', label: 'Termenul D', color: c('D'), r: 27 },
      { id: 'E', label: 'Termenul E', color: c('E'), r: 32 },
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
      { id: 'a', text: 'Unii A sunt B.', answer: 'A',
        explanation: 'A ∩ B → există elemente comune.' },
      { id: 'b', text: 'Niciun C nu este B.', answer: 'A',
        explanation: 'C ⊥ B → nu există elemente comune.' },
      { id: 'c', text: 'Niciun D nu este A.', answer: 'A',
        explanation: 'D ⊥ A → nu există elemente comune.' },
      { id: 'd', text: 'Unii E sunt A.', answer: 'A',
        explanation: 'E ∩ A → există elemente comune.' },
      { id: 'e', text: 'Unii E sunt B.', answer: 'A',
        explanation: 'E ∩ B → există elemente comune.' },
      { id: 'f', text: 'Niciun E nu este C.', answer: 'A',
        explanation: 'E ⊥ C → nu există elemente comune.' },
      { id: 'g', text: 'Niciun C nu este D.', answer: 'A',
        explanation: 'C în zona exclusivă A, D în zona exclusivă B → C ⊥ D.' },
      { id: 'h', text: 'Toți C sunt A.', answer: 'A',
        explanation: 'C ⊂ A → orice C este A.' },
    ],
  },

  // ─── Exercițiul 8 — Lanț de subordonare + contrarietate externă ──────
  'euler-cinci-subordonare': {
    id: 'euler-cinci-subordonare',
    title: 'Exercițiul 8 — Lanț de subordonare și contrarietate externă',
    conditions: [
      { terms: ['A', 'B'], relation: 'subordonare',   text: 'Termenul A este specie a termenului B (A ⊂ B)' },
      { terms: ['C', 'A'], relation: 'subordonare',   text: 'Termenul C este specie a termenului A (C ⊂ A)' },
      { terms: ['D', 'B'], relation: 'incrucisare',   text: 'Termenul D se încrucișează cu B' },
      { terms: ['D', 'A'], relation: 'contrarietate', text: 'Termenul D se află în contrarietate cu A' },
      { terms: ['E', 'B'], relation: 'contrarietate', text: 'Termenul E se află în contrarietate cu B' },
    ],
    impliedRelations: [
      'C ⊂ A și A ⊂ B → C ⊂ B (prin tranzitivitate)',
      'D ⊥ A și C ⊂ A → D ⊥ C',
      'E ⊥ B și A ⊂ B → E ⊥ A (ceea ce nu intersectează genul nu intersectează specia)',
      'E ⊥ B și C ⊂ B → E ⊥ C',
    ],
    terms: [
      { id: 'A', label: 'Termenul A', color: c('A'), r: 50 },
      { id: 'B', label: 'Termenul B', color: c('B'), r: 85 },
      { id: 'C', label: 'Termenul C', color: c('C'), r: 25 },
      { id: 'D', label: 'Termenul D', color: c('D'), r: 42 },
      { id: 'E', label: 'Termenul E', color: c('E'), r: 42 },
    ],
    rules: [
      { a: 'A', b: 'B', relation: 'subordonare' },
      { a: 'C', b: 'A', relation: 'subordonare' },
      { a: 'D', b: 'B', relation: 'incrucisare' },
      { a: 'D', b: 'A', relation: 'contrarietate' },
      { a: 'E', b: 'B', relation: 'contrarietate' },
    ],
    propositions: [
      { id: 'a', text: 'Toți A sunt B.', answer: 'A',
        explanation: 'A ⊂ B → orice element A este și B.' },
      { id: 'b', text: 'Toți C sunt B.', answer: 'A',
        explanation: 'C ⊂ A și A ⊂ B → prin tranzitivitate C ⊂ B.' },
      { id: 'c', text: 'Unii D sunt B.', answer: 'A',
        explanation: 'D ∩ B → există elemente comune.' },
      { id: 'd', text: 'Niciun E nu este B.', answer: 'A',
        explanation: 'E ⊥ B → nu există elemente comune.' },
      { id: 'e', text: 'Niciun E nu este A.', answer: 'A',
        explanation: 'E ⊥ B și A ⊂ B → E ⊥ A.' },
      { id: 'f', text: 'Niciun E nu este C.', answer: 'A',
        explanation: 'E ⊥ B și C ⊂ B → E ⊥ C.' },
      { id: 'g', text: 'Unii B nu sunt A.', answer: 'A',
        explanation: 'A ⊂ B dar B mai mare → există elemente B care nu sunt A.' },
      { id: 'h', text: 'Niciun D nu este A.', answer: 'A',
        explanation: 'D ⊥ A → nu există elemente comune.' },
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
