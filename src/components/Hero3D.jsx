import Spline from '@splinetool/react-spline'

export default function Hero3D() {
  return (
    <section className="relative w-full h-[92vh] min-h-[640px] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Glimmer noise overlay */}
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.15] mix-blend-screen" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.12) 0 2px, transparent 3px), radial-gradient(circle at 80% 30%, rgba(255,255,255,0.08) 0 2px, transparent 3px), radial-gradient(circle at 60% 80%, rgba(255,255,255,0.06) 0 2px, transparent 3px)', backgroundSize: '120px 120px, 160px 160px, 200px 200px' }} />

      {/* Copy overlay */}
      <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
        <div className="pointer-events-none max-w-3xl">
          <p className="tracking-[0.4em] uppercase text-xs sm:text-sm text-fuchsia-200/70 mb-5 animate-[glitchX_2.8s_ease-in-out_infinite]">cosmic diagnostics online</p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black leading-tight bg-clip-text text-transparent bg-[conic-gradient(at_50%_50%,#a855f7,#14b8a6,#6366f1,#a855f7)] animate-[huePulse_6s_ease-in-out_infinite] drop-shadow-[0_0_30px_rgba(168,85,247,0.35)]">
            Is Mercury in retrograde?
          </h1>
          <p className="mt-5 text-fuchsia-100/80">Consulting the astral mainframe. Charging the crystals. Turning it off and on again.</p>

          {/* Cosmic spinner */}
          <div className="mx-auto mt-8 w-16 h-16 relative">
            <div className="absolute inset-0 rounded-full border-2 border-fuchsia-400/30 border-t-transparent animate-spin" />
            <div className="absolute inset-2 rounded-full border-2 border-teal-300/25 border-b-transparent animate-[spin_2.2s_linear_infinite_reverse]" />
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-fuchsia-600/30 to-indigo-600/20 blur-md" />
          </div>
        </div>
      </div>

      {/* Gradient fade to content */}
      <div aria-hidden className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-black" />
    </section>
  )
}
