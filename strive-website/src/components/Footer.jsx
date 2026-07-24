import { Link } from 'react-router-dom'
import { FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const QUICK_LINKS = [
  { label: 'About', to: '/#about' },
  { label: 'Membership', to: '/membership' },
  { label: 'Business Growth', to: '/#business-growth' },
  { label: 'Brochure', to: '/#brochure' },
  { label: 'Contact', to: '/contact' },
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Terms & Conditions', to: '/terms' },
]

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <div className="text-2xl font-extrabold mb-3">STRIVE</div>
          <p className="text-white/80 text-sm max-w-xs">
            Society for Training Resources and Instructional Value Enhancement.
            Building trusted trainers, creating real opportunities.
          </p>
        </div>

        <nav aria-label="Footer quick links">
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-white/80 text-sm">
            {QUICK_LINKS.map((link) => (
              <li key={link.label}>
                <Link to={link.to} className="hover:text-accent transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <p className="text-white/80 text-sm">Phone: +91 94899 49872</p>
          <p className="text-white/80 text-sm mb-4">Email: info@strivesociety.in</p>
          <div className="flex gap-4 text-xl">
            <a href="https://wa.me/919489949872" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-accent">
              <FaWhatsapp />
            </a>
            <a href="https://www.facebook.com/share/163kBdRoWQ8/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-accent">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/strivekochi?igsh=MXRja29mZ3oyajdjZA==&utm_source=ig_contact_invite" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-accent">
              <FaInstagram />
            </a>
            {/* TODO: replace with real profile URL */}
            <a href="#" aria-label="LinkedIn" className="hover:text-accent">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 py-4 text-center text-white/60 text-xs">
        © {new Date().getFullYear()} STRIVE. All rights reserved.
      </div>
    </footer>
  )
}
