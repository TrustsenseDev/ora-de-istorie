import { useState, useEffect } from 'react';

export interface LessonProgress {
  completed: boolean;
  quizScore?: number; // 0-100
  completedAt?: string;
}

export interface ProgressStore {
  [lessonId: string]: LessonProgress;
}

const STORAGE_KEY = 'ora-de-istorie-progress';

export function useProgress() {
  const [progress, setProgress] = useState<ProgressStore>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const markCompleted = (lessonId: string, quizScore?: number) => {
    setProgress(prev => ({
      ...prev,
      [lessonId]: {
        completed: true,
        quizScore,
        completedAt: new Date().toISOString(),
      },
    }));
  };

  const getScore = (lessonId: string) => progress[lessonId]?.quizScore;
  const isCompleted = (lessonId: string) => !!progress[lessonId]?.completed;
  const completedCount = Object.values(progress).filter(p => p.completed).length;

  return { progress, markCompleted, getScore, isCompleted, completedCount };
}
