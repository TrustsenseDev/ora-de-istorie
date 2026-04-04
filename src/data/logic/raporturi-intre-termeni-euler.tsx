import EulerDiagram from '../../components/logic/EulerDiagram';
import RelationCard from '../../components/logic/RelationCard';
import PropositionEvaluator, { Proposition } from '../../components/logic/PropositionEvaluator';

/* ─── Term definitions from the exercise ─────────────────────────────────────
   A și B — raport de identitate (A = B, cerc complet suprapus)
   C — specie a lui A (C ⊂ A)
   D — specie a lui B, în încrucișare cu C (D ∩ C ≠ ∅, D ⊄ C)
   E — în încrucișare cu A, contrarietate cu C și D
   ─────────────────────────────────────────────────────────────────────────── */

export const EULER_TERMS = [
  { id: 'A', label: 'A (= B)',   cx: 200, cy: 130, rx: 130, ry: 90,  color: '#c0392b' },
  { id: 'B', label: 'B (= A)',   cx: 200, cy: 130, rx: 130, ry: 90,  color: '#3498db' },
  { id: 'C', label: 'C ⊂ A',    cx: 155, cy: 140, rx:  60, ry: 42,  color: '#27ae60' },
  { id: 'D', label: 'D ⊂ B, ∩C', cx: 210, cy: 140, rx:  55, ry: 40,  color: '#9b59b6' },
  { id: 'E', label: 'E ∩A, ≠C,D', cx: 295, cy: 118, rx:  70, ry: 52,  color: '#e67e22' },
];

export const PROPOSITIONS: Proposition[] = [
  {
    id: 'a',
    text: 'Unii E nu sunt C.',
    answer: 'A',
    explanation: 'E și C sunt în raport de încrucișare (prin tranzitivitate față de A). Există elemente din E care sunt în A dar nu sunt în C — deci "Unii E nu sunt C" este adevărată.',
  },
  {
    id: 'b',
    text: 'Toți C sunt B.',
    answer: 'A',
    explanation: 'C este specie a lui A, iar A = B (raport de identitate). Prin urmare, tot ce este C este și A, deci și B. "Toți C sunt B" este adevărată.',
  },
  {
    id: 'c',
    text: 'Niciun B nu este C.',
    answer: 'F',
    explanation: 'B = A, iar C ⊂ A, deci C ⊂ B. Există elemente B care sunt și C. "Niciun B nu este C" este falsă.',
  },
  {
    id: 'd',
    text: 'Unii D sunt E.',
    answer: 'F',
    explanation: 'D și E sunt în raport de contrarietate — mulțimile lor nu se intersectează. Nu există niciun element care să fie simultan D și E. "Unii D sunt E" este falsă.',
  },
  {
    id: 'e',
    text: 'Niciun A nu este D.',
    answer: 'F',
    explanation: 'D este specie a lui B, iar B = A, deci D ⊆ A. Există elemente din A care sunt D. "Niciun A nu este D" este falsă.',
  },
  {
    id: 'f',
    text: 'Unii A sunt E.',
    answer: 'A',
    explanation: 'E este în raport de încrucișare cu A — există elemente comune între A și E. "Unii A sunt E" este adevărată.',
  },
  {
    id: 'g',
    text: 'Toți D sunt B.',
    answer: 'A',
    explanation: 'D este specie a lui B (D ⊆ B). Prin definiție, orice element D este și B. "Toți D sunt B" este adevărată.',
  },
  {
    id: 'h',
    text: 'Unii C nu sunt A.',
    answer: 'F',
    explanation: 'C este specie a lui A (C ⊂ A), deci orice element C este și A. Nu există C în afara lui A. "Unii C nu sunt A" este falsă.',
  },
];

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
  eulerTerms: EULER_TERMS,
  propositions: PROPOSITIONS,
  relationCards: RELATION_CARDS,
};
