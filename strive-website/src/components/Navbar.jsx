import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FiMenu } from 'react-icons/fi'
import useScrollPosition from '../hooks/useScrollPosition'
import MobileMenu from './MobileMenu'
import logo from '../assets/logo.png'
import logoWebp from '../assets/logo.webp'

const SECTION_LINKS = [
  { to: '/#about', label: 'About STRIVE' },
  { to: '/#why-strive', label: 'Why STRIVE' },
  { to: '/#our-work', label: 'Our Work' },
]

export default function Navbar() {
  const { isScrolled } = useScrollPosition()
  const [menuOpen, setMenuOpen] = useState(false)

  const solid = isScrolled || menuOpen

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          solid
            ? 'bg-white border-b border-slate-200/80 shadow-soft py-3'
            : 'bg-gradient-to-b from-black/45 via-black/15 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
          <NavLink
            to="/"
            className="flex items-center group transition-transform duration-200 hover:scale-[1.01] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg p-1"
          >
            <picture>
              <source srcSet={logoWebp} type="image/webp" />
              <img src={logo} alt="STRIVE Logo" className="h-36 sm:h-36 md:h-36 w-auto object-contain drop-shadow-sm" />
            </picture>
          </NavLink>

          <nav className="hidden md:flex items-center gap-7">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `text-sm font-semibold tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md px-2 py-1 ${
                  solid
                    ? isActive
                      ? 'text-primary font-bold'
                      : 'text-slate-700 hover:text-primary'
                    : isActive
                    ? 'text-accent font-bold'
                    : 'text-white/90 hover:text-white'
                }`
              }
            >
              Home
            </NavLink>
            {SECTION_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-semibold tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md px-2 py-1 ${
                  solid ? 'text-slate-700 hover:text-primary' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-sm font-semibold tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md px-2 py-1 ${
                  solid
                    ? isActive
                      ? 'text-primary font-bold'
                      : 'text-slate-700 hover:text-primary'
                    : isActive
                    ? 'text-accent font-bold'
                    : 'text-white/90 hover:text-white'
                }`
              }
            >
              Contact
            </NavLink>
            <NavLink
              to="/membership"
              className="bg-primary text-white px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide shadow-sm hover:bg-primary-dark hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Become a Member
            </NavLink>
          </nav>

          <button
            className={`md:hidden p-2.5 rounded-xl border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
              solid
                ? 'bg-slate-50 border-slate-200 text-primary hover:bg-slate-100'
                : 'bg-white/10 border-white/20 text-white hover:bg-white/20'
            }`}
            aria-label="Open navigation menu"
            onClick={() => setMenuOpen(true)}
          >
            <FiMenu className="text-xl" />
          </button>
        </div>
      </header>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
