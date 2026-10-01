# Codeq Design System

> Building the internet of tomorrow, today.

A design system for **Codeq** — a digital product studio specializing in WordPress, WooCommerce, Shopify, low-code, and UX. Codeq works "for business impact with a focus on the Discovery" (from their social share card), and ships marketing sites, e‑commerce storefronts, and custom web experiences.

## Sources

This system is reconstructed from materials provided by the user:

- **Figma — Codeq Brandbook** (mounted as VFS). Pages of interest:
  - `/Cover`, `/Guideline`, `/Logotyp` (logo lockups, color frames)
  - `/Linkedin-Facebook---templates` (social post library)
  - `/Blog-posts`, `/Social-share-img`, `/Clutch-posts---templates`
  - `/Torba` (merch / bag mockups)
- **Uploaded logo assets** (original vector, treated as source-of-truth):
  - `uploads/Logo_blue.svg`, `uploads/Logo_white.svg`
  - `uploads/Sygnet_blue.svg` (symbol only, blue), `uploads/Sygnet_white.svg`
- A second Figma (`Codeq website.fig`) was referenced but **not mounted in this session**. Website screens are therefore approximated from brandbook templates, the social share image, and the logo. See Caveats.

## Index — what's in this folder

| Path | What |
|---|---|
| `README.md` | This file — brand context, foundations, tone, iconography |
| `SKILL.md` | Agent-Skill entry point |
| `colors_and_type.css` | All CSS vars: colors, type, spacing, motion, elevation |
| `assets/` | Logos, sygnet (symbol), re-usable brand SVGs |
| `preview/` | Design-system cards that populate the Design System tab |
| `ui_kits/website/` | Marketing-website UI kit (JSX components + `index.html` demo) |
| `fonts/` | (Fonts loaded from Google Fonts — no local TTFs bundled) |

## Brand snapshot

- **Name** Codeq
- **Tagline** *"Building the internet of tomorrow, today."*
- **Positioning copy** *"Work for business impact with a focus on the Discovery."*
- **Specialties** WordPress, WooCommerce, Shopify, low-code, UX
- **Primary color** `#315AFB` — a saturated royal blue that shows up ~153× in the brandbook; it is the single strongest visual signal of the brand.

---

## Content fundamentals

**Voice.** Confident, declarative, forward-leaning. Copy reads like a studio-of-record talking about work rather than a marketing funnel. Sentences are short, often punctuated like a statement: *"Building the internet of tomorrow, today."*

**Tone.** Professional but warm. Never corporate-robotic. The brandbook mixes English and Polish source copy (`"Torba pełna dobrych pomysłów"` — *"A bag full of good ideas"*), so the voice is **bilingual-capable**; default to English for this system but keep copy translation-friendly (avoid locked idioms).

**Pronouns.** Third-person when describing the studio ("Codeq specializes in…"), second-person "you" when addressing clients. Avoid "we" unless the surface is explicitly a team post (LinkedIn, Clutch).

**Casing.** Sentence case for headings and UI. Title Case is rare. No ALL CAPS except for tiny labels/eyebrows ("CASE STUDY", "UX HACKS") — these appear in Poppins SemiBold at small sizes.

**Punctuation.** Periods end display statements. Ampersands ok in run-on lists ("WordPress, WooCommerce & Shopify"). Em-dashes for asides. No Oxford-comma fetish — follow local rhythm.

**Emoji.** Not used in brand-level copy. LinkedIn posts in the wild may use 1–2 domain-appropriate glyphs, but the brandbook templates are emoji-free. Default: **don't use emoji.**

**Numbers / stats.** When metrics appear they are specific and earned ("70% on WooCommerce"), never rounded-for-effect. Avoid "data slop" icons.

**Examples of on-brand copy**

- *Building the internet of tomorrow, today.*
- *Work for business impact with a focus on the Discovery.*
- *Specializing in WordPress, WooCommerce, Shopify, low code, UX.*
- *A bag full of good ideas.* (merch tagline, translated)

---

## Visual foundations

### Colors
- **Primary** `#315AFB` (Codeq blue). Used for logo, CTAs, section fills, large type blocks, and the signature full-bleed blue hero.
- **Deep variants** `#1F3FF9`, `#2C52FA`, `#132EF8` — interchangeable on flat fills; designers reach for the nearest by eye.
- **Neutrals** `#FFFFFF`, `#000000`, `#17313B` (muted ink), `#3674A2` (subdued link blue), `#061A44` (deep navy for long-form body on light). Borders: `#E0E3E6`.
- **Light tints** `#F9FAFE`, `#F2F4FD`, `#DFE6FF`, `#C1CEFE` — used for large translucent wash layers.
- **Accents** (sparing, almost never more than one at a time): `#EF9645` amber, `#F99E23` orange, `#FFDC5D` yellow, `#3EBEB3` teal, `#5DADEC` sky blue, `#EF4335` red.

### Type
- **Display + body:** **Poppins** (400, 500, 600, 700, 700 italic). This is ~100% of type on marketing surfaces.
- **Editorial mono-headline:** **Inter Bold** at 150px — used for giant page labels inside the template library ("Article", "Opinie", "Nowi klienci").
- Canonical sizes bubbled up from the brandbook: **150, 120, 100, 80, 65, 60, 50, 30, 28, 22, 20**.
- **Letter-spacing** on display text is consistently `+0.02em` — a small signature of the brand.
- Line-height on display = ~1.15–1.3; body = 1.55.

