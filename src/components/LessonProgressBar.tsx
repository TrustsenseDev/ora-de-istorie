import { motion, AnimatePresence } from 'motion/react';
import { useScrollProgress } from '../hooks/useScrollProgress';
import { CheckCircle2, BookOpen } from 'lucide-react';

interface Props {
  lessonTitle: string;
  isCompleted: boolean;
}

export default function LessonProgressBar({ lessonTitle, isCompleted }: Props) {
  const progress = useScrollProgress();

  return (
    <>
      {/* Top progress line - always visible, sleek and at the very top */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-1 pointer-events-none">
        <motion.div
          className="h-full bg-gradient-to-r from-amber-600 via-amber-400 to-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.4)]"
          style={{ width: `${progress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Floating Info Pill - appears after scrolling, elegant glassmorphism */}
      <AnimatePresence>
        {progress > 5 && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-4 py-2 bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-full shadow-2xl shadow-black/50 overflow-hidden min-w-[200px] max-w-[90vw]"
          >
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-transparent pointer-events-none" />
            
            <div className="p-1.5 bg-amber-500/10 rounded-full border border-amber-500/20">
              <BookOpen className="w-3.5 h-3.5 text-amber-400" />
            </div>

            <div className="flex flex-col min-w-0">
              <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold leading-none mb-0.5">
                Progres lecție
              </span>
              <span className="text-xs text-slate-200 font-medium truncate">
                {lessonTitle}
              </span>
            </div>

            <div className="flex items-center gap-2 ml-auto pl-3 border-l border-white/5">
              {isCompleted && (
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              )}
              <span className="text-sm font-bold text-amber-400 tabular-nums">
                {Math.round(progress)}%
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
