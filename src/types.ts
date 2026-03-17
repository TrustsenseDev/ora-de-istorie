import { ReactNode } from 'react';

export type SectionType = 'text' | 'timeline' | 'cards';

export interface LessonData {
  id: string;
  sections: {
    id: string;
    type: SectionType;
    title: string;
    content?: ReactNode;
    items?: any[];
  }[];
  quiz: {
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
  }[];
}
