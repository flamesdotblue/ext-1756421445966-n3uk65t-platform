import { useState, useEffect } from 'react'
import Hero3D from './components/Hero3D'
import MercuryStatus from './components/MercuryStatus'
import ConstellationField from './components/ConstellationField'
import FooterRituals from './components/FooterRituals'

export default function App() {
  const [aura, setAura] = useState(true)

  useEffect(() => {
    // Respect reduced motion users by disabling intense aura by default
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mq.matches) setAura(false)
  }, [])

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-black text-white font-['Inter',ui-sans-serif,system-ui] selection:bg-fuchsia-600/40">
      {/* Ethereal aura overlay */}
      <div
        aria-hidden
        className={`${aura ? 'opacity-100' : 'opacity-0'} pointer-events-none fixed inset-0 transition-opacity duration-700`}
      >
        <div className="absolute inset-0 mix-blend-screen pointer-events-none" style={{
          background: 'radial-gradient(1200px 800px at 20% 10%, rgba(168,85,247,0.25), transparent 60%), radial-gradient(900px 700px at 80% 30%, rgba(20,184,166,0.18), transparent 55%), radial-gradient(1000px 900px at 50% 80%, rgba(99,102,241,0.18), transparent 60%)'
        }} />
        <div className="absolute inset-0 pointer-events-none animate-[aura_12s_linear_infinite]" style={{
          background: 'conic-gradient(from 180deg at 50% 50%, rgba(168,85,247,0.05), rgba(20,184,166,0.05), rgba(99,102,241,0.05), rgba(168,85,247,0.05))',
          filter: 'blur(40px) hue-rotate(10deg)'
        }} />
      </div>

      <Hero3D />

      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 -mt-24">
        <MercuryStatus />
      </section>

      <ConstellationField />

      <FooterRituals aura={aura} setAura={setAura} />

      <style>{`
        @keyframes aura { to { filter: blur(40px) hue-rotate(370deg) } }
        @keyframes glitchX { 0%,100%{ transform: translateX(0)} 20%{ transform: translateX(1px)} 40%{ transform: translateX(-2px)} 60%{ transform: translateX(2px)} 80%{ transform: translateX(-1px)} }
        @keyframes twinkle { 0%,100%{ opacity:.25; transform: scale(.9)} 50%{ opacity:1; transform: scale(1.05)} }
        @keyframes drift { 0%{ transform: translateY(0) rotate(0deg) } 50%{ transform: translateY(-6px) rotate(1deg) } 100%{ transform: translateY(0) rotate(0deg) } }
        @keyframes huePulse { 0%,100%{ filter: hue-rotate(0deg)} 50%{ filter: hue-rotate(40deg)} }
        @keyframes dash { to { stroke-dashoffset: -1000; } }
      `}</style>
    </div>
  )
}
