# Codeq website UI kit

Click-thru recreation of a Codeq marketing site, built from brandbook templates + logo assets. The Codeq website Figma was not mounted in this session, so this kit is **brand-consistent but approximate** — please re-attach `Codeq website.fig` to bring components to pixel-fidelity.

## Files

- `index.html` — runnable demo of the full page
- `kit.css` — all component styles (imports `colors_and_type.css`)
- `Nav.jsx`, `Hero.jsx`, `Services.jsx`, `Work.jsx`, `Proof.jsx`, `ContactFooter.jsx` — components

## Components

| Component | Purpose |
|---|---|
| `<Nav variant="light|dark" />` | Sticky top nav with logo swap and primary CTA |
| `<Hero />` | Full-bleed hero with gradient motif + tagline |
| `<Services />` | 3-column services grid |
| `<Work />` | Interactive case-study stage with tabs |
| `<SocialProof />` | Logo row |
| `<Quote />` | Full-bleed blue quote block |
| `<Contact />` | Dark contact form with "thanks" state |
| `<Footer />` | 3-column footer on light surface |

## Conventions

- All components use the `cq-` prefix and tokens from `colors_and_type.css`.
- Interactive state (work tabs, contact form) uses local React state.
- Components export themselves onto `window` so files can be split across `<script type="text/babel">` tags.
