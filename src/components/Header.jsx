import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/our-work', label: 'Our Work' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [])

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-forest-deep text-ivory/80 text-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-1.5 flex items-center justify-between gap-3">
          <p className="truncate">
            <span className="hidden sm:inline">Gurdahan Khurd, Raza Nagar, Manjhi &middot; Saran, Bihar</span>
            <span className="sm:hidden">Manjhi, Saran, Bihar</span>
            <span className="mx-2 text-gold-light">&middot;</span>
            Estd. 2021
          </p>
          <a href="tel:+910000000000" className="hidden sm:inline text-gold-light hover:text-gold transition-colors">
            Call: +91 00000 00000
          </a>
        </div>
      </div>

      <div className="bg-ivory/95 backdrop-blur border-b border-forest/10 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center gap-3 min-w-0">
              <img src={logo} alt="Raza Welfare Society emblem" className="h-14 w-14 object-contain shrink-0" />
              <span className="min-w-0">
                <span className="block font-display text-xl sm:text-2xl font-semibold text-forest leading-tight truncate">
                  Raza Welfare Society
                </span>
                <span className="block font-urdu text-mosque text-sm leading-tight truncate">
                  رضا ویلفیئر سوسائٹی
                </span>
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === '/'}
                  className={({ isActive }) =>
                    `eyebrow tracking-[0.12em] normal-case text-[0.95rem] font-body font-medium transition-colors ${
                      isActive ? 'text-forest border-b-2 border-gold' : 'text-ink/70 hover:text-forest'
                    } pb-1`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
              <Link
                to="/contribute"
                className="bg-gold hover:bg-gold-deep text-forest-deep font-semibold px-5 py-2.5 rounded-full shadow-gold transition-colors"
              >
                Contribute
              </Link>
            </nav>

            <div className="lg:hidden flex items-center gap-2">
              <Link
                to="/contribute"
                className="bg-gold hover:bg-gold-deep text-forest-deep font-semibold px-4 py-2 rounded-full text-sm shadow-gold"
              >
                Contribute
              </Link>
              <button
                aria-label={open ? 'Close menu' : 'Open menu'}
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                className="p-2 rounded-md border border-forest/20 text-forest"
              >
                {open ? (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                ) : (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {open && (
          <div className="lg:hidden border-t border-forest/10 bg-ivory">
            <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex flex-col">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `py-3 border-b border-forest/10 font-body ${isActive ? 'text-forest font-semibold' : 'text-ink/75'}`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
