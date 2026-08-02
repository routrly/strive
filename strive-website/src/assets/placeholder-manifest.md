# STRIVE Placeholder Media Manifest

Most entries below are **themed demo photos** (free-license stock,
downloaded into `src/assets/demo/` — not hotlinked at runtime) showing
Indian professionals in office/training settings, standing in until
real STRIVE-specific photography is available. They're a closer match
for subject matter than the original Picsum placeholders, but they are
still stock photos of unrelated people, not actual STRIVE trainers,
staff, or clients.

**To swap in a real asset:** drop the real file into `src/assets/`,
update the `import` in the listed component to point at it, and
delete the corresponding file in `src/assets/demo/` once nothing
references it.

| Asset | Used in | File | Dimensions / Aspect | Notes |
|---|---|---|---|---|
| Hero background video | `src/sections/Hero.jsx` | ✅ real — `assets/hero.mp4` | 16:9, loops muted | Indian professional trainer/classroom setting |
| Brochure cover thumbnail | `src/sections/Brochure.jsx` | ✅ real — `assets/brochure-cover.jpg` | 420x525 portrait | Cropped from the front panel of the actual `public/strive-brochure.pdf` |
| Testimonial avatar 1 (Trainer) | `src/sections/Testimonials.jsx` | `demo/testimonial-trainer.jpg` | 300x300, rendered 96x96 circular | Stock headshot, Indian professional |
| Testimonial avatar 2 (College Partner) | `src/sections/Testimonials.jsx` | `demo/testimonial-college-partner.jpg` | 300x300, rendered 96x96 circular | Stock headshot, Indian professional |
| Testimonial avatar 3 (Corporate Client) | `src/sections/Testimonials.jsx` | `demo/testimonial-corporate-client.jpg` | 300x300, rendered 96x96 circular | Stock headshot, Indian professional |
| About STRIVE team/office photo | `src/sections/About.jsx` | `demo/about.jpg` | 711x533, ~4:3 | Stock office/training session photo |
| Business Growth illustrative photo | `src/sections/BusinessGrowth.jsx` | `demo/business-growth.jpg` | 711x533, ~4:3 | Stock corporate discussion photo |
| Membership page hero banner (optional) | `src/pages/Membership.jsx` | *not implemented — no hero banner exists in the current Membership page* | 1600x400, 4:1 | Trainers in a professional setting |
