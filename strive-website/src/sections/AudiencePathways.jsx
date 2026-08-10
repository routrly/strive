import { Link } from 'react-router-dom'
import { FiUserCheck, FiBookOpen, FiHeart, FiArrowRight } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'
import AnimatedSection, { AnimatedItem } from '../components/AnimatedSection'

const PATHWAYS = [
  {
    icon: FiUserCheck,
    audience: 'I am a Trainer',
    title: 'Join the STRIVE Network',
    description: 'Get verified training assignments, vendor protection, TOT upskilling, and transparent contracts.',
    cta: 'Apply as a Trainer',
    to: '/membership',
    accent: 'border-l-primary',
  },
  {
    icon: FiBookOpen,
    audience: 'I am an Institution',
    title: 'Hire Certified Trainers',
    description: 'Access pre-screened educators for soft skills, aptitude, verbal, and technical placement training.',
    cta: 'Request Trainers',
    to: '/contact?type=institution',
    accent: 'border-l-secondary',
  },
  {
    icon: FiHeart,
    audience: 'I am a CSR / Corporate Partner',
    title: 'Partner with STRIVE',
    description: 'Execute high-impact educational CSR initiatives and transformative school empowerment modules.',
    cta: 'Collaborate with Us',
    to: '/contact?type=csr',
    accent: 'border-l-accent',
  },
]

export default function AudiencePathways() {
  return (
    <section id="pathways" className="py-20 px-6 bg-slate-50 border-t border-slate-200/60">
      <AnimatedSection as="div" staggerChildren className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Targeted Solutions"
          title="Choose Your Path with STRIVE"
          subtitle="Whether you are an educator looking for verified opportunities or an institution seeking certified trainers, we are ready to partner with you."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {PATHWAYS.map((path) => (
            <AnimatedItem key={path.title} as="div">
              <div className={`bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-primary/40 transition-all duration-300 flex flex-col justify-between h-full border-l-4 ${path.accent} group`}>
                <div className="space-y-4">
                  <span className="inline-block px-3 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wider">
                    {path.audience}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-xl group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                    <path.icon />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-primary transition-colors">
                    {path.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {path.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100">
                  <Link
                    to={path.to}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors group-hover:translate-x-1 transition-transform"
                  >
                    {path.cta} <FiArrowRight className="text-base" />
                  </Link>
                </div>
              </div>
            </AnimatedItem>
          ))}
        </div>
      </AnimatedSection>
    </section>
  )
}
