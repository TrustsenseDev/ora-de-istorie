import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Lesson from './pages/Lesson';
import GlobalQuiz from './pages/GlobalQuiz';
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
          <Route path="/" element={<Home />} />
          <Route path="/lesson/:id" element={<Lesson />} />
          <Route path="/simulare" element={<GlobalQuiz />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
