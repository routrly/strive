import { AnimatePresence, motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { FiX, FiPhone, FiMail } from 'react-icons/fi'
import logo from '../assets/logo.png'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/#about', label: 'About STRIVE' },
  { to: '/#why-strive', label: 'Why STRIVE' },
  { to: '/#our-work', label: 'Our Work' },
  { to: '/contact', label: 'Contact Us' },
]

export default function MobileMenu({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-green-950 text-white flex flex-col justify-between p-6 sm:p-8"
        >
          <div className="flex items-center justify-between">
            <div className="bg-white/95 rounded-xl px-3 py-1.5 shadow-sm">
              <img src={logo} alt="STRIVE Logo" className="h-16 w-auto object-contain" />
            </div>
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <FiX className="text-2xl" />
            </button>
          </div>

          <motion.nav
            initial="closed"
            animate="open"
            variants={{ open: { transition: { staggerChildren: 0.08 } }, closed: {} }}
            className="flex flex-col items-center justify-center flex-1 gap-6 text-xl sm:text-2xl font-semibold"
          >
            {NAV_LINKS.map((link) => (
              <motion.div
                key={link.to}
                variants={{ open: { opacity: 1, y: 0 }, closed: { opacity: 0, y: 20 } }}
              >
                <NavLink
                  to={link.to}
                  onClick={onClose}
                  className="hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded-md px-3 py-1"
                >
                  {link.label}
                </NavLink>
              </motion.div>
            ))}
            <motion.div
              variants={{ open: { opacity: 1, y: 0 }, closed: { opacity: 0, y: 20 } }}
              className="mt-4"
            >
              <NavLink
                to="/membership"
                onClick={onClose}
                className="inline-block bg-primary hover:bg-primary-dark text-white px-7 py-3.5 rounded-xl font-semibold text-base shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Become a Member
              </NavLink>
            </motion.div>
          </motion.nav>

          <div className="pt-6 border-t border-white/10 flex flex-col items-center gap-3 text-xs text-slate-300 font-medium">
            <a href="tel:+919489949872" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <FiPhone className="text-secondary" /> +91 94899 49872
            </a>
            <a href="mailto:info@strivesociety.in" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <FiMail className="text-secondary" /> info@strivesociety.in
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
