import { FiShield, FiCheckCircle, FiRefreshCw, FiTrendingUp, FiUsers, FiAward, FiArrowRight } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'
import AnimatedSection, { AnimatedItem } from '../components/AnimatedSection'

const BENEFITS = [
  { icon: FiShield, label: 'Vendor Protection', desc: 'Secure agreements and payment safeguards' },
  { icon: FiCheckCircle, label: 'Verified Assignments', desc: 'Pre-screened institutional leads' },
  { icon: FiRefreshCw, label: 'Training of Trainers (TOT)', desc: 'Regular skill upgrade workshops' },
  { icon: FiTrendingUp, label: 'Continuous Upskilling', desc: 'Modern curriculum & training resources' },
  { icon: FiUsers, label: 'Peer Educator Network', desc: 'Community collaboration and support' },
  { icon: FiAward, label: 'Career Growth', desc: 'Long-term institutional engagements' },
]

export default function MembershipBenefits() {
  return (
    <section className="py-20 px-6 bg-slate-50 border-t border-slate-200/60">
      <AnimatedSection as="div" staggerChildren className="max-w-6xl mx-auto text-center">
        <SectionHeading
          eyebrow="Member Benefits"
          title="Why Trainers Join STRIVE"
          subtitle="Everything you need to grow your training career with security, confidence, and respect."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 text-left">
          {BENEFITS.map((benefit) => (
            <AnimatedItem
              key={benefit.label}
              as="div"
              className="flex items-start gap-4 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-primary/30 transition-all group"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-xl shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                <benefit.icon />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-slate-900 text-base group-hover:text-primary transition-colors">{benefit.label}</h3>
                <p className="text-xs text-slate-500">{benefit.desc}</p>
              </div>
            </AnimatedItem>
          ))}
        </div>

        <Button as="link" to="/membership" variant="primary" className="text-sm px-8 py-3.5">
          Become a Member <FiArrowRight className="text-base" />
        </Button>
      </AnimatedSection>
    </section>
  )
}
