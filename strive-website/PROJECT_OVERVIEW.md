# STRIVE Website — Project Overview

> **Last updated**: August 6, 2026

Comprehensive documentation for the **STRIVE (Society for Training Resources and Instructional Value Enhancement)** marketing and trainer onboarding web application.

---

## 1. Executive Summary & Purpose

**STRIVE** is a professional network and training platform created to connect verified trainers, educators, and instructors with academic institutions, colleges, and corporate organizations across India.

### Core Value Proposition
- **For Trainers**: Eliminates freelancing risk by providing contract security, verified institutional opportunities, timely compensation, and continuous Training of Trainers (TOT) skill workshops.
- **For Institutions & Corporates**: Offers a curated pool of certified educators across Soft Skills, Aptitude, Verbal Communication, and Technical/Coding domains, backed by end-to-end program management.

---

## 2. Tech Stack & Dependencies

| Category | Technology | Description |
| :--- | :--- | :--- |
| **Framework & Core** | React 19 + Vite | Fast HMR development server and production bundler |
| **Styling System** | Tailwind CSS v3 | Utility-first styling with custom theme tokens |
| **Typography** | Plus Jakarta Sans | Single unified font family loaded via Google Fonts (`300..800` & italic) |
| **Icons & Media** | `react-icons` (Fi & Fa) | Feather Icons and FontAwesome social icons |
| **Carousel / Slider** | Swiper v14 (`swiper`) | Responsive autoplay photo slider for training session testimonials |
| **Animations** | `framer-motion` | Page transitions, mobile drawer animations, and section reveals |
| **Routing** | `react-router-dom` (v6) | Client-side routing with hash scroll positioning in `RootLayout` |
| **SEO** | `react-helmet-async` | Page meta titles, descriptions, and canonical URL management |
| **Utilities** | `react-intersection-observer` | Viewport detection for animated counter triggers |
| **Testing** | Vitest + Testing Library | Automated unit tests for components, hooks, and helpers |
| **Linting** | Oxlint (`oxlint`) | Fast static code analysis and linting |
| **Deployment** | Netlify | SPA redirection rules (`netlify.toml`) and Netlify site binding |

---

## 3. Directory Structure & Architecture

