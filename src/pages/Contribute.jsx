import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import { saveContribution } from '../lib/storage.js'

const CONTRIBUTION_TYPES = [
  'Cash / Donation',
  'Ration & Food Items',
  'Clothes',
  'Books / School Supplies',
  'Volunteer Time',
  'Other',
]

const SOCIETY_PHONE = '910000000000' // TODO: replace with the real WhatsApp/contact number

const emptyForm = { name: '', phone: '', type: CONTRIBUTION_TYPES[0], message: '' }

export default function Contribute() {
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(null)

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }))
  }

  function validate() {
    const e = {}
    if (!form.name.trim()) e.name = 'Please enter your name.'
    const phoneDigits = form.phone.replace(/\D/g, '')
    if (!phoneDigits) e.phone = 'Please enter a phone number.'
    else if (phoneDigits.length < 10) e.phone = 'Enter a valid phone number (at least 10 digits).'
    return e
  }

  function handleSubmit(ev) {
    ev.preventDefault()
    const e = validate()
    setErrors(e)
    if (Object.keys(e).length > 0) return
    const record = saveContribution(form)
    setSubmitted(record)
  }

  function whatsappLink(record) {
    const text = `Assalamu Alaikum, I would like to contribute to Raza Welfare Society.%0A%0AName: ${encodeURIComponent(record.name)}%0APhone: ${encodeURIComponent(record.phone)}%0AContribution: ${encodeURIComponent(record.type)}%0ANote: ${encodeURIComponent(record.message || '-')}`
    return `https://wa.me/${SOCIETY_PHONE}?text=${text}`
  }

  if (submitted) {
    return (
      <div>
        <PageHero eyebrow="Jazak Allah Khair" title="Your Contribution Has Been Noted" />
        <section className="bg-ivory">
          <div className="max-w-xl mx-auto px-4 sm:px-6 py-20 text-center">
            <div className="w-16 h-16 rounded-full bg-forest text-white flex items-center justify-center mx-auto mb-6">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-forest mb-4">
              Thank you, {submitted.name}.
            </h2>
            <p className="text-ink/65 leading-relaxed mb-2">
              We&apos;ve saved your details for <span className="font-semibold text-forest">{submitted.type}</span> on
              this device. Our team will reach out to you on <span className="font-semibold text-forest">{submitted.phone}</span> to
              arrange the next step.
            </p>
            <p className="text-ink/50 text-sm leading-relaxed mb-9">
              To make sure we see your message right away, you can also send it to us
              directly on WhatsApp using the button below.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={whatsappLink(submitted)}
                target="_blank"
                rel="noreferrer"
                className="bg-forest hover:bg-forest-light text-white font-semibold px-7 py-3.5 rounded-full shadow-card transition-colors"
              >
                Send via WhatsApp
              </a>
              <button
                onClick={() => { setSubmitted(null); setForm(emptyForm) }}
                className="border border-forest/30 hover:border-gold text-forest font-medium px-7 py-3.5 rounded-full transition-colors"
              >
                Submit Another
              </button>
            </div>
            <Link to="/" className="block mt-8 text-sm text-mosque hover:text-forest underline underline-offset-4">
              Back to Home
            </Link>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div>
      <PageHero
        eyebrow="Support The Society"
        title="Contribute"
        blurb="Tell us your details and what you'd like to give — our team will contact you on the number you provide."
      />

      <section className="bg-ivory">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 grid lg:grid-cols-5 gap-12">
          {/* Info side */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <p className="eyebrow text-gold-deep mb-3">Two Ways To Reach Us</p>
              <h2 className="font-display text-2xl font-semibold text-forest mb-4">
                Fill the Form, or Contact Us Directly
              </h2>
              <p className="text-ink/65 text-sm leading-relaxed">
                Fill in the form and our volunteers will call you back, or reach out to us
                straight away using the details below.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-forest/10 shadow-card p-6 space-y-4">
              <a href={`tel:+${SOCIETY_PHONE}`} className="flex items-center gap-4 group">
                <span className="w-11 h-11 rounded-full bg-forest/5 border border-gold/30 flex items-center justify-center shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="#163C2C" strokeWidth="1.8" /></svg>
                </span>
                <span>
                  <span className="block text-sm font-semibold text-forest group-hover:text-mosque">Call Us</span>
                  <span className="block text-xs text-ink/55">+91 00000 00000</span>
                </span>
              </a>
              <a href={`https://wa.me/${SOCIETY_PHONE}`} target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                <span className="w-11 h-11 rounded-full bg-forest/5 border border-gold/30 flex items-center justify-center shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 2a10 10 0 00-8.5 15.2L2 22l4.9-1.5A10 10 0 1012 2z" stroke="#163C2C" strokeWidth="1.8" /></svg>
                </span>
                <span>
                  <span className="block text-sm font-semibold text-forest group-hover:text-mosque">WhatsApp</span>
                  <span className="block text-xs text-ink/55">Message us directly</span>
                </span>
              </a>
              <div className="flex items-center gap-4">
                <span className="w-11 h-11 rounded-full bg-forest/5 border border-gold/30 flex items-center justify-center shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 21s-7-6.4-9.5-10.5C.5 6.5 3 3 6.5 3 9 3 11 5 12 6.5 13 5 15 3 17.5 3 21 3 23.5 6.5 21.5 10.5 19 14.6 12 21 12 21z" stroke="#163C2C" strokeWidth="1.6" /></svg>
                </span>
                <span>
                  <span className="block text-sm font-semibold text-forest">Visit Us</span>
                  <span className="block text-xs text-ink/55">Gurdahan Khurd, Raza Nagar, Manjhi, Saran, Bihar</span>
                </span>
              </div>
            </div>
          </div>

          {/* Form side */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} noValidate className="bg-white rounded-2xl border border-forest/10 shadow-card p-7 sm:p-9 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-forest mb-1.5">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(e) => update('name', e.target.value)}
                  placeholder="e.g. Mohammad Aslam"
                  className={`w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 ${errors.name ? 'border-red-400' : 'border-forest/15'}`}
                />
                {errors.name && <p className="text-xs text-red-500 mt-1.5">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-forest mb-1.5">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => update('phone', e.target.value)}
                  placeholder="e.g. 98765 43210"
                  className={`w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 ${errors.phone ? 'border-red-400' : 'border-forest/15'}`}
                />
                {errors.phone && <p className="text-xs text-red-500 mt-1.5">{errors.phone}</p>}
              </div>

              <div>
                <label htmlFor="type" className="block text-sm font-semibold text-forest mb-1.5">
                  What Would You Like to Contribute?
                </label>
                <select
                  id="type"
                  value={form.type}
                  onChange={(e) => update('type', e.target.value)}
                  className="w-full rounded-xl border border-forest/15 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 bg-white"
                >
                  {CONTRIBUTION_TYPES.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-forest mb-1.5">
                  Anything Else We Should Know? <span className="font-normal text-ink/40">(optional)</span>
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={form.message}
                  onChange={(e) => update('message', e.target.value)}
                  placeholder="e.g. amount, quantity, or best time to call you"
                  className="w-full rounded-xl border border-forest/15 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gold hover:bg-gold-deep text-forest-deep font-semibold py-3.5 rounded-full shadow-gold transition-colors"
              >
                Submit Contribution
              </button>
              <p className="text-xs text-ink/40 text-center leading-relaxed">
                Your details are saved on this device and used only by Raza Welfare Society to
                get in touch with you.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
