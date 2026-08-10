import AnimatedSection from '../components/AnimatedSection'
import { FiBookOpen, FiAward, FiHeart, FiBriefcase, FiCheckSquare } from 'react-icons/fi'

const PARTNERS = [
  { icon: FiAward, label: 'RVS College of Allied Health Sciences' },
  { icon: FiBookOpen, label: 'Higher Education Colleges & Institutes' },
  { icon: FiHeart, label: 'Healthcare & Nursing Training Programs' },
  { icon: FiBriefcase, label: 'Corporate Skills & Executive Workshops' },
  { icon: FiCheckSquare, label: 'CSR Educational Impact Initiatives' },
]

export default function TrustedBy() {
  return (
    <section id="trusted-by" className="py-10 px-6 bg-slate-900 text-white border-b border-slate-800">
      <AnimatedSection as="div" className="max-w-7xl mx-auto">
        <p className="text-center text-xs font-semibold uppercase tracking-wider text-slate-400 mb-6">
          Trusted by Academic Institutions, Colleges & Corporate Partners Across India
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-12 opacity-80 hover:opacity-100 transition-opacity">
          {PARTNERS.map((partner) => (
            <div
              key={partner.label}
              className="flex items-center gap-2.5 text-slate-300 hover:text-secondary transition-colors duration-200 cursor-default group"
            >
              <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                <partner.icon className="text-base" />
              </div>
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-slate-200 group-hover:text-white transition-colors">
                {partner.label}
              </span>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  )
}
