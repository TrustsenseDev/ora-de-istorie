import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Lesson from './pages/Lesson';
import GlobalQuiz from './pages/GlobalQuiz';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col font-sans selection:bg-amber-500/30">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lesson/:id" element={<Lesson />} />
          <Route path="/simulare" element={<GlobalQuiz />} />
        </Routes>
      </main>
      <ScrollToTop />
    </div>
  );
}
