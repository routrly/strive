import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FiMenu } from 'react-icons/fi'
import useScrollPosition from '../hooks/useScrollPosition'
import MobileMenu from './MobileMenu'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/membership', label: 'Membership' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const { isScrolled } = useScrollPosition()
  const [menuOpen, setMenuOpen] = useState(false)

  const solid = isScrolled || menuOpen

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-colors duration-300 ${
          solid ? 'bg-background/95 backdrop-blur shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <NavLink to="/" className={`text-2xl font-extrabold tracking-tight ${solid ? 'text-primary' : 'text-white'}`}>
            STRIVE
          </NavLink>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `font-medium transition-colors ${solid ? 'text-text' : 'text-white'} ${
                    isActive ? 'text-accent' : 'hover:text-accent'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to="/membership"
              className="bg-primary text-white px-5 py-2.5 rounded-full font-semibold hover:bg-secondary transition-colors"
            >
              Become a Member
            </NavLink>
          </nav>

          <button
            className={`md:hidden text-3xl ${solid ? 'text-primary' : 'text-white'}`}
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            <FiMenu />
          </button>
        </div>
      </header>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
