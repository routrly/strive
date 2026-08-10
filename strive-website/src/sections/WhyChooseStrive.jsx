import { FiShield, FiCheckCircle, FiRefreshCw, FiUsers, FiAward, FiTrendingUp } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'
import IconCard from '../components/IconCard'
import AnimatedSection, { AnimatedItem } from '../components/AnimatedSection'

const REASONS = [
  { icon: FiShield, title: 'Vendor Protection', description: 'Clear agreements that protect trainers from fraudulent brokers and unpaid work.' },
  { icon: FiCheckCircle, title: 'Vetted Assignments', description: 'Every training engagement is verified for fair compensation and institutional backing.' },
  { icon: FiRefreshCw, title: 'TOT Workshops', description: 'Regular Training of Trainers sessions to upgrade training methodologies.' },
  { icon: FiUsers, title: 'Peer Community', description: 'Collaborate and share insights with an active network of fellow trainers.' },
  { icon: FiAward, title: 'Quality Focus', description: 'Selective onboarding ensures high delivery standards across all programs.' },
  { icon: FiTrendingUp, title: 'Career Progression', description: 'Build long-term training relationships with leading colleges and corporates.' },
]

export default function WhyChooseStrive() {
  return (
    <section id="why-strive" className="py-20 px-6 bg-slate-50 border-t border-slate-200/60">
      <AnimatedSection as="div" staggerChildren className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Why STRIVE"
          title="Built for Security, Clarity & Professional Growth"
          subtitle="We eliminate payment risks and contract uncertainty so you can focus entirely on student impact."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6">
          {REASONS.map((reason) => (
            <AnimatedItem key={reason.title} as="div">
              <IconCard {...reason} />
            </AnimatedItem>
          ))}
        </div>
      </AnimatedSection>
    </section>
  )
}
