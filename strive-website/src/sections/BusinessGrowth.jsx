import { FiArrowRight, FiCheckCircle, FiShield, FiTrendingUp, FiRepeat } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'
import AnimatedSection, { AnimatedItem } from '../components/AnimatedSection'
import Picture from '../components/Picture'
import businessGrowthRealImg from '../assets/testimonials/session-5.jpg'
import businessGrowthRealImgWebp from '../assets/testimonials/session-5.webp'

const CARDS = [
  { icon: FiShield, title: 'Vetted Client Partners', description: 'Institutions and companies are screened prior to trainer assignment.' },
  { icon: FiRepeat, title: 'Program Management', description: 'STRIVE handles module coordination, schedules, and feedback collection.' },
  { icon: FiTrendingUp, title: 'Long-Term Relationships', description: 'Building multi-semester partnerships for consistent academic impact.' },
  { icon: FiCheckCircle, title: 'Quality Benchmark', description: 'Structured evaluations ensure high training standards across sessions.' },
]

export default function BusinessGrowth() {
  return (
    <section id="business-growth" className="py-20 px-6 bg-slate-50 border-t border-slate-200/60">
      <AnimatedSection as="div" staggerChildren className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="For Institutions & Corporates"
          title="Reliable Trainer Deployment & Management"
          subtitle="Connecting colleges and companies with vetted, professional educators."
        />

        <div className="flex items-center justify-center gap-3 sm:gap-6 mb-12 flex-wrap">
          {[
            { label: 'Colleges & Companies', desc: 'Require Vetted Trainers' },
            { label: 'STRIVE Platform', desc: 'Coordinates & Verifies' },
            { label: 'Certified Trainers', desc: 'Delivers Quality Modules' },
          ].map((node, index) => (
            <AnimatedItem key={node.label} as="div" className="flex items-center gap-3 sm:gap-4">
              <div className="bg-green-950 text-white p-4 rounded-xl text-center max-w-[200px] border border-green-900/60 shadow-sm">
                <span className="block font-bold text-sm">{node.label}</span>
                <span className="block text-[11px] text-slate-300 mt-0.5">{node.desc}</span>
              </div>
              {index < 2 && (
                <FiArrowRight className="text-slate-400 text-lg shrink-0" aria-hidden="true" />
              )}
            </AnimatedItem>
          ))}
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white">
              <Picture
                src={businessGrowthRealImg}
                webpSrc={businessGrowthRealImgWebp}
                alt="Institutional training session"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {CARDS.map((card) => (
              <AnimatedItem key={card.title} as="div">
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm h-full flex flex-col justify-between group">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-lg mb-3 group-hover:bg-primary group-hover:text-white transition-colors">
                      <card.icon />
                    </div>
                    <h3 className="font-bold text-slate-900 text-base mb-1.5 group-hover:text-primary transition-colors">{card.title}</h3>
                    <p className="text-slate-600 text-xs leading-relaxed">{card.description}</p>
                  </div>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  )
}
