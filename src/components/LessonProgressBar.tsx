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
    // top-16 = exact înălțimea navbar-ului (h-16), z-40 = sub navbar (z-50)
    <div className="fixed top-16 left-0 right-0 z-40">
      {/* Thin amber progress line */}
      <div className="h-0.5 bg-slate-800">
        <motion.div
          className="h-full bg-gradient-to-r from-amber-500 to-amber-400"
          style={{ width: `${progress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Mini info bar — apare după ce scrollezi puțin */}
      {progress > 5 && (
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-slate-950/95 backdrop-blur-md border-b border-white/5 px-4 py-2 flex items-center justify-between"
        >
          <span className="text-sm text-slate-400 truncate max-w-xs md:max-w-lg">{lessonTitle}</span>
          <div className="flex items-center gap-3 flex-shrink-0">
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
