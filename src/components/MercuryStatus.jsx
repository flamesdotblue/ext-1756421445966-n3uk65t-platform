import { useEffect, useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function MercuryStatus() {
  const [retro, setRetro] = useState(null) // true | false | null
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false
    async function fetchStatus() {
      setLoading(true)
      setError(null)
      try {
        const res = await fetch('https://mercuryretrogradeapi.com/')
        const data = await res.json()
        const value = data?.is_retrograde ?? data?.retrograde ?? data?.status
        if (!cancelled) setRetro(Boolean(value))
      } catch (e) {
        if (!cancelled) {
          setError('cosmic noise in the data stream')
          // Fallback mystic guess based on month (totally scientific)
          const month = new Date().getMonth()
          const likely = [3,4,7,8,11].includes(month) // Apr/May, Aug/Sep, Dec-ish
          setRetro(likely)
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    fetchStatus()
    return () => { cancelled = true }
  }, [])

  const headline = useMemo(() => {
    if (loading) return 'Consulting star charts…'
    return retro ? 'YES' : 'NO'
  }, [retro, loading])

  const subtitle = useMemo(() => {
    if (loading) return 'buffering the cosmos'
    if (retro) return 'Tie your shoelaces and back up your feelings.'
    return 'Proceed. But like, with whimsical caution.'
  }, [retro, loading])

  return (
    <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_80px_-10px_rgba(168,85,247,0.35)]">
      {/* shifting chroma rim */}
      <div aria-hidden className="pointer-events-none absolute -inset-[2px] rounded-3xl bg-[conic-gradient(at_10%_10%,#a855f7,transparent_25%,#14b8a6,transparent_50%,#6366f1,transparent_75%,#a855f7)] opacity-40 blur-xl" />

      <div className="relative z-10 px-6 sm:px-10 py-14">
        <div className="flex flex-col items-center text-center">
          <AnimatePresence mode="wait">
            <motion.h2
              key={headline}
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 1.02 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className={`text-7xl sm:text-8xl md:text-9xl font-black tracking-tight leading-none drop-shadow-[0_0_30px_rgba(20,184,166,0.35)] ${retro ? 'text-fuchsia-300' : 'text-teal-300'}`}
            >
              <span className="relative inline-block">
                {/* glitch layers */}
                <span className="absolute inset-0 text-transparent select-none" aria-hidden>
                  <span className={`absolute inset-0 ${retro ? 'text-fuchsia-400' : 'text-teal-400'}`} style={{ textShadow: `${retro ? '#f0f 3px 0' : '#3af 3px 0'}` }}>{headline}</span>
                </span>
                <span className="relative animate-[glitchX_2s_ease-in-out_infinite]">{headline}</span>
              </span>
            </motion.h2>
          </AnimatePresence>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-5 text-base sm:text-lg text-fuchsia-100/80"
          >
            {subtitle}
            {error && (
              <span className="block text-xs opacity-70 mt-2">({error})</span>
            )}
          </motion.p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl">
            <AuraCard title="Tech" detail={retro ? 'Expect rogue pop-ups from other dimensions.' : 'Wi‑Fi whispers are benevolent today.'} hue="from-fuchsia-500/30 to-indigo-500/20"/>
            <AuraCard title="Travel" detail={retro ? 'Trains forget their tracks. Plan B, then C.' : 'Roads align. GPS only gaslights a little.'} hue="from-teal-400/30 to-emerald-500/20"/>
            <AuraCard title="Vibes" detail={retro ? 'Feelings hit rewind. Journal in glitter ink.' : 'Crystals vibing at a safe hum.'} hue="from-indigo-500/25 to-fuchsia-500/20"/>
          </div>
        </div>
      </div>
    </div>
  )
}

function AuraCard({ title, detail, hue }) {
  return (
    <div className="relative rounded-2xl border border-white/10 bg-black/30 overflow-hidden group">
      <div aria-hidden className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${hue} opacity-40 group-hover:opacity-60 transition-opacity`} />
      <div className="relative p-5">
        <div className="flex items-center justify-between">
          <h3 className="text-sm tracking-widest uppercase text-white/70">{title}</h3>
          <div className="w-2 h-2 rounded-full bg-white/70 animate-[twinkle_2.4s_ease-in-out_infinite]" />
        </div>
        <p className="mt-2 text-sm text-white/90 leading-relaxed">{detail}</p>
      </div>
    </div>
  )
}
