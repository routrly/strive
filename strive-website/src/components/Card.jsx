export default function Card({ className = '', children }) {
  return (
    <div className={`bg-surface rounded-card p-8 shadow-sm ${className}`}>
      {children}
    </div>
  )
}
