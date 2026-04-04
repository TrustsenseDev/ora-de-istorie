import { motion } from 'motion/react';
import type { ReactNode } from 'react';

export interface RelationCardProps {
  name: string;
  symbol: string;
  color: string;
  colorDim: string;
  definition: string;
  example: string;
  miniDiagram: ReactNode;
  index: number;
}

export default function RelationCard({ name, symbol, color, colorDim, definition, example, miniDiagram, index }: RelationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.08, duration: 0.35 }}
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        borderRadius: 12,
        overflow: 'hidden',
      }}
    >
      {/* Header stripe */}
      <div style={{
        background: colorDim,
        borderBottom: `1px solid ${color}30`,
        padding: '14px 20px',
        display: 'flex', alignItems: 'center', gap: 12,
      }}>
        <div style={{
          width: 36, height: 36, borderRadius: 8,
          background: `${color}20`,
          border: `1px solid ${color}40`,
          display: 'grid', placeItems: 'center',
          fontSize: 18, lineHeight: 1,
        }}>
          {symbol}
        </div>
        <div>
          <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-primary)', letterSpacing: '-0.01em' }}>
            {name}
          </div>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: '16px 20px', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
        {/* Mini diagram */}
        <div style={{ flexShrink: 0, width: 80 }}>
          <svg viewBox="0 0 80 80" style={{ width: 80, height: 80, display: 'block' }}>
            {miniDiagram}
          </svg>
        </div>

        {/* Text */}
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: 13, color: 'var(--text-secondary)', margin: '0 0 10px', lineHeight: 1.6 }}>
            {definition}
          </p>
          <div style={{
            fontSize: 12, color: 'var(--text-muted)',
            fontFamily: 'var(--font-mono)',
            padding: '6px 10px',
            background: 'var(--bg-muted)',
            borderRadius: 6, display: 'inline-block',
            letterSpacing: '0.02em',
          }}>
            Ex: {example}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
