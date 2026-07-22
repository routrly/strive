import PlaceholderMedia from '../components/PlaceholderMedia'
import SectionHeading from '../components/SectionHeading'

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="About STRIVE"
          title="Building Trusted Trainers. Creating Real Opportunities."
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <PlaceholderMedia label="About STRIVE team/office photo" aspect="4/3" className="rounded-card" />

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-primary mb-1">Who We Are</h3>
              <p className="text-text/80">
                STRIVE (Society for Training Resources and Instructional Value Enhancement) is a
                growing community of trainers, educators, and professionals committed to delivering
                high-quality learning experiences. We were founded with a simple mission: To bring
                structure, trust, and real opportunities into the training ecosystem.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary mb-1">Mission</h3>
              <p className="text-text/80">
                To empower trainers by providing a trusted platform that ensures genuine
                opportunities, continuous skill development, professional credibility, and
                long-term growth.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary mb-1">Vision</h3>
              <p className="text-text/80">
                To become the leading training network that sets the benchmark for quality,
                trust, and impact in the training industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
