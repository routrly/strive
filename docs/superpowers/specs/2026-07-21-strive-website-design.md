# STRIVE Marketing Website — Design Spec

Date: 2026-07-21
Status: Approved (pending final read-through)

## 1. Purpose

Build a production-ready React + Vite marketing website for STRIVE (Society
for Training Resources and Instructional Value Enhancement) — a community
connecting trainers with institutions/organizations. The site presents
STRIVE's mission, membership offering, and business-growth pitch, and drives
two conversions: (1) trainers applying via external Google Forms, (2)
visitors downloading a brochure / contacting STRIVE.

## 2. Tech Stack

- Scaffold: `npm create vite@latest strive-website -- --template react` (JavaScript, not TS)
- Styling: Tailwind CSS v3
- Animation: framer-motion (scroll-triggered fade/slide/scale, stagger, respects `prefers-reduced-motion`)
- Icons: react-icons
- Carousel: swiper (testimonials)
- Routing: react-router-dom v6 — routes: `/`, `/membership`, `/contact`, `/privacy`, `/terms`
- Per-route meta: react-helmet-async
- Scroll-triggered reveal: react-intersection-observer

### Tailwind theme extension

```
colors:
  primary: #166534
  secondary: #22c55e
  accent: #d4af37
  background: #ffffff
  surface: #f8fafc
  text: #111827
borderRadius:
  card: 24px
  full: <tailwind default 9999px, used for buttons>
```

## 3. Folder Structure

```
src/
  assets/            # placeholder-manifest.md + future real media
  components/        # reusable primitives: Card, SectionHeading, AnimatedCounter,
                      # Button, IconCard, Navbar, Footer, ScrollProgressBar, MobileMenu
  sections/           # page-specific composites: Hero, TrustMetrics, About,
                      # WhyChooseStrive, WhatWeDo, OurApproach, MembershipBenefits,
                      # MembershipProcess, BusinessGrowth, Testimonials, Brochure, FinalCTA
  pages/             # Home, Membership, Contact, Privacy, Terms
  hooks/             # e.g. useScrollProgress, useCountUp
  utils/             # e.g. validation helpers
  layouts/           # RootLayout (Navbar + Outlet + Footer)
```

## 4. Content (verbatim — no Lorem ipsum)

### Hero
- Heading: "Building Trusted Trainers. Creating Real Opportunities."
- Subheading: "STRIVE empowers trainers through verified opportunities, professional development, and a trusted training ecosystem connecting educators with institutions and organizations."
- Buttons: "Become a Member" (→ `/membership`) / "Contact Us" (→ `/contact`)

### Trust Metrics
- 500+ Professional Trainers
- 100+ Institution Partners
- 1000+ Training Sessions
- 95% Client Satisfaction

### About STRIVE
- Heading: "Building Trusted Trainers. Creating Real Opportunities."
- Who We Are: "STRIVE (Society for Training Resources and Instructional Value Enhancement) is a growing community of trainers, educators, and professionals committed to delivering high-quality learning experiences. We were founded with a simple mission: To bring structure, trust, and real opportunities into the training ecosystem."
- Mission: "To empower trainers by providing a trusted platform that ensures genuine opportunities, continuous skill development, professional credibility, and long-term growth."
- Vision: "To become the leading training network that sets the benchmark for quality, trust, and impact in the training industry."

### Why Choose STRIVE (icon cards)
- Protection First — Protection from fraudulent vendors.
- Verified Opportunities — Every opportunity is verified.
- Training of Trainers (TOT) — Continuous trainer development.
- Strong Professional Network — Community-driven growth.
- Quality Over Quantity — Maintaining high standards.
- Long-Term Career Growth — Professional opportunities.

### What We Do
Connect Trainers / Corporate Training / College Training / Soft Skills / Professional Development / Business Growth

### Our Approach
Practical Learning / Interactive Sessions / Real-world Relevance / Measurable Outcomes

### Membership Benefits
- Title: "Become a STRIVE Member"
- Subtitle: "More Than Just a Network"
- Benefits: Protection from Fraudulent Vendors / Verified Opportunities / Training of Trainers / Skill Development / Professional Network / Career Growth

### Membership Process (timeline)
Fill Profile → Application Review → Verification → Join STRIVE → Receive Opportunities

### Membership Page (3 glassmorphism cards, external links `target="_blank" rel="noopener"`)
1. Soft Skills Trainer — "Apply to become a certified Soft Skills Trainer under STRIVE." — Apply Now → `https://docs.google.com/forms/d/1lPRhpVq0SEQAxuQ-aK8w_2mibONopxEUiMcbefD4Lbo/viewform`
2. Aptitude Skills Trainer — "Apply to join STRIVE as an Aptitude Skills Trainer." — Apply Now → `https://docs.google.com/forms/d/1fMaMXWx7NpYU5AqYE_JUPwfHjFnYi-m6RBsukwPksI0/viewform`
3. Verbal Skills Trainer — "Apply to become a Verbal Skills Trainer in the STRIVE professional network." — Apply Now → `https://docs.google.com/forms/d/1VlT32DSLPTG-Rqd7YcRdXYAkbRtkJ_isOxIZTu58nng/viewform`

