import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Timer } from 'lucide-react';

// Istorie = Proba obligatorie a profilului (E.c) - 30 iunie 2026
const ISTORIE_DATE = new Date('2026-06-30T09:00:00');

function getTimeLeft() {
  const now = new Date();
  const diff = ISTORIE_DATE.getTime() - now.getTime();
  if (diff <= 0) return null;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  return { days, hours, minutes, seconds };
}

export default function BacCountdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  if (!timeLeft) return null;

  const urgency = timeLeft.days < 30;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`w-full border-b px-3 py-2 ${
        urgency ? 'bg-red-500/10 border-red-500/20' : 'bg-amber-500/5 border-amber-500/15'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 flex-wrap">
        <div className={`flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest ${
          urgency ? 'text-red-400' : 'text-amber-400'
        }`}>
          <Timer className="w-3.5 h-3.5 flex-shrink-0" />
          <span className="whitespace-nowrap">Istorie BAC 2026</span>
        </div>

        <div className="flex items-center gap-2">
          {[
            { val: timeLeft.days, label: 'zile' },
            { val: timeLeft.hours, label: 'ore' },
            { val: timeLeft.minutes, label: 'min' },
            { val: timeLeft.seconds, label: 'sec' },
          ].map(({ val, label }, i) => (
            <div key={label} className="flex items-center gap-2">
              <div className="text-center">
                <span className={`font-mono font-bold text-sm tabular-nums block leading-none ${
                  urgency ? 'text-red-300' : 'text-white'
                }`}>
                  {String(val).padStart(2, '0')}
                </span>
                <span className="text-slate-500 text-[9px] uppercase tracking-wider">{label}</span>
              </div>
              {i < 3 && <span className={`font-mono font-bold text-xs mb-2 ${
                urgency ? 'text-red-500' : 'text-slate-600'
              }`}>:</span>}
            </div>
          ))}
        </div>

        <span className="text-slate-500 text-xs hidden md:block">· 30 iunie 2026, proba E.c</span>
      </div>
    </motion.div>
  );
}
