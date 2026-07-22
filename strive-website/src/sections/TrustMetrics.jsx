import AnimatedCounter from '../components/AnimatedCounter'

const METRICS = [
  { value: 500, suffix: '+', label: 'Professional Trainers' },
  { value: 100, suffix: '+', label: 'Institution Partners' },
  { value: 1000, suffix: '+', label: 'Training Sessions' },
  { value: 95, suffix: '%', label: 'Client Satisfaction' },
]

export default function TrustMetrics() {
  return (
    <section className="py-16 bg-surface">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {METRICS.map((metric) => (
          <AnimatedCounter key={metric.label} {...metric} />
        ))}
      </div>
    </section>
  )
}
