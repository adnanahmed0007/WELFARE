import PageHero from '../components/PageHero.jsx'
import { Link } from 'react-router-dom'

const values = [
  { title: 'Sincerity (Ikhlas)', text: 'Every initiative is carried out purely for the sake of helping people, without expectation of return.' },
  { title: 'Transparency', text: 'Contributions are used directly for the stated purpose within the community we serve.' },
  { title: 'Community First', text: 'Decisions are guided by what the families of Manjhi and nearby villages actually need.' },
  { title: 'Respect & Dignity', text: 'Every person we assist is treated with the same respect, regardless of what they can give back.' },
]

const committee = [
  { role: 'Patron', name: 'Add Name' },
  { role: 'President', name: 'Add Name' },
  { role: 'General Secretary', name: 'Add Name' },
  { role: 'Treasurer', name: 'Add Name' },
]

export default function About() {
  return (
    <div>
      <PageHero
        eyebrow="Our Story"
        title="About Raza Welfare Society"
        blurb="Founded in 2021 in Gurdahan Khurd, Raza Nagar, Manjhi, in Saran district, Bihar — built by the community, for the community."
      />

      <section className="bg-ivory">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <p className="eyebrow text-gold-deep mb-3">How We Began</p>
            <h2 className="font-display text-3xl font-semibold text-forest mb-5">
              A Small Village Effort That Kept Growing
            </h2>
            <div className="space-y-4 text-ink/70 leading-relaxed">
              <p>
                Raza Welfare Society was established in 2021 by residents of Gurdahan Khurd,
                Raza Nagar in Manjhi, Saran district, who saw families around them going without
                ration, medicine, or school fees during difficult months.
              </p>
              <p>
                What started as neighbours pooling together a few essentials has since grown
                into an organised, volunteer-run society &mdash; one that now coordinates
                ration drives, educational support, and health camps for the wider community,
                entirely funded by local and well-wishing contributors.
              </p>
              <p>
                The Society carries the name <span className="font-semibold text-forest">Raza</span>,
                and works under the banner &ldquo;Labbaik Ya Rasool Allah&rdquo; &mdash; reflecting the
                spirit of service that guides everything it does.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-forest/10 shadow-card p-8 sm:p-10">
            <h3 className="font-display text-2xl font-semibold text-forest mb-6">Our Mission &amp; Vision</h3>
            <div className="mb-6">
              <p className="eyebrow text-mosque mb-2">Mission</p>
              <p className="text-ink/70 leading-relaxed">
                To stand beside families in Manjhi and the surrounding villages in their time
                of need &mdash; through food, education, health and community support &mdash;
                so that no household is left to struggle alone.
              </p>
            </div>
            <div>
              <p className="eyebrow text-mosque mb-2">Vision</p>
              <p className="text-ink/70 leading-relaxed">
                A self-reliant, cared-for community where every child can study, every family
                can eat with dignity, and neighbours continue to look out for one another.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-forest-deep text-ivory">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="eyebrow text-gold-light mb-3">What Guides Us</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white">Our Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-gold-light/40 transition-colors">
                <h3 className="font-display text-xl font-semibold text-gold-light mb-2">{v.title}</h3>
                <p className="text-ivory/70 text-sm leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMITTEE */}
      <section className="bg-ivory">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="eyebrow text-gold-deep mb-3">Managed By Volunteers</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-forest">The Committee</h2>
            <p className="mt-4 text-ink/60 text-sm leading-relaxed">
              Add your committee members&apos; names here &mdash; this section is ready to be
              filled in with your office bearers.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {committee.map((c) => (
              <div key={c.role} className="text-center bg-white rounded-2xl border border-forest/10 shadow-card p-6">
                <div className="w-16 h-16 mx-auto rounded-full bg-forest/5 border border-gold/30 mb-4" />
                <p className="font-display text-lg font-semibold text-forest">{c.name}</p>
                <p className="eyebrow text-gold-deep mt-1 text-[0.65rem]">{c.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mosque text-white text-center py-16 px-4">
        <h2 className="font-display text-3xl font-semibold mb-4">Want to be part of this?</h2>
        <p className="text-white/80 mb-8 max-w-xl mx-auto">
          Join us as a contributor or volunteer and help us reach more families in Manjhi.
        </p>
        <Link to="/contribute" className="inline-block bg-gold hover:bg-gold-deep text-forest-deep font-semibold px-7 py-3.5 rounded-full shadow-gold transition-colors">
          Contribute Now
        </Link>
      </section>
    </div>
  )
}
