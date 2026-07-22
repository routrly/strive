# STRIVE Placeholder Media Manifest

Every entry below is currently a **temporary demo photo** from
[Picsum Photos](https://picsum.photos) (seeded, downloaded into
`src/assets/demo/` — not hotlinked at runtime), standing in until real
Indian-professional stock media is available. None of these are
STRIVE-specific or curated for subject matter — they exist purely so
the site doesn't render empty placeholder boxes.

**To swap in a real asset:** drop the real file into `src/assets/`,
update the `import` in the listed component to point at it, and
delete the corresponding file in `src/assets/demo/` once nothing
references it. The Hero entry still needs an actual video — the demo
swap there is a static image standing in for the eventual loop.

| Asset | Used in | Demo file | Dimensions / Aspect | Notes |
|---|---|---|---|---|
| Hero background video | `src/sections/Hero.jsx` | `demo/hero.jpg` (static stand-in) | 1600x900 demo, target 1920x1080 16:9 loops muted | Indian professional trainer/classroom setting |
| Testimonial avatar 1 (Trainer) | `src/sections/Testimonials.jsx` | `demo/testimonial-trainer.jpg` | 300x300 demo, rendered 96x96 circular | Indian professional headshot |
| Testimonial avatar 2 (College Partner) | `src/sections/Testimonials.jsx` | `demo/testimonial-college-partner.jpg` | 300x300 demo, rendered 96x96 circular | Indian professional headshot |
| Testimonial avatar 3 (Corporate Client) | `src/sections/Testimonials.jsx` | `demo/testimonial-corporate-client.jpg` | 300x300 demo, rendered 96x96 circular | Indian professional headshot |
| About STRIVE team/office photo | `src/sections/About.jsx` | `demo/about.jpg` | 800x600, 4:3 | Office or team training session |
| Business Growth illustrative photo | `src/sections/BusinessGrowth.jsx` | `demo/business-growth.jpg` | 800x600, 4:3 | Institution/corporate training session |
| Membership page hero banner (optional) | `src/pages/Membership.jsx` | *not implemented — no hero banner exists in the current Membership page* | 1600x400, 4:1 | Trainers in a professional setting |
| Brochure cover thumbnail | `src/sections/Brochure.jsx` | `demo/brochure-cover.jpg` | 480x600 demo, target 400x560 portrait | Cover of the downloadable brochure PDF |
