import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import ArchRow from './ArchRow.jsx'

export default function Footer() {
  return (
    <footer className="bg-forest-deep text-ivory/85">
      <ArchRow color="#C6992C" bg="#FAF5E8" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <img src={logo} alt="Raza Welfare Society emblem" className="h-12 w-12 object-contain" />
            <span className="font-display text-lg font-semibold text-white">Raza Welfare Society</span>
          </div>
          <p className="text-sm text-ivory/70 leading-relaxed">
            A community welfare society serving Gurdahan Khurd, Raza Nagar, Manjhi and the
            surrounding villages of Saran, Bihar, since 2021.
          </p>
        </div>

        <div>
          <h3 className="eyebrow text-gold-light mb-4">Quick Links</h3>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/" className="hover:text-gold-light transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-gold-light transition-colors">About Us</Link></li>
            <li><Link to="/our-work" className="hover:text-gold-light transition-colors">Our Work</Link></li>
            <li><Link to="/contribute" className="hover:text-gold-light transition-colors">Contribute</Link></li>
            <li><Link to="/contact" className="hover:text-gold-light transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="eyebrow text-gold-light mb-4">Get Involved</h3>
          <ul className="space-y-2.5 text-sm text-ivory/80">
            <li>Donate ration or funds</li>
            <li>Sponsor a student</li>
            <li>Volunteer your time</li>
            <li>Support a health camp</li>
          </ul>
          <Link
            to="/contribute"
            className="inline-block mt-4 bg-gold hover:bg-gold-deep text-forest-deep font-semibold text-sm px-4 py-2 rounded-full transition-colors"
          >
            Contribute Now
          </Link>
        </div>

        <div>
          <h3 className="eyebrow text-gold-light mb-4">Reach Us</h3>
          <address className="not-italic text-sm text-ivory/80 space-y-2 leading-relaxed">
            <p>Gurdahan Khurd, Raza Nagar,<br />Manjhi, Saran, Bihar</p>
            <p><a href="tel:+910000000000" className="hover:text-gold-light">+91 00000 00000</a></p>
            <p><a href="mailto:info@razawelfaresociety.org" className="hover:text-gold-light">info@razawelfaresociety.org</a></p>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-ivory/55">
          <p>&copy; {new Date().getFullYear()} Raza Welfare Society &middot; Estd. 2021</p>
          <p>Labbaik Ya Rasool Allah</p>
        </div>
      </div>
    </footer>
  )
}
