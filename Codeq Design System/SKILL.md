---
name: codeq-design
description: Use this skill to generate well-branded interfaces and assets for Codeq, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Key starting points in this folder:
- `README.md` — brand context, content fundamentals, visual foundations, iconography
- `colors_and_type.css` — all design tokens (colors, type scale, spacing, radii, motion)
- `assets/` — logos (`logo-blue.svg`, `logo-white.svg`) and sygnet symbol (`sygnet-blue.svg`, `sygnet-white.svg`)
- `ui_kits/website/` — marketing-website components + demo

Brand essentials to always honor:
- Primary color **#315AFB** (Codeq blue). Full-bleed blue hero sections are on-brand.
- Type is **Poppins** (all weights) with `letter-spacing: 0.02em` on display text.
- Big editorial labels may use **Inter Bold** at very large sizes (100–150px).
- Signature background motif: soft diagonal blue gradient shapes bleeding off the frame (`rgba(49,90,251,0.27) → transparent`).
- No emoji. Minimal decorative iconography. Use the sygnet for brand presence at small sizes.
