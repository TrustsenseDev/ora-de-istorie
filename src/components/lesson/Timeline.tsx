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
        position: 'absolute', left: 80, top: 0, bottom: 0,
        width: 1, background: 'var(--border)',
      }} />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            style={{
              display: 'grid',
              gridTemplateColumns: '80px 1fr',
              gap: '0 28px',
              padding: '24px 0',
              borderBottom: i < items.length - 1 ? '1px solid transparent' : 'none',
            }}
          >
            {/* Year column */}
            <div style={{ paddingTop: 2, textAlign: 'right', paddingRight: 0, position: 'relative' }}>
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: 11,
                color: 'var(--text-muted)', letterSpacing: '0.06em',
                display: 'block', lineHeight: 1.4,
              }}>
                {item.year}
              </span>

              {/* Dot on the line */}
              <div style={{
                position: 'absolute', right: -5, top: 7,
                width: 9, height: 9,
                background: 'var(--bg)',
                border: '1px solid var(--border-strong)',
                borderRadius: '50%',
                transition: 'border-color 0.15s',
              }} />
            </div>

            {/* Content */}
            <div
              style={{
                padding: '12px 16px',
                background: 'transparent',
                border: '1px solid transparent',
                transition: 'all 0.15s',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = 'var(--bg-card)';
                el.style.borderColor = 'var(--border)';
                // Update the dot
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = 'transparent';
                el.style.borderColor = 'transparent';
              }}
            >
              <h3 style={{
                fontFamily: 'var(--font-display)', fontStyle: 'italic',
                fontSize: 16, color: 'var(--text-primary)',
                margin: '0 0 8px', lineHeight: 1.3, letterSpacing: '-0.01em',
              }}>
                {item.title}
              </h3>
              <p style={{
                fontSize: 13, color: 'var(--text-secondary)',
                margin: 0, lineHeight: 1.65, fontWeight: 300,
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
