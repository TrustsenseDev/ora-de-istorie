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
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
      gap: 0,
      border: '1px solid var(--border)',
    }}>
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          style={{
            padding: '24px 20px',
            borderRight: '1px solid var(--border)',
            borderBottom: '1px solid var(--border)',
            background: 'transparent',
            transition: 'background 0.15s',
          }}
          whileHover={{ background: 'var(--bg-card)' }}
        >
          {/* Index */}
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: 10,
            color: 'var(--accent)', letterSpacing: '0.1em',
            marginBottom: 14,
          }}>
            {String(i + 1).padStart(2, '0')}
          </div>

          {/* Title */}
          <h3 style={{
            fontFamily: 'var(--font-display)', fontStyle: 'italic',
            fontSize: 16, color: 'var(--text-primary)',
            margin: '0 0 10px', lineHeight: 1.3,
            letterSpacing: '-0.01em',
          }}>
            {item.title}
          </h3>

          {/* Description */}
          <p style={{
            fontSize: 12, color: 'var(--text-secondary)',
            margin: 0, lineHeight: 1.65, fontWeight: 300,
          }}>
            {item.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
