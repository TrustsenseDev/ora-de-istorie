import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, FlaskConical, Menu, X } from 'lucide-react';

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
        background: scrolled ? 'rgba(9,9,11,0.92)' : 'var(--bg)',
        backdropFilter: scrolled ? 'blur(16px) saturate(180%)' : 'none',
        borderBottom: '1px solid var(--border)',
        transition: 'all 0.3s ease',
      }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', height: 56, gap: 8 }}>

          {/* Logo */}
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10, marginRight: 'auto' }}>
            <div style={{
              width: 28, height: 28,
              background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-light) 100%)',
              borderRadius: 6,
              display: 'grid', placeItems: 'center', flexShrink: 0,
            }}>
              <span style={{ color: 'white', fontSize: 13, fontWeight: 700, fontFamily: 'var(--font-mono)' }}>H</span>
            </div>
            <span style={{ fontSize: 15, fontWeight: 600, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
              IstorieBac
            </span>
          </Link>

          {/* Desktop links */}
          <div style={{ display: 'flex', gap: 2, alignItems: 'center' }} className="nav-desktop">
            <NavLink to="/" active={loc.pathname === '/'} icon={<BookOpen size={14} />}>Lecții</NavLink>
            <NavLink to="/simulare" active={loc.pathname === '/simulare'} accent icon={<FlaskConical size={14} />}>Simulare</NavLink>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(p => !p)}
            className="nav-mobile-btn"
            style={{
              display: 'none', background: 'var(--bg-muted)',
              border: '1px solid var(--border)', padding: 8,
              color: 'var(--text-secondary)', cursor: 'pointer',
              borderRadius: 'var(--radius-xs)',
              lineHeight: 0,
            }}
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
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
              <div style={{ padding: '12px 24px 16px', display: 'flex', flexDirection: 'column', gap: 4 }}>
                <MLink to="/" onClick={() => setMenuOpen(false)} icon={<BookOpen size={15} />}>Lecții</MLink>
                <MLink to="/simulare" onClick={() => setMenuOpen(false)} accent icon={<FlaskConical size={15} />}>Simulare</MLink>
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

function NavLink({ to, children, active, accent, icon }: any) {
  return (
    <Link to={to} style={{
      padding: '7px 16px', textDecoration: 'none', fontSize: 13, fontWeight: 500,
      color: accent ? 'white' : active ? 'var(--text-primary)' : 'var(--text-secondary)',
      background: accent ? 'linear-gradient(135deg, var(--accent) 0%, var(--accent-light) 100%)' : active ? 'var(--bg-muted)' : 'transparent',
      border: `1px solid ${accent ? 'transparent' : active ? 'var(--border)' : 'transparent'}`,
      borderRadius: 'var(--radius-xs)',
      transition: 'all 0.15s ease',
      letterSpacing: '-0.01em',
      display: 'flex', alignItems: 'center', gap: 6,
    }}>
      {icon}
      {children}
    </Link>
  );
}

function MLink({ to, children, onClick, accent, icon }: any) {
  return (
    <Link to={to} onClick={onClick} style={{
      display: 'flex', alignItems: 'center', gap: 10,
      padding: '12px 14px',
      textDecoration: 'none', fontSize: 14, fontWeight: 500,
      color: accent ? 'white' : 'var(--text-secondary)',
      background: accent ? 'linear-gradient(135deg, var(--accent) 0%, var(--accent-light) 100%)' : 'var(--bg-muted)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-xs)',
    }}>
      {icon}
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

  const urgent = time.days < 30;

  return (
    <div style={{
      background: urgent
        ? 'linear-gradient(90deg, rgba(192,57,43,0.12) 0%, rgba(192,57,43,0.06) 100%)'
        : 'var(--bg-card)',
      borderBottom: `1px solid ${urgent ? 'var(--accent-border)' : 'var(--border)'}`,
      padding: '6px 24px',
      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, flexWrap: 'wrap',
    }}>
      <span style={{
        fontFamily: 'var(--font-mono)', fontSize: 10,
        color: urgent ? 'var(--accent)' : 'var(--text-muted)',
        letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600,
      }}>
        Istorie BAC 2026
      </span>
      <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
        {[{ v: time.days, l: 'zile' }, { v: time.hours, l: 'ore' }, { v: time.minutes, l: 'min' }, { v: time.seconds, l: 'sec' }].map(({ v, l }, i) => (
          <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ textAlign: 'center', minWidth: 28 }}>
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: 13,
                color: urgent ? 'var(--accent-light)' : 'var(--text-primary)',
                fontWeight: 600, lineHeight: 1.2,
              }}>
                {String(v).padStart(2, '0')}
              </div>
              <div style={{ fontSize: 8, color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{l}</div>
            </div>
            {i < 3 && <span style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: 10, opacity: 0.5 }}>:</span>}
          </div>
        ))}
      </div>
      <span style={{ fontSize: 10, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', letterSpacing: '0.05em' }}>30 iun · E.c</span>
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
