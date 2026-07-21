# STRIVE Marketing Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a production-ready React + Vite marketing site for STRIVE with Home, Membership, and Contact routes, matching the approved design spec exactly.

**Architecture:** Vite + React (JS) SPA with react-router-dom v6. Presentational work is organized as small reusable `components/`, page-specific `sections/`, and route-level `pages/` composed via a shared `RootLayout`. Logic that has real behavior (scroll position, count-up animation, form validation) lives in `hooks/`/`utils/` and is unit-tested with Vitest; everything else is verified by running the dev server and checking against the spec's copy/behavior, per the user's own phase-by-phase visual review process.

**Tech Stack:** React 18, Vite, Tailwind CSS v3, framer-motion, react-icons, swiper, react-router-dom v6, react-helmet-async, react-intersection-observer, Vitest + @testing-library/react (dev-only, for hooks/utils).

**Spec:** `docs/superpowers/specs/2026-07-21-strive-website-design.md`

## Global Constraints

- Scaffold with `npm create vite@latest strive-website -- --template react` (JavaScript, not TypeScript).
- Tailwind v3 theme: `primary:#166534`, `secondary:#22c55e`, `accent:#d4af37`, `background:#ffffff`, `surface:#f8fafc`, `text:#111827`; `borderRadius.card:24px`; buttons use Tailwind's built-in `rounded-full`.
- Folder structure: `src/{assets,components,sections,pages,hooks,utils,layouts}`.
- No Lorem ipsum — all copy must match the spec's "Content" section verbatim.
- No hotlinked external images — every image/video is a named, correctly-sized placeholder `<div>` (via a shared `PlaceholderMedia` component), catalogued in `src/assets/placeholder-manifest.md`.
- Membership page's 3 external Google Form URLs must be used exactly as given, `target="_blank" rel="noopener"`.
- Brochure/Contact form submission is client-side-validation-only; each submit handler has a `// TODO: wire real submit endpoint here` comment.
- Google Maps embed: generic "Kochi, Kerala" search query iframe (no specific address).
- Social icons: WhatsApp uses a real `https://wa.me/919347734872` link; Facebook/Instagram/LinkedIn use `href="#"` placeholders with a `{/* TODO: replace with real profile URL */}` comment.
- "Become a Member" CTAs (navbar, hero, final CTA) route to `/membership`.
- Framer Motion animations must respect `prefers-reduced-motion`.
- Run `npm run dev` and `npm run build` after each phase to confirm no errors before marking the phase checkpoint done.

---

## Task 1: Project Scaffold, Tailwind & Testing Setup

**Files:**
- Create: `strive-website/` (via Vite scaffold — all subsequent paths are relative to this directory)
- Create: `tailwind.config.js`
- Create: `postcss.config.js`
- Modify: `src/index.css`
- Create: `vitest.config.js`
- Create: `src/test/setup.js`
- Create: `src/test/smoke.test.js`

**Interfaces:**
- Produces: Tailwind utility classes `bg-primary`, `bg-secondary`, `bg-accent`, `bg-background`, `bg-surface`, `text-text`, `rounded-card` available project-wide. `npm run test` runs Vitest.

- [ ] **Step 1: Scaffold the Vite project**

```bash
cd /home/strive
npm create vite@latest strive-website -- --template react
cd strive-website
npm install
```

- [ ] **Step 2: Install runtime and dev dependencies**

```bash
npm install react-router-dom@6 framer-motion react-icons swiper react-helmet-async react-intersection-observer
npm install -D tailwindcss@3 postcss autoprefixer vitest @testing-library/react @testing-library/jest-dom jsdom
```

- [ ] **Step 3: Initialize Tailwind config and set the theme**

```bash
npx tailwindcss init -p
```

Replace `tailwind.config.js` with:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#166534',
        secondary: '#22c55e',
        accent: '#d4af37',
        background: '#ffffff',
        surface: '#f8fafc',
        text: '#111827',
      },
      borderRadius: {
        card: '24px',
      },
    },
  },
  plugins: [],
}
```

- [ ] **Step 4: Wire Tailwind into the global stylesheet**

Replace the contents of `src/index.css` with:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scroll-behavior: smooth;
}

body {
  @apply bg-background text-text;
}
```

- [ ] **Step 5: Configure Vitest**

Create `vitest.config.js`:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.js'],
    globals: true,
  },
})
```

Create `src/test/setup.js`:

```js
import '@testing-library/jest-dom/vitest'
```

Add to `package.json` `"scripts"`:

```json
"test": "vitest run"
```

- [ ] **Step 6: Write a smoke test to confirm the harness works**

Create `src/test/smoke.test.js`:

```js
import { describe, it, expect } from 'vitest'

describe('test harness', () => {
  it('runs', () => {
    expect(1 + 1).toBe(2)
  })
})
```

- [ ] **Step 7: Run the smoke test and confirm it passes**

Run: `npm run test`
Expected: `1 passed`

- [ ] **Step 8: Verify Tailwind applies, then commit**

Temporarily set `src/App.jsx` content to `<div className="bg-primary text-white p-8 rounded-card">Tailwind OK</div>`, run `npm run dev`, confirm a dark-green rounded box renders at `http://localhost:5173`, then revert `App.jsx` to the Vite default (it will be replaced fully in Task 6).

```bash
git add -A
git commit -m "Scaffold Vite+React project with Tailwind theme and Vitest"
```

---

## Task 2: Folder Structure, Placeholder Manifest & PlaceholderMedia Component

**Files:**
- Create: `src/assets/placeholder-manifest.md`
- Create: `src/components/PlaceholderMedia.jsx`
- Test: `src/components/PlaceholderMedia.test.jsx`

**Interfaces:**
- Produces: `<PlaceholderMedia label="..." aspect="16/9" className="..." />` — renders a labeled placeholder block at the given aspect ratio. Used by every section needing an image/video slot.

- [ ] **Step 1: Create the folder structure**

```bash
mkdir -p src/components src/sections src/pages src/hooks src/utils src/layouts
```

- [ ] **Step 2: Write the placeholder asset manifest**

Create `src/assets/placeholder-manifest.md`:

```markdown
# STRIVE Placeholder Media Manifest

Every entry below is currently rendered as a `<PlaceholderMedia>` block
(no hotlinked images). Replace by dropping the real file into
`src/assets/` and swapping the placeholder for an `<img>`/`<video>` tag
in the listed component.

| Asset | Used in | Dimensions / Aspect | Notes |
|---|---|---|---|
| Hero background video | `src/sections/Hero.jsx` | 1920x1080, 16:9, loops muted | Indian professional trainer/classroom setting |
| Testimonial avatar 1 (Trainer) | `src/sections/Testimonials.jsx` | 96x96, 1:1 circular | Indian professional headshot |
| Testimonial avatar 2 (College Partner) | `src/sections/Testimonials.jsx` | 96x96, 1:1 circular | Indian professional headshot |
| Testimonial avatar 3 (Corporate Client) | `src/sections/Testimonials.jsx` | 96x96, 1:1 circular | Indian professional headshot |
| About STRIVE team/office photo | `src/sections/About.jsx` | 800x600, 4:3 | Office or team training session |
| Business Growth illustrative photo | `src/sections/BusinessGrowth.jsx` | 800x600, 4:3 | Institution/corporate training session |
| Membership page hero banner (optional) | `src/pages/Membership.jsx` | 1600x400, 4:1 | Trainers in a professional setting |
| Brochure cover thumbnail | `src/sections/Brochure.jsx` | 400x560, portrait | Cover of the downloadable brochure PDF |
```

- [ ] **Step 3: Write the failing test for PlaceholderMedia**

Create `src/components/PlaceholderMedia.test.jsx`:

```jsx
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import PlaceholderMedia from './PlaceholderMedia'

describe('PlaceholderMedia', () => {
  it('renders the label and an accessible role', () => {
    render(<PlaceholderMedia label="Hero background video" aspect="16/9" />)
    expect(screen.getByText('Hero background video')).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Hero background video' })).toBeInTheDocument()
  })

  it('applies the requested aspect ratio', () => {
    render(<PlaceholderMedia label="Team photo" aspect="4/3" />)
    const el = screen.getByRole('img', { name: 'Team photo' })
    expect(el).toHaveStyle({ aspectRatio: '4/3' })
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm run test`
Expected: FAIL — `Failed to resolve import "./PlaceholderMedia"`

- [ ] **Step 3: Implement PlaceholderMedia**

Create `src/components/PlaceholderMedia.jsx`:

```jsx
export default function PlaceholderMedia({ label, aspect = '16/9', className = '' }) {
  return (
    <div
      role="img"
      aria-label={label}
      style={{ aspectRatio: aspect }}
      className={`flex items-center justify-center bg-surface border border-dashed border-primary/30 text-text/50 text-sm font-medium text-center px-4 ${className}`}
    >
      {label}
    </div>
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm run test`
Expected: `2 passed`

