import SectionHeading from '../components/SectionHeading'
import AnimatedSection, { AnimatedItem } from '../components/AnimatedSection'
import Picture from '../components/Picture'

import session1 from '../assets/testimonials/session-1.jpg'
import session2 from '../assets/testimonials/session-2.jpg'
import session3 from '../assets/testimonials/session-3.jpg'
import session4 from '../assets/testimonials/session-4.jpg'
import session5 from '../assets/testimonials/session-5.jpg'
import session6 from '../assets/testimonials/session-6.jpg'
import session1Webp from '../assets/testimonials/session-1.webp'
import session2Webp from '../assets/testimonials/session-2.webp'
import session3Webp from '../assets/testimonials/session-3.webp'
import session4Webp from '../assets/testimonials/session-4.webp'
import session5Webp from '../assets/testimonials/session-5.webp'
import session6Webp from '../assets/testimonials/session-6.webp'

const GALLERY_ITEMS = [
  {
    image: session1,
    imageWebp: session1Webp,
    title: 'School Empowerment Workshop',
    category: 'School Education',
    institution: 'Transformative Learning & Youth Development',
  },
  {
    image: session2,
    imageWebp: session2Webp,
    title: 'College Campus Training Session',
    category: 'Higher Education',
    institution: 'RVS College – Aptitude & Soft Skills Bootcamp',
  },
  {
    image: session3,
    imageWebp: session3Webp,
    title: 'Nursing & Allied Health Program',
    category: 'Healthcare Education',
    institution: 'Clinical Communication & Professional Ethics',
  },
  {
    image: session4,
    imageWebp: session4Webp,
    title: 'Faculty & Educator Workshop',
    category: 'Training of Trainers (TOT)',
    institution: 'Pedagogy & Classroom Excellence Modules',
  },
  {
    image: session5,
    imageWebp: session5Webp,
    title: 'Corporate Skill Enhancement',
    category: 'Corporate Training',
    institution: 'Executive Communication & Leadership Workshop',
  },
  {
    image: session6,
    imageWebp: session6Webp,
    title: 'CSR Community Impact Project',
    category: 'CSR Initiative',
    institution: 'Social Responsibility Training Initiative',
  },
]

export default function TrainingGallery() {
  return (
    <section id="gallery" className="py-20 px-6 bg-slate-50 border-t border-slate-200/60">
      <AnimatedSection as="div" staggerChildren className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Real Impact"
          title="Training Highlights in Action"
          subtitle="Explore authentic moments from STRIVE training sessions across schools, colleges, nursing institutes, and corporate workshops."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item) => (
            <AnimatedItem key={item.title} as="div">
              <div className="group relative rounded-2xl overflow-hidden shadow-sm border border-slate-200/90 bg-slate-900 aspect-[4/3]">
                <Picture
                  src={item.image}
                  webpSrc={item.imageWebp}
                  alt={`${item.title} - ${item.institution}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-5 text-white z-10">
                  <span className="inline-block self-start px-2.5 py-0.5 rounded bg-primary text-[11px] font-semibold tracking-wide uppercase mb-1.5 shadow-xs">
                    {item.category}
                  </span>
                  <h3 className="font-bold text-base text-white tracking-tight mb-0.5 drop-shadow-xs">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 font-normal opacity-90">
                    {item.institution}
                  </p>
                </div>
              </div>
            </AnimatedItem>
          ))}
        </div>
      </AnimatedSection>
    </section>
  )
}
