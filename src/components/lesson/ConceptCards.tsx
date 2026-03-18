import { motion } from 'motion/react';

interface ConceptCardsProps {
  items: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export default function ConceptCards({ items }: ConceptCardsProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.07 }}
          style={{
            display: 'grid',
            gridTemplateColumns: '200px 1fr',
            gap: '0 32px',
            padding: '24px 20px',
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderBottom: 'none',
            transition: 'border-color 0.15s',
          }}
          className="concept-card"
        >
          {/* Left: number + title */}
          <div style={{ borderRight: '1px solid var(--border)', paddingRight: 24 }}>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              color: 'var(--accent)',
              letterSpacing: '0.1em',
              marginBottom: 10,
            }}>
              {String(i + 1).padStart(2, '0')}
            </div>
            <h3 style={{
              fontSize: 17,
              fontWeight: 600,
              color: 'var(--text-primary)',
              margin: 0,
              lineHeight: 1.35,
              letterSpacing: '-0.01em',
            }}>
              {item.title}
            </h3>
          </div>

          {/* Right: description */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <p style={{
              fontSize: 15,
              color: 'var(--text-secondary)',
              margin: 0,
              lineHeight: 1.75,
              fontWeight: 400,
            }}>
              {item.description}
            </p>
          </div>
        </motion.div>
      ))}
      {/* Bottom border */}
      <div style={{ height: 1, background: 'var(--border)' }} />

      <style>{`
        @media (max-width: 600px) {
          .concept-card {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }
          .concept-card > div:first-child {
            border-right: none !important;
            border-bottom: 1px solid var(--border);
            padding-right: 0 !important;
            padding-bottom: 14px;
          }
        }
      `}</style>
    </div>
  );
}