```
strive-website/
├── index.html                  # HTML entry point with Google Fonts preconnect for Plus Jakarta Sans
├── package.json                # Project dependencies, scripts, and dev config
├── tailwind.config.js          # Color tokens (primary: #16a34a, secondary: #22c55e, accent: #d4af37), fonts, radius
├── vite.config.js              # Vite bundler configuration
├── vitest.config.js            # Vitest testing configuration
├── netlify.toml                # Netlify deployment & SPA routing rules
├── PROJECT_OVERVIEW.md         # Comprehensive project documentation
├── public/
│   └── strive-brochure.pdf     # Official STRIVE PDF overview brochure (2.2 MB)
├── src/
│   ├── main.jsx                # React app entry point with HelmetProvider & BrowserRouter
│   ├── App.jsx                 # Route definitions (Home, Membership, Contact, Privacy, Terms)
│   ├── index.css               # Global base styles, Plus Jakarta Sans font features, and utility classes
│   ├── assets/                 # Brand logo, hero video, real session photos, brochure cover
│   │   ├── logo.png            # STRIVE official logo
│   │   ├── hero.mp4            # Background video for Hero section
│   │   ├── brochure-cover.jpg  # PDF brochure thumbnail cover
│   │   └── testimonials/       # Authentic high-res STRIVE training session photos (session-1 to session-6)
│   ├── components/             # Reusable UI primitives
│   │   ├── Button.jsx          # Primary, secondary, outline button variants with focus ring accessibility
│   │   ├── Card.jsx            # Base white card primitive with border & shadow
│   │   ├── IconCard.jsx        # Feature card with emerald icon container badge
│   │   ├── MembershipCard.jsx  # Track application card with feature checklist & apply CTA
│   │   ├── SectionHeading.jsx  # Standard section title block with uppercase eyebrow badge & subtitle
│   │   ├── AnimatedCounter.jsx # Scroll-triggered numerical counter card
│   │   ├── Navbar.jsx          # Transparent/solid header with desktop nav & single "Become a Member" CTA
│   │   ├── MobileMenu.jsx      # Slide-out mobile menu overlay with quick contact links
│   │   ├── Footer.jsx          # Dark green multi-column footer with focus rings & back-to-top feature
│   │   ├── Seo.jsx             # React Helmet wrapper for page metadata
│   │   └── ScrollProgressBar.jsx # Top scroll indicator bar
│   ├── layouts/
│   │   └── RootLayout.jsx      # Layout wrapper handling hash scrolling & page view reset
│   ├── pages/                  # Top-level route pages
│   │   ├── Home.jsx            # Main landing page assembling sections
│   │   ├── Membership.jsx      # Trainer track selection & direct application page
│   │   ├── Contact.jsx         # Contact channels, Google Maps frame, and inquiry form
│   │   ├── Privacy.jsx         # Privacy policy document
│   │   └── Terms.jsx           # Terms & conditions document
│   ├── sections/               # Home page landing sections
│   │   ├── Hero.jsx            # Video hero with "Contact Us" (Primary) and "Download Brochure" (Secondary)
│   │   ├── About.jsx           # Mission, vision, and real session photo overview block
│   │   ├── WhyChooseStrive.jsx # 6 core reasons trainers join STRIVE
│   │   ├── WhatWeDo.jsx        # 8 domain scope cards including School Empowerment & CSR Projects
│   │   ├── MembershipBenefits.jsx # Benefits breakdown with direct join CTA
│   │   ├── MembershipProcess.jsx  # 5-step trainer onboarding timeline
│   │   ├── BusinessGrowth.jsx     # Institutional node workflow and real session photo details
│   │   ├── Testimonials.jsx    # Autoplay photo carousel featuring real RVS College training session cards
│   │   ├── Brochure.jsx        # High-visibility brochure section with direct 1-click PDF download button
│   │   └── FinalCTA.jsx        # High-impact closing call-to-action block
│   ├── hooks/                  # Custom React hooks
│   │   ├── useScrollPosition.js# Tracks header scroll position for glassmorphism header
│   │   └── useCountUp.js       # Smooth numerical animation hook
│   └── utils/
│       └── validation.js       # Client-side email, phone, and contact form validation
```

---

## 4. State Management

The application strictly uses **React local component state** (`useState`) and custom hooks. No global state libraries (Redux, Zustand) or React Context providers are used.

### Form State End-to-End Flow
1. **Contact Form (`src/pages/Contact.jsx`)**:
   - State: `form` (`{ name: '', email: '', phone: '', message: '' }`), `errors` (`{}`), `submitted` (`boolean`).
   - On submit, `validateContactForm(form)` in `src/utils/validation.js` checks input formats.
   - If valid, `submitted` is set to `true`, displaying an in-page success banner, and resetting input fields.
   - *Flow*: Purely client-side state manipulation.

2. **Custom Hooks State**:
   - `useScrollPosition`: Tracks `window.scrollY` to toggle solid vs transparent styling on the header in `Navbar.jsx`.
   - `useCountUp`: Runs `requestAnimationFrame` loop to animate numbers when triggered by `react-intersection-observer`.

---

## 5. Content Source of Truth

Section text, list items, and card data are **hardcoded inline or defined as static array constants within component files**:
- `WhyChooseStrive.jsx`: `REASONS` array.
- `WhatWeDo.jsx`: `ITEMS` array (includes *School Empowerment Programs* and *CSR Projects*).
- `MembershipBenefits.jsx`: `BENEFITS` array.
- `MembershipProcess.jsx`: `STEPS` array.
- `BusinessGrowth.jsx`: `CARDS` array.
- `Testimonials.jsx`: `TESTIMONIALS` array (RVS College student feedback & session photos `session-1.jpg` to `session-6.jpg`).
- `Membership.jsx`: `TRACKS` array (Soft Skills, Aptitude, Verbal, Technical).

