import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="bg-ivory min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <p className="font-display text-6xl font-semibold text-forest mb-3">404</p>
        <p className="text-ink/60 mb-8">This page could not be found.</p>
        <Link to="/" className="inline-block bg-gold hover:bg-gold-deep text-forest-deep font-semibold px-6 py-3 rounded-full shadow-gold transition-colors">
          Back to Home
        </Link>
      </div>
    </div>
  )
}
