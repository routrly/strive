import { FiChevronDown } from 'react-icons/fi'
import Button from '../components/Button'
import AnimatedSection from '../components/AnimatedSection'
import heroDemo from '../assets/demo/hero.jpg'

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden flex items-center">
      <div className="absolute inset-0">
        {/* Demo image — swap for the real hero video per src/assets/placeholder-manifest.md */}
        <img src={heroDemo} alt="" className="w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-primary/70" />
      </div>

      <AnimatedSection as="div" className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Building Trusted Trainers. Creating Real Opportunities.
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          STRIVE empowers trainers through verified opportunities, professional development,
          and a trusted training ecosystem connecting educators with institutions and organizations.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button as="link" to="/membership" variant="accent">
            Become a Member
          </Button>
          <Button as="link" to="/contact" variant="outline">
            Contact Us
          </Button>
        </div>
      </AnimatedSection>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white animate-bounce">
        <FiChevronDown className="text-3xl" aria-hidden="true" />
        <span className="sr-only">Scroll down</span>
      </div>
    </section>
  )
}
