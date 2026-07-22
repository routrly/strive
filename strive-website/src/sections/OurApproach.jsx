import { FiTool, FiUsers, FiGlobe, FiTarget } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'
import IconCard from '../components/IconCard'

const ITEMS = [
  { icon: FiTool, title: 'Practical Learning', description: 'Hands-on, applied training methods.' },
  { icon: FiUsers, title: 'Interactive Sessions', description: 'Engaging, participation-driven sessions.' },
  { icon: FiGlobe, title: 'Real-world Relevance', description: 'Training grounded in real-world scenarios.' },
  { icon: FiTarget, title: 'Measurable Outcomes', description: 'Outcomes that can be tracked and evaluated.' },
]

export default function OurApproach() {
  return (
    <section className="py-20 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="Methodology" title="Our Approach" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ITEMS.map((item) => (
            <IconCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
