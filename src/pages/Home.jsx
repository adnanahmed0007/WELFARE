import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import ArchRow from '../components/ArchRow.jsx'

const pillars = [
  {
    title: 'Ration & Essential Aid',
    text: 'Monthly ration kits and essential household goods for families who are struggling to make ends meet.',
  },
  {
    title: 'Education Support',
    text: 'Books, uniforms and fee assistance for children from the community, including support for Deeni Taleem.',
  },
  {
    title: 'Health & Eid Support',
    text: 'Free health camps, medicine assistance, and seasonal support during Ramzan and Eid for needy families.',
  },
]

const stats = [
  { n: '2021', l: 'Established' },
  { n: '100%', l: 'Community Funded' },
  { n: '3+', l: 'Core Programmes' },
  { n: '1', l: 'Village, One Purpose' },
]

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-forest-deep">
        <div className="absolute inset-0 bg-lattice opacity-10" />
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-mosque/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-gold/10 blur-3xl" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-20 relative grid lg:grid-cols-2 gap-12 items-center">
          <div className="fade-up text-center lg:text-left">
            <p className="eyebrow text-gold-light mb-4">Gurdahan Khurd &middot; Raza Nagar &middot; Manjhi &middot; Saran, Bihar</p>
            <h1 className="font-display text-4xl sm:text-6xl font-semibold text-white leading-[1.08]">
              Standing With Our Community, <span className="text-gold-light italic">Since 2021</span>
            </h1>
            <p className="mt-6 text-ivory/75 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              Raza Welfare Society is a volunteer-run welfare body serving the families of
              Manjhi and nearby villages &mdash; through ration aid, education support, health
              camps and community care, built entirely on the generosity of people like you.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/contribute"
                className="bg-gold hover:bg-gold-deep text-forest-deep font-semibold px-7 py-3.5 rounded-full shadow-gold transition-colors text-center"
              >
                Contribute to the Society
              </Link>
              <Link
                to="/about"
                className="border border-ivory/30 hover:border-gold-light text-ivory hover:text-gold-light font-medium px-7 py-3.5 rounded-full transition-colors text-center"
              >
                Learn About Us
              </Link>
            </div>
          </div>

          <div className="fade-up flex justify-center lg:justify-end" style={{ animationDelay: '0.15s' }}>
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gold/20 blur-2xl scale-110" />
              <div className="relative bg-ivory rounded-full p-3 shadow-card ring-4 ring-gold/40">
                <img src={logo} alt="Raza Welfare Society official emblem" className="w-56 h-56 sm:w-72 sm:h-72 object-contain" />
              </div>
            </div>
          </div>
        </div>

        <ArchRow color="#C6992C" bg="#0C271B" />
      </section>

      {/* STATS STRIP */}
      <section className="bg-forest text-ivory">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.l}>
              <p className="font-display text-3xl sm:text-4xl font-semibold text-gold-light">{s.n}</p>
              <p className="eyebrow text-ivory/70 mt-1">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PILLARS */}
      <section className="bg-ivory">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="eyebrow text-gold-deep mb-3">What We Do</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-forest">
              Three Pillars of Our Work
            </h2>
            <p className="mt-4 text-ink/65 leading-relaxed">
              Every rupee and every hour given to the Society is put directly back into the
              community &mdash; there is no overhead, only outreach.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className="bg-white rounded-2xl border border-forest/10 p-8 shadow-card hover:-translate-y-1 transition-transform"
              >
                <div className="w-14 h-14 rounded-full bg-forest/5 border border-gold/30 flex items-center justify-center mb-6">
                  <span className="font-display text-2xl text-gold-deep">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="font-display text-2xl font-semibold text-forest mb-2">{p.title}</h3>
                <p className="text-ink/65 text-sm leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE / MOTTO BAND */}
      <section className="bg-mosque text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 text-center relative">
          <p className="font-urdu text-2xl sm:text-3xl mb-4">لبیک یا رسول اللہ</p>
          <p className="leaf-flourish font-display text-xl sm:text-2xl italic text-white/90">
            &ldquo;Serving people is serving faith&rdquo;
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ivory">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-20 text-center">
          <p className="eyebrow text-gold-deep mb-3">Every Contribution Counts</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-forest mb-5">
            Ready to Support the Society?
          </h2>
          <p className="text-ink/65 max-w-xl mx-auto mb-9 leading-relaxed">
            Whether it&apos;s ration, funds, clothes, or your time as a volunteer &mdash; tell us
            what you&apos;d like to give and our team will reach out to arrange it.
          </p>
          <Link
            to="/contribute"
            className="inline-block bg-forest hover:bg-forest-light text-white font-semibold px-8 py-4 rounded-full shadow-card transition-colors"
          >
            Go to Contribute Page
          </Link>
        </div>
      </section>
    </div>
  )
}
