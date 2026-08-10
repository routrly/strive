import { FiUsers, FiAward, FiBookOpen, FiSmile } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'
import AnimatedCounter from '../components/AnimatedCounter'
import AnimatedSection, { AnimatedItem } from '../components/AnimatedSection'

const METRICS = [
  { value: 500, suffix: '+', label: 'Certified Trainers Registered', icon: FiUsers },
  { value: 50, suffix: '+', label: 'Institutions & Partners Served', icon: FiAward },
  { value: 1000, suffix: '+', label: 'Workshops & Modules Conducted', icon: FiBookOpen },
  { value: 50000, suffix: '+', label: 'Students & Learners Impacted', icon: FiSmile },
]

export default function ImpactMetrics() {
  return (
    <section id="impact" className="py-20 px-6 bg-white border-t border-slate-200/60">
      <AnimatedSection as="div" staggerChildren className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Our Reach"
          title="STRIVE Impact by the Numbers"
          subtitle="Building trusted educator networks and delivering verified training excellence across schools, colleges, and corporates."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {METRICS.map((metric) => (
            <AnimatedItem key={metric.label} as="div">
              <AnimatedCounter {...metric} />
            </AnimatedItem>
          ))}
        </div>
      </AnimatedSection>
    </section>
  )
}
