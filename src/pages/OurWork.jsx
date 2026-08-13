import PageHero from '../components/PageHero.jsx'
import { Link } from 'react-router-dom'

const programmes = [
  {
    title: 'Ration & Essential Aid',
    text: 'Monthly and emergency ration kits — atta, rice, dal, oil and basic essentials — delivered to families identified as most in need within the community.',
  },
  {
    title: 'Ramzan & Eid Support',
    text: 'Special food packets during Ramzan, and Eid essentials such as new clothes for children, so every household can celebrate with dignity.',
  },
  {
    title: 'Educational Support',
    text: 'Books, uniforms, school bags and fee assistance for children from low-income families, along with support for Deeni Taleem at the local Madaris.',
  },
  {
    title: 'Health Camps & Medical Aid',
    text: 'Periodic free health check-up camps and support with medicine costs for families who cannot otherwise afford treatment.',
  },
  {
    title: 'Marriage Assistance',
    text: 'Support toward essential wedding expenses for needy families, in keeping with the community\u2019s tradition of helping one another.',
  },
  {
    title: 'Community Gatherings',
    text: 'Milad and community events that bring the village together, strengthening the bonds the Society is built on.',
  },
]

export default function OurWork() {
  return (
    <div>
      <PageHero
        eyebrow="Our Programmes"
        title="Our Work in the Community"
        blurb="Every programme below runs on contributions from people like you — cash, kind, or time. Here is where it goes."
      />

      <section className="bg-ivory">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
          <div className="grid md:grid-cols-2 gap-7">
            {programmes.map((p, i) => (
              <div key={p.title} className="flex gap-5 bg-white rounded-2xl border border-forest/10 shadow-card p-7">
                <div className="shrink-0 w-12 h-12 rounded-full bg-forest text-gold-light flex items-center justify-center font-display text-lg font-semibold">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-forest mb-1.5">{p.title}</h3>
                  <p className="text-ink/65 text-sm leading-relaxed">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest text-ivory">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 text-center">
          <p className="eyebrow text-gold-light mb-3">How You Can Help</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white mb-5">
            Choose Any of These Programmes to Support
          </h2>
          <p className="text-ivory/70 max-w-xl mx-auto mb-9 leading-relaxed">
            When you fill out the contribute form, you can tell us exactly which of these
            areas you&apos;d like your contribution to go toward.
          </p>
          <Link to="/contribute" className="inline-block bg-gold hover:bg-gold-deep text-forest-deep font-semibold px-8 py-4 rounded-full shadow-gold transition-colors">
            Contribute Now
          </Link>
        </div>
      </section>
    </div>
  )
}
