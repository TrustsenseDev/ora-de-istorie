import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Home, BrainCircuit, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import BacCountdown from './BacCountdown';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="sticky top-0 z-50 w-full">
      <BacCountdown />
      <nav className="w-full border-b border-white/10 bg-slate-950/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              to="/"
              onClick={closeMenu}
              className="flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors"
            >
              <BookOpen className="w-6 h-6" />
              <span className="font-display font-bold text-xl tracking-tight">IstorieBac</span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden sm:flex items-center gap-6">
              <Link
                to="/"
                className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                <Home className="w-4 h-4" />
                <span>Acasă</span>
              </Link>
              <Link
                to="/simulare"
                className="flex items-center gap-2 text-sm font-medium text-amber-400 hover:text-amber-300 transition-colors bg-amber-500/10 px-4 py-2 rounded-full border border-amber-500/20"
              >
                <BrainCircuit className="w-4 h-4" />
                <span>Simulare Examen</span>
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="sm:hidden p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              onClick={() => setIsMenuOpen(prev => !prev)}
              aria-label="Meniu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="sm:hidden overflow-hidden border-t border-white/10 bg-slate-950/95"
            >
              <div className="px-4 py-3 space-y-2">
                <Link
                  to="/"
                  onClick={closeMenu}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors text-sm font-medium"
                >
                  <Home className="w-5 h-5" />
                  Acasă
                </Link>
                <Link
                  to="/simulare"
                  onClick={closeMenu}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 hover:bg-amber-500/20 transition-colors text-sm font-medium"
                >
                  <BrainCircuit className="w-5 h-5" />
                  Simulare Examen
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}
