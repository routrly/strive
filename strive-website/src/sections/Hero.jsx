import { FiChevronDown, FiArrowRight, FiDownload } from 'react-icons/fi'
import Button from '../components/Button'
import AnimatedSection from '../components/AnimatedSection'
import heroVideoMp4 from '../assets/hero-compressed.mp4'
import heroVideoWebm from '../assets/hero-compressed.webm'
import heroPoster from '../assets/hero-poster.jpg'

export default function Hero() {
  const scrollToNext = () => {
    const el = document.getElementById('pathways') || document.getElementById('about')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.scrollTo({ top: window.innerHeight * 0.85, behavior: 'smooth' })
    }
  }

  const scrollToBrochure = (e) => {
    e.preventDefault()
    const el = document.getElementById('brochure')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.location.href = '/strive-brochure.pdf'
    }
  }

  return (
    <section className="relative min-h-screen min-h-[100dvh] w-full overflow-hidden flex items-center justify-center pt-24 pb-16">
      <div className="absolute inset-0 w-full h-full">
        <video
          poster={heroPoster}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          fetchPriority="high"
          className="w-full h-full object-cover scale-105"
        >
          <source src={heroVideoWebm} type="video/webm" />
          <source src={heroVideoMp4} type="video/mp4" />
        </video>
        {/* Light neutral dark overlay for high video visibility and crisp text contrast */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40" />
      </div>

      <AnimatedSection as="div" className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/15 backdrop-blur-md border border-emerald-400/30 text-emerald-300 text-xs sm:text-sm font-semibold tracking-wide mb-6 shadow-xs">
          STRIVE — Where Learning Meets Growth
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.15] mb-6 text-white">
          Empowering Trainers.
          <span className="block text-secondary mt-1.5 font-extrabold">Transforming Education.</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-slate-200 mb-10 max-w-2xl leading-relaxed font-normal">
          A professional network connecting certified trainers with educational institutions, colleges, corporates, and CSR initiatives across India.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
          <Button as="link" to="/contact" variant="primary" className="text-sm px-7 py-3.5">
            Contact Us <FiArrowRight className="text-base" />
          </Button>
          <a
            href="#brochure"
            onClick={scrollToBrochure}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold tracking-wide text-white border border-white/40 hover:bg-white/10 hover:border-white transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            Download Brochure <FiDownload className="text-base text-secondary" />
          </a>
        </div>
      </AnimatedSection>

      <button
        onClick={scrollToNext}
        aria-label="Scroll to next section"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-slate-300 hover:text-white transition-colors animate-bounce flex flex-col items-center gap-1 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full p-1"
      >
        <FiChevronDown className="text-2xl" aria-hidden="true" />
      </button>
    </section>
  )
}
