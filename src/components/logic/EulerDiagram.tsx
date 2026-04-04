import { motion } from 'motion/react';

export interface EulerTerm {
  id: string;      // 'A', 'B', etc.
  label: string;   // display label
  cx: number;      // center x (0-100 in SVG viewBox units)
  cy: number;      // center y
  rx: number;      // x-radius
  ry: number;      // y-radius
  color: string;   // fill color
}

export const EULER_COLORS = {
  A: { fill: 'rgba(192,57,43,0.12)', stroke: 'rgba(192,57,43,0.7)', label: '#e74c3c' },
  B: { fill: 'rgba(52,152,219,0.12)', stroke: 'rgba(52,152,219,0.7)', label: '#3498db' },
  C: { fill: 'rgba(39,174,96,0.12)', stroke: 'rgba(39,174,96,0.7)', label: '#27ae60' },
  D: { fill: 'rgba(155,89,182,0.12)', stroke: 'rgba(155,89,182,0.7)', label: '#9b59b6' },
  E: { fill: 'rgba(230,126,34,0.12)', stroke: 'rgba(230,126,34,0.7)', label: '#e67e22' },
};

interface EulerDiagramProps {
  terms: EulerTerm[];
  width?: number;
  title?: string;
}

export default function EulerDiagram({ terms, title }: EulerDiagramProps) {
  return (
    <div style={{ width: '100%' }}>
      {title && (
        <div style={{
          fontSize: 11, fontFamily: 'var(--font-mono)', color: 'var(--text-muted)',
          letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12,
        }}>
          {title}
        </div>
      )}
      <div style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        borderRadius: 12,
        padding: '16px',
        overflow: 'hidden',
      }}>
        <svg
          viewBox="0 0 400 280"
          style={{ width: '100%', height: 'auto', display: 'block' }}
          aria-label="Diagramă Euler"
        >
          {/* Grid lines for readability */}
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="400" height="280" fill="url(#grid)" />

          {/* Ellipses — rendered from back to front */}
          {terms.map((term, i) => {
            const c = EULER_COLORS[term.id as keyof typeof EULER_COLORS] || EULER_COLORS.A;
            return (
              <motion.ellipse
                key={term.id}
                cx={term.cx}
                cy={term.cy}
                rx={term.rx}
                ry={term.ry}
                fill={c.fill}
                stroke={c.stroke}
                strokeWidth={1.8}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.12, duration: 0.4, ease: 'backOut' }}
                style={{ transformOrigin: `${term.cx}px ${term.cy}px` }}
              />
            );
          })}

          {/* Labels */}
          {terms.map((term, i) => {
            const c = EULER_COLORS[term.id as keyof typeof EULER_COLORS] || EULER_COLORS.A;
            return (
              <motion.g
                key={`label-${term.id}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.12 + 0.25 }}
              >
                {/* ID badge */}
                <circle
                  cx={term.cx - term.rx + 18}
                  cy={term.cy - term.ry + 18}
                  r={11}
                  fill={c.stroke}
                  opacity={0.9}
                />
                <text
                  x={term.cx - term.rx + 18}
                  y={term.cy - term.ry + 23}
                  textAnchor="middle"
                  fontSize={12}
                  fontWeight="700"
                  fontFamily="Geist Mono, monospace"
                  fill="white"
                >
                  {term.id}
                </text>
                {/* Full label */}
                <text
                  x={term.cx}
                  y={term.cy + term.ry + 16}
                  textAnchor="middle"
                  fontSize={11}
                  fontFamily="Geist, sans-serif"
                  fill={c.label}
                  fontWeight="500"
                >
                  {term.label}
                </text>
              </motion.g>
            );
          })}
        </svg>

        {/* Legend */}
        <div style={{
          display: 'flex', gap: 10, flexWrap: 'wrap',
          borderTop: '1px solid var(--border)', paddingTop: 12, marginTop: 4,
        }}>
          {terms.map(term => {
            const c = EULER_COLORS[term.id as keyof typeof EULER_COLORS] || EULER_COLORS.A;
            return (
              <div key={`leg-${term.id}`} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <div style={{
                  width: 10, height: 10, borderRadius: '50%',
                  background: c.stroke, opacity: 0.85,
                }} />
                <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', color: c.label, fontWeight: 600 }}>{term.id}</span>
                  {' — '}{term.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
