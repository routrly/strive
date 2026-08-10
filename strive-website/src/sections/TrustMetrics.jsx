import { FiUsers, FiAward, FiBookOpen, FiSmile } from 'react-icons/fi'
import AnimatedCounter from '../components/AnimatedCounter'
import AnimatedSection, { AnimatedItem } from '../components/AnimatedSection'

const METRICS = [
  { value: 500, suffix: '+', label: 'Professional Trainers', icon: FiUsers },
  { value: 100, suffix: '+', label: 'Institution Partners', icon: FiAward },
  { value: 1000, suffix: '+', label: 'Training Sessions', icon: FiBookOpen },
  { value: 95, suffix: '%', label: 'Client Satisfaction', icon: FiSmile },
]

export default function TrustMetrics() {
  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200/60 relative">
      <AnimatedSection as="div" staggerChildren className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {METRICS.map((metric) => (
          <AnimatedItem key={metric.label} as="div">
            <AnimatedCounter {...metric} />
          </AnimatedItem>
        ))}
      </AnimatedSection>
    </section>
  )
}