- [ ] **Step 5: Commit**

```bash
git add src/assets/placeholder-manifest.md src/components/PlaceholderMedia.jsx src/components/PlaceholderMedia.test.jsx src/hooks src/utils src/layouts src/pages src/sections
git commit -m "Add folder structure, placeholder manifest, and PlaceholderMedia component"
```

---

## Task 3: useScrollPosition Hook

**Files:**
- Create: `src/hooks/useScrollPosition.js`
- Test: `src/hooks/useScrollPosition.test.js`

**Interfaces:**
- Produces: `useScrollPosition()` → `{ scrollY: number, scrollProgress: number (0–1), isScrolled: boolean }`. `isScrolled` is `true` once `scrollY > 20`. `scrollProgress` is `scrollY / (document height - viewport height)`, clamped to `[0,1]`. Consumed by `Navbar` (for transparent→solid) and `ScrollProgressBar`.

- [ ] **Step 1: Write the failing test**

Create `src/hooks/useScrollPosition.test.js`:

```js
import { describe, it, expect, beforeEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import useScrollPosition from './useScrollPosition'

function setScrollEnv({ scrollY, scrollHeight, innerHeight }) {
  Object.defineProperty(window, 'scrollY', { value: scrollY, writable: true, configurable: true })
  Object.defineProperty(document.documentElement, 'scrollHeight', { value: scrollHeight, writable: true, configurable: true })
  Object.defineProperty(window, 'innerHeight', { value: innerHeight, writable: true, configurable: true })
}

describe('useScrollPosition', () => {
  beforeEach(() => {
    setScrollEnv({ scrollY: 0, scrollHeight: 2000, innerHeight: 1000 })
  })

  it('starts with isScrolled false and scrollProgress 0', () => {
    const { result } = renderHook(() => useScrollPosition())
    expect(result.current.isScrolled).toBe(false)
    expect(result.current.scrollProgress).toBe(0)
  })

  it('sets isScrolled true once scrollY passes 20', () => {
    const { result } = renderHook(() => useScrollPosition())
    act(() => {
      setScrollEnv({ scrollY: 50, scrollHeight: 2000, innerHeight: 1000 })
      window.dispatchEvent(new Event('scroll'))
    })
    expect(result.current.isScrolled).toBe(true)
    expect(result.current.scrollY).toBe(50)
  })

  it('computes scrollProgress clamped to [0,1]', () => {
    const { result } = renderHook(() => useScrollPosition())
    act(() => {
      setScrollEnv({ scrollY: 1000, scrollHeight: 2000, innerHeight: 1000 })
      window.dispatchEvent(new Event('scroll'))
    })
    expect(result.current.scrollProgress).toBe(1)
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm run test`
Expected: FAIL — `Failed to resolve import "./useScrollPosition"`

- [ ] **Step 3: Implement useScrollPosition**

Create `src/hooks/useScrollPosition.js`:

```js
import { useState, useEffect, useCallback } from 'react'

function computeState() {
  const scrollY = window.scrollY
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight
  const scrollProgress = maxScroll > 0 ? Math.min(1, Math.max(0, scrollY / maxScroll)) : 0
  return { scrollY, scrollProgress, isScrolled: scrollY > 20 }
}

export default function useScrollPosition() {
  const [state, setState] = useState(computeState)

  const handleScroll = useCallback(() => {
    setState(computeState())
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return state
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm run test`
Expected: `3 passed`

- [ ] **Step 5: Commit**

```bash
git add src/hooks/useScrollPosition.js src/hooks/useScrollPosition.test.js
git commit -m "Add useScrollPosition hook with unit tests"
```

---

## Task 4: Navbar, MobileMenu & ScrollProgressBar

**Files:**
- Create: `src/components/Navbar.jsx`
- Create: `src/components/MobileMenu.jsx`
- Create: `src/components/ScrollProgressBar.jsx`

**Interfaces:**
- Consumes: `useScrollPosition()` from Task 3.
- Produces: `<Navbar />` (fixed top nav, no props), `<ScrollProgressBar />` (fixed top-of-viewport bar). Both used by `RootLayout` in Task 6.

- [ ] **Step 1: Implement ScrollProgressBar**

Create `src/components/ScrollProgressBar.jsx`:

```jsx
import useScrollPosition from '../hooks/useScrollPosition'

export default function ScrollProgressBar() {
  const { scrollProgress } = useScrollPosition()
  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50 bg-transparent" aria-hidden="true">
      <div
        className="h-full bg-accent transition-[width] duration-150 ease-out"
        style={{ width: `${scrollProgress * 100}%` }}
      />
    </div>
  )
}
```

- [ ] **Step 2: Implement MobileMenu**

Create `src/components/MobileMenu.jsx`:

```jsx
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
```

- [ ] **Step 3: Implement Navbar**

Create `src/components/Navbar.jsx`:

```jsx
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

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  )
}
```

- [ ] **Step 4: Manual verification**

Run: `npm run dev`, open `http://localhost:5173`. Confirm: navbar is transparent with white text over the (currently blank) page top, turns solid white with dark text after scrolling ~20px, mobile width (<768px) shows a hamburger that opens a full-screen staggered green menu with a working close button.

- [ ] **Step 5: Commit**

```bash
git add src/components/Navbar.jsx src/components/MobileMenu.jsx src/components/ScrollProgressBar.jsx
git commit -m "Add Navbar, MobileMenu, and ScrollProgressBar components"
```

---

## Task 5: Footer

**Files:**
- Create: `src/components/Footer.jsx`

**Interfaces:**
- Produces: `<Footer />`, no props — used by `RootLayout` in Task 6. Links to `/`, `/membership`, `/contact`, `/business-growth` anchor (`/#business-growth`), `/#brochure`, `/privacy`, `/terms`.

- [ ] **Step 1: Implement Footer**

Create `src/components/Footer.jsx`:

```jsx
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
          <p className="text-white/80 text-sm">Phone: +91 93477 34872</p>
          <p className="text-white/80 text-sm mb-4">Email: strivekochi@gmail.com</p>
          <div className="flex gap-4 text-xl">
            <a href="https://wa.me/919347734872" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-accent">
              <FaWhatsapp />
            </a>
            {/* TODO: replace with real profile URL */}
            <a href="#" aria-label="Facebook" className="hover:text-accent">
              <FaFacebookF />
            </a>
            {/* TODO: replace with real profile URL */}
            <a href="#" aria-label="Instagram" className="hover:text-accent">
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
```

- [ ] **Step 2: Manual verification**

Run: `npm run dev`, scroll to bottom (page is still mostly empty — footer renders standalone once wired in Task 6). Defer full visual check to Task 6.

- [ ] **Step 3: Commit**

```bash
git add src/components/Footer.jsx
git commit -m "Add Footer component"
```

---

## Task 6: RootLayout, Router & Page Stubs — PHASE 1 CHECKPOINT

**Files:**
- Create: `src/layouts/RootLayout.jsx`
- Create: `src/pages/Home.jsx`
- Create: `src/pages/Membership.jsx`
- Create: `src/pages/Contact.jsx`
- Create: `src/pages/Privacy.jsx`
- Create: `src/pages/Terms.jsx`
- Modify: `src/App.jsx`
- Modify: `src/main.jsx`

**Interfaces:**
- Consumes: `Navbar`, `Footer`, `ScrollProgressBar` from Tasks 4–5.
- Produces: Routes `/`, `/membership`, `/contact`, `/privacy`, `/terms` all rendering through `RootLayout`. `Home`, `Membership`, `Contact` are stub page components that later tasks fill in with sections.

- [ ] **Step 1: Implement RootLayout**

Create `src/layouts/RootLayout.jsx`:

```jsx
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollProgressBar from '../components/ScrollProgressBar'

export default function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollProgressBar />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
```

- [ ] **Step 2: Create stub pages**

Create `src/pages/Home.jsx`:

```jsx
export default function Home() {
  return <div className="pt-24 px-6">Home page — sections added in later tasks.</div>
}
```

Create `src/pages/Membership.jsx`:

```jsx
export default function Membership() {
  return <div className="pt-24 px-6">Membership page — cards added in Task 16.</div>
}
```

Create `src/pages/Contact.jsx`:

```jsx
export default function Contact() {
  return <div className="pt-24 px-6">Contact page — form added in Task 21.</div>
}
```

Create `src/pages/Privacy.jsx`:

```jsx
export default function Privacy() {
  return (
    <div className="pt-32 pb-16 px-6 max-w-3xl mx-auto prose">
      <h1 className="text-3xl font-bold text-primary mb-4">Privacy Policy</h1>
      <p>
        STRIVE (Society for Training Resources and Instructional Value Enhancement)
        respects your privacy. This page will be updated with our full privacy
        policy detailing how we collect, use, and protect your information.
      </p>
    </div>
  )
}
```

