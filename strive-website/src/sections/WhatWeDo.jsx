import { FiUserCheck, FiBriefcase, FiBookOpen, FiMessageCircle, FiTrendingUp, FiBarChart2, FiUsers, FiHeart } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'
import IconCard from '../components/IconCard'
import AnimatedSection, { AnimatedItem } from '../components/AnimatedSection'

const ITEMS = [
  { icon: FiUserCheck, title: 'Trainer Placement', description: 'Matching certified trainers with verified training opportunities in colleges and companies.' },
  { icon: FiBriefcase, title: 'Corporate Training', description: 'Executive workshops, communication bootcamps, and professional skill enhancement.' },
  { icon: FiBookOpen, title: 'Campus Programs', description: 'Placement preparation, aptitude training, and technical modules for students.' },
  { icon: FiMessageCircle, title: 'Soft Skills Modules', description: 'Interpersonal communication, presentation skills, and workplace etiquette.' },
  { icon: FiTrendingUp, title: 'Trainer Upskilling', description: 'Hands-on pedagogy workshops and subject-matter refresher courses.' },
  { icon: FiBarChart2, title: 'Program Management', description: 'End-to-end management of training schedules, attendance, and feedback.' },
  { icon: FiUsers, title: 'School Empowerment Programs', description: 'Empowering students and educators through transformative learning' },
  { icon: FiHeart, title: 'CSR Projects', description: 'Driving meaningful social impact through education' },
]

export default function WhatWeDo() {
  return (
    <section id="our-work" className="py-20 px-6 bg-white border-t border-slate-200/60">
      <AnimatedSection as="div" staggerChildren className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Our Scope"
          title="What We Do"
          subtitle="Connecting verified trainers with corporate organizations, higher education institutions, and schools."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ITEMS.map((item) => (
            <AnimatedItem key={item.title} as="div">
              <IconCard {...item} />
            </AnimatedItem>
          ))}
        </div>
      </AnimatedSection>
    </section>
  )
}
