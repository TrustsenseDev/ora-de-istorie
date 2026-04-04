export interface LogicExercise {
  id: string;
  title: string;
  category: string;
  difficulty: 'ușor' | 'mediu' | 'greu';
  description: string;
  duration: string;
  available: boolean;
}

export const logicExercises: LogicExercise[] = [
  {
    id: 'raporturi-intre-termeni-euler',
    title: 'Raporturi între termeni și diagrame Euler',
    category: 'Diagrame Euler',
    difficulty: 'mediu',
    description: 'Identificarea raporturilor logice (identitate, specie, încrucișare, contrarietate) între termeni și reprezentarea lor prin diagrame Euler. Evaluarea adevărului/falsității propozițiilor derivate.',
    duration: '~30 min',
    available: true,
  },
  {
    id: 'propozitii-categorice',
    title: 'Propoziții categorice: structură și clasificare',
    category: 'Propoziții categorice',
    difficulty: 'ușor',
    description: 'Subiect, predicat, copulă și cuantor. Clasificarea propozițiilor după calitate (afirmativă/negativă) și cantitate (universală/particulară).',
    duration: '~25 min',
    available: false,
  },
  {
    id: 'silgisme-valide',
    title: 'Silogisme: validitate și figuri',
    category: 'Silogisme',
    difficulty: 'greu',
    description: 'Structura silogismului, figurile silogistice și modurile valide. Detectarea erorilor în raționamentele silogistice.',
    duration: '~40 min',
    available: false,
  },
  {
    id: 'legi-logice',
    title: 'Legile logice fundamentale',
    category: 'Legi logice',
    difficulty: 'ușor',
    description: 'Principiul identității, non-contradicției, terțului exclus și rațiunii suficiente. Aplicații practice.',
    duration: '~20 min',
    available: false,
  },
];
