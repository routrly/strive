export default function SectionHeading({ eyebrow, title, subtitle, align = 'center' }) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'
  return (
    <div className={`max-w-2xl mb-12 ${alignClass}`}>
      {eyebrow && <p className="text-accent font-semibold uppercase tracking-wide text-sm mb-2">{eyebrow}</p>}
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{title}</h2>
      {subtitle && <p className="text-text/70 text-lg">{subtitle}</p>}
    </div>
  )
}
