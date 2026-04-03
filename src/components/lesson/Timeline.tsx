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
    <div style={{ position: 'relative', overflow: 'visible' }}>
      {/* Vertical line */}
      <div style={{
        position: 'absolute',
        left: 119,
        top: 12,
        bottom: 12,
        width: 2,
        background: 'linear-gradient(180deg, var(--accent) 0%, var(--accent-border) 40%, var(--border) 100%)',
        borderRadius: 1,
      }} />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
            className="timeline-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '110px 12px 1fr',
              gap: '0 16px',
              padding: '22px 0',
              borderBottom: i < items.length - 1 ? '1px solid var(--border)' : 'none',
              alignItems: 'start',
            }}
          >
            {/* Year */}
            <div style={{
              paddingTop: 3,
              textAlign: 'right',
              paddingRight: 4,
            }}>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 12,
                color: 'var(--accent-light)',
                display: 'block',
                lineHeight: 1.4,
                letterSpacing: '0.04em',
                fontWeight: 600,
              }}>
                {item.year}
              </span>
            </div>

            {/* Dot column */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              paddingTop: 6,
            }}>
              <div style={{
                width: 10,
                height: 10,
                background: 'var(--accent-dim)',
                border: '2px solid var(--accent)',
                borderRadius: '50%',
                flexShrink: 0,
                boxShadow: '0 0 0 3px var(--bg)',
              }} />
            </div>

            {/* Content */}
            <div style={{ paddingLeft: 4 }}>
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
