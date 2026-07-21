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
