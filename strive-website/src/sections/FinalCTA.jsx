import Button from '../components/Button'

export default function FinalCTA() {
  return (
    <section className="py-20 px-6 bg-primary text-white text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Be a Part of STRIVE</h2>
        <p className="text-white/85 mb-8">
          If you're serious about building a career in training and becoming part of a trusted
          professional network, STRIVE is the right place for you.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
          <Button as="link" to="/membership" variant="accent">
            Become Member
          </Button>
          <Button as="link" to="/contact" variant="outline">
            Contact Us
          </Button>
        </div>
        <p className="text-white/60 text-sm">Limited onboarding to maintain quality standards.</p>
      </div>
    </section>
  )
}
