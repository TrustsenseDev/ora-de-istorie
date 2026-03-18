import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const [visible, setVisible] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      if (y < 60 || y < lastScrollY.current) {
        setVisible(true);
      } else if (y > lastScrollY.current + 8) {
        setVisible(false);
        setIsMenuOpen(false);
      }
      lastScrollY.current = y;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className="sticky top-0 z-50 w-full"
      animate={{ y: visible ? 0 : '-100%' }}
      transition={{ duration: 0.22, ease: 'easeInOut' }}
    >
      {/* BAC Countdown Strip */}
      <BacStrip />

      <nav
        style={{
          background: scrolled ? 'rgba(10, 9, 8, 0.95)' : 'var(--bg)',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: '1px solid var(--border)',
          transition: 'background 0.3s, backdrop-filter 0.3s',
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 60 }}>

            {/* Logo */}
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
              <div style={{
                width: 28, height: 28,
                background: 'var(--accent)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <span style={{ color: 'white', fontSize: 14, fontWeight: 700, fontFamily: 'var(--font-mono)' }}>H</span>
              </div>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: 18,
                color: 'var(--text-primary)',
                fontStyle: 'italic',
                letterSpacing: '-0.01em',
              }}>
                IstorieBac
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden-mobile" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <NavLink to="/" active={location.pathname === '/'}>Lecții</NavLink>
              <NavLink to="/simulare" active={location.pathname === '/simulare'} accent>
                Simulare Examen
              </NavLink>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsMenuOpen(p => !p)}
              style={{
                display: 'none',
                background: 'none', border: '1px solid var(--border)',
                color: 'var(--text-secondary)', padding: '8px 12px',
                cursor: 'pointer', fontSize: 13, letterSpacing: '0.05em',
                fontFamily: 'var(--font-mono)', textTransform: 'uppercase',
              }}
              className="mobile-menu-btn"
            >
              {isMenuOpen ? 'Închide' : 'Meniu'}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              style={{ overflow: 'hidden', borderTop: '1px solid var(--border)' }}
            >
              <div style={{ padding: '12px 24px 20px' }}>
                <MobileNavLink to="/" onClick={() => setIsMenuOpen(false)}>Lecții</MobileNavLink>
                <MobileNavLink to="/simulare" onClick={() => setIsMenuOpen(false)} accent>Simulare Examen</MobileNavLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <style>{`
        @media (max-width: 640px) {
          .hidden-mobile { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </motion.header>
  );
}

function NavLink({ to, children, active, accent }: any) {
  return (
    <Link
      to={to}
      style={{
        display: 'inline-flex', alignItems: 'center',
        padding: accent ? '8px 18px' : '8px 16px',
        textDecoration: 'none',
        fontSize: 13,
        fontWeight: 500,
        letterSpacing: '0.02em',
        fontFamily: 'var(--font-mono)',
        color: accent ? 'white' : active ? 'var(--text-primary)' : 'var(--text-secondary)',
        background: accent ? 'var(--accent)' : active ? 'var(--bg-muted)' : 'transparent',
        border: `1px solid ${accent ? 'var(--accent)' : active ? 'var(--border-strong)' : 'transparent'}`,
        transition: 'all 0.15s',
      }}
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ to, children, onClick, accent }: any) {
  return (
    <Link
      to={to}
      onClick={onClick}
      style={{
        display: 'block',
        padding: '12px 16px',
        margin: '4px 0',
        textDecoration: 'none',
        fontSize: 14,
        fontFamily: 'var(--font-mono)',
        letterSpacing: '0.04em',
        color: accent ? 'white' : 'var(--text-secondary)',
        background: accent ? 'var(--accent)' : 'var(--bg-muted)',
        border: '1px solid var(--border)',
      }}
    >
      {children}
    </Link>
  );
}

// Inline BAC countdown strip
function BacStrip() {
  const [time, setTime] = useState(getTimeLeft());
  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);
  if (!time) return null;
  const urgent = time.days < 30;
  return (
    <div style={{
      background: urgent ? 'rgba(192, 57, 43, 0.12)' : 'var(--bg-muted)',
      borderBottom: `1px solid ${urgent ? 'var(--accent-border)' : 'var(--border)'}`,
      padding: '7px 24px',
      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20,
      flexWrap: 'wrap',
    }}>
      <span style={{
        fontFamily: 'var(--font-mono)', fontSize: 10,
        letterSpacing: '0.12em', textTransform: 'uppercase',
        color: urgent ? 'var(--accent)' : 'var(--text-muted)',
      }}>
        Istorie BAC 2026
      </span>
      <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
        {[
          { v: time.days, l: 'zile' },
          { v: time.hours, l: 'ore' },
          { v: time.minutes, l: 'min' },
          { v: time.seconds, l: 'sec' },
        ].map(({ v, l }, i) => (
          <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontFamily: 'var(--font-mono)', fontWeight: 500,
                fontSize: 13, color: urgent ? 'var(--accent)' : 'var(--text-primary)',
                letterSpacing: '0.05em',
              }}>
                {String(v).padStart(2, '0')}
              </div>
              <div style={{ fontSize: 9, color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{l}</div>
            </div>
            {i < 3 && <span style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: 11 }}>:</span>}
          </div>
        ))}
      </div>
      <span style={{ fontSize: 11, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>30 iunie — proba E.c</span>
    </div>
  );
}

function getTimeLeft() {
  const diff = new Date('2026-06-30T09:00:00').getTime() - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
}
