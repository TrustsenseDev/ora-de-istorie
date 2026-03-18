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
    <div className="fixed top-16 left-0 right-0 z-40">
      {/* Thin amber progress line */}
      <div className="h-0.5 bg-slate-800">
        <motion.div
          className="h-full bg-gradient-to-r from-amber-500 to-amber-400"
          style={{ width: `${progress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Mini info bar — appears after scrolling a bit */}
      {progress > 5 && (
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-slate-950 border-b border-white/5 px-3 sm:px-4 py-1.5 sm:py-2 flex items-center justify-between gap-3"
        >
          <span className="text-xs sm:text-sm text-slate-400 truncate">{lessonTitle}</span>
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            {isCompleted && (
              <span className="hidden xs:flex items-center gap-1 text-xs text-emerald-400 font-medium">
                <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> Completată
              </span>
            )}
            <span className="text-xs font-bold text-amber-400">{Math.round(progress)}%</span>
          </div>
        </motion.div>
      )}
    </div>
  );
}