Create `src/pages/Terms.jsx`:

```jsx
export default function Terms() {
  return (
    <div className="pt-32 pb-16 px-6 max-w-3xl mx-auto prose">
      <h1 className="text-3xl font-bold text-primary mb-4">Terms & Conditions</h1>
      <p>
        This page will be updated with STRIVE's full terms and conditions
        governing use of this website and membership in the STRIVE network.
      </p>
    </div>
  )
}
```

- [ ] **Step 3: Wire the router**

Replace `src/App.jsx`:

```jsx
import { Routes, Route } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import Membership from './pages/Membership'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'

export default function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Route>
    </Routes>
  )
}
```

Replace `src/main.jsx`:

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
)
```

- [ ] **Step 4: Manual verification — PHASE 1 CHECKPOINT**

Run: `npm run dev` and `npm run build` (confirm zero errors in both). In the browser, confirm:
- `/` shows the Home stub with sticky Navbar and Footer
- `/membership`, `/contact`, `/privacy`, `/terms` all render through the same shell
- Scroll-progress bar fills as you scroll
- Navbar transitions transparent→solid on scroll
- Mobile menu opens/closes and links navigate correctly

- [ ] **Step 5: Commit**

```bash
git add src/App.jsx src/main.jsx src/layouts src/pages
git commit -m "Add RootLayout, router, and page stubs (Phase 1 complete)"
```

---

## Task 7: Button, SectionHeading, Card, IconCard Components

**Files:**
- Create: `src/components/Button.jsx`
- Create: `src/components/SectionHeading.jsx`
- Create: `src/components/Card.jsx`
- Create: `src/components/IconCard.jsx`

**Interfaces:**
- Produces:
  - `<Button as="link"|"a"|"button" to/href variant="primary"|"outline" {...props}>children</Button>`
  - `<SectionHeading eyebrow? title subtitle? align="center"|"left" />`
  - `<Card className? children />` — `bg-surface rounded-card` container
  - `<IconCard icon title description />`

- [ ] **Step 1: Implement Button**

Create `src/components/Button.jsx`:

```jsx
import { Link } from 'react-router-dom'

const VARIANTS = {
  primary: 'bg-primary text-white hover:bg-secondary',
  outline: 'border-2 border-white text-white hover:bg-white hover:text-primary',
  accent: 'bg-accent text-primary hover:bg-accent/90',
}

export default function Button({ as = 'link', to, href, variant = 'primary', className = '', children, ...props }) {
  const classes = `inline-block px-7 py-3 rounded-full font-semibold transition-colors duration-200 ${VARIANTS[variant]} ${className}`

  if (as === 'link') {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  if (as === 'a') {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
```

- [ ] **Step 2: Implement SectionHeading**

Create `src/components/SectionHeading.jsx`:

```jsx
export default function SectionHeading({ eyebrow, title, subtitle, align = 'center' }) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'
  return (
    <div className={`max-w-2xl mb-12 ${alignClass}`}>
      {eyebrow && <p className="text-accent font-semibold uppercase tracking-wide text-sm mb-2">{eyebrow}</p>}
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{title}</h2>
      {subtitle && <p className="text-text/70 text-lg">{subtitle}</p>}
    </div>
  )
}
```

- [ ] **Step 3: Implement Card**

Create `src/components/Card.jsx`:

```jsx
export default function Card({ className = '', children }) {
  return (
    <div className={`bg-surface rounded-card p-8 shadow-sm ${className}`}>
      {children}
    </div>
  )
}
```

- [ ] **Step 4: Implement IconCard**

Create `src/components/IconCard.jsx`:

```jsx
import Card from './Card'

export default function IconCard({ icon: Icon, title, description }) {
  return (
    <Card className="flex flex-col items-start gap-4 h-full">
      <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center text-2xl">
        <Icon />
      </div>
      <h3 className="text-xl font-semibold text-text">{title}</h3>
      <p className="text-text/70">{description}</p>
    </Card>
  )
}
```

- [ ] **Step 5: Manual verification**

No standalone route yet — these are verified visually once consumed starting Task 9. Confirm `npm run build` still succeeds (unused-export warnings are fine, import errors are not).

- [ ] **Step 6: Commit**

```bash
git add src/components/Button.jsx src/components/SectionHeading.jsx src/components/Card.jsx src/components/IconCard.jsx
git commit -m "Add Button, SectionHeading, Card, and IconCard components"
```

---

## Task 8: useCountUp Hook & AnimatedCounter Component

**Files:**
- Create: `src/hooks/useCountUp.js`
- Test: `src/hooks/useCountUp.test.js`
- Create: `src/components/AnimatedCounter.jsx`

**Interfaces:**
- Produces: `useCountUp(target: number, { duration?: number, start?: boolean }) → number` — animates from 0 to `target` over `duration` ms once `start` becomes `true`; stays at 0 while `start` is `false`. `<AnimatedCounter value={500} suffix="+" label="Professional Trainers" />` triggers `start` via `react-intersection-observer` when scrolled into view.

- [ ] **Step 1: Write the failing test**

Create `src/hooks/useCountUp.test.js`:

```js
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import useCountUp from './useCountUp'

describe('useCountUp', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })
  afterEach(() => {
    vi.useRealTimers()
  })

  it('stays at 0 when start is false', () => {
    const { result } = renderHook(() => useCountUp(500, { start: false, duration: 1000 }))
    expect(result.current).toBe(0)
  })

  it('animates to the target value once start is true', () => {
    const { result, rerender } = renderHook(({ start }) => useCountUp(500, { start, duration: 1000 }), {
      initialProps: { start: false },
    })
    rerender({ start: true })
    act(() => {
      vi.advanceTimersByTime(1000)
    })
    expect(result.current).toBe(500)
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm run test`
Expected: FAIL — `Failed to resolve import "./useCountUp"`

- [ ] **Step 3: Implement useCountUp**

Create `src/hooks/useCountUp.js`:

```js
import { useState, useEffect, useRef } from 'react'

export default function useCountUp(target, { duration = 1500, start = false } = {}) {
  const [value, setValue] = useState(0)
  const frameRef = useRef(null)

  useEffect(() => {
    if (!start) return undefined

    const startTime = performance.now()

    function tick(now) {
      const elapsed = now - startTime
      const progress = Math.min(1, elapsed / duration)
      setValue(Math.round(progress * target))
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick)
      }
    }

    frameRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frameRef.current)
  }, [start, target, duration])

  return value
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm run test`
Expected: `2 passed`

Note: `requestAnimationFrame` under jsdom + fake timers resolves via the timer queue; if the test is flaky, replace `requestAnimationFrame`/`cancelAnimationFrame` calls with `setTimeout(() => tick(performance.now()), 16)` / `clearTimeout` — behavior is equivalent for this test.

- [ ] **Step 5: Implement AnimatedCounter**

Create `src/components/AnimatedCounter.jsx`:

```jsx
import { useInView } from 'react-intersection-observer'
import useCountUp from '../hooks/useCountUp'

export default function AnimatedCounter({ value, suffix = '', label }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 })
  const count = useCountUp(value, { start: inView, duration: 1500 })

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-extrabold text-primary">
        {count}
        {suffix}
      </div>
      <p className="text-text/70 mt-2">{label}</p>
    </div>
  )
}
```

- [ ] **Step 6: Commit**

```bash
git add src/hooks/useCountUp.js src/hooks/useCountUp.test.js src/components/AnimatedCounter.jsx
git commit -m "Add useCountUp hook and AnimatedCounter component"
```

---

## Task 9: Hero Section

**Files:**
- Create: `src/sections/Hero.jsx`

**Interfaces:**
- Consumes: `PlaceholderMedia` (Task 2), `Button` (Task 7).
- Produces: `<Hero />`, no props — consumed by `Home` page in Task 12.

- [ ] **Step 1: Implement Hero**

Create `src/sections/Hero.jsx`:

```jsx
import { FiChevronDown } from 'react-icons/fi'
import PlaceholderMedia from '../components/PlaceholderMedia'
import Button from '../components/Button'

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <PlaceholderMedia label="Hero background video" aspect="16/9" className="w-full h-full" />
        <div className="absolute inset-0 bg-primary/70" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
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
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white animate-bounce">
        <FiChevronDown className="text-3xl" aria-hidden="true" />
        <span className="sr-only">Scroll down</span>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/sections/Hero.jsx
git commit -m "Add Hero section"
```

---

## Task 10: TrustMetrics Section

**Files:**
- Create: `src/sections/TrustMetrics.jsx`

**Interfaces:**
- Consumes: `AnimatedCounter` (Task 8).
- Produces: `<TrustMetrics />`, no props.

- [ ] **Step 1: Implement TrustMetrics**

Create `src/sections/TrustMetrics.jsx`:

```jsx
import AnimatedCounter from '../components/AnimatedCounter'

