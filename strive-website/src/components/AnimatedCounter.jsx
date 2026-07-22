import { useInView } from 'react-intersection-observer'
import useCountUp from '../hooks/useCountUp'

export default function AnimatedCounter({ value, suffix = '', label }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 })
  const count = useCountUp(value, { start: inView, duration: 1500 })

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-extrabold text-primary">
        {count}
        {suffix}
      </div>
      <p className="text-text/70 mt-2">{label}</p>
    </div>
  )
}
