import { Link } from 'react-router-dom'
import { FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { FiArrowUp, FiPhone, FiMail, FiMapPin } from 'react-icons/fi'
import logo from '../assets/logo.png'
import logoWebp from '../assets/logo.webp'

const QUICK_LINKS = [
  { label: 'About STRIVE', to: '/#about' },
  { label: 'Apply for Membership', to: '/membership' },
  { label: 'Institutional Growth', to: '/#business-growth' },
  { label: 'Download Brochure', to: '/#brochure' },
  { label: 'Contact Us', to: '/contact' },
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Terms & Conditions', to: '/terms' },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-green-900 text-white pt-16 pb-8 border-t border-green-800/60 relative">
      <div className="max-w-7xl mx-auto px-6 grid gap-12 md:grid-cols-12 pb-12 border-b border-green-800/50">
        <div className="md:col-span-5 space-y-4">
          <div className="bg-white/95 rounded-2xl inline-block p-3 shadow-md">
            <picture>
              <source srcSet={logoWebp} type="image/webp" />
              <img src={logo} alt="STRIVE" className="h-16 sm:h-20 w-auto opacity-100 object-contain" />
            </picture>
          </div>
          <p className="text-slate-200 text-sm max-w-sm leading-relaxed">
            STRIVE (Society for Training Resources and Instructional Value Enhancement).
            Setting global benchmarks for trainer protection, skill advancement, and genuine opportunity matching.
          </p>
          <div className="flex items-center gap-3 pt-2">
            {[
              { icon: FaWhatsapp, href: 'https://wa.me/919489949872', label: 'WhatsApp' },
              { icon: FaFacebookF, href: 'https://www.facebook.com/share/163kBdRoWQ8/', label: 'Facebook' },
              { icon: FaInstagram, href: 'https://www.instagram.com/strivekochi?igsh=MXRja29mZ3oyajdjZA==&utm_source=ig_contact_invite', label: 'Instagram' },
              { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/strive-society', label: 'LinkedIn' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-xl bg-green-950/50 border border-green-700/50 text-slate-100 flex items-center justify-center text-base hover:bg-secondary hover:text-slate-950 transition-all duration-200 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
              >
                <social.icon />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Footer quick links" className="md:col-span-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-secondary mb-4">Quick Navigation</h3>
          <ul className="space-y-2.5 text-slate-300 text-sm font-medium">
            {QUICK_LINKS.map((link) => (
              <li key={link.label}>
                <Link to={link.to} className="hover:text-accent transition-colors inline-block py-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded-xs">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4 space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-secondary mb-4">Contact Information</h3>
          <div className="space-y-3 text-sm text-slate-300">
            <a href="tel:+919489949872" className="flex items-center gap-3 hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded-xs">
              <FiPhone className="text-secondary shrink-0" /> +91 94899 49872
            </a>
            <a href="mailto:info@strivesociety.in" className="flex items-center gap-3 hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded-xs">
              <FiMail className="text-secondary shrink-0" /> info@strivesociety.in
            </a>
            <div className="flex items-center gap-3 text-slate-400">
              <FiMapPin className="text-secondary shrink-0" /> Kochi, Kerala, India
            </div>
          </div>

          <div className="pt-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-secondary hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded-xs"
            >
              Back to top <FiArrowUp className="text-base" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-xs">
        <p>© {new Date().getFullYear()} STRIVE. All rights reserved.</p>
        <p className="text-slate-300">Building Trusted Trainers, Creating Real Opportunities.</p>
      </div>
    </footer>
  )
}
