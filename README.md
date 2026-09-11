# Codeq Care — Landing Page

Sprzedażowy landing page usługi **Codeq Care** — abonamentowy zespół wzrostu dla e-commerce. Plus osobna podstrona **Sprint Box** (konfigurator).

## Struktura

```
index.html            # Główny landing page (markup)
styles.css            # Style dla index.html
script.js             # Logika/interakcje dla index.html

konfigurator.html      # Podstrona "Sprint Box" (markup)
konfigurator.css       # Style dla konfigurator.html
konfigurator.js        # Logika/interakcje dla konfigurator.html

Codeq Design System/   # Design system (tokeny, komponenty, brand) — patrz jego własny CLAUDE.md
```

Każda para plik.html/.css/.js jest samodzielna — nie ma wspólnego bundlera ani kroku budowania. Otwórz `.html` bezpośrednio w przeglądarce, żadne zależności nie są wymagane.

## Sekcje index.html

1. **Nav** (`#mainNav`) — sticky nawigacja
2. **Hero** (`#hero`) — nagłówek, badge Clutch
3. **Problem** (`#problem`) — porównanie modeli (Freelancer / Agencja / Codeq Care)
4. **Timeline** (`#timeline`) — obecnie ukryta (`display:none`)
5. **Approach / Jak to działa** (`#how`) — sprint loop (Diagnoza / B / QBR)
6. **Cases** (`#cases`) — case studies, karuzela
7. **Squad** (`#squad`) — 4 role w abonamencie
8. **Video testimonials + Victory Paths** (`#paths`) — opinie wideo + interaktywne ścieżki wzrostu
9. **Pricing** (`#pricing`) — pakiety Stability / Growth
10. **FAQ** (`#faq`) — accordion
11. **Final CTA** (`#finalCta`) — sekcja zamykająca
12. Modale: kontakt (`#contactOverlay`), diagnoza (`#diagnozaOverlay`), sticky bar (`#stickyBar`)

## Jak uruchomić

Otwórz `index.html` lub `konfigurator.html` bezpośrednio w przeglądarce — nie wymaga serwera ani zależności.

## Dalszy rozwój

- Podmień `mailto:hello@codeq.pl` na docelowy formularz lub link do Calendly
- Zintegruj z Webflow lub CMS po zatwierdzeniu projektu w Figma
