import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SubjectHome from './pages/SubjectHome';
import Home from './pages/Home';
import Lesson from './pages/Lesson';
import GlobalQuiz from './pages/GlobalQuiz';
import LogicHome from './pages/LogicHome';
import LogicExercise from './pages/LogicExercise';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--bg)',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'var(--font-sans)',
    }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Routes>
          {/* Landing — subject selector */}
          <Route path="/" element={<SubjectHome />} />

          {/* History subject */}
          <Route path="/istorie" element={<Home />} />
          <Route path="/istorie/lesson/:id" element={<Lesson />} />
          <Route path="/istorie/simulare" element={<GlobalQuiz />} />

          {/* Logic subject */}
          <Route path="/logica" element={<LogicHome />} />
          <Route path="/logica/exercitiu/:id" element={<LogicExercise />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
