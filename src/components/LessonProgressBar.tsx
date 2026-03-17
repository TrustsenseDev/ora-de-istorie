import { motion } from 'motion/react';
import { useScrollProgress } from '../hooks/useScrollProgress';
import { CheckCircle2 } from 'lucide-react';

interface Props {
  lessonTitle: string;
  isCompleted: boolean;
}

export default function LessonProgressBar({ lessonTitle, isCompleted }: Props) {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Progress bar */}
      <div className="h-1 bg-slate-800/80 backdrop-blur-sm">
        <motion.div
          className="h-full bg-gradient-to-r from-amber-500 to-amber-400"
          style={{ width: `${progress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Mini info bar shown after scrolling a bit */}
      {progress > 5 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-slate-950/90 backdrop-blur-md border-b border-white/5 px-4 py-2 flex items-center justify-between max-w-5xl mx-auto"
        >
          <span className="text-sm text-slate-400 truncate max-w-xs">{lessonTitle}</span>
          <div className="flex items-center gap-3">
            {isCompleted && (
              <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" /> Completată
              </span>
            )}
            <span className="text-xs font-bold text-amber-400">{Math.round(progress)}%</span>
          </div>
        </motion.div>
      )}
    </div>
  );
}