Layout: 3-column desktop, single-column mobile. URLs must not be altered.

### Business Growth
- Flow diagram: Institution → STRIVE → Trainer
- Cards: Verified Clients / End-to-End Program Management / Long-Term Partnerships / Quality Delivery

### Testimonials (Swiper, autoplay, avatar placeholders, role-only attribution — no invented names)
- "STRIVE helped me find consistent training opportunities without worrying about fake clients." — Trainer
- "Their training sessions were engaging, structured and impactful." — College Partner
- "Professional, committed and result-oriented." — Corporate Client

### Brochure
- Title: "Download Our Brochure"
- Subtitle: "Enter your email address to receive our brochure instantly."
- Button: "Get Brochure"
- Email capture form: client-side validation only. `// TODO: wire real submit endpoint here` marks the integration point. Success animation on valid submit (no actual send).

### Contact
- Phone: +91 93477 34872
- Email: strivekochi@gmail.com
- Social: WhatsApp, Facebook, Instagram, LinkedIn
- Form fields: name, email, phone, message — client-side validation, `// TODO: wire real submit endpoint here`
- Google Maps iframe: generic "Kochi, Kerala" search query embed (no specific street address available)

### Final CTA
- Heading: "Be a Part of STRIVE"
- Text: "If you're serious about building a career in training and becoming part of a trusted professional network, STRIVE is the right place for you."
- Buttons: "Become Member" (→ `/membership`) / "Contact Us" (→ `/contact`)
- Note: "Limited onboarding to maintain quality standards."

### Footer
Quick Links: About / Membership / Business Growth / Brochure / Contact / Privacy Policy / Terms & Conditions

## 5. Decisions from Q&A

| Topic | Decision |
|---|---|
| Language | JavaScript (`--template react`), not TypeScript |
| Logo | Styled text wordmark "STRIVE" in theme colors — no image asset. Favicon likewise text/monogram-based until a real logo exists. |
| Social icons | Stubbed. WhatsApp uses a real `wa.me` link built from +91 93477 34872 (real data). Facebook/Instagram/LinkedIn use `href="#"` placeholders, clearly commented for later swap. |
| Google Maps | Generic "Kochi, Kerala" search embed — no specific address exists yet. |
| "Become a Member" CTAs (navbar, hero, final CTA) | Route to `/membership` |
| Testimonials attribution | Role-only, exactly as supplied — no invented names/photos beyond generic avatar placeholders |
| Brochure/Contact form backends | Explicitly out of scope — client-side validation + TODO comment only |

## 6. Assets

Every image/video is a named, correctly-sized placeholder `<div>` block (not
a hotlinked external image), catalogued in `src/assets/placeholder-manifest.md`
with dimensions, aspect ratio, and where each is used (hero video, 3
testimonial avatars, team/office photos, etc.). Real Indian-professional
stock media will be dropped into `src/assets` later.

## 7. Build Phases (review checkpoint after each)

1. **Shell & Navigation** — layout shell, sticky Navbar (transparent→solid on
   scroll), Footer, router setup (Home/Membership/Contact), scroll-progress
   bar, animated mobile menu.
2. **Home sections 1–4** — Hero (video placeholder + overlay + CTAs + scroll
   indicator), Trust Metrics (animated counters via IntersectionObserver),
   About STRIVE.
3. **Home sections 5–9** — Why Choose STRIVE, What We Do, Our Approach,
   Membership Benefits, Membership Process timeline.
4. **Membership page** — 3 glassmorphism cards linking to the exact external
   form URLs above, 3-col desktop / 1-col mobile.
5. **Business Growth, Testimonials, Brochure** — flow diagram, Swiper
   testimonials, brochure email-capture form with TODO + success animation.
6. **Contact & Final CTA & Footer** — split-layout contact form + Maps
   embed + socials, Final CTA band, footer with stub Privacy/Terms pages.
7. **Polish pass** — Framer Motion pass on every section (stagger, respects
   reduced-motion), react-helmet-async meta per route, manual
   Lighthouse-mindset check (lazy-loading, no layout shift, semantic HTML,
   alt text, AA contrast on green backgrounds). Report any place content/
   behavior had to be guessed.

## 8. Non-Goals (explicitly out of scope for this pass)

- Real media assets (video/photos) — placeholders only
- Brochure/contact form backend integration — TODO-marked only
- Real social media URLs — stubbed
- Real office street address — generic city-level map only
- CMS or content editing tooling
