import { useMemo } from 'react'

export default function FooterRituals({ aura, setAura }) {
  const ritual = useMemo(() => {
    const notes = [
      'Place your phone on a salt circle. Or in airplane mode. Same thing.',
      'Name your tabs. Banish your notifications.',
      'Drink water infused with the memory of a good decision.',
      'Anoint your keyboard with the light of the moon (or a desk lamp).',
      'Forward your emails to the void. The void will get back to you shortly.'
    ]
    return notes[Math.floor(Math.random() * notes.length)]
  }, [])

  return (
    <footer className="relative z-10 mt-16 pb-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 sm:p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 justify-between">
            <div>
              <p className="uppercase tracking-widest text-xs text-white/60">tonight's ritual</p>
              <p className="mt-1 text-white/90">{ritual}</p>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => setAura(v => !v)}
                className="relative inline-flex items-center gap-2 rounded-full px-4 py-2 bg-gradient-to-br from-fuchsia-600/30 to-indigo-600/20 border border-white/10 text-white/90 hover:from-fuchsia-500/40 hover:to-indigo-500/30 transition-colors"
                title="Toggle ambient aura"
              >
                <span className={`inline-block w-2.5 h-2.5 rounded-full ${aura ? 'bg-teal-300' : 'bg-white/40'}`} />
                <span className="text-sm">{aura ? 'Aura: ON' : 'Aura: OFF'}</span>
              </button>
              <a
                href="https://en.wikipedia.org/wiki/Mercury_(astrology)#Retrograde_motion" target="_blank" rel="noreferrer"
                className="text-sm text-white/70 hover:text-white/95 underline/30 hover:underline"
              >
                proof? let’s argue about it
              </a>
            </div>
          </div>
        </div>
        <p className="text-center text-xs text-white/40 mt-4">Built on vibes, sarcasm, and the occasional ephemeris.</p>
      </div>
    </footer>
  )
}
