# CLAUDE.md — Codeq Care Landing Page

Repo z dwiema samodzielnymi stronami statycznymi: główny landing page (`index.html`) usługi **Codeq Care** i podstrona konfiguratora (`konfigurator.html`, "Sprint Box"). Zero build stepu — pliki otwiera się bezpośrednio w przeglądarce.

## Struktura plików

```
index.html + styles.css + script.js         # Landing page Codeq Care
konfigurator.html + konfigurator.css + konfigurator.js   # Sprint Box
design-system/                               # Tokeny, brand, komponenty — ma własny CLAUDE.md
build.mjs + _headers                         # Deploy na Cloudflare Pages (patrz sekcja Deploy)
```

Do 2026-09-11 CSS i JS obu stron były wklejone inline w `<style>`/`<script>` — rozbite na osobne pliki, żeby edycje jednej warstwy (np. tylko treści w HTML) nie wymagały czytania tysięcy linii CSS/JS przy okazji. Trzymaj ten podział: nowy CSS → do odpowiedniego `.css`, nowy JS → do odpowiedniego `.js`, HTML zostaje samym markupem.

## Design system

Wszystkie decyzje wizualne (kolory, typografia, spacing, komponenty) mają iść przez `design-system/` — **przeczytaj `design-system/CLAUDE.md` przed zmianami stylistycznymi**. Skrót: tokeny CSS (`var(--codeq-blue)`, `var(--space-5)` itd.) z `colors_and_type.css`, nie twarde wartości. Primary color `#315AFB`. Font Poppins. Bez emoji w treści.

Do 2026-10-01 katalog nazywał się `Codeq Design System/` — spacje w ścieżkach zasobów przeszkadzały w URL-ach i `_headers`. Eksport design systemu generowany na nowo przychodzi ze starą nazwą: wklej jego zawartość do `design-system/`, nie twórz katalogu obok.

## Tooltipy

Wszystkie dymki na hover mają jednolite tło `var(--brand-dark)`, nigdy półprzezroczyste „szkło” (`rgba(255,255,255,.14)` + `backdrop-filter`) — przez szkło prześwitywały teksty i przyciski pod spodem. Wspólny wygląd (tło, ramka, zaokrąglenie, cień, `z-index`, stan ukrycia) siedzi w jednej regule `/* === TOOLTIP SURFACE === */` w `styles.css`. Nowy tooltip dopisuje się do jej listy selektorów i we własnej regule trzyma tylko położenie, rozmiar, padding i animację — nie kopiuj deklaracji tła/cienia.

## Karuzele

Strzałki prev/next to jeden komponent `.carousel-nav` (case studies, opinie). Markup: `<div class="carousel-nav" data-carousel="<id tracka>">` z przyciskami `.carousel-nav__btn[data-dir="-1"|"1"]` i ikonami `#ci-prev`/`#ci-next`. Jeden handler w `script.js` obsługuje wszystkie takie nawigacje (krok = szerokość slajdu + gap, wyłączanie strzałek na krańcach) — nowa karuzela nie potrzebuje własnego JS ani CSS strzałek.

## Konwencja nazw klas

BEM-ish: `block-name`, `block-name__element`, `block-name--modifier` (np. `site-footer__bottom`, `btn--primary`, `label--white`). Trzymaj się tego wzorca dla nowych komponentów.

## Sekcje index.html (kolejność w DOM)

`#mainNav` → `#hero` → `#problem` → `#how` (sprint loop: Diagnoza/B/QBR) → `#cases` → `#squad` → video testimonials + `#paths` (Victory Paths) → `#pricing` → `#faq` → `#finalCta`. Nakładki: `#contactOverlay`, `#roleSheetOverlay` (mobile), `#stickyBar`.

Nieużywane warianty (sekcja `#timeline`, modal `#diagnozaOverlay`, konfigurator inline, team stack, phase tabs) usunięto 2026-09-25 — są w historii gita sprzed commita „usuń martwy kod”. Nowych wariantów nie chowaj przez `display:none`; trzymaj je na osobnych gałęziach.

`script.js` odwołuje się do elementów DOM bez `DOMContentLoaded` — zakłada, że tag `<script>` stoi w markupie **po** elementach, których dotyczy. Nie przenoś referencji do skryptu bez sprawdzenia kolejności w DOM.

## Merytoryka usługi

Kontekst oferty (pakiety, cennik, etapy) — patrz pamięć projektu "Codeq Care – merytoryka usługi", jeśli dostępna w danej sesji.

## Deploy

Hosting: Cloudflare Pages, podpięte do repo (push na `main` = produkcja, inne gałęzie = podglądy). Ustawienia projektu: build command `node build.mjs`, output directory `dist`.

`build.mjs` kopiuje do `dist/` tylko to, co strona serwuje: wszystkie `*.html`/`*.css`/`*.js` z katalogu głównego, `_headers`, `design-system/colors_and_type.css` i `design-system/assets/`. Dokumentacja (`CLAUDE.md`, `README.md`, reszta design systemu) nie trafia do sieci. Nowa strona w katalogu głównym wchodzi automatycznie; plik spoza tych miejsc (np. nowy folder z zasobami) trzeba dopisać w `build.mjs`. Lokalny podgląd jak na Cloudflare: `node build.mjs && npx wrangler pages dev dist`.

`_headers`: zasoby z `assets/` mają cache na tydzień — przy podmianie obrazka/wideo na nową wersję zmieniaj nazwę pliku, inaczej część odwiedzających zobaczy starą wersję do 7 dni. HTML/CSS/JS są rewalidowane przy każdym wejściu.

Docelowo pliki trafiają do programisty/CMS (Webflow lub inny) — traktuj `index.html`/`konfigurator.html` jako źródło do przepięcia, nie finalny hosting.
