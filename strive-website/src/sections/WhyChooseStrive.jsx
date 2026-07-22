import { FiShield, FiCheckCircle, FiRefreshCw, FiUsers, FiAward, FiTrendingUp } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'
import IconCard from '../components/IconCard'

const REASONS = [
  { icon: FiShield, title: 'Protection First', description: 'Protection from fraudulent vendors.' },
  { icon: FiCheckCircle, title: 'Verified Opportunities', description: 'Every opportunity is verified.' },
  { icon: FiRefreshCw, title: 'Training of Trainers (TOT)', description: 'Continuous trainer development.' },
  { icon: FiUsers, title: 'Strong Professional Network', description: 'Community-driven growth.' },
  { icon: FiAward, title: 'Quality Over Quantity', description: 'Maintaining high standards.' },
  { icon: FiTrendingUp, title: 'Long-Term Career Growth', description: 'Professional opportunities.' },
]

export default function WhyChooseStrive() {
  return (
    <section className="py-20 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="Why STRIVE" title="Why Choose STRIVE" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REASONS.map((reason) => (
            <IconCard key={reason.title} {...reason} />
          ))}
        </div>
      </div>
    </section>
  )
}
