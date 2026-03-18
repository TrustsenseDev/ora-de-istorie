import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, XCircle, RefreshCw, ArrowRight, BrainCircuit, AlertCircle } from 'lucide-react';
import { lessonContent } from '../data/lessonContent';

interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  lessonId: string;
}

export default function GlobalQuiz() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    startNewTest();
  }, []);

  const startNewTest = () => {
    const allQuestions: Question[] = [];
    Object.values(lessonContent).forEach(lesson => {
      if (lesson.quiz) {
        lesson.quiz.forEach(q => {
          allQuestions.push({ ...q, lessonId: lesson.id });
        });
      }
    });
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
    setQuestions(shuffled);
    setCurrentIndex(0);
    setAnswers({});
    setIsFinished(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectOption = (optionIndex: number) => {
    if (answers[currentIndex] !== undefined) return;
    setAnswers(prev => ({ ...prev, [currentIndex]: optionIndex }));
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setIsFinished(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (questions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-400 text-sm">
        Se încarcă testul...
      </div>
    );
  }

  if (isFinished) {
    const score = questions.reduce((acc, q, i) => acc + (answers[i] === q.correctAnswer ? 1 : 0), 0);
    const total = questions.length;
    const percentage = Math.round((score / total) * 100);

    return (
      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 text-center mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-slate-800 mb-4 sm:mb-6">
            {percentage >= 80 ? (
              <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-400" />
            ) : percentage >= 50 ? (
              <BrainCircuit className="w-8 h-8 sm:w-10 sm:h-10 text-amber-400" />
            ) : (
              <AlertCircle className="w-8 h-8 sm:w-10 sm:h-10 text-red-400" />
            )}
          </div>
          <h1 className="text-2xl sm:text-3xl font-display font-bold text-white mb-3 sm:mb-4">
            Rezultatul Testului
          </h1>
          <p className="text-base sm:text-xl text-slate-300 mb-6 sm:mb-8">
            Ai răspuns corect la <strong className="text-amber-400">{score}</strong> din <strong className="text-white">{total}</strong> întrebări ({percentage}%).
          </p>

          <button
            onClick={startNewTest}
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold rounded-xl transition-colors text-sm sm:text-base"
          >
            <RefreshCw className="w-4 h-4 sm:w-5 sm:h-5" />
            Reia testul
          </button>
        </motion.div>

        <div className="space-y-6 sm:space-y-8">
          <h2 className="text-xl sm:text-2xl font-display font-bold text-white mb-4 sm:mb-6">Analiza Răspunsurilor</h2>
          {questions.map((q, index) => {
            const userAnswer = answers[index];
            const isCorrect = userAnswer === q.correctAnswer;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.04 }}
                className={`p-4 sm:p-6 rounded-2xl border ${
                  isCorrect ? 'bg-emerald-950/20 border-emerald-500/20' : 'bg-red-950/20 border-red-500/20'
                }`}
              >
                <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="mt-0.5 flex-shrink-0">
                    {isCorrect ? (
                      <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-500" />
                    ) : (
                      <XCircle className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />
                    )}
                  </div>
                  <div>
                    <span className="text-xs font-medium text-slate-400 mb-0.5 block">Întrebarea {index + 1}</span>
                    <h3 className="text-sm sm:text-lg font-medium text-white leading-snug">{q.question}</h3>
                  </div>
                </div>

                <div className="ml-8 sm:ml-10 space-y-2 sm:space-y-3">
                  <div className="grid gap-1.5 sm:gap-2">
                    {q.options.map((opt, optIdx) => {
                      let optionClass = 'p-2.5 sm:p-3 rounded-lg border text-xs sm:text-sm ';
                      if (optIdx === q.correctAnswer) {
                        optionClass += 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300';
                      } else if (optIdx === userAnswer && !isCorrect) {
                        optionClass += 'bg-red-500/10 border-red-500/30 text-red-300';
                      } else {
                        optionClass += 'bg-slate-900/50 border-white/5 text-slate-400 opacity-50';
                      }
                      return (
                        <div key={optIdx} className={optionClass}>{opt}</div>
                      );
                    })}
                  </div>

                  {!isCorrect && (
                    <div className="mt-3 sm:mt-4 p-3 sm:p-4 bg-slate-900/80 rounded-xl border border-white/5">
                      <p className="text-xs sm:text-sm text-amber-200/80 leading-relaxed">
                        <strong className="text-amber-400 block mb-1">Explicație:</strong>
                        {q.explanation}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    );
  }

  const currentQ = questions[currentIndex];
  const hasAnsweredCurrent = answers[currentIndex] !== undefined;

  const correctCount = Object.entries(answers).reduce((acc, [idx, ans]) => {
    return acc + (questions[Number(idx)].correctAnswer === ans ? 1 : 0);
  }, 0);
  const incorrectCount = Object.keys(answers).length - correctCount;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
      {/* Progress header */}
      <div className="mb-6 sm:mb-8">
        <div className="flex items-center justify-between text-xs sm:text-sm font-medium text-slate-400 mb-3 sm:mb-4">
          <span>Î. {currentIndex + 1}/{questions.length}</span>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 text-emerald-400 bg-emerald-500/10 px-2 sm:px-3 py-1 rounded-lg border border-emerald-500/20">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span className="font-bold">{correctCount}</span>
            </div>
            <div className="flex items-center gap-1 text-red-400 bg-red-500/10 px-2 sm:px-3 py-1 rounded-lg border border-red-500/20">
              <XCircle className="w-3.5 h-3.5" />
              <span className="font-bold">{incorrectCount}</span>
            </div>
          </div>
          <span className="hidden xs:block">{Math.round((currentIndex / questions.length) * 100)}%</span>
        </div>
        <div className="h-1.5 sm:h-2 bg-slate-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-amber-500"
            initial={{ width: 0 }}
            animate={{ width: `${(currentIndex / questions.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6 sm:p-8"
      >
        <h2 className="text-base sm:text-xl md:text-2xl font-medium text-white mb-5 sm:mb-8 leading-relaxed">
          {currentQ.question}
        </h2>

        <div className="space-y-2 sm:space-y-3 mb-5 sm:mb-8">
          {currentQ.options.map((option, idx) => {
            const isSelected = answers[currentIndex] === idx;
            return (
              <button
                key={idx}
                onClick={() => handleSelectOption(idx)}
                disabled={hasAnsweredCurrent}
                className={`w-full text-left p-3 sm:p-4 rounded-xl border transition-all ${
                  isSelected
                    ? 'bg-amber-500/10 border-amber-500/50 text-amber-300'
                    : hasAnsweredCurrent
                      ? 'bg-slate-950/30 border-white/5 text-slate-500 cursor-not-allowed'
                      : 'bg-slate-950/50 border-white/5 text-slate-300 hover:bg-slate-800 hover:border-white/10 active:scale-[0.98]'
                }`}
              >
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full border flex items-center justify-center flex-shrink-0 ${
                    isSelected ? 'border-amber-500' : 'border-slate-600'
                  }`}>
                    {isSelected && <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-amber-500" />}
                  </div>
                  <span className="text-sm sm:text-base">{option}</span>
                </div>
              </button>
            );
          })}
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleNext}
            disabled={!hasAnsweredCurrent}
            className={`inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-medium transition-all text-sm sm:text-base ${
              hasAnsweredCurrent
                ? 'bg-amber-500 hover:bg-amber-400 text-slate-950 active:scale-[0.98]'
                : 'bg-slate-800 text-slate-500 cursor-not-allowed'
            }`}
          >
            {currentIndex === questions.length - 1 ? 'Finalizează' : 'Următoarea'}
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </motion.div>
    </div>
  );
}