const METRICS = [
  { value: 500, suffix: '+', label: 'Professional Trainers' },
  { value: 100, suffix: '+', label: 'Institution Partners' },
  { value: 1000, suffix: '+', label: 'Training Sessions' },
  { value: 95, suffix: '%', label: 'Client Satisfaction' },
]

export default function TrustMetrics() {
  return (
    <section className="py-16 bg-surface">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {METRICS.map((metric) => (
          <AnimatedCounter key={metric.label} {...metric} />
        ))}
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/sections/TrustMetrics.jsx
git commit -m "Add TrustMetrics section"
```

---

## Task 11: About Section

**Files:**
- Create: `src/sections/About.jsx`

**Interfaces:**
- Consumes: `PlaceholderMedia` (Task 2), `SectionHeading` (Task 7).
- Produces: `<About />`, no props. Rendered with `id="about"` for the footer's `/#about` anchor link.

- [ ] **Step 1: Implement About**

Create `src/sections/About.jsx`:

```jsx
import PlaceholderMedia from '../components/PlaceholderMedia'
import SectionHeading from '../components/SectionHeading'

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="About STRIVE"
          title="Building Trusted Trainers. Creating Real Opportunities."
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <PlaceholderMedia label="About STRIVE team/office photo" aspect="4/3" className="rounded-card" />

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-primary mb-1">Who We Are</h3>
              <p className="text-text/80">
                STRIVE (Society for Training Resources and Instructional Value Enhancement) is a
                growing community of trainers, educators, and professionals committed to delivering
                high-quality learning experiences. We were founded with a simple mission: To bring
                structure, trust, and real opportunities into the training ecosystem.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary mb-1">Mission</h3>
              <p className="text-text/80">
                To empower trainers by providing a trusted platform that ensures genuine
                opportunities, continuous skill development, professional credibility, and
                long-term growth.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary mb-1">Vision</h3>
              <p className="text-text/80">
                To become the leading training network that sets the benchmark for quality,
                trust, and impact in the training industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/sections/About.jsx
git commit -m "Add About section"
```

---

## Task 12: Wire Hero/TrustMetrics/About into Home — PHASE 2 CHECKPOINT

**Files:**
- Modify: `src/pages/Home.jsx`

**Interfaces:**
- Consumes: `Hero`, `TrustMetrics`, `About` (Tasks 9–11).

- [ ] **Step 1: Update Home page**

Replace `src/pages/Home.jsx`:

```jsx
import Hero from '../sections/Hero'
import TrustMetrics from '../sections/TrustMetrics'
import About from '../sections/About'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustMetrics />
      <About />
    </>
  )
}
```

- [ ] **Step 2: Manual verification — PHASE 2 CHECKPOINT**

Run: `npm run dev` and `npm run build`. Confirm on `/`:
- Full-height Hero with dark-overlay placeholder, exact heading/subhead/CTA copy, bounce-scroll indicator
- Trust Metrics counters animate up from 0 when scrolled into view (500+, 100+, 1000+, 95%)
- About section shows Who We Are / Mission / Vision text exactly as specified, next to a placeholder photo

- [ ] **Step 3: Commit**

```bash
git add src/pages/Home.jsx
git commit -m "Wire Hero, TrustMetrics, About into Home (Phase 2 complete)"
```

---

## Task 13: WhyChooseStrive, WhatWeDo, OurApproach Sections

**Files:**
- Create: `src/sections/WhyChooseStrive.jsx`
- Create: `src/sections/WhatWeDo.jsx`
- Create: `src/sections/OurApproach.jsx`

**Interfaces:**
- Consumes: `IconCard`, `SectionHeading` (Task 7).
- Produces: `<WhyChooseStrive />`, `<WhatWeDo />`, `<OurApproach />`, no props.

- [ ] **Step 1: Implement WhyChooseStrive**

Create `src/sections/WhyChooseStrive.jsx`:

```jsx
import { FiShield, FiCheckCircle, FiRefreshCw, FiUsers, FiAward, FiTrendingUp } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'
import IconCard from '../components/IconCard'

const REASONS = [
  { icon: FiShield, title: 'Protection First', description: 'Protection from fraudulent vendors.' },
  { icon: FiCheckCircle, title: 'Verified Opportunities', description: 'Every opportunity is verified.' },
  { icon: FiRefreshCw, title: 'Training of Trainers (TOT)', description: 'Continuous trainer development.' },
  { icon: FiUsers, title: 'Strong Professional Network', description: 'Community-driven growth.' },
  { icon: FiAward, title: 'Quality Over Quantity', description: 'Maintaining high standards.' },
  { icon: FiTrendingUp, title: 'Long-Term Career Growth', description: 'Professional opportunities.' },
]

export default function WhyChooseStrive() {
  return (
    <section className="py-20 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="Why STRIVE" title="Why Choose STRIVE" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REASONS.map((reason) => (
            <IconCard key={reason.title} {...reason} />
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Implement WhatWeDo**

Create `src/sections/WhatWeDo.jsx`:

```jsx
import { FiUserCheck, FiBriefcase, FiBookOpen, FiMessageCircle, FiTrendingUp, FiBarChart2 } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'
import IconCard from '../components/IconCard'

const ITEMS = [
  { icon: FiUserCheck, title: 'Connect Trainers', description: 'Linking trainers with verified opportunities.' },
  { icon: FiBriefcase, title: 'Corporate Training', description: 'Delivering impactful corporate learning programs.' },
  { icon: FiBookOpen, title: 'College Training', description: 'Structured training programs for institutions.' },
  { icon: FiMessageCircle, title: 'Soft Skills', description: 'Building communication and interpersonal skills.' },
  { icon: FiTrendingUp, title: 'Professional Development', description: 'Continuous growth for trainers.' },
  { icon: FiBarChart2, title: 'Business Growth', description: 'Enabling growth for institutions and trainers alike.' },
]

export default function WhatWeDo() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="Our Work" title="What We Do" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ITEMS.map((item) => (
            <IconCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 3: Implement OurApproach**

Create `src/sections/OurApproach.jsx`:

```jsx
import { FiTool, FiUsers, FiGlobe, FiTarget } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'
import IconCard from '../components/IconCard'

const ITEMS = [
  { icon: FiTool, title: 'Practical Learning', description: 'Hands-on, applied training methods.' },
  { icon: FiUsers, title: 'Interactive Sessions', description: 'Engaging, participation-driven sessions.' },
  { icon: FiGlobe, title: 'Real-world Relevance', description: 'Training grounded in real-world scenarios.' },
  { icon: FiTarget, title: 'Measurable Outcomes', description: 'Outcomes that can be tracked and evaluated.' },
]

export default function OurApproach() {
  return (
    <section className="py-20 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="Methodology" title="Our Approach" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ITEMS.map((item) => (
            <IconCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Commit**

```bash
git add src/sections/WhyChooseStrive.jsx src/sections/WhatWeDo.jsx src/sections/OurApproach.jsx
git commit -m "Add WhyChooseStrive, WhatWeDo, OurApproach sections"
```

---

## Task 14: MembershipBenefits & MembershipProcess Sections

**Files:**
- Create: `src/sections/MembershipBenefits.jsx`
- Create: `src/sections/MembershipProcess.jsx`

**Interfaces:**
- Consumes: `SectionHeading`, `Button`, `IconCard` (Task 7).
- Produces: `<MembershipBenefits />`, `<MembershipProcess />`, no props.

- [ ] **Step 1: Implement MembershipBenefits**

Create `src/sections/MembershipBenefits.jsx`:

```jsx
import { FiShield, FiCheckCircle, FiRefreshCw, FiTrendingUp, FiUsers, FiAward } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'

const BENEFITS = [
  { icon: FiShield, label: 'Protection from Fraudulent Vendors' },
  { icon: FiCheckCircle, label: 'Verified Opportunities' },
  { icon: FiRefreshCw, label: 'Training of Trainers' },
  { icon: FiTrendingUp, label: 'Skill Development' },
  { icon: FiUsers, label: 'Professional Network' },
  { icon: FiAward, label: 'Career Growth' },
]

export default function MembershipBenefits() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <SectionHeading eyebrow="More Than Just a Network" title="Become a STRIVE Member" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 text-left">
          {BENEFITS.map((benefit) => (
            <div key={benefit.label} className="flex items-center gap-3 bg-surface rounded-card p-5">
              <benefit.icon className="text-primary text-2xl shrink-0" />
              <span className="font-medium text-text">{benefit.label}</span>
            </div>
          ))}
        </div>
        <Button as="link" to="/membership" variant="primary">
          Become a Member
        </Button>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Implement MembershipProcess**

Create `src/sections/MembershipProcess.jsx`:

```jsx
import SectionHeading from '../components/SectionHeading'

const STEPS = ['Fill Profile', 'Application Review', 'Verification', 'Join STRIVE', 'Receive Opportunities']

export default function MembershipProcess() {
  return (
    <section className="py-20 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="How It Works" title="Membership Process" />
        <ol className="flex flex-col md:flex-row items-stretch md:items-start gap-6 md:gap-4">
          {STEPS.map((step, index) => (
            <li key={step} className="flex-1 flex md:flex-col items-center gap-4 text-center">
              <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0">
                {index + 1}
              </div>
              <span className="font-medium text-text">{step}</span>
              {index < STEPS.length - 1 && (
                <span className="hidden md:block w-full border-t-2 border-dashed border-primary/30 mt-[-1.25rem]" aria-hidden="true" />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
```

- [ ] **Step 3: Commit**

```bash
git add src/sections/MembershipBenefits.jsx src/sections/MembershipProcess.jsx
git commit -m "Add MembershipBenefits and MembershipProcess sections"
```

---

## Task 15: Wire Sections 5–9 into Home — PHASE 3 CHECKPOINT

**Files:**
- Modify: `src/pages/Home.jsx`

**Interfaces:**
- Consumes: `WhyChooseStrive`, `WhatWeDo`, `OurApproach`, `MembershipBenefits`, `MembershipProcess`.

- [ ] **Step 1: Update Home page**

Replace `src/pages/Home.jsx`:

```jsx
import Hero from '../sections/Hero'
import TrustMetrics from '../sections/TrustMetrics'
import About from '../sections/About'
import WhyChooseStrive from '../sections/WhyChooseStrive'
import WhatWeDo from '../sections/WhatWeDo'
import OurApproach from '../sections/OurApproach'
import MembershipBenefits from '../sections/MembershipBenefits'
import MembershipProcess from '../sections/MembershipProcess'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustMetrics />
      <About />
      <WhyChooseStrive />
      <WhatWeDo />
      <OurApproach />
      <MembershipBenefits />
      <MembershipProcess />
    </>
  )
}
```

- [ ] **Step 2: Manual verification — PHASE 3 CHECKPOINT**

Run: `npm run dev` and `npm run build`. Confirm on `/`, in order after About: Why Choose STRIVE (6 icon cards), What We Do (6 icon cards), Our Approach (4 icon cards), Membership Benefits (6 items + Become a Member button), Membership Process (5-step timeline, horizontal on desktop / stacked on mobile).

- [ ] **Step 3: Commit**

```bash
git add src/pages/Home.jsx
git commit -m "Wire sections 5-9 into Home (Phase 3 complete)"
```

---

## Task 16: MembershipCard Component & Membership Page — PHASE 4 CHECKPOINT

**Files:**
- Create: `src/components/MembershipCard.jsx`
- Modify: `src/pages/Membership.jsx`

**Interfaces:**
- Produces: `<MembershipCard title description formUrl />` — glassmorphism card with an "Apply Now" link opening `formUrl` in a new tab.

- [ ] **Step 1: Implement MembershipCard**

Create `src/components/MembershipCard.jsx`:

```jsx
export default function MembershipCard({ title, description, formUrl }) {
  return (
    <div className="rounded-card p-8 bg-white/60 backdrop-blur-lg border border-white/40 shadow-lg flex flex-col gap-4 h-full">
      <h3 className="text-2xl font-bold text-primary">{title}</h3>
      <p className="text-text/80 flex-1">{description}</p>
      <a
        href={formUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-center bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-secondary transition-colors"
      >
        Apply Now
      </a>
    </div>
  )
}
```

- [ ] **Step 2: Implement Membership page**

Replace `src/pages/Membership.jsx`:

```jsx
import SectionHeading from '../components/SectionHeading'
import MembershipCard from '../components/MembershipCard'

const TRACKS = [
  {
    title: 'Soft Skills Trainer',
    description: 'Apply to become a certified Soft Skills Trainer under STRIVE.',
    formUrl: 'https://docs.google.com/forms/d/1lPRhpVq0SEQAxuQ-aK8w_2mibONopxEUiMcbefD4Lbo/viewform',
  },
  {
    title: 'Aptitude Skills Trainer',
    description: 'Apply to join STRIVE as an Aptitude Skills Trainer.',
    formUrl: 'https://docs.google.com/forms/d/1fMaMXWx7NpYU5AqYE_JUPwfHjFnYi-m6RBsukwPksI0/viewform',
  },
  {
    title: 'Verbal Skills Trainer',
    description: 'Apply to become a Verbal Skills Trainer in the STRIVE professional network.',
    formUrl: 'https://docs.google.com/forms/d/1VlT32DSLPTG-Rqd7YcRdXYAkbRtkJ_isOxIZTu58nng/viewform',
  },
]

export default function Membership() {
  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-primary/10 to-transparent min-h-screen">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Join STRIVE"
          title="Choose Your Training Track"
          subtitle="Select the trainer category that matches your expertise and apply directly."
        />
        <div className="grid md:grid-cols-3 gap-8">
          {TRACKS.map((track) => (
            <MembershipCard key={track.title} {...track} />
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 3: Manual verification — PHASE 4 CHECKPOINT**

Run: `npm run dev`. On `/membership`, confirm 3 glassmorphism cards in a 3-column grid on desktop, single column on mobile, each "Apply Now" opening the exact corresponding Google Form URL in a new tab (`target="_blank" rel="noopener"`). Verify all three URLs against the spec character-for-character.

- [ ] **Step 4: Commit**

```bash
git add src/components/MembershipCard.jsx src/pages/Membership.jsx
git commit -m "Add Membership page with 3 glassmorphism application cards (Phase 4 complete)"
```

---

## Task 17: BusinessGrowth Section

**Files:**
- Create: `src/sections/BusinessGrowth.jsx`

**Interfaces:**
- Consumes: `SectionHeading`, `Card`, `PlaceholderMedia`.
- Produces: `<BusinessGrowth />`, no props. Rendered with `id="business-growth"`.

- [ ] **Step 1: Implement BusinessGrowth**

Create `src/sections/BusinessGrowth.jsx`:

```jsx
import { FiArrowRight } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'
import Card from '../components/Card'
import PlaceholderMedia from '../components/PlaceholderMedia'

const CARDS = [
  { title: 'Verified Clients', description: 'Institutions and organizations are verified before engagement.' },
  { title: 'End-to-End Program Management', description: 'STRIVE manages the full training program lifecycle.' },
  { title: 'Long-Term Partnerships', description: 'Building lasting relationships, not one-off engagements.' },
  { title: 'Quality Delivery', description: 'Consistent, high-quality training outcomes.' },
]

export default function BusinessGrowth() {
  return (
    <section id="business-growth" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="For Institutions" title="Business Growth" />

        <div className="flex items-center justify-center gap-4 md:gap-8 mb-14 flex-wrap">
          {['Institution', 'STRIVE', 'Trainer'].map((node, index) => (
            <div key={node} className="flex items-center gap-4 md:gap-8">
              <div className="bg-primary text-white font-semibold px-6 py-4 rounded-card text-center min-w-[140px]">
                {node}
              </div>
              {index < 2 && <FiArrowRight className="text-2xl text-primary shrink-0" aria-hidden="true" />}
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <PlaceholderMedia label="Business Growth illustrative photo" aspect="4/3" className="rounded-card" />
          <div className="grid sm:grid-cols-2 gap-6">
            {CARDS.map((card) => (
              <Card key={card.title}>
                <h3 className="font-semibold text-text mb-2">{card.title}</h3>
                <p className="text-text/70 text-sm">{card.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/sections/BusinessGrowth.jsx
git commit -m "Add BusinessGrowth section"
```

---

## Task 18: Testimonials Section

**Files:**
- Create: `src/sections/Testimonials.jsx`
- Modify: `src/index.css`

**Interfaces:**
- Consumes: `PlaceholderMedia`, `SectionHeading`, `swiper/react`.
- Produces: `<Testimonials />`, no props.

- [ ] **Step 1: Import Swiper's base CSS**

Add to the top of `src/index.css` (above the `@tailwind` directives):

```css
@import 'swiper/css';
@import 'swiper/css/pagination';
```

- [ ] **Step 2: Implement Testimonials**

Create `src/sections/Testimonials.jsx`:

```jsx
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import SectionHeading from '../components/SectionHeading'
import PlaceholderMedia from '../components/PlaceholderMedia'

const TESTIMONIALS = [
  {
    quote: 'STRIVE helped me find consistent training opportunities without worrying about fake clients.',
    role: 'Trainer',
  },
  {
    quote: 'Their training sessions were engaging, structured and impactful.',
    role: 'College Partner',
  },
  {
    quote: 'Professional, committed and result-oriented.',
    role: 'Corporate Client',
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 px-6 bg-surface">
      <div className="max-w-4xl mx-auto">
        <SectionHeading eyebrow="Testimonials" title="What People Say" />
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
          className="pb-12"
        >
          {TESTIMONIALS.map((t) => (
            <SwiperSlide key={t.role}>
              <div className="flex flex-col items-center text-center gap-4 px-4">
                <PlaceholderMedia
                  label={`${t.role} avatar`}
                  aspect="1/1"
                  className="w-24 h-24 rounded-full"
                />
                <p className="text-lg text-text/80 max-w-xl">&ldquo;{t.quote}&rdquo;</p>
                <span className="font-semibold text-primary">— {t.role}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
```

- [ ] **Step 3: Commit**

```bash
git add src/sections/Testimonials.jsx src/index.css
git commit -m "Add Testimonials section with Swiper carousel"
```

---

## Task 19: Validation Utils & Brochure Section

**Files:**
- Create: `src/utils/validation.js`
- Test: `src/utils/validation.test.js`
- Create: `src/sections/Brochure.jsx`

**Interfaces:**
- Produces: `isValidEmail(value: string) → boolean`. Consumed by `Brochure` now and `Contact` in Task 21.

- [ ] **Step 1: Write the failing test**

Create `src/utils/validation.test.js`:

```js
import { describe, it, expect } from 'vitest'
import { isValidEmail } from './validation'

describe('isValidEmail', () => {
  it('accepts a well-formed email', () => {
    expect(isValidEmail('strivekochi@gmail.com')).toBe(true)
  })

  it('rejects missing @', () => {
    expect(isValidEmail('strivekochigmail.com')).toBe(false)
  })

  it('rejects missing domain', () => {
    expect(isValidEmail('strivekochi@')).toBe(false)
  })

  it('rejects empty string', () => {
    expect(isValidEmail('')).toBe(false)
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm run test`
Expected: FAIL — `Failed to resolve import "./validation"`

- [ ] **Step 3: Implement validation utils**

Create `src/utils/validation.js`:

```js
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function isValidEmail(value) {
  return EMAIL_RE.test(value.trim())
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm run test`
Expected: `4 passed`

- [ ] **Step 5: Implement Brochure section**

Create `src/sections/Brochure.jsx`:

```jsx
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiCheckCircle } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'
import PlaceholderMedia from '../components/PlaceholderMedia'
import Button from '../components/Button'
import { isValidEmail } from '../utils/validation'

export default function Brochure() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (!isValidEmail(email)) {
      setError('Please enter a valid email address.')
      return
    }
    setError('')

    // TODO: wire real submit endpoint here — currently client-side only.

    setSubmitted(true)
  }

  return (
    <section id="brochure" className="py-20 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <PlaceholderMedia label="Brochure cover thumbnail" aspect="4/5" className="rounded-card max-w-xs mx-auto" />

        <div>
          <SectionHeading
            align="left"
            eyebrow="Brochure"
            title="Download Our Brochure"
            subtitle="Enter your email address to receive our brochure instantly."
          />

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-3 text-primary font-semibold bg-surface rounded-card p-6"
              >
                <FiCheckCircle className="text-3xl shrink-0" />
                <span>Thanks! Your brochure request has been received.</span>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onSubmit={handleSubmit}
                noValidate
                className="flex flex-col sm:flex-row gap-3"
              >
                <div className="flex-1">
                  <label htmlFor="brochure-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="brochure-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full px-5 py-3 rounded-full border border-text/20 focus:outline-none focus:ring-2 focus:ring-primary"
                    aria-invalid={Boolean(error)}
                    aria-describedby={error ? 'brochure-email-error' : undefined}
                  />
                  {error && (
                    <p id="brochure-email-error" className="text-red-600 text-sm mt-2 ml-2">
                      {error}
                    </p>
                  )}
                </div>
                <Button as="button" type="submit" variant="primary">
                  Get Brochure
                </Button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 6: Commit**

```bash
git add src/utils/validation.js src/utils/validation.test.js src/sections/Brochure.jsx
git commit -m "Add validation utils and Brochure section with email capture"
```

---

## Task 20: Wire Business Growth, Testimonials, Brochure into Home — PHASE 5 CHECKPOINT

**Files:**
- Modify: `src/pages/Home.jsx`

- [ ] **Step 1: Update Home page**

Replace `src/pages/Home.jsx`:

```jsx
import Hero from '../sections/Hero'
import TrustMetrics from '../sections/TrustMetrics'
import About from '../sections/About'
import WhyChooseStrive from '../sections/WhyChooseStrive'
import WhatWeDo from '../sections/WhatWeDo'
import OurApproach from '../sections/OurApproach'
import MembershipBenefits from '../sections/MembershipBenefits'
import MembershipProcess from '../sections/MembershipProcess'
import BusinessGrowth from '../sections/BusinessGrowth'
import Testimonials from '../sections/Testimonials'
import Brochure from '../sections/Brochure'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustMetrics />
      <About />
      <WhyChooseStrive />
      <WhatWeDo />
      <OurApproach />
      <MembershipBenefits />
      <MembershipProcess />
      <BusinessGrowth />
      <Testimonials />
      <Brochure />
    </>
  )
}
```

- [ ] **Step 2: Manual verification — PHASE 5 CHECKPOINT**

Run: `npm run dev` and `npm run test` (all unit tests still passing) and `npm run build`. Confirm: Business Growth flow diagram (Institution → STRIVE → Trainer) + 4 cards render; Testimonials carousel autoplays through 3 slides with pagination dots; Brochure form rejects invalid email with an inline error, accepts a valid email and shows the success animation.

- [ ] **Step 3: Commit**

```bash
git add src/pages/Home.jsx
git commit -m "Wire BusinessGrowth, Testimonials, Brochure into Home (Phase 5 complete)"
```

---

## Task 21: Contact Form Validation & Contact Page

**Files:**
- Modify: `src/utils/validation.js`
- Modify: `src/utils/validation.test.js`
- Modify: `src/pages/Contact.jsx`

**Interfaces:**
- Produces: `isValidPhone(value: string) → boolean` (accepts digits, spaces, `+`, `-`, min 7 digits), `validateContactForm({name, email, phone, message}) → { name?, email?, phone?, message? }` (returns an object of only the fields with errors).

- [ ] **Step 1: Write the failing tests**

Append to `src/utils/validation.test.js`:

```js
import { isValidPhone, validateContactForm } from './validation'

describe('isValidPhone', () => {
  it('accepts a valid Indian mobile number with country code', () => {
    expect(isValidPhone('+91 93477 34872')).toBe(true)
  })

  it('rejects too few digits', () => {
    expect(isValidPhone('12345')).toBe(false)
  })

  it('rejects letters', () => {
    expect(isValidPhone('abcdefghij')).toBe(false)
  })
})

describe('validateContactForm', () => {
  it('returns no errors for a fully valid submission', () => {
    const errors = validateContactForm({
      name: 'Jane Doe',
      email: 'jane@example.com',
      phone: '+91 93477 34872',
      message: 'Hello there',
    })
    expect(errors).toEqual({})
  })

  it('flags empty name and message, and invalid email', () => {
    const errors = validateContactForm({ name: '', email: 'not-an-email', phone: '+91 93477 34872', message: '' })
    expect(errors.name).toBeTruthy()
    expect(errors.email).toBeTruthy()
    expect(errors.message).toBeTruthy()
    expect(errors.phone).toBeUndefined()
  })
})
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `npm run test`
Expected: FAIL — `isValidPhone` / `validateContactForm` are not exported

- [ ] **Step 3: Implement the additional validation functions**

Replace `src/utils/validation.js`:

```js
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_DIGITS_RE = /^[0-9+\-\s]+$/

export function isValidEmail(value) {
  return EMAIL_RE.test(value.trim())
}

export function isValidPhone(value) {
  const trimmed = value.trim()
  if (!PHONE_DIGITS_RE.test(trimmed)) return false
  const digitCount = trimmed.replace(/\D/g, '').length
  return digitCount >= 7
}

export function validateContactForm({ name, email, phone, message }) {
  const errors = {}
  if (!name || !name.trim()) errors.name = 'Please enter your name.'
  if (!isValidEmail(email || '')) errors.email = 'Please enter a valid email address.'
  if (!isValidPhone(phone || '')) errors.phone = 'Please enter a valid phone number.'
  if (!message || !message.trim()) errors.message = 'Please enter a message.'
  return errors
}
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `npm run test`
Expected: `10 passed`

- [ ] **Step 5: Implement the Contact page**

Replace `src/pages/Contact.jsx`:

```jsx
import { useState } from 'react'
import { FiPhone, FiMail } from 'react-icons/fi'
import { FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'
import { validateContactForm } from '../utils/validation'

const INITIAL_FORM = { name: '', email: '', phone: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const validationErrors = validateContactForm(form)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    // TODO: wire real submit endpoint here — currently client-side only.

    setSubmitted(true)
    setForm(INITIAL_FORM)
  }

  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <SectionHeading align="left" eyebrow="Get in Touch" title="Contact Us" />

          <div className="space-y-4 mb-8">
            <a href="tel:+919347734872" className="flex items-center gap-3 text-text hover:text-primary">
              <FiPhone className="text-xl text-primary" /> +91 93477 34872
            </a>
            <a href="mailto:strivekochi@gmail.com" className="flex items-center gap-3 text-text hover:text-primary">
              <FiMail className="text-xl text-primary" /> strivekochi@gmail.com
            </a>
          </div>

          <div className="flex gap-4 text-xl mb-8">
            <a href="https://wa.me/919347734872" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-primary hover:text-secondary">
              <FaWhatsapp />
            </a>
            {/* TODO: replace with real profile URL */}
            <a href="#" aria-label="Facebook" className="text-primary hover:text-secondary">
              <FaFacebookF />
            </a>
            {/* TODO: replace with real profile URL */}
            <a href="#" aria-label="Instagram" className="text-primary hover:text-secondary">
              <FaInstagram />
            </a>
            {/* TODO: replace with real profile URL */}
            <a href="#" aria-label="LinkedIn" className="text-primary hover:text-secondary">
              <FaLinkedinIn />
            </a>
          </div>

          <iframe
            title="STRIVE location — Kochi, Kerala"
            src="https://www.google.com/maps?q=Kochi,Kerala&output=embed"
            className="w-full h-64 rounded-card border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div>
          {submitted && (
            <p className="mb-4 text-primary font-semibold bg-surface rounded-card p-4">
              Thanks for reaching out! We'll get back to you shortly.
            </p>
          )}
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <div>
              <label htmlFor="name" className="block font-medium mb-1">Name</label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-text/20 focus:outline-none focus:ring-2 focus:ring-primary"
                aria-invalid={Boolean(errors.name)}
              />
              {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block font-medium mb-1">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-text/20 focus:outline-none focus:ring-2 focus:ring-primary"
                aria-invalid={Boolean(errors.email)}
              />
              {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="block font-medium mb-1">Phone</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-text/20 focus:outline-none focus:ring-2 focus:ring-primary"
                aria-invalid={Boolean(errors.phone)}
              />
              {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block font-medium mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-text/20 focus:outline-none focus:ring-2 focus:ring-primary"
                aria-invalid={Boolean(errors.message)}
              />
              {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
            </div>

            <Button as="button" type="submit" variant="primary">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 6: Commit**

```bash
git add src/utils/validation.js src/utils/validation.test.js src/pages/Contact.jsx
git commit -m "Add phone/contact-form validation and build the Contact page"
```

---

## Task 22: FinalCTA Section, Privacy/Terms Verification & Footer Wiring — PHASE 6 CHECKPOINT

**Files:**
- Create: `src/sections/FinalCTA.jsx`
- Modify: `src/pages/Home.jsx`

**Interfaces:**
- Consumes: `Button`.
- Produces: `<FinalCTA />`, no props.

- [ ] **Step 1: Implement FinalCTA**

Create `src/sections/FinalCTA.jsx`:

```jsx
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
```

- [ ] **Step 2: Wire FinalCTA into Home (last section)**

Replace `src/pages/Home.jsx`:

```jsx
import Hero from '../sections/Hero'
import TrustMetrics from '../sections/TrustMetrics'
import About from '../sections/About'
import WhyChooseStrive from '../sections/WhyChooseStrive'
import WhatWeDo from '../sections/WhatWeDo'
import OurApproach from '../sections/OurApproach'
import MembershipBenefits from '../sections/MembershipBenefits'
import MembershipProcess from '../sections/MembershipProcess'
import BusinessGrowth from '../sections/BusinessGrowth'
import Testimonials from '../sections/Testimonials'
import Brochure from '../sections/Brochure'
import FinalCTA from '../sections/FinalCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustMetrics />
      <About />
      <WhyChooseStrive />
      <WhatWeDo />
      <OurApproach />
      <MembershipBenefits />
      <MembershipProcess />
      <BusinessGrowth />
      <Testimonials />
      <Brochure />
      <FinalCTA />
    </>
  )
}
```

- [ ] **Step 3: Manual verification — PHASE 6 CHECKPOINT**

Run: `npm run dev` and `npm run build`. Confirm: `/contact` split layout renders correctly (contact info + socials + Maps embed on the left, validated form on the right), submitting the contact form with missing/invalid fields shows inline errors, a fully valid submission shows the success message and clears the form; Final CTA band renders at the bottom of `/` with exact copy; `/privacy` and `/terms` render their stub content through the shared layout; footer Quick Links all navigate correctly (About/Business Growth/Brochure scroll to in-page anchors on Home, Membership/Contact/Privacy/Terms navigate routes).

- [ ] **Step 4: Commit**

```bash
git add src/sections/FinalCTA.jsx src/pages/Home.jsx
git commit -m "Add FinalCTA section and complete Contact/Footer wiring (Phase 6 complete)"
```

---

## Task 23: AnimatedSection Wrapper — Framer Motion Scroll-Reveal Pass

**Files:**
- Create: `src/components/AnimatedSection.jsx`
- Modify: `src/sections/Hero.jsx`
- Modify: `src/sections/TrustMetrics.jsx`
- Modify: `src/sections/About.jsx`
- Modify: `src/sections/WhyChooseStrive.jsx`
- Modify: `src/sections/WhatWeDo.jsx`
- Modify: `src/sections/OurApproach.jsx`
- Modify: `src/sections/MembershipBenefits.jsx`
- Modify: `src/sections/MembershipProcess.jsx`
- Modify: `src/sections/BusinessGrowth.jsx`
- Modify: `src/sections/Testimonials.jsx`
- Modify: `src/sections/Brochure.jsx`
- Modify: `src/sections/FinalCTA.jsx`

**Interfaces:**
- Produces: `<AnimatedSection as="section"|"div" className? staggerChildren? children />` — wraps content in a `motion` element that fades/slides up into view once, staggering direct children if `staggerChildren` is true, and renders with no animation at all if the user has `prefers-reduced-motion: reduce`.

- [ ] **Step 1: Implement AnimatedSection**

Create `src/components/AnimatedSection.jsx`:

```jsx
import { motion, useReducedMotion } from 'framer-motion'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function AnimatedSection({ as = 'div', className = '', staggerChildren = false, children }) {
  const prefersReducedMotion = useReducedMotion()
  const MotionTag = motion[as]

  if (prefersReducedMotion) {
    const Tag = as
    return <Tag className={className}>{children}</Tag>
  }

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerChildren ? containerVariants : itemVariants}
    >
      {staggerChildren ? children.map ? children : children : children}
    </MotionTag>
  )
}

export function AnimatedItem({ as = 'div', className = '', children }) {
  const prefersReducedMotion = useReducedMotion()
  const MotionTag = motion[as]

  if (prefersReducedMotion) {
    const Tag = as
    return <Tag className={className}>{children}</Tag>
  }

  return (
    <MotionTag className={className} variants={itemVariants}>
      {children}
    </MotionTag>
  )
}
```

- [ ] **Step 2: Apply to Hero (simple fade/slide, no stagger)**

In `src/sections/Hero.jsx`, wrap the inner content `<div className="relative z-10 ...">...</div>` with `AnimatedSection`:

```jsx
import AnimatedSection from '../components/AnimatedSection'
// ...keep existing imports

// replace:
// <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
// with:
<AnimatedSection as="div" className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
  {/* ...unchanged heading/subhead/buttons... */}
</AnimatedSection>
```

- [ ] **Step 3: Apply the same pattern to every remaining section**

For each of `TrustMetrics`, `About`, `WhyChooseStrive`, `WhatWeDo`, `OurApproach`, `MembershipBenefits`, `MembershipProcess`, `BusinessGrowth`, `Testimonials`, `Brochure`, `FinalCTA`: wrap the section's inner `max-w-* mx-auto` container in `<AnimatedSection as="div" staggerChildren className="...">`, and wrap each direct repeated child (each card, each metric, each benefit row, each step) in `<AnimatedItem as="div">`. Keep the outer `<section className="py-20 px-6 ...">` tag as plain JSX (motion only applies to the inner content) so section-level Tailwind spacing/background classes are unaffected.

Example for `WhyChooseStrive.jsx`:

```jsx
import AnimatedSection, { AnimatedItem } from '../components/AnimatedSection'
// ...

export default function WhyChooseStrive() {
  return (
    <section className="py-20 px-6 bg-surface">
      <AnimatedSection as="div" staggerChildren className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="Why STRIVE" title="Why Choose STRIVE" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REASONS.map((reason) => (
            <AnimatedItem key={reason.title} as="div">
              <IconCard {...reason} />
            </AnimatedItem>
          ))}
        </div>
      </AnimatedSection>
    </section>
  )
}
```

Apply the equivalent transformation to the other ten sections listed above, using their own existing `.map()` loops as the staggered children.

- [ ] **Step 4: Manual verification**

In the OS/browser, enable "reduce motion" (macOS: System Settings → Accessibility → Display → Reduce Motion; or Chrome DevTools → Rendering → Emulate CSS media feature `prefers-reduced-motion: reduce`) and reload `/` — confirm every section renders fully visible immediately with no animation. Disable reduce-motion and reload — confirm every section fades/slides up with staggered children as you scroll, and nothing shifts layout after the animation settles (no cumulative layout shift).

- [ ] **Step 5: Commit**

```bash
git add src/components/AnimatedSection.jsx src/sections
git commit -m "Add Framer Motion scroll-reveal pass with reduced-motion support"
```

---

## Task 24: react-helmet-async Per-Route SEO

**Files:**
- Create: `src/components/Seo.jsx`
- Modify: `src/pages/Home.jsx`
- Modify: `src/pages/Membership.jsx`
- Modify: `src/pages/Contact.jsx`
- Modify: `src/pages/Privacy.jsx`
- Modify: `src/pages/Terms.jsx`

**Interfaces:**
- Produces: `<Seo title description path />` — renders `<title>`, meta description, and Open Graph tags via `react-helmet-async`'s `<Helmet>`.

- [ ] **Step 1: Implement Seo**

Create `src/components/Seo.jsx`:

```jsx
import { Helmet } from 'react-helmet-async'

const SITE_NAME = 'STRIVE'
const BASE_URL = 'https://strive.example.com' // TODO: replace with the real production domain

export default function Seo({ title, description, path = '/' }) {
  const fullTitle = `${title} | ${SITE_NAME}`
  const url = `${BASE_URL}${path}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  )
}
```

- [ ] **Step 2: Add Seo to each page**

In `src/pages/Home.jsx`, add inside the top-level fragment, before `<Hero />`:

```jsx
import Seo from '../components/Seo'
// ...
<Seo
  title="Building Trusted Trainers, Creating Real Opportunities"
  description="STRIVE empowers trainers through verified opportunities, professional development, and a trusted training ecosystem connecting educators with institutions and organizations."
  path="/"
/>
```

In `src/pages/Membership.jsx`, inside the returned `<section>`'s parent (wrap in a fragment if needed):

```jsx
import Seo from '../components/Seo'
// ...
<Seo
  title="Membership — Apply as a Trainer"
  description="Apply to become a certified Soft Skills, Aptitude Skills, or Verbal Skills Trainer in the STRIVE professional network."
  path="/membership"
/>
```

In `src/pages/Contact.jsx`:

```jsx
import Seo from '../components/Seo'
// ...
<Seo
  title="Contact Us"
  description="Get in touch with STRIVE — call +91 93477 34872 or email strivekochi@gmail.com."
  path="/contact"
/>
```

In `src/pages/Privacy.jsx`:

```jsx
import Seo from '../components/Seo'
// ...
<Seo title="Privacy Policy" description="STRIVE's privacy policy." path="/privacy" />
```

In `src/pages/Terms.jsx`:

```jsx
import Seo from '../components/Seo'
// ...
<Seo title="Terms & Conditions" description="STRIVE's terms and conditions." path="/terms" />
```

Each page's top-level return must become a fragment (`<>...</>`) with `<Seo .../>` as the first child if it isn't already.

- [ ] **Step 3: Manual verification**

Run: `npm run dev`. For each route, open DevTools → Elements → `<head>` and confirm `<title>` and the OG/description meta tags update per-route.

- [ ] **Step 4: Commit**

```bash
git add src/components/Seo.jsx src/pages
git commit -m "Add react-helmet-async per-route SEO tags"
```

---

## Task 25: Accessibility & Performance Polish Pass — PHASE 7 CHECKPOINT

**Files:**
- Modify: `src/sections/Hero.jsx`
- Modify: `src/components/PlaceholderMedia.jsx`
- Modify: `src/pages/Contact.jsx`

**Interfaces:**
- No new interfaces — this task audits and patches existing components for the Lighthouse-mindset checklist from the spec.

- [ ] **Step 1: Add `loading="lazy"` guidance to PlaceholderMedia**

Since `PlaceholderMedia` renders a `<div>` (not an `<img>`) until real assets are dropped in, add a code comment documenting the swap-in requirement. Modify `src/components/PlaceholderMedia.jsx`:

```jsx
// When replacing with a real <img>, always set loading="lazy" (except the
// Hero video/image, which is above the fold and should load eagerly) and
// keep the `label` text as the `alt` attribute.
export default function PlaceholderMedia({ label, aspect = '16/9', className = '' }) {
  return (
    <div
      role="img"
      aria-label={label}
      style={{ aspectRatio: aspect }}
      className={`flex items-center justify-center bg-surface border border-dashed border-primary/30 text-text/50 text-sm font-medium text-center px-4 ${className}`}
    >
      {label}
    </div>
  )
}
```

- [ ] **Step 2: Verify semantic landmarks**

Confirm (read-through, no code change expected if Tasks 1–24 were followed exactly): `RootLayout` uses `<header>` (Navbar), `<main>`, `<footer>` (Footer); each section uses `<section>`; `Membership Process` uses `<ol>`; `Contact`/`Brochure` forms use `<label htmlFor>` paired with every input. If any is missing, fix it now in the relevant file.

- [ ] **Step 3: Verify color contrast on green backgrounds**

Check `bg-primary` (`#166534`) and `bg-secondary` (`#22c55e`) usage: white text (`text-white`) on `#166534` passes WCAG AA (contrast ratio ≈ 8.2:1). White text on `#22c55e` is only ≈ 2.4:1 and fails AA — confirm no component sets white text directly on a `bg-secondary` surface (secondary is used only as a `hover:bg-secondary` state on already-dark buttons in this plan, which is acceptable since hover states are exempt from static contrast requirements, but if any static text-on-secondary usage is found, change it to `bg-primary` or add a darker overlay).

- [ ] **Step 4: Confirm no layout shift from animations**

In `src/components/AnimatedSection.jsx`, the `hidden` variant changes `opacity`/`y` (transform), not `height`/`display` — this does not trigger reflow. Confirm no section conditionally renders/unmounts content that would shift layout during scroll (Brochure's `AnimatePresence` swap between form/success is the one exception — confirm both the form and success states occupy comparable height so the page doesn't jump; if they differ significantly, add a `min-h-[88px]` wrapper around the `AnimatePresence` block in `src/sections/Brochure.jsx`).

- [ ] **Step 5: Run the full verification suite**

```bash
npm run test
npm run build
npm run preview
```

Expected: all Vitest tests pass, build completes with no errors, preview server serves the production build without console errors on any of the 5 routes.

- [ ] **Step 6: Write the guessed-content/behavior report**

Create `docs/superpowers/plans/2026-07-21-strive-website-guesses.md` listing every place content or behavior was not explicitly specified and had to be inferred, for the user's review:

```markdown
# Content/Behavior Guessed During Implementation

- What We Do / Our Approach / Business Growth card descriptions: the spec
  gave only headline labels (e.g. "Connect Trainers", "Verified Clients")
  with no body copy — one-sentence descriptions were written to match
  STRIVE's tone from the About/Why Choose sections.
- Icon choices (react-icons) for every IconCard-based section: not
  specified in the spec, chosen for semantic fit.
- Footer "About"/"Business Growth"/"Brochure" quick links point to
  in-page anchors on Home (`/#about`, `/#business-growth`, `/#brochure`)
  since those aren't separate routes.
- Membership page subtitle ("Select the trainer category that matches
  your expertise and apply directly.") is not in the spec's copy list.
- SEO meta descriptions per route (Task 24) are written, not spec-supplied.
- Privacy/Terms page body copy is a placeholder stub, per the original
  brief's explicit instruction to stub these as legal pages.
```

- [ ] **Step 7: Manual verification — PHASE 7 CHECKPOINT**

Run: `npm run dev`. Do a full click-through of all 5 routes on both desktop and a mobile viewport (DevTools device toolbar), confirming: no visual layout shift, all animations respect reduced-motion, all forms validate correctly, all external links (Membership Google Forms, WhatsApp) open correctly, footer/nav links all resolve.

- [ ] **Step 8: Commit**

```bash
git add src/components/PlaceholderMedia.jsx docs/superpowers/plans/2026-07-21-strive-website-guesses.md
git commit -m "Accessibility/performance polish pass and guessed-content report (Phase 7 complete)"
```
