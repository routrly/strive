import { FiTarget, FiEye, FiUsers } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'
import AnimatedSection from '../components/AnimatedSection'
import Picture from '../components/Picture'
import aboutRealImg from '../assets/testimonials/session-1.jpg'
import aboutRealImgWebp from '../assets/testimonials/session-1.webp'

export default function About() {
  return (
    <section id="about" className="py-24 px-6 sm:px-8 bg-slate-50 border-t border-slate-200/60">
      <AnimatedSection as="div" className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="About STRIVE"
          title="Bringing Structure and Trust to Training"
          subtitle="Society for Training Resources and Instructional Value Enhancement — Founded to connect skilled trainers with genuine institutional opportunities."
        />

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-200/90 bg-white group">
              <Picture
                src={aboutRealImg}
                webpSrc={aboutRealImgWebp}
                alt="STRIVE training session in progress"
                className="w-full aspect-[4/3] object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-3.5 mb-2.5">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-lg shrink-0">
                  <FiUsers />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Who We Are</h3>
              </div>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                STRIVE is an active community of trainers, educators, and industry professionals. We solve a core problem in freelance training: unverified middleman vendors, delayed payments, and lack of ongoing skill development.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-lg shrink-0">
                    <FiTarget />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Mission</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  To provide trainers with verified contracts, continuous training workshops (TOT), and reliable institutional matching.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-lg shrink-0">
                    <FiEye />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Vision</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  To build a transparent, respected nationwide network where quality education and fair trainer compensation go hand-in-hand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  )
}
