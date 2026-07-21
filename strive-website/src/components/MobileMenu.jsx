import { AnimatePresence, motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { FiX } from 'react-icons/fi'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/membership', label: 'Membership' },
  { to: '/contact', label: 'Contact' },
]

export default function MobileMenu({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-primary text-white flex flex-col"
        >
          <div className="flex justify-end p-6">
            <button onClick={onClose} aria-label="Close menu" className="text-3xl">
              <FiX />
            </button>
          </div>
          <motion.nav
            initial="closed"
            animate="open"
            variants={{ open: { transition: { staggerChildren: 0.08 } }, closed: {} }}
            className="flex flex-col items-center justify-center flex-1 gap-8 text-2xl font-semibold"
          >
            {NAV_LINKS.map((link) => (
              <motion.div
                key={link.to}
                variants={{ open: { opacity: 1, y: 0 }, closed: { opacity: 0, y: 20 } }}
              >
                <NavLink to={link.to} onClick={onClose} className="hover:text-accent">
                  {link.label}
                </NavLink>
              </motion.div>
            ))}
            <motion.div variants={{ open: { opacity: 1, y: 0 }, closed: { opacity: 0, y: 20 } }}>
              <NavLink
                to="/membership"
                onClick={onClose}
                className="mt-4 inline-block bg-accent text-primary px-6 py-3 rounded-full font-bold"
              >
                Become a Member
              </NavLink>
            </motion.div>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
