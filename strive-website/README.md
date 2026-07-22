# STRIVE Website

Marketing website for STRIVE (Society for Training Resources and Instructional
Value Enhancement) — a community connecting trainers with institutions and
organizations.

## Stack

React 18 + Vite, Tailwind CSS v3, framer-motion, react-router-dom v6,
react-helmet-async, react-intersection-observer, swiper.

## Development

```bash
npm install
npm run dev      # dev server
npm run test     # Vitest unit tests
npm run build    # production build
npm run preview  # preview the production build
```

## Project structure

```
src/
  assets/       # placeholder-manifest.md + future real media
  components/   # reusable primitives (Button, Card, Navbar, Footer, ...)
  sections/     # page-specific composites (Hero, About, Testimonials, ...)
  pages/        # route-level pages (Home, Membership, Contact, Privacy, Terms)
  hooks/        # useScrollPosition, useCountUp
  utils/        # validation helpers
  layouts/      # RootLayout (Navbar + Outlet + Footer)
```

## Known TODOs

- Real media assets (hero video, avatars, photos) — currently placeholder
  blocks in `src/assets/placeholder-manifest.md`, awaiting real files.
- Brochure and Contact form submissions are client-side validation only
  (`// TODO: wire real submit endpoint here`).
- Facebook/Instagram/LinkedIn links are stubbed (`href="#"`) pending real
  profile URLs.
- `src/components/Seo.jsx`'s `BASE_URL` is a placeholder pending the real
  production domain.
