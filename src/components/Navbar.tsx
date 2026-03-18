import { Link } from 'react-router-dom';
import { BookOpen, Home, BrainCircuit } from 'lucide-react';
import BacCountdown from './BacCountdown';

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 w-full">
      <BacCountdown />
      <nav className="w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors">
              <BookOpen className="w-6 h-6" />
              <span className="font-display font-bold text-xl tracking-tight">IstorieBac</span>
            </Link>
            <div className="flex items-center gap-6">
              <Link to="/" className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors">
                <Home className="w-4 h-4" />
                <span>Acasă</span>
              </Link>
              <Link to="/simulare" className="flex items-center gap-2 text-sm font-medium text-amber-400 hover:text-amber-300 transition-colors bg-amber-500/10 px-4 py-2 rounded-full border border-amber-500/20">
                <BrainCircuit className="w-4 h-4" />
                <span>Simulare Examen</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
