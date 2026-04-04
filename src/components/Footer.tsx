import { BookOpen } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '40px 24px',
      marginTop: 'auto',
    }}>
      <div style={{
        maxWidth: 900,
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 16,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 24, height: 24,
            background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-light) 100%)',
            borderRadius: 5,
            display: 'grid', placeItems: 'center', flexShrink: 0,
          }}>
            <BookOpen size={12} color="white" />
          </div>
          <span style={{
            fontSize: 13,
            color: 'var(--text-muted)',
            fontWeight: 500,
          }}>
            BacPrep
          </span>
        </div>

        <p style={{
          fontSize: 12,
          color: 'var(--text-muted)',
          margin: 0,
          fontFamily: 'var(--font-mono)',
          letterSpacing: '0.04em',
        }}>
          Pregătire BAC 2026 &mdash; Toate materiile
        </p>
      </div>
    </footer>
  );
}
