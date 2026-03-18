import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, BookOpen, Clock, CheckCircle2, GraduationCap } from 'lucide-react';
import { lessons } from '../data/lessons';
import { lessonContent } from '../data/lessonContent';
import Timeline from '../components/lesson/Timeline';
import ConceptCards from '../components/lesson/ConceptCards';
import Quiz from '../components/lesson/Quiz';
import LessonProgressBar from '../components/LessonProgressBar';
import { useProgress } from '../hooks/useProgress';

export default function Lesson() {
  const { id } = useParams();
  const lessonMeta = lessons.find(l => l.id === id);
  const content = id ? lessonContent[id] : null;
  const { isCompleted, markCompleted, getScore } = useProgress();

  if (!lessonMeta || !content) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">Lecția nu a fost găsită sau este în pregătire</h2>
        <Link to="/" className="text-amber-400 hover:underline flex items-center gap-2 text-sm">
          <ArrowLeft className="w-4 h-4" /> Înapoi la cursuri
        </Link>
      </div>
    );
  }

  const completed = id ? isCompleted(id) : false;
  const score = id ? getScore(id) : undefined;

  return (
    <div className="pb-24">
      <LessonProgressBar lessonTitle={lessonMeta.title} isCompleted={completed} />

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12"
      >
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white mb-6 sm:mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Înapoi la cursuri
        </Link>

        <div className="bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 mb-12 sm:mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-amber-500/10 blur-3xl rounded-full pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64 bg-emerald-500/10 blur-3xl rounded-full pointer-events-none"></div>

          <div className="relative z-10">
            <div className="flex flex-wrap items-center gap-3 mb-5 sm:mb-6">
              <div className="p-2.5 sm:p-3 bg-amber-500/10 rounded-xl border border-amber-500/20">
                <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />
              </div>
              <span className="text-amber-400 font-medium tracking-wide uppercase text-xs sm:text-sm">
                Lecție Interactivă
              </span>
              {completed && (
                <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                  <CheckCircle2 className="w-3 h-3" />
                  Completată {score !== undefined ? `· ${score}%` : ''}
                </span>
              )}
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold text-white mb-4 sm:mb-6 leading-tight">
              {lessonMeta.title}
            </h1>
            <p className="text-sm sm:text-lg text-slate-300 leading-relaxed mb-6 sm:mb-8 max-w-3xl">
              {lessonMeta.description}
            </p>

            <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2 bg-slate-900/50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/5">
                <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500" />
                <span className="text-xs sm:text-sm">{lessonMeta.duration}</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900/50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/5">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500" />
                <span className="text-xs sm:text-sm">{lessonMeta.questionsCount} întrebări</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Dynamic Content Sections */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        {content.sections.map((section, idx) => (
          <motion.section
            key={section.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl sm:text-3xl font-display font-bold text-white mb-6 sm:mb-8 flex items-center gap-3 sm:gap-4">
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs sm:text-sm font-bold border border-amber-500/30 flex-shrink-0">
                {idx + 1}
              </span>
              <span className="leading-snug">{section.title}</span>
            </h2>

            {section.type === 'text' && section.content}
            {section.type === 'timeline' && section.items && <Timeline items={section.items} />}
            {section.type === 'cards' && section.items && <ConceptCards items={section.items} />}
          </motion.section>
        ))}

        {/* Quiz Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="pt-10 sm:pt-12 border-t border-white/10"
        >
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-4 sm:mb-6">
              <GraduationCap className="w-7 h-7 sm:w-8 sm:h-8" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-3 sm:mb-4">Verifică-ți cunoștințele</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base px-2">
              Rezolvă acest scurt test pentru a fixa informațiile din lecție. Vei primi explicații detaliate pentru fiecare răspuns.
            </p>
          </div>

          <Quiz
            questions={content.quiz}
            onComplete={score => id && markCompleted(id, score)}
          />
        </motion.section>
      </div>
    </div>
  );
}
