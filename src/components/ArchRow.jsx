// Signature motif: a repeating horseshoe-arch arcade, echoing the mosque dome
// and minarets on the Society's own crest. Used as a section divider.
export default function ArchRow({ color = '#163C2C', bg = 'transparent', flip = false, className = '' }) {
  return (
    <svg
      viewBox="0 0 240 40"
      preserveAspectRatio="none"
      className={`w-full h-10 block ${flip ? 'rotate-180' : ''} ${className}`}
      aria-hidden="true"
    >
      <rect width="240" height="40" fill={bg} />
      {Array.from({ length: 10 }).map((_, i) => {
        const x = i * 24
        return (
          <path
            key={i}
            d={`M${x} 40 V18 a12 12 0 0 1 24 0 V40 Z`}
            fill={bg}
            stroke={color}
            strokeWidth="1.6"
          />
        )
      })}
      <line x1="0" y1="18" x2="240" y2="18" stroke={color} strokeWidth="1.2" opacity="0.5" />
    </svg>
  )
}
