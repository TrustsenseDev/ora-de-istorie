import { motion } from 'motion/react';

interface TimelineProps {
  items: {
    year: string;
    title: string;
    description: string;
    icon: string;
  }[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div style={{ position: 'relative' }}>
      {/* Vertical line */}
      <div style={{
        position: 'absolute',
        left: 100,
        top: 0,
        bottom: 0,
        width: 1,
        background: 'var(--border)',
      }} />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
            style={{
              display: 'grid',
              gridTemplateColumns: '100px 1fr',
              gap: '0 32px',
              padding: '22px 0',
              borderBottom: '1px solid var(--border)',
            }}
          >
            {/* Year */}
            <div style={{
              paddingTop: 3,
              textAlign: 'right',
              paddingRight: 0,
              position: 'relative',
            }}>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 12,
                color: 'var(--accent)',
                display: 'block',
                lineHeight: 1.4,
                letterSpacing: '0.04em',
              }}>
                {item.year}
              </span>
              {/* Dot */}
              <div style={{
                position: 'absolute',
                right: -6,
                top: 8,
                width: 10,
                height: 10,
                background: 'var(--bg)',
                border: '1px solid var(--border-strong)',
                borderRadius: '50%',
              }} />
            </div>

            {/* Content */}
            <div style={{ paddingLeft: 12 }}>
              <h3 style={{
                fontSize: 16,
                fontWeight: 600,
                color: 'var(--text-primary)',
                margin: '0 0 8px',
                lineHeight: 1.35,
                letterSpacing: '-0.01em',
              }}>
                {item.title}
              </h3>
              <p style={{
                fontSize: 15,
                color: 'var(--text-secondary)',
                margin: 0,
                lineHeight: 1.7,
                fontWeight: 400,
              }}>
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
