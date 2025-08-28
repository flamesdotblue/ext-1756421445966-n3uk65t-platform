import { useMemo } from 'react'
import { motion } from 'framer-motion'

export default function ConstellationField() {
  const stars = useMemo(() => Array.from({ length: 70 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    s: Math.random() * 1.2 + 0.3,
    d: Math.random() * 3 + 1.5,
  })), [])

  const lines = useMemo(() => Array.from({ length: 22 }).map((_, i) => ({
    id: i,
    x1: Math.random() * 100,
    y1: Math.random() * 100,
    x2: Math.random() * 100,
    y2: Math.random() * 100,
    o: Math.random() * 0.35 + 0.05,
    w: Math.random() * 0.6 + 0.2,
    spd: Math.random() * 16 + 8,
  })), [])

  return (
    <div className="pointer-events-none fixed inset-0 -z-[1]">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {/* Stars */}
        {stars.map(s => (
          <motion.circle
            key={s.id}
            cx={s.x}
            cy={s.y}
            r={s.s}
            fill="white"
            initial={{ opacity: 0.15 }}
            animate={{ opacity: [0.15, 0.8, 0.15], scale: [1, 1.2, 1] }}
            transition={{ duration: s.d, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
        {/* Constellation lines drifting */}
        {lines.map(l => (
          <motion.line
            key={l.id}
            x1={l.x1}
            y1={l.y1}
            x2={l.x2}
            y2={l.y2}
            stroke="url(#grad)"
            strokeWidth={l.w}
            initial={{ opacity: l.o }}
            animate={{
              opacity: [l.o, l.o + 0.2, l.o],
              x: [0, 0.2, 0],
              y: [0, -0.2, 0]
            }}
            transition={{ duration: l.spd, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
        <defs>
          <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.45" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
