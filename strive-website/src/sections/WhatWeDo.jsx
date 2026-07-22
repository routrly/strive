import { FiUserCheck, FiBriefcase, FiBookOpen, FiMessageCircle, FiTrendingUp, FiBarChart2 } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'
import IconCard from '../components/IconCard'

const ITEMS = [
  { icon: FiUserCheck, title: 'Connect Trainers', description: 'Linking trainers with verified opportunities.' },
  { icon: FiBriefcase, title: 'Corporate Training', description: 'Delivering impactful corporate learning programs.' },
  { icon: FiBookOpen, title: 'College Training', description: 'Structured training programs for institutions.' },
  { icon: FiMessageCircle, title: 'Soft Skills', description: 'Building communication and interpersonal skills.' },
  { icon: FiTrendingUp, title: 'Professional Development', description: 'Continuous growth for trainers.' },
  { icon: FiBarChart2, title: 'Business Growth', description: 'Enabling growth for institutions and trainers alike.' },
]

export default function WhatWeDo() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="Our Work" title="What We Do" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ITEMS.map((item) => (
            <IconCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
