# CLAUDE.md — Codeq Care Landing Page

Repo z dwiema samodzielnymi stronami statycznymi: główny landing page (`index.html`) usługi **Codeq Care** i podstrona konfiguratora (`konfigurator.html`, "Sprint Box"). Zero build stepu — pliki otwiera się bezpośrednio w przeglądarce.

## Struktura plików

```
index.html + styles.css + script.js         # Landing page Codeq Care
konfigurator.html + konfigurator.css + konfigurator.js   # Sprint Box
Codeq Design System/                         # Tokeny, brand, komponenty — ma własny CLAUDE.md
```

Do 2026-09-11 CSS i JS obu stron były wklejone inline w `<style>`/`<script>` — rozbite na osobne pliki, żeby edycje jednej warstwy (np. tylko treści w HTML) nie wymagały czytania tysięcy linii CSS/JS przy okazji. Trzymaj ten podział: nowy CSS → do odpowiedniego `.css`, nowy JS → do odpowiedniego `.js`, HTML zostaje samym markupem.

## Design system

Wszystkie decyzje wizualne (kolory, typografia, spacing, komponenty) mają iść przez `Codeq Design System/` — **przeczytaj `Codeq Design System/CLAUDE.md` przed zmianami stylistycznymi**. Skrót: tokeny CSS (`var(--codeq-blue)`, `var(--space-5)` itd.) z `colors_and_type.css`, nie twarde wartości. Primary color `#315AFB`. Font Poppins. Bez emoji w treści.

## Konwencja nazw klas

BEM-ish: `block-name`, `block-name__element`, `block-name--modifier` (np. `site-footer__bottom`, `btn--primary`, `label--white`). Trzymaj się tego wzorca dla nowych komponentów.

## Sekcje index.html (kolejność w DOM)

`#mainNav` → `#hero` → `#problem` → `#timeline` (obecnie `display:none`, nieaktywna) → `#how` (sprint loop: Diagnoza/B/QBR) → `#cases` → `#squad` → video testimonials + `#paths` (Victory Paths) → `#pricing` → `#faq` → `#finalCta`. Modale: `#contactOverlay`, `#diagnozaOverlay`, `#stickyBar`.

`script.js` odwołuje się do elementów DOM bez `DOMContentLoaded` — zakłada, że tag `<script>` stoi w markupie **po** elementach, których dotyczy. Nie przenoś referencji do skryptu bez sprawdzenia kolejności w DOM.

## Merytoryka usługi

Kontekst oferty (pakiety, cennik, etapy) — patrz pamięć projektu "Codeq Care – merytoryka usługi", jeśli dostępna w danej sesji.

## Deploy

Docelowo pliki trafiają do programisty/CMS (Webflow lub inny) — traktuj `index.html`/`konfigurator.html` jako źródło do przepięcia, nie finalny hosting.
