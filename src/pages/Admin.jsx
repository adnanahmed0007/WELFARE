import { useEffect, useState } from 'react'
import PageHero from '../components/PageHero.jsx'
import { getContributions, clearContributions } from '../lib/storage.js'

// Simple client-side passphrase so this page isn't wide open on a shared device.
// This is NOT real security — anyone reading the source can see it. It only
// keeps casual visitors from stumbling onto the list.
const PASSPHRASE = 'raza2021'

export default function Admin() {
  const [unlocked, setUnlocked] = useState(false)
  const [input, setInput] = useState('')
  const [entries, setEntries] = useState([])

  useEffect(() => {
    if (unlocked) setEntries(getContributions())
  }, [unlocked])

  if (!unlocked) {
    return (
      <div>
        <PageHero eyebrow="Society Team Only" title="Contribution Records" />
        <section className="bg-ivory">
          <div className="max-w-sm mx-auto px-4 sm:px-6 py-20 text-center">
            <p className="text-sm text-ink/60 mb-6 leading-relaxed">
              This lists contribution requests saved on <span className="font-semibold">this device</span>.
              Enter the team passphrase to view them.
            </p>
            <form
              onSubmit={(e) => { e.preventDefault(); if (input === PASSPHRASE) setUnlocked(true) }}
              className="space-y-4"
            >
              <input
                type="password"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Passphrase"
                className="w-full rounded-xl border border-forest/15 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
              />
              <button type="submit" className="w-full bg-forest hover:bg-forest-light text-white font-semibold py-3 rounded-full transition-colors">
                View Records
              </button>
            </form>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div>
      <PageHero eyebrow="Society Team Only" title="Contribution Records" blurb="These entries were submitted on this device only." />
      <section className="bg-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14">
          <div className="flex justify-between items-center mb-6">
            <p className="text-sm text-ink/50">{entries.length} record{entries.length === 1 ? '' : 's'} on this device</p>
            {entries.length > 0 && (
              <button
                onClick={() => { if (confirm('Clear all saved records on this device?')) { clearContributions(); setEntries([]) } }}
                className="text-xs text-red-500 hover:underline"
              >
                Clear all
              </button>
            )}
          </div>

          {entries.length === 0 ? (
            <div className="bg-white rounded-2xl border border-forest/10 p-10 text-center text-ink/50 text-sm">
              No contribution requests saved on this device yet.
            </div>
          ) : (
            <div className="space-y-4">
              {entries.map((e) => (
                <div key={e.id} className="bg-white rounded-2xl border border-forest/10 shadow-card p-6">
                  <div className="flex flex-wrap justify-between gap-2 mb-2">
                    <h3 className="font-display text-lg font-semibold text-forest">{e.name}</h3>
                    <span className="text-xs text-ink/40">{new Date(e.submittedAt).toLocaleString()}</span>
                  </div>
                  <p className="text-sm text-ink/70">Phone: <a href={`tel:${e.phone}`} className="text-mosque">{e.phone}</a></p>
                  <p className="text-sm text-ink/70">Contribution: <span className="font-medium">{e.type}</span></p>
                  {e.message && <p className="text-sm text-ink/60 mt-1 italic">&ldquo;{e.message}&rdquo;</p>}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
