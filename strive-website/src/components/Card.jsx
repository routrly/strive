export default function Card({ className = '', children, ...props }) {
  return (
    <div
      className={`bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-primary/40 transition-all duration-300 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
