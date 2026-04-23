# CLAUDE.md — Codeq project

This repo uses the **Codeq Design System**. Every visual decision (colors, typography, spacing, components, copy tone) must conform to it.

## Where it lives

The design system is at `./codeq-design/` (or wherever you copied it — adjust paths below if different).

```
codeq-design/
├── README.md              ← brand bible: tone, visual foundations, iconography
├── SKILL.md               ← agent-skill entry (read this first if invoked as a skill)
├── colors_and_type.css    ← ALL design tokens as CSS variables
├── assets/                ← logos + sygnet (brand symbol)
│   ├── logo-blue.svg
│   ├── logo-white.svg
│   ├── sygnet-blue.svg
│   └── sygnet-white.svg
├── preview/               ← token preview cards (reference only)
└── ui_kits/website/       ← ready-to-use marketing components
    ├── kit.css
    ├── Nav.jsx  Hero.jsx  Services.jsx  Work.jsx  Proof.jsx  ContactFooter.jsx
    └── index.html         ← full demo page
```

## How to use it

### 1. Load tokens once, globally

In your root CSS / layout (e.g. `app/globals.css`, `src/styles.css`, `<head>` of an HTML):

```css
@import "../codeq-design/colors_and_type.css";
```

This gives you every token: `var(--codeq-blue)`, `var(--fg-1)`, `var(--fs-hero)`, `var(--radius-lg)`, `var(--shadow-glow-blue)`, `var(--ease-out)`, etc.

### 2. Use tokens, never raw values

❌ Don't:
```css
color: #315AFB;
font-family: Poppins, sans-serif;
padding: 32px;
```

✅ Do:
```css
color: var(--codeq-blue);
font-family: var(--font-display);
padding: var(--space-6);
```

### 3. Reuse components from `ui_kits/website/`

The marketing components (`Nav`, `Hero`, `Services`, `Work`, `Quote`, `Contact`, `Footer`) are plain JSX + CSS — copy them into the project or import directly. They already honor the brand.

### 4. Assets

Use SVG files from `codeq-design/assets/` directly — never re-draw the logo or sygnet by hand.

- Full logo on light bg: `assets/logo-blue.svg`
- Full logo on blue/dark bg: `assets/logo-white.svg`
- Small sizes / favicon / avatar / imprint: `assets/sygnet-blue.svg` / `sygnet-white.svg`

## Brand non-negotiables

- **Primary color** `#315AFB` — the single strongest brand signal. Full-bleed blue hero sections are on-brand.
- **Type:** Poppins for everything on marketing surfaces. Display text uses `letter-spacing: 0.02em` — this is a signature.
- **Editorial labels** (very large page titles, 100–150px) may use Inter Bold.
- **Signature motif:** diagonal organic blue gradient shapes bleeding off the frame (`rgba(49,90,251,0.27) → transparent`).
- **No emoji** in brand copy.
- **No decorative icon soup.** Icons are minimal. If needed, use Lucide via CDN (flagged substitute — confirm before committing to production).
- **Shadows subtle**, except the signature "blue glow" on primary CTAs.
- **Cards:** white / 12px radius / 1px `#E0E3E6` border OR inverted blue surface — no gradient card backgrounds.

## Content / voice

- Confident, declarative, forward-leaning. Short sentences.
- Sentence case everywhere. ALL CAPS only for tiny eyebrow labels.
- Third-person for the studio, "you" for clients. Avoid "we" outside team posts.
- Tagline: **"Building the internet of tomorrow, today."**
- Positioning: **"Work for business impact with a focus on the Discovery."**

## When in doubt

1. Read `codeq-design/README.md` — full foundations + iconography + content fundamentals.
2. Open `codeq-design/ui_kits/website/index.html` in a browser to see the system in action.
3. Don't invent new colors, fonts, or iconography. If the system genuinely lacks something, add a TODO and ask — don't paper over with generic web defaults.
