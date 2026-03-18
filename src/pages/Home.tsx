import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronRight, Clock, HelpCircle, Lock, Search, CheckCircle2, Trophy } from 'lucide-react';
import { lessons } from '../data/lessons';
import { useProgress } from '../hooks/useProgress';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const { isCompleted, getScore, completedCount } = useProgress();

  const totalAvailable = lessons.filter(l => l.available).length;
  const progressPercent = totalAvailable > 0 ? Math.round((completedCount / totalAvailable) * 100) : 0;

  const allKeywords = Array.from(new Set([
    ...lessons.map(l => l.title),
    ...lessons.flatMap(l => l.topics)
  ]));

  const suggestions = searchQuery.trim() === ''
    ? []
    : allKeywords
        .filter(k => k.toLowerCase().includes(searchQuery.toLowerCase()) && k.toLowerCase() !== searchQuery.toLowerCase())
        .slice(0, 5);

  const filteredLessons = lessons.filter(lesson => {
    const query = searchQuery.toLowerCase();
    return (
      lesson.title.toLowerCase().includes(query) ||
      lesson.description.toLowerCase().includes(query) ||
      lesson.topics.some(topic => topic.toLowerCase().includes(query))
    );
  });

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsSearchFocused(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-3xl mx-auto mb-8 sm:mb-10"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs sm:text-sm font-medium mb-6 sm:mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
          </span>
          Platformă Modernă de Învățare
        </div>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold text-white mb-4 sm:mb-6 tracking-tight leading-tight">
          Istoria, <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">reimaginată.</span>
        </h1>
        <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto px-2">
          Lecții interactive, cronologii vizuale și teste de verificare.
          Tot ce ai nevoie pentru a lua o notă mare la Bacalaureat.
        </p>
      </motion.div>

      {/* Progress Overview */}
      {completedCount > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="max-w-2xl mx-auto mb-8 sm:mb-10"
        >
          <div className="bg-gradient-to-r from-amber-500/10 to-emerald-500/10 border border-amber-500/20 rounded-2xl p-4 sm:p-5 flex items-center gap-4 sm:gap-5">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-amber-500/20 flex items-center justify-center flex-shrink-0">
              <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs sm:text-sm font-semibold text-white">
                  {completedCount} din {totalAvailable} lecții completate
                </span>
                <span className="text-xs sm:text-sm font-bold text-amber-400">{progressPercent}%</span>
              </div>
              <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-amber-500 to-amber-400 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercent}%` }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Search */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="max-w-2xl mx-auto mb-10 sm:mb-16 relative z-50"
        ref={searchContainerRef}
      >
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 sm:pl-5 flex items-center pointer-events-none">
            <Search className="h-4 w-4 sm:h-5 sm:w-5 text-slate-400 group-focus-within:text-amber-500 transition-colors" />
          </div>
          <input
            type="text"
            className="block w-full pl-11 sm:pl-14 pr-4 sm:pr-6 py-3.5 sm:py-4 bg-white/5 border border-white/10 rounded-2xl text-white text-sm sm:text-base placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-all shadow-lg backdrop-blur-sm"
            placeholder="Caută o lecție (ex: 1848, Cuza)..."
            value={searchQuery}
            onChange={e => {
              setSearchQuery(e.target.value);
              setIsSearchFocused(true);
            }}
            onFocus={() => setIsSearchFocused(true)}
          />
        </div>

        <AnimatePresence>
          {isSearchFocused && suggestions.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 mt-2 bg-slate-800/95 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="p-2">
                {suggestions.map((suggestion, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setSearchQuery(suggestion);
                      setIsSearchFocused(false);
                    }}
                    className="w-full text-left px-4 py-3 rounded-xl text-slate-300 hover:bg-white/10 hover:text-amber-400 transition-colors flex items-center gap-3 text-sm"
                  >
                    <Search className="w-4 h-4 opacity-50 flex-shrink-0" />
                    <span className="truncate">{suggestion}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Lesson Cards Grid */}
      {filteredLessons.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredLessons.map((lesson, index) => {
            const done = isCompleted(lesson.id);
            const score = getScore(lesson.id);
            return (
              <motion.div
                key={lesson.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.07 }}
                className="h-full"
              >
                {lesson.available ? (
                  <Link
                    to={`/lesson/${lesson.id}`}
                    className={`flex flex-col h-full border rounded-2xl sm:rounded-3xl p-5 sm:p-8 transition-all group ${
                      done
                        ? 'bg-emerald-500/5 border-emerald-500/20 hover:border-emerald-500/40'
                        : 'bg-white/5 border-white/10 hover:bg-white/[0.07] hover:border-amber-500/30'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-4 sm:mb-6">
                      {done ? (
                        <span className="px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 text-xs font-semibold uppercase tracking-wider border border-emerald-500/25 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3 h-3" /> Completată
                        </span>
                      ) : (
                        <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold uppercase tracking-wider border border-emerald-500/20">
                          Disponibil
                        </span>
                      )}
                      {score !== undefined && (
                        <span className="ml-auto text-xs font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-lg border border-amber-500/20">
                          {score}%
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg sm:text-2xl font-display font-bold text-white mb-3 sm:mb-4 group-hover:text-amber-400 transition-colors leading-snug">
                      {lesson.title}
                    </h3>
                    <p className="text-sm text-slate-400 mb-5 sm:mb-8 line-clamp-3 leading-relaxed">
                      {lesson.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5 sm:mb-8">
                      {lesson.topics.slice(0, 3).map(topic => (
                        <span key={topic} className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-300 text-xs">
                          {topic}
                        </span>
                      ))}
                      {lesson.topics.length > 3 && (
                        <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-400 text-xs">
                          +{lesson.topics.length - 3}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center justify-between mt-auto pt-4 sm:pt-6 border-t border-white/5">
                      <div className="flex items-center gap-3 sm:gap-4 text-xs text-slate-500 font-medium">
                        <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {lesson.duration}</span>
                        <span className="flex items-center gap-1"><HelpCircle className="w-3.5 h-3.5" /> {lesson.questionsCount} Qs</span>
                      </div>
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500 transition-colors flex-shrink-0">
                        <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500 group-hover:text-slate-950 transition-colors" />
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div className="flex flex-col h-full bg-slate-900/40 border border-white/5 rounded-2xl sm:rounded-3xl p-5 sm:p-8 opacity-60 cursor-not-allowed">
                    <div className="flex items-center gap-2 mb-4 sm:mb-6">
                      <span className="px-2.5 py-1 rounded-full bg-slate-800 text-slate-400 text-xs font-semibold uppercase tracking-wider border border-slate-700">
                        În curând
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-2xl font-display font-bold text-white mb-3 sm:mb-4 leading-snug">
                      {lesson.title}
                    </h3>
                    <p className="text-sm text-slate-400 mb-5 sm:mb-8 line-clamp-3 leading-relaxed">
                      {lesson.description}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-4 sm:pt-6 border-t border-white/5">
                      <span className="text-xs text-slate-500 font-medium flex items-center gap-1.5">
                        <Lock className="w-4 h-4" /> În pregătire
                      </span>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 mb-4">
            <Search className="h-8 w-8 text-slate-500" />
          </div>
          <h3 className="text-xl font-display font-semibold text-white mb-2">Nu am găsit nicio lecție</h3>
          <p className="text-slate-400">Încearcă alte cuvinte cheie.</p>
        </motion.div>
      )}
    </div>
  );
}
