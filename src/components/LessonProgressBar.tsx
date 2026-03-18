import { motion } from 'motion/react';
import { useScrollProgress } from '../hooks/useScrollProgress';

interface Props {
  lessonTitle: string;
  isCompleted: boolean;
}

export default function LessonProgressBar({ lessonTitle, isCompleted }: Props) {
  const progress = useScrollProgress();

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100 }}>
      <div style={{ height: 2, background: 'var(--bg-muted)' }}>
        <motion.div
          style={{ height: '100%', background: 'var(--accent)', right: 'auto' }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>
    </div>
  );
}
