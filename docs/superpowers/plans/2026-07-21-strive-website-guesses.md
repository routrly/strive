# Content/Behavior Guessed During Implementation

This is a full review of everywhere content or behavior was not explicitly
given in `docs/superpowers/specs/2026-07-21-strive-website-design.md` and had
to be inferred during the build (Tasks 1–25), for your review. Items are
grouped by kind. Anything not listed here (Hero copy, Trust Metrics numbers,
About STRIVE copy, Why Choose STRIVE headline+description pairs, Membership
Process steps, the 3 Membership page card blurbs + form URLs, Testimonials
quotes, Brochure copy, Final CTA copy, Footer quick-link labels) was supplied
verbatim by the spec and copied as-is.

## Body copy invented beyond the spec

- **What We Do** card descriptions (Connect Trainers, Corporate Training,
  College Training, Soft Skills, Professional Development, Business Growth):
  the spec gave only the six headline labels, no body copy — one-sentence
  descriptions were written to match STRIVE's tone.
- **Our Approach** card descriptions (Practical Learning, Interactive
  Sessions, Real-world Relevance, Measurable Outcomes): same situation —
  headlines only in the spec, descriptions invented.
- **Business Growth** card descriptions (Verified Clients, End-to-End Program
  Management, Long-Term Partnerships, Quality Delivery): the spec gave the
  flow diagram (Institution → STRIVE → Trainer) and the four card headlines
  only; descriptions were written to fit.
- **Membership page** section heading block: the spec describes the three
  glassmorphism cards in full but never gives page-level heading copy. The
  eyebrow ("Join STRIVE"), title ("Choose Your Training Track"), and subtitle
  ("Select the trainer category that matches your expertise and apply
  directly.") were all written for this task.
- **SectionHeading eyebrow labels** across sections (e.g. "About STRIVE",
  "Why STRIVE", "Our Work", "Methodology", "How It Works", "For Institutions",
  "Testimonials", "Get in Touch", "Brochure"): the spec never specifies these
  small kicker labels above each `<h2>`; they were invented to match each
  section's content. Section `<h2>` title text itself was taken from the
  spec's own section headers where possible (e.g. "Business Growth", "Why
  Choose STRIVE") — only the eyebrows above them are new.
- **Testimonials** section title "What People Say": the spec's section header
  is just "Testimonials" (used as the eyebrow); the on-page `<h2>` text was
  invented.
- **Privacy/Terms page body copy** is a placeholder stub, per the spec's own
  explicit instruction (Section 8, Non-Goals) to leave these as stubs — the
  exact stub sentences are original wording, not spec text.
- Contact form and Brochure form **validation error messages** ("Please enter
  your name.", "Please enter a valid email address.", etc. in
  `src/utils/validation.js`) are not spec'd; wording and the phone-number
  rule (≥7 digits, digits/+/-/space allowed) were both invented.
- Contact page map `<iframe title="...">` string ("STRIVE location — Kochi,
  Kerala") is original wording; the spec specifies the map query
  ("Kochi, Kerala" search embed) but not this accessible title text.

## Structural / routing decisions not spec'd

- Footer "About" / "Business Growth" / "Brochure" quick links point to
  in-page anchors on Home (`/#about`, `/#business-growth`, `/#brochure`)
  since those aren't separate routes — the spec lists the quick-link labels
  but not their destinations.
- The smooth-scroll anchor offset (`HEADER_OFFSET = 96` in
  `src/layouts/RootLayout.jsx`) is a hand-picked pixel value to clear the
  fixed Navbar; not spec'd, verified by measurement (see Step 4 note below on
  the same kind of after-the-fact verification).

## Visual / asset decisions not spec'd

- Icon choices (react-icons `Fi*`/`Fa*` glyphs) for every IconCard-based
  section (Why Choose STRIVE, What We Do, Our Approach, Membership Benefits)
  and for inline icons (phone/mail/WhatsApp/social/chevron/arrow): the spec
  says "Icons: react-icons" as a library choice only, never which icon per
  item. Chosen for semantic fit to each label.
- Placeholder media dimensions/aspect ratios in
  `src/assets/placeholder-manifest.md` (e.g. hero 1920x1080 16:9, avatars
  96x96 1:1, About/Business Growth photos 800x600 4:3, brochure cover
  400x560 portrait) — the spec asked for a catalogued manifest with
  dimensions but didn't supply the numbers themselves.
- Favicon/monogram artwork (`public/favicon.svg`): the spec says "text/
  monogram-based until a real logo exists" but leaves the actual mark design
  up to the implementer.
- `Seo.jsx`'s placeholder production domain (`https://strive.example.com`,
  marked `// TODO: replace with the real production domain`) feeds every
  route's canonical URL and Open Graph `og:url` tag — invented since no real
  domain exists yet.

## SEO copy

- Per-route `<title>` and meta-description strings passed to `<Seo>` on all
  5 pages (Task 24) are written copy, not spec-supplied — the spec calls for
  "react-helmet-async meta per route" as a mechanism, not the text itself.

## Accessibility/performance polish decisions made during this task (Task 25)

- `src/sections/Brochure.jsx`: measured the AnimatePresence form/success
  swap with Playwright and found a real height mismatch (form ≈50px, or
  ≈78px with a validation error showing, vs. success ≈96px), which produced
  a measurable ~14px downstream page shift on submit. Added a
  `min-h-[96px]` wrapper around the `AnimatePresence` block; re-measured
  afterward and confirmed the shift drops to 0px.
- No other code changes were needed — the Step 2 (semantic landmarks) and
  Step 3 (green-background contrast) audits both came back clean on a full
  read-through of every section, page, and shared component.
