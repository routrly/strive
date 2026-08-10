import { FiCheckCircle, FiDownload } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'
import AnimatedSection from '../components/AnimatedSection'
import brochureCover from '../assets/brochure-cover.jpg'

export default function Brochure() {
  return (
    <section id="brochure" className="py-24 px-6 bg-slate-50 border-t border-slate-200/60">
      <AnimatedSection as="div" className="max-w-6xl mx-auto">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-md grid md:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="md:col-span-5 flex justify-center">
            <div className="relative rounded-2xl overflow-hidden shadow-md border border-slate-200/90 max-w-xs group">
              <img
                src={brochureCover}
                alt="STRIVE official brochure preview cover"
                loading="lazy"
                className="w-full aspect-[4/5] object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out"
              />
            </div>
          </div>

          <div className="md:col-span-7 space-y-6">
            <SectionHeading
              align="left"
              eyebrow="Official Document"
              title="Download STRIVE Brochure"
              subtitle="Download our brochure to learn more about STRIVE's programs and initiatives."
            />

            {/* Direct Download PDF Primary CTA Button */}
            <div className="space-y-4 pt-2">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href="/strive-brochure.pdf"
                  download
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold text-white bg-primary hover:bg-primary-dark shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  <FiDownload className="text-xl" /> Download PDF Brochure
                </a>
              </div>

              <p className="text-xs text-slate-500 font-medium flex items-center gap-2">
                <FiCheckCircle className="text-primary text-sm shrink-0" /> Official Program Specs • Direct Free Download • 2.2 MB PDF
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  )
}
