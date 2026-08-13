import PageHero from '../components/PageHero.jsx'

const SOCIETY_PHONE = '910000000000' // TODO: replace with the real contact number

export default function Contact() {
  return (
    <div>
      <PageHero
        eyebrow="Get In Touch"
        title="Contact Us"
        blurb="Have a question, or want to arrange your contribution directly? Reach us any of these ways."
      />

      <section className="bg-ivory">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 grid lg:grid-cols-3 gap-7">
          <div className="bg-white rounded-2xl border border-forest/10 shadow-card p-8 text-center">
            <div className="w-14 h-14 mx-auto rounded-full bg-forest/5 border border-gold/30 flex items-center justify-center mb-5">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 21s-7-6.4-9.5-10.5C.5 6.5 3 3 6.5 3 9 3 11 5 12 6.5 13 5 15 3 17.5 3 21 3 23.5 6.5 21.5 10.5 19 14.6 12 21 12 21z" stroke="#163C2C" strokeWidth="1.6" /></svg>
            </div>
            <h3 className="font-display text-xl font-semibold text-forest mb-2">Our Address</h3>
            <p className="text-ink/65 text-sm leading-relaxed">
              Gurdahan Khurd, Raza Nagar,<br />Manjhi, Saran, Bihar
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-forest/10 shadow-card p-8 text-center">
            <div className="w-14 h-14 mx-auto rounded-full bg-forest/5 border border-gold/30 flex items-center justify-center mb-5">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="#163C2C" strokeWidth="1.8" /></svg>
            </div>
            <h3 className="font-display text-xl font-semibold text-forest mb-2">Call or WhatsApp</h3>
            <p className="text-ink/65 text-sm leading-relaxed mb-1">
              <a href={`tel:+${SOCIETY_PHONE}`} className="hover:text-mosque">+91 00000 00000</a>
            </p>
            <a href={`https://wa.me/${SOCIETY_PHONE}`} target="_blank" rel="noreferrer" className="text-xs text-mosque underline underline-offset-4">
              Message on WhatsApp
            </a>
          </div>

          <div className="bg-white rounded-2xl border border-forest/10 shadow-card p-8 text-center">
            <div className="w-14 h-14 mx-auto rounded-full bg-forest/5 border border-gold/30 flex items-center justify-center mb-5">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 4h16v16H4V4z" stroke="#163C2C" strokeWidth="1.6" /><path d="M4 6l8 7 8-7" stroke="#163C2C" strokeWidth="1.6" /></svg>
            </div>
            <h3 className="font-display text-xl font-semibold text-forest mb-2">Email</h3>
            <p className="text-ink/65 text-sm leading-relaxed">
              <a href="mailto:info@razawelfaresociety.org" className="hover:text-mosque">info@razawelfaresociety.org</a>
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ivory pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="rounded-2xl overflow-hidden border border-forest/10 shadow-card">
            <iframe
              title="Map location of Manjhi, Saran, Bihar"
              src="https://maps.google.com/maps?q=Manjhi%2C%20Saran%2C%20Bihar&t=&z=12&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="380"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="text-xs text-ink/40 text-center mt-3">
            Map shows the general area of Manjhi, Saran — update the query in the code with your exact location for a precise pin.
          </p>
        </div>
      </section>
    </div>
  )
}
