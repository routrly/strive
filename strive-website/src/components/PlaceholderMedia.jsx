// When replacing with a real <img>, always set loading="lazy" (except the
// Hero video/image, which is above the fold and should load eagerly) and
// keep the `label` text as the `alt` attribute.
export default function PlaceholderMedia({ label, aspect = '16/9', className = '' }) {
  return (
    <div
      role="img"
      aria-label={label}
      style={{ aspectRatio: aspect }}
      className={`flex items-center justify-center bg-surface border border-dashed border-primary/30 text-text/50 text-sm font-medium text-center px-4 ${className}`}
    >
      {label}
    </div>
  )
}
