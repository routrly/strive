import { FiShield, FiCheckCircle, FiRefreshCw, FiTrendingUp, FiUsers, FiAward } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'
import AnimatedSection, { AnimatedItem } from '../components/AnimatedSection'

const BENEFITS = [
  { icon: FiShield, label: 'Protection from Fraudulent Vendors' },
  { icon: FiCheckCircle, label: 'Verified Opportunities' },
  { icon: FiRefreshCw, label: 'Training of Trainers' },
  { icon: FiTrendingUp, label: 'Skill Development' },
  { icon: FiUsers, label: 'Professional Network' },
  { icon: FiAward, label: 'Career Growth' },
]

export default function MembershipBenefits() {
  return (
    <section className="py-20 px-6">
      <AnimatedSection as="div" staggerChildren className="max-w-6xl mx-auto text-center">
        <SectionHeading eyebrow="More Than Just a Network" title="Become a STRIVE Member" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 text-left">
          {BENEFITS.map((benefit) => (
            <AnimatedItem key={benefit.label} as="div" className="flex items-center gap-3 bg-surface rounded-card p-5">
              <benefit.icon className="text-primary text-2xl shrink-0" />
              <span className="font-medium text-text">{benefit.label}</span>
            </AnimatedItem>
          ))}
        </div>
        <Button as="link" to="/membership" variant="primary">
          Become a Member
        </Button>
      </AnimatedSection>
    </section>
  )
}
