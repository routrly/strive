import { useInView } from 'react-intersection-observer'
import useCountUp from '../hooks/useCountUp'

export default function AnimatedCounter({ value, suffix = '', label, icon: Icon }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })
  const count = useCountUp(value, { start: inView, duration: 1400 })

  return (
    <div
      ref={ref}
      className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center text-center group"
    >
      {Icon && (
        <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-xl mb-3.5 group-hover:scale-105 transition-transform duration-200">
          <Icon />
        </div>
      )}
      <div className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-1">
        {count}
        {suffix}
      </div>
      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{label}</p>
    </div>
  )
}
