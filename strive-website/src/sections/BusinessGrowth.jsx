import { FiArrowRight } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'
import Card from '../components/Card'
import PlaceholderMedia from '../components/PlaceholderMedia'

const CARDS = [
  { title: 'Verified Clients', description: 'Institutions and organizations are verified before engagement.' },
  { title: 'End-to-End Program Management', description: 'STRIVE manages the full training program lifecycle.' },
  { title: 'Long-Term Partnerships', description: 'Building lasting relationships, not one-off engagements.' },
  { title: 'Quality Delivery', description: 'Consistent, high-quality training outcomes.' },
]

export default function BusinessGrowth() {
  return (
    <section id="business-growth" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="For Institutions" title="Business Growth" />

        <div className="flex items-center justify-center gap-4 md:gap-8 mb-14 flex-wrap">
          {['Institution', 'STRIVE', 'Trainer'].map((node, index) => (
            <div key={node} className="flex items-center gap-4 md:gap-8">
              <div className="bg-primary text-white font-semibold px-6 py-4 rounded-card text-center min-w-[140px]">
                {node}
              </div>
              {index < 2 && <FiArrowRight className="text-2xl text-primary shrink-0" aria-hidden="true" />}
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <PlaceholderMedia label="Business Growth illustrative photo" aspect="4/3" className="rounded-card" />
          <div className="grid sm:grid-cols-2 gap-6">
            {CARDS.map((card) => (
              <Card key={card.title}>
                <h3 className="font-semibold text-text mb-2">{card.title}</h3>
                <p className="text-text/70 text-sm">{card.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