---

## 6. Forms & Backend Integration

- **Contact Form**: Currently operates **100% client-side**. There is no backend API, serverless function, Netlify Form handler (`data-netlify="true"`), or third-party email service attached.
- **Brochure Download**: Direct 1-click download link pointing to `/strive-brochure.pdf`.

---

## 7. Environment Variables & Configuration

- **Environment Variables**: **Zero `.env` or `import.meta.env` keys** are referenced in the source code.
- **Static Base URL**: `src/components/Seo.jsx` hardcodes `BASE_URL = 'https://strivesociety.in'`.

---

## 8. Page-to-Section Mapping

### `Home.jsx` (Landing Page Layout)
Rendered section order:
1. `<Seo />`
2. `<Hero />` (Video hero with "Contact Us" primary CTA & "Download Brochure" secondary smooth scroll button)
3. `<About />` (Mission, vision, and real session photo `session-1.jpg`)
4. `<WhyChooseStrive />` (6 core reasons grid)
5. `<WhatWeDo />` (8 scope cards including School Empowerment & CSR Projects)
6. `<MembershipBenefits />` (6 member benefits grid)
7. `<MembershipProcess />` (5-step onboarding timeline)
8. `<BusinessGrowth />` (Institutional workflow & real session photo `session-5.jpg`)
9. `<Testimonials />` (Swiper autoplay carousel with 6 real training session cards)
10. `<Brochure />` (Dedicated high-visibility brochure feature card with 1-click PDF download)
11. `<FinalCTA />` (Closing call-to-action block)

### `Membership.jsx` (Trainer Application Page)
1. `<Seo />`
2. Domain Track Selection Header & `<MembershipCard />` grid (Soft Skills, Aptitude & Logic, Verbal & Communication, Technical & Code).

### `Contact.jsx` (Contact Page)
1. `<Seo />`
2. Contact details cards (Phone, Email, Location) + Social media icons + Google Maps iframe + Message form.

### `Privacy.jsx` & `Terms.jsx`
1. `<Seo />`
2. Document title & legal privacy/terms statements.

---

## 9. Brand Assets & Media Specs

- **STRIVE Logo**: `src/assets/logo.png` (PNG format, 232.8 KB).
  - Rendered in `Navbar.jsx`: `<img src={logo} alt="STRIVE Logo" className="h-12 sm:h-14 md:h-16 w-auto object-contain drop-shadow-sm" />`
  - Rendered in `Footer.jsx`: `<img src={logo} alt="STRIVE" className="h-16 sm:h-20 w-auto opacity-100 object-contain" />`
- **Hero Video**: `src/assets/hero.mp4` (MP4 format, 3.5 MB), rendered in `Hero.jsx`.
- **Brochure PDF & Cover**: `public/strive-brochure.pdf` (PDF file, 2.2 MB) and `src/assets/brochure-cover.jpg` (JPG format, 38.9 KB thumbnail).
- **Authentic Session Photos**: Real high-res STRIVE training session photos (`session-1.jpg` through `session-6.jpg` in `src/assets/testimonials/`) deployed across Testimonials, About, and Business Growth sections.

---

## 10. Deployment Info

- **Platform**: Netlify
- **Netlify Site ID**: `3253004a-2117-4a74-93cd-1d4473776787` (from `.netlify/state.json`)
- **Build Settings**: `command = "npm run build"`, `publish = "dist"` (from `netlify.toml`).

---

## 11. Known In-Progress Items

1. **Client-Side Form Submissions**: Contact form (`Contact.jsx`) does not persist data to a backend server or send emails yet (`// TODO: wire real submit endpoint here`).
2. **Hardcoded Content Arrays**: Copy is hardcoded across component files rather than unified in a central config file.

---

## 12. Available Commands

```bash
npm run dev      # Launch Vite development server
npm run build    # Compile production bundle to dist/
npm run test     # Run Vitest test suite
npm run lint     # Run Oxlint static analysis
npm run preview  # Preview production build locally
```
