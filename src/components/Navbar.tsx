import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 10);
      if (y < 50 || y < lastY.current) setVisible(true);
      else if (y > lastY.current + 6) { setVisible(false); setMenuOpen(false); }
      lastY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      animate={{ y: visible ? 0 : '-100%' }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
      style={{ position: 'sticky', top: 0, zIndex: 50, width: '100%' }}
    >
      <BacStrip />
      <nav style={{
        background: scrolled ? 'rgba(12,12,12,0.96)' : 'var(--bg)',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: '1px solid var(--border)',
        transition: 'background 0.25s',
      }}>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 20px', display: 'flex', alignItems: 'center', height: 52, gap: 8 }}>

          {/* Logo */}
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8, marginRight: 'auto' }}>
            <div style={{ width: 24, height: 24, background: 'var(--accent)', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
              <span style={{ color: 'white', fontSize: 12, fontWeight: 600, fontFamily: 'var(--font-mono)' }}>H</span>
            </div>
            <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-primary)', letterSpacing: '-0.01em' }}>
              IstorieBac
            </span>
          </Link>

          {/* Desktop links */}
          <div style={{ display: 'flex', gap: 4, alignItems: 'center' }} className="nav-desktop">
            <NavLink to="/" active={loc.pathname === '/'}>Lecții</NavLink>
            <NavLink to="/simulare" active={loc.pathname === '/simulare'} accent>Simulare</NavLink>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(p => !p)}
            className="nav-mobile-btn"
            style={{
              display: 'none', background: 'none',
              border: '1px solid var(--border)', padding: '5px 10px',
              color: 'var(--text-secondary)', cursor: 'pointer', fontSize: 12,
              fontFamily: 'var(--font-mono)', letterSpacing: '0.06em',
            }}
          >
            {menuOpen ? '✕' : 'menu'}
          </button>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              style={{ overflow: 'hidden', borderTop: '1px solid var(--border)' }}
            >
              <div style={{ padding: '10px 20px 16px' }}>
                <MLink to="/" onClick={() => setMenuOpen(false)}>Lecții</MLink>
                <MLink to="/simulare" onClick={() => setMenuOpen(false)} accent>Simulare</MLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      <style>{`
        @media (max-width: 580px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: block !important; }
        }
      `}</style>
    </motion.header>
  );
}

function NavLink({ to, children, active, accent }: any) {
  return (
    <Link to={to} style={{
      padding: '6px 14px', textDecoration: 'none', fontSize: 13, fontWeight: 500,
      color: accent ? 'white' : active ? 'var(--text-primary)' : 'var(--text-secondary)',
      background: accent ? 'var(--accent)' : active ? 'var(--bg-muted)' : 'transparent',
      border: `1px solid ${accent ? 'transparent' : active ? 'var(--border)' : 'transparent'}`,
      transition: 'all 0.12s',
      letterSpacing: '-0.01em',
    }}>
      {children}
    </Link>
  );
}

function MLink({ to, children, onClick, accent }: any) {
  return (
    <Link to={to} onClick={onClick} style={{
      display: 'block', padding: '10px 12px', margin: '3px 0',
      textDecoration: 'none', fontSize: 14, fontWeight: 500,
      color: accent ? 'white' : 'var(--text-secondary)',
      background: accent ? 'var(--accent)' : 'var(--bg-muted)',
      border: '1px solid var(--border)',
    }}>
      {children}
    </Link>
  );
}

function BacStrip() {
  const [time, setTime] = useState(getLeft());
  useEffect(() => {
    const id = setInterval(() => setTime(getLeft()), 1000);
    return () => clearInterval(id);
  }, []);
  if (!time) return null;
  return (
    <div style={{
      background: 'var(--bg-card)',
      borderBottom: '1px solid var(--border)',
      padding: '5px 20px',
      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, flexWrap: 'wrap',
    }}>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
        Istorie BAC 2026
      </span>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        {[{ v: time.days, l: 'zile' }, { v: time.hours, l: 'ore' }, { v: time.minutes, l: 'min' }, { v: time.seconds, l: 'sec' }].map(({ v, l }, i) => (
          <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-primary)', fontWeight: 500 }}>
                {String(v).padStart(2, '0')}
              </div>
              <div style={{ fontSize: 8, color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{l}</div>
            </div>
            {i < 3 && <span style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: 10 }}>:</span>}
          </div>
        ))}
      </div>
      <span style={{ fontSize: 11, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>30 iunie · E.c</span>
    </div>
  );
}

function getLeft() {
  const diff = new Date('2026-06-30T09:00:00').getTime() - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
}
