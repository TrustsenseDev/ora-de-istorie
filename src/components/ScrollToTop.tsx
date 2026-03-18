import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            position: 'fixed', bottom: 32, right: 32, zIndex: 50,
            width: 40, height: 40,
            background: 'var(--bg-card)',
            border: '1px solid var(--border-strong)',
            color: 'var(--text-secondary)',
            cursor: 'pointer',
            fontFamily: 'var(--font-mono)', fontSize: 14,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all 0.15s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'var(--accent)';
            e.currentTarget.style.borderColor = 'var(--accent)';
            e.currentTarget.style.color = 'white';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'var(--bg-card)';
            e.currentTarget.style.borderColor = 'var(--border-strong)';
            e.currentTarget.style.color = 'var(--text-secondary)';
          }}
          aria-label="Înapoi sus"
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  );
}
