import SectionHeading from '../components/SectionHeading'
import AnimatedSection, { AnimatedItem } from '../components/AnimatedSection'

const STEPS = [
  { step: '1', title: 'Submit Profile', desc: 'Fill out your trainer category & training background.' },
  { step: '2', title: 'Review', desc: 'Our team evaluates your domain experience & credentials.' },
  { step: '3', title: 'Verification', desc: 'Brief interaction and background check.' },
  { step: '4', title: 'Onboarding', desc: 'Official entry into the STRIVE trainer network.' },
  { step: '5', title: 'Assignments', desc: 'Receive verified training opportunities.' },
]

export default function MembershipProcess() {
  return (
    <section className="py-20 px-6 bg-white border-t border-slate-200/60">
      <AnimatedSection as="div" staggerChildren className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Onboarding"
          title="How to Join STRIVE"
          subtitle="A straightforward process to maintain trainer standards and fair matching."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {STEPS.map((item) => (
            <AnimatedItem
              key={item.title}
              as="div"
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col items-start gap-3"
            >
              <div className="w-9 h-9 rounded-full bg-primary text-white font-bold flex items-center justify-center text-sm">
                {item.step}
              </div>
              <h3 className="font-bold text-slate-900 text-base">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
            </AnimatedItem>
          ))}
        </div>
      </AnimatedSection>
    </section>
  )
}