### Backgrounds
- **Full-bleed solid blue** (`#315AFB` / `#1F3FF9`) is the hero treatment.
- **Signature motif:** large, diagonal, organic gradient shapes that bleed off the canvas — `linear-gradient(rgba(49,90,251,0.27) 4%, rgba(193,206,254,0) 99%)` rotated and offset, sometimes layered 2–3 deep. See `preview/gradients.html`.
- **Hand-drawn illustrations:** none observed.
- **Patterns / textures:** none; surfaces are clean.
- **Photography:** used on blog covers; generally cool-toned, sharp, not b&w, not grainy.

### Layout
- Marketing frames are **1440×N** with `200px` side gutters.
- Social frames: **1200×630** (share), **1536×1536** (LinkedIn), **3072×1536** (LinkedIn profile banner).
- Very generous whitespace. Large type carries the page; accent art is minimal.

### Corner radii
- Cards and buttons are **mildly rounded** (8–12px). Pills (999px) on tags. Photos are often **square** (0 radius) when used full-bleed.

### Borders
- Hairline `1px solid #E0E3E6` on form inputs and dividers. No heavy outlines.

### Shadows
- Shadows are **subtle**: `0 6px 20px rgba(0,0,0,0.08)` is the upper end. There is a **signature "blue glow"** — `0 10px 40px rgba(49,90,251,0.35)` — reserved for primary-button hover or elevated blue CTAs. No neumorphism.

### Transparency / blur
- Diagonal gradients use **alpha compositing**, not blur. No glassmorphism observed in the brandbook.

### Animation
- No motion spec in brandbook. Our system ships conservative defaults: `220ms` default, `cubic-bezier(0.22, 1, 0.36, 1)` (gentle ease-out). Fades, not bounces. No parallax.

### Hover / press
- **Hover:** shift to deeper blue (`--codeq-blue-deep`) or tint the background 8% darker. On primary buttons, add `--shadow-glow-blue`.
- **Press:** scale to `0.98` over 80ms, release over 180ms.

### Cards
- White surface, 12px radius, 1px `#E0E3E6` border, optional `--shadow-2`. On blue sections: invert — blue surface w/ white type and no border.

### Capsules vs protection gradients
- Labels are **pill capsules** (`--radius-pill`) — never a gradient-behind-text protection strip.

### Fixed elements
- Marketing nav is typically a fixed top bar with the full `Logo_blue.svg` on left, menu right, single blue CTA. Footers are tall, 3–4 columns, on `#F9FAFE`.

---

## Iconography

**What we saw in the brandbook**

- Almost **zero decorative icons**. The brand trades on type + color, not iconography.
- The **sygnet** (brand symbol — the `C` + `q` ligature extracted from the logo) is the one repeating glyph. It appears as: solid blue on white, solid white on blue, often alone at small sizes (avatar, favicon, bag imprint). See `assets/sygnet-blue.svg` and `assets/sygnet-white.svg`.
- **No emoji.** **No icon font** shipped in the brandbook.
- Social platform marks (LinkedIn, Clutch) are used as-is from those platforms' own press kits — not recreated.

**Our approach in this system**

- When UI needs icons (nav carets, form affordances, buttons with leading glyphs, etc.), use **Lucide** via CDN:
  - `<script src="https://unpkg.com/lucide@latest"></script>` then `lucide.createIcons()`.
  - Stroke weight 1.75, 24×24, `currentColor` — this matches the clean, geometric feel of Poppins.
- **Substitution flagged:** Lucide is not present in the Codeq Figma. It is our closest-match CDN-available set. Swap to the client's preferred library if one exists.
- For large decorative marks, **prefer the sygnet** over generic icons.

---

## Caveats & iteration asks

**What I could not verify**

1. **Codeq website Figma** — the `Codeq website.fig` the prompt mentioned is not mounted in this session. The marketing UI kit is therefore derived from brandbook templates + the social share card, not from actual website frames. **Please re-attach `Codeq website.fig` so I can bring the site screens into pixel-fidelity.**
2. **Fonts** — Poppins and Inter are loaded from Google Fonts. If Codeq ships local variable-font TTFs for print parity, please drop them in `uploads/` and I'll bundle into `fonts/`.
3. **Motion spec** — none in the brandbook. My durations/easings are reasonable defaults; flag if there's a house spec.
4. **Iconography library** — the brandbook ships none. I substituted Lucide. Confirm or swap.
5. **Copy voice** — inferred from ~4 strings of real copy. If there's a tone guide or longer-form marketing writing, share it and I'll refine the Content Fundamentals section.

---

## How to use this system

- For **any new design** involving Codeq, link `colors_and_type.css` and use the tokens rather than hard-coded values.
- For **site pages**, start from a component in `ui_kits/website/`.
- For **social templates**, mirror the layouts in `/Linkedin-Facebook---templates` in the Figma — the brandbook has 60+ pre-designed post slots.
- For **LLM/agent work**, read `SKILL.md` — it's written to be cross-compatible with Agent Skills.
