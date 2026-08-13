import ArchRow from './ArchRow.jsx'

export default function PageHero({ eyebrow, title, blurb }) {
  return (
    <section className="bg-forest-deep text-ivory relative overflow-hidden">
      <div className="absolute inset-0 bg-lattice opacity-10" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-14 relative">
        {eyebrow && <p className="eyebrow text-gold-light mb-3">{eyebrow}</p>}
        <h1 className="font-display text-4xl sm:text-5xl font-semibold text-white">{title}</h1>
        {blurb && <p className="mt-4 max-w-2xl text-ivory/75 leading-relaxed">{blurb}</p>}
      </div>
      <ArchRow color="#C6992C" bg="#0C271B" />
    </section>
  )
}
