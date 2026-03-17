import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, XCircle, Trophy, ArrowRight, RotateCcw } from 'lucide-react';

interface QuizProps {
  questions: {
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
  }[];
}

export default function Quiz({ questions }: QuizProps) {
  const [currentQ, setCurrentQ] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleSelect = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);
    
    if (index === questions[currentQ].correctAnswer) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(c => c + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQ(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setShowResults(false);
  };

  if (showResults) {
    const percentage = Math.round((score / questions.length) * 100);
    const isGood = percentage >= 60;

    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-slate-900 border border-white/10 rounded-3xl p-8 md:p-12 text-center max-w-2xl mx-auto"
      >
        <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 ${isGood ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'}`}>
          <Trophy className="w-10 h-10" />
        </div>
        <h3 className="text-3xl font-display font-bold text-white mb-2">Test Finalizat!</h3>
        <p className="text-slate-400 mb-8">Ai răspuns corect la {score} din {questions.length} întrebări.</p>
        
        <div className="w-full bg-slate-800 rounded-full h-4 mb-8 overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
            className={`h-full rounded-full ${isGood ? 'bg-emerald-500' : 'bg-amber-500'}`}
          ></motion.div>
        </div>

        <button 
          onClick={resetQuiz}
          className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl font-medium transition-colors border border-white/10"
        >
          <RotateCcw className="w-5 h-5" />
          Reîncepe Testul
        </button>
      </motion.div>
    );
  }

  const q = questions[currentQ];

  return (
    <div className="max-w-3xl mx-auto bg-slate-900/50 border border-white/10 rounded-3xl p-6 md:p-10">
      <div className="flex items-center justify-between mb-8">
        <span className="text-amber-400 font-medium text-sm uppercase tracking-wider">
          Întrebarea {currentQ + 1} din {questions.length}
        </span>
        <span className="text-slate-500 text-sm font-medium">Scor: {score}</span>
      </div>

      <h3 className="text-2xl font-medium text-white mb-8 leading-snug">
        {q.question}
      </h3>

      <div className="space-y-3 mb-8">
        {q.options.map((opt, idx) => {
          let stateClass = "bg-white/5 border-white/10 hover:bg-white/10 text-slate-300";
          let Icon = null;

          if (isAnswered) {
            if (idx === q.correctAnswer) {
              stateClass = "bg-emerald-500/20 border-emerald-500/50 text-emerald-300";
              Icon = CheckCircle2;
            } else if (idx === selectedOption) {
              stateClass = "bg-red-500/20 border-red-500/50 text-red-300";
              Icon = XCircle;
            } else {
              stateClass = "bg-white/5 border-white/10 text-slate-500 opacity-50";
            }
          }

          return (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              disabled={isAnswered}
              className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between ${stateClass}`}
            >
              <span className="font-medium">{opt}</span>
              {Icon && <Icon className="w-5 h-5" />}
            </button>
          );
        })}
      </div>

      <AnimatePresence>
        {isAnswered && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="p-5 bg-amber-500/10 border border-amber-500/20 rounded-2xl mb-8">
              <h4 className="text-amber-400 font-bold mb-2 text-sm uppercase tracking-wide">Explicație</h4>
              <p className="text-slate-300 text-sm leading-relaxed">{q.explanation}</p>
            </div>
            
            <button
              onClick={handleNext}
              className="w-full py-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-2xl flex items-center justify-center gap-2 transition-colors"
            >
              {currentQ < questions.length - 1 ? 'Următoarea Întrebare' : 'Vezi Rezultatele'}
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
