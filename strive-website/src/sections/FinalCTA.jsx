import { FiArrowRight } from 'react-icons/fi'
import Button from '../components/Button'
import AnimatedSection from '../components/AnimatedSection'

export default function FinalCTA() {
  return (
    <section className="py-20 px-6 bg-green-900 text-white text-center border-t border-green-800/50">
      <AnimatedSection as="div" className="max-w-3xl mx-auto space-y-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
          Ready to join the STRIVE network?
        </h2>

        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Whether you are a trainer looking for verified opportunities or an institution seeking qualified educators, STRIVE is ready to partner with you.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Button as="link" to="/membership" variant="primary" className="w-full sm:w-auto text-sm px-8 py-3.5">
            Apply as a Trainer <FiArrowRight className="text-base" />
          </Button>
          <Button as="link" to="/contact" variant="outline" className="w-full sm:w-auto text-sm px-8 py-3.5">
            Contact Us
          </Button>
        </div>

        <p className="text-slate-400 text-xs">
          Structured onboarding to maintain trainer standards and fair matching.
        </p>
      </AnimatedSection>
    </section>
  )
}
