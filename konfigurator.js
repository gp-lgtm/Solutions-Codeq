    // ─────────────────────────────────────────────
    // DATA
    // ─────────────────────────────────────────────
    const TASKS = [
      // UX & Sprzedaż
      {id:'t01', label:'Redesign Karty Produktu',      desc:'Mobile First, UX konwersji, galeria i CTA',            cat:'ux',        size:'XL', hours:24},
      {id:'t02', label:'One-Step Checkout',             desc:'Uproszczenie i przyspieszenie ścieżki zakupu',          cat:'ux',        size:'XL', hours:22},
      {id:'t03', label:'Silnik Cross-sell / Upsell',   desc:'Rekomendacje "Kup razem" na karcie produktu',           cat:'ux',        size:'L',  hours:14},
      {id:'t04', label:'Optymalizacja Mobile UX',      desc:'Nawigacja i checkout na urządzeniach mobilnych',        cat:'ux',        size:'L',  hours:12},
      {id:'t05', label:'Porzucony Koszyk — flow',      desc:'Exit intent popup + sekwencja email',                   cat:'ux',        size:'M',  hours:7},
      {id:'t06', label:'Wyszukiwarka z Filtrowaniem',  desc:'Autocomplete, sortowanie, filtrowanie fasetowe',        cat:'ux',        size:'M',  hours:8},
      {id:'t24', label:'A/B Testy Konwersji',          desc:'Testy CTA, układu i copy na realnym ruchu',             cat:'ux',        size:'M',  hours:6},
      // Sklep & Tech
      {id:'t07', label:'Optymalizacja Core Web Vitals',desc:'PageSpeed Mobile do strefy Green (90+)',                cat:'tech',      size:'L',  hours:16},
      {id:'t08', label:'Audyt Bezpieczeństwa + Update',desc:'Wtyczki, SSL, zero krytycznych podatności',            cat:'tech',      size:'M',  hours:6},
      {id:'t09', label:'Integracja ERP / Magazyn',     desc:'Synchronizacja stanów i zamówień na żywo',             cat:'tech',      size:'XL', hours:28},
      {id:'t10', label:'Konfiguracja Cache i CDN',     desc:'Redis / Varnish / CloudFlare — tuning serwera',        cat:'tech',      size:'M',  hours:5},
      {id:'t11', label:'Aktualizacje CMS i Wtyczek',   desc:'Staging → testy regresji → deploy na produkcję',       cat:'tech',      size:'S',  hours:2},
      {id:'t12', label:'Monitoring i Alerty Uptime',   desc:'Logi błędów, Slack alerty, SLA 99.9%',                 cat:'tech',      size:'S',  hours:3},
      // Marketing
      {id:'t13', label:'Edytowalne Sekcje CMS',        desc:'Marketing edytuje samodzielnie, bez kodu',             cat:'marketing', size:'M',  hours:8},
      {id:'t14', label:'Optymalizacja Bloga pod SEO',  desc:'Schema, nagłówki, meta tagi, ALT, linkowanie',         cat:'marketing', size:'M',  hours:6},
      {id:'t15', label:'Nowy Landing Page',            desc:'Projekt UX + wdrożenie w jednym sprincie',             cat:'marketing', size:'L',  hours:18},
      {id:'t16', label:'Strona Zespół / O nas',        desc:'Nowy design, treści, sekcja z ludźmi',                 cat:'marketing', size:'M',  hours:5},
      {id:'t17', label:'Wymiana Banerów Kampanii',     desc:'Nowe formaty, banery sezonowe, A/B copy',              cat:'marketing', size:'S',  hours:2},
      {id:'t22', label:'Integracja CRM & Automation',  desc:'Scoring leadów + automatyzacja kampanii e-mail',        cat:'marketing', size:'L',  hours:12},
      {id:'t23', label:'Lead Magnet + Newsletter',     desc:'Popup zapisu, e-book, budowa bazy mailowej',            cat:'marketing', size:'M',  hours:5},
      // B2B
      {id:'t18', label:'Tiered Pricing B2B',           desc:'Ceny hurtowe i grupowe po zalogowaniu klienta',        cat:'b2b',       size:'L',  hours:16},
      {id:'t19', label:'Generator Ofert PDF',          desc:'Klient generuje wycenę samodzielnie, bez handlowca',   cat:'b2b',       size:'L',  hours:12},
      {id:'t20', label:'Panel Klienta B2B (MVP)',      desc:'Faktury, historia zamówień, powtarzanie',              cat:'b2b',       size:'XL', hours:26},
      {id:'t21', label:'Quick Order Form',             desc:'Zamówienia hurtowe w 2 klikach bez katalogu',          cat:'b2b',       size:'M',  hours:8},
    ];

    const TASKS_MAP = Object.fromEntries(TASKS.map(t => [t.id, t]));

    const PKG = {
      growth:    {label:'Growth',    price:6400, cap:35},
      stability: {label:'Stability', price:3200, cap:16},
    };

    // Mapa: ścieżka (Victory Path) → kategoria backlogu
    const PATH_CAT = { revenue:'ux', b2b:'b2b', leadgen:'marketing', tech:'tech', marketing:'marketing' };

    // Objawy klienta → diagnoza Codeq → ścieżka rozwiązania
    const SYMPTOMS = [
      {id:'s1', path:'revenue',   role:'UX & Strateg',  quote:'Ruch jest, ale sprzedaż stoi w miejscu',
       dx:'To problem konwersji, nie ruchu — ścieżka zakupowa gubi klientów. Bierzemy na warsztat kartę produktu i checkout.'},
      {id:'s2', path:'revenue',   role:'UX Designer',   quote:'Klienci masowo porzucają koszyk',
       dx:'Tarcie w checkoucie i koszty dostawy odkrywane za późno. Upraszczamy ścieżkę i odzyskujemy porzucone koszyki.'},
      {id:'s3', path:'tech',      role:'Senior Dev',    quote:'Sklep wolno działa, zwłaszcza na telefonie',
       dx:'Core Web Vitals poza strefą Green — to kosztuje pozycje w Google i konwersję mobile. Optymalizujemy wydajność i domykamy bezpieczeństwo.'},
      {id:'s4', path:'b2b',       role:'Strateg & Dev', quote:'Klienci B2B wciąż dzwonią z pytaniem o cenę',
       dx:'Brak samoobsługi hurtowej obciąża handlowców. Automatyzujemy ceny, oferty i panel klienta.'},
      {id:'s5', path:'marketing', role:'Dev & UX',      quote:'Marketing czeka na programistę przy każdej zmianie',
       dx:'Sztywne szablony blokują zespół marketingu. Dajemy edytowalne sekcje i porządkujemy SEO.'},
      {id:'s6', path:'leadgen',   role:'Strateg & UX',  quote:'Wydaję na reklamy, a leadów jak na lekarstwo',
       dx:'Ruch trafia w stronę bez lejka. Budujemy dedykowane landingi i maszynę do pozyskiwania leadów.'},
    ];

    const STEPS = [
      {n:1, k:'Krok 1', t:'Diagnoza'},
      {n:2, k:'Krok 2', t:'Backlog'},
      {n:3, k:'Krok 3', t:'Roadmapa wzrostu'},
    ];

    // Gotowe scenariusze sprintu (Victory Paths) — punkt startu, edytowalny
    const PRESETS = [
      {id:'revenue',   name:'Revenue Booster',          hint:'Konwersja — mniej porzuceń, wyższy CR',          pkg:'growth',    accent:'#3EBEB3', tasks:['t02','t05','t10'],       kpi:'CR +0.2–0.5pp · AOV +10–15%'},
      {id:'b2b',       name:'B2B Ecosystem',            hint:'Automatyzacja sprzedaży hurtowej',               pkg:'growth',    accent:'#a855f7', tasks:['t18','t19','t12','t11'], kpi:'−40% zapytań „jaka cena?" · samoobsługa B2B'},
      {id:'leadgen',   name:'Lead Generation Machine',  hint:'Pozyskiwanie leadów ze strony www',              pkg:'growth',    accent:'#EF9645', tasks:['t15','t22','t23'],       kpi:'Cost Per Lead ↓ · Quality Score ↑'},
      {id:'tech',      name:'Optymalizacja techniczna', hint:'Szybkość, bezpieczeństwo, stabilność',           pkg:'stability', accent:'#5570f6', tasks:['t08','t10','t12','t11'], kpi:'PageSpeed Green · Uptime 99.9% · 0 podatności'},
      {id:'marketing', name:'Wsparcie marketingu',      hint:'Marketing edytuje stronę bez programisty',       pkg:'stability', accent:'#7e96f9', tasks:['t13','t14','t17'],       kpi:'SEO Health 90/100 · zero kodu po stronie marketingu'},
    ];
    const PRESETS_MAP = Object.fromEntries(PRESETS.map(p => [p.id, p]));

    // ─────────────────────────────────────────────
    // STATE
    // ─────────────────────────────────────────────
    let step         = 1;
    let symptoms     = new Set();   // krok 1 — wybrane objawy
    let pkg          = 'growth';
    let selected     = new Set();   // krok 3 — zadania w sprincie
    let activePreset = null;
    let toastTmr     = null;

    // ─────────────────────────────────────────────
    // HELPERS
    // ─────────────────────────────────────────────
    const cap    = () => PKG[pkg].cap;

    // Liczba mnoga (PL): 1 / 2-4 / 5+
    function plural(n, one, few, many) {
      if (n === 1) return one;
      const d = n % 10, dd = n % 100;
      return (d >= 2 && d <= 4 && !(dd >= 12 && dd <= 14)) ? few : many;
    }

    // Ścieżki (Victory Paths) wynikające z wybranych objawów — bez duplikatów, w kolejności
    function chosenPaths() {
      const seen = new Set(), out = [];
      SYMPTOMS.forEach(s => { if (symptoms.has(s.id) && !seen.has(s.path)) { seen.add(s.path); out.push(s.path); } });
      return out;
    }
    // Zbiór zadań z diagnozy rekomendowanych jako priorytet
    function recommendedIds() {
      const ids = new Set();
      chosenPaths().forEach(p => PRESETS_MAP[p].tasks.forEach(id => ids.add(id)));
      return ids;
    }
    // Pełny backlog = zadania z kategorii wybranych ścieżek + rekomendacje
    function poolIds() {
      const cats = new Set(chosenPaths().map(p => PATH_CAT[p]));
      const ids = new Set();
      TASKS.forEach(t => { if (cats.has(t.cat)) ids.add(t.id); });
      chosenPaths().forEach(p => PRESETS_MAP[p].tasks.forEach(id => ids.add(id)));
      return [...ids];
    }

    function showToast(msg) {
      const el = document.getElementById('cfgToast');
      el.textContent = msg;
      el.classList.add('visible');
      clearTimeout(toastTmr);
      toastTmr = setTimeout(() => el.classList.remove('visible'), 3200);
    }

    // ─────────────────────────────────────────────
    // RENDER: STEPPER
    // ─────────────────────────────────────────────
    function renderStepper() {
      const el = document.getElementById('cfgStepper');
      el.innerHTML = STEPS.map(s => {
        const state = s.n === step ? 'is-active' : (s.n < step ? 'is-done' : '');
        return `
          <button class="cfg-stepper__item ${state}" data-goto="${s.n}" type="button" role="listitem" ${s.n < step ? '' : (s.n === step ? '' : 'disabled')}>
            <span class="cfg-stepper__num">${s.n < step ? '✓' : s.n}</span>
            <span class="cfg-stepper__txt">
              <span class="cfg-stepper__klabel">${s.k}</span>
              <span class="cfg-stepper__title">${s.t}</span>
            </span>
          </button>
        `.trim();
      }).join('');
      el.querySelectorAll('[data-goto]').forEach(b => {
        b.addEventListener('click', () => { const n = +b.dataset.goto; if (n < step) goToStep(n); });
      });
    }

    // ─────────────────────────────────────────────
    // RENDER: SYMPTOMS (krok 1)
    // ─────────────────────────────────────────────
    function renderSymptoms() {
      const el = document.getElementById('cfgSymptoms');
      el.innerHTML = SYMPTOMS.map(s => {
        const sel = symptoms.has(s.id);
        return `
          <button class="symptom-card${sel ? ' is-selected' : ''}" data-symptom="${s.id}" type="button" aria-pressed="${sel}">
            <span class="symptom-card__hyp">
              <span class="symptom-card__quote">${s.quote}</span>
              <span class="task-card__check"><span class="task-card__check-icon"></span></span>
            </span>
            <span class="symptom-dx">
              <span class="symptom-dx__role">Diagnoza · ${s.role}</span>
              <span class="symptom-dx__text">${s.dx}</span>
            </span>
          </button>
        `.trim();
      }).join('');
      el.querySelectorAll('[data-symptom]').forEach(b => {
        b.addEventListener('click', () => {
          const id = b.dataset.symptom;
          // wybór pojedynczy: klik w aktywny odznacza, klik w inny zamienia
          symptoms = symptoms.has(id) ? new Set() : new Set([id]);
          // zmiana objawu unieważnia dobór z dalszych kroków
          selected = new Set();
          activePreset = null;
          renderSymptoms();
          updateNav();
        });
      });
    }

    // ─────────────────────────────────────────────
    // RENDER: BACKLOG (krok 2)
    // ─────────────────────────────────────────────
    function renderBacklog() {
      const pool = poolIds().map(id => TASKS_MAP[id]);
      const rec = recommendedIds();
      const totalH = pool.reduce((s,t) => s + t.hours, 0);
      const sprints = Math.max(1, Math.ceil(totalH / 35));

      document.getElementById('cfgBacklogStat').innerHTML = `
        <div class="cfg-backlog-stat__item"><span class="cfg-backlog-stat__num">${pool.length}</span><span class="cfg-backlog-stat__lbl">zadań w backlogu</span></div>
        <div class="cfg-backlog-stat__sep"></div>
        <div class="cfg-backlog-stat__item"><span class="cfg-backlog-stat__num">~${totalH}h</span><span class="cfg-backlog-stat__lbl">łącznej pracy</span></div>
        <div class="cfg-backlog-stat__sep"></div>
        <div class="cfg-backlog-stat__item"><span class="cfg-backlog-stat__num accent">35h</span><span class="cfg-backlog-stat__lbl">mieści jeden sprint</span></div>
        <div class="cfg-backlog-stat__msg"><strong>~${totalH}h pracy, 35h na sprint.</strong> To materiał na ~${sprints} ${plural(sprints,'sprint','sprinty','sprintów')}. Nie zrobimy wszystkiego naraz — dlatego ustalamy priorytety.</div>
      `;

      const quick = pool.filter(t => t.size === 'S' || t.size === 'M').sort((a,b) => a.hours - b.hours);
      const mile  = pool.filter(t => t.size === 'L' || t.size === 'XL').sort((a,b) => a.hours - b.hours);

      const itemHTML = t => `
        <div class="backlog-item">
          <span class="size-badge size-badge--${t.size}">${t.size}</span>
          <div class="backlog-item__body">
            <div class="backlog-item__name">${t.label}${rec.has(t.id) ? ' <span class="backlog-item__star">priorytet</span>' : ''}</div>
            <div class="backlog-item__desc">${t.desc}</div>
          </div>
          <span class="backlog-item__h">${t.hours}h</span>
        </div>`.trim();

      const group = (title, sub, items) => items.length ? `
        <div class="cfg-backlog-group">
          <div class="cfg-backlog-group__head">
            <span class="cfg-backlog-group__title">${title}</span>
            <span class="cfg-backlog-group__sub">${sub}</span>
          </div>
          <div class="cfg-backlog-list">${items.map(itemHTML).join('')}</div>
        </div>` : '';

      document.getElementById('cfgBacklog').innerHTML =
        group('Quick Wins', 'S–M · szybkie usprawnienia i utrzymanie', quick) +
        group('Kamienie milowe', 'L–XL · większe wdrożenia i redesigny', mile);
    }

    // ─────────────────────────────────────────────
    // RENDER: ROADMAPA WZROSTU (krok 4)
    // ─────────────────────────────────────────────
    function binGoal(binTasks) {
      const paths = chosenPaths();
      let best = null, bestN = -1;
      paths.forEach(p => {
        const c = PATH_CAT[p];
        const n = binTasks.filter(t => t.cat === c).length;
        if (n > bestN) { bestN = n; best = p; }
      });
      return best ? PRESETS_MAP[best].name : 'Rozwój & optymalizacja';
    }

    function renderRoadmap() {
      const sprintCap = cap();
      const s1tasks = [...selected].map(id => TASKS_MAP[id]);
      const s1used  = s1tasks.reduce((s,t) => s + t.hours, 0);
      const goal1   = activePreset ? PRESETS_MAP[activePreset].name : 'Pierwszy sprint';

      // Pozostały backlog → pakowanie zachłanne w sprinty po sprintCap
      const remaining = poolIds().filter(id => !selected.has(id)).map(id => TASKS_MAP[id]).sort((a,b) => b.hours - a.hours);
      const bins = [];
      remaining.forEach(t => {
        let placed = false;
        for (const bin of bins) {
          if (bin.used + t.hours <= sprintCap) { bin.tasks.push(t); bin.used += t.hours; placed = true; break; }
        }
        if (!placed) bins.push({ tasks:[t], used:t.hours });
      });

      const totalSprints = 1 + bins.length;
      const sprintCard = (n, goal, tasks, used, first) => `
        <div class="roadmap-sprint${first ? ' is-first' : ''}">
          <div class="roadmap-sprint__meta">
            <span class="roadmap-sprint__badge">Sprint ${n}</span>
            <span class="roadmap-sprint__goal">${goal}</span>
            <span class="roadmap-sprint__cap">${used}h / ${sprintCap}h</span>
          </div>
          <div class="roadmap-sprint__tasks">
            ${tasks.map(t => `<span class="roadmap-chip"><span class="size-badge size-badge--${t.size}">${t.size}</span>${t.label}</span>`).join('')}
          </div>
        </div>`.trim();

      let cards = sprintCard(1, goal1, s1tasks, s1used, true);
      bins.slice(0,4).forEach((bin,i) => cards += sprintCard(i+2, binGoal(bin.tasks), bin.tasks, bin.used, false));
      if (bins.length > 4) cards += `<div class="roadmap-more">+ ${bins.length - 4} ${plural(bins.length-4,'kolejny sprint','kolejne sprinty','kolejnych sprintów')} w pełnej Roadmapie</div>`;

      document.getElementById('cfgRoadmap').innerHTML = `
        <div class="cfg-backlog-stat" style="margin-bottom:8px">
          <div class="cfg-backlog-stat__item"><span class="cfg-backlog-stat__num accent">${totalSprints}</span><span class="cfg-backlog-stat__lbl">${plural(totalSprints,'sprint','sprinty','sprintów')} w planie</span></div>
          <div class="cfg-backlog-stat__sep"></div>
          <div class="cfg-backlog-stat__item"><span class="cfg-backlog-stat__num">≈${totalSprints}</span><span class="cfg-backlog-stat__lbl">${plural(totalSprints,'miesiąc','miesiące','miesięcy')} współpracy</span></div>
          <div class="cfg-backlog-stat__msg"><strong>Nic nie ginie.</strong> Każdy sprint to jeden cel i mierzalny efekt — realizowany przez ten sam zespół w stałym rytmie.</div>
        </div>
        ${cards}`;
    }

    // ─────────────────────────────────────────────
    // NAWIGACJA KROKÓW
    // ─────────────────────────────────────────────
    function goToStep(n) {
      if (n > step) {
        if (step === 1 && symptoms.size === 0) { showToast('Wybierz objaw, żebyśmy mogli postawić diagnozę.'); return; }
      }
      step = n;
      document.querySelectorAll('.cfg-step').forEach(sec => { sec.hidden = (+sec.dataset.step !== step); });

      if (step === 2) renderBacklog();
      if (step === 3) { composeFirstSprint(); renderRoadmap(); }

      renderStepper();
      updateNav();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function updateNav() {
      const back = document.getElementById('cfgBack');
      const next = document.getElementById('cfgNext');
      const cta  = document.getElementById('cfgCtaFinal');
      const hint = document.getElementById('cfgHint');

      back.style.display = step === 1 ? 'none' : '';
      if (step === 3) { next.style.display = 'none'; cta.style.display = ''; }
      else            { next.style.display = '';     cta.style.display = 'none'; }
      next.textContent = step === 2 ? 'Zobacz roadmapę →' : 'Dalej →';

      const hints = {
        1: symptoms.size ? 'Diagnoza gotowa — przejdź dalej' : 'Wybierz najbardziej frustrujący objaw',
        2: 'Tak wygląda materiał z Pilotażu',
        3: 'Gotowe — to Twój plan wzrostu',
      };
      hint.textContent = hints[step] || '';
    }

    // Pierwszy sprint dobierany automatycznie z diagnozy (Victory Path)
    function composeFirstSprint() {
      const id = chosenPaths()[0];
      if (!id) return;
      const p = PRESETS_MAP[id];
      pkg = p.pkg;
      selected = new Set(p.tasks);
      activePreset = id;
    }

    // ─────────────────────────────────────────────
    // EVENTS & INIT
    // ─────────────────────────────────────────────
    document.addEventListener('DOMContentLoaded', () => {
      renderStepper();
      renderSymptoms();
      updateNav();

      // Step navigation
      document.getElementById('cfgBack').addEventListener('click', () => goToStep(Math.max(1, step - 1)));
      document.getElementById('cfgNext').addEventListener('click', () => goToStep(Math.min(3, step + 1)));
    });

    // ─────────────────────────────────────────────
    // CONTACT MODAL
    // ─────────────────────────────────────────────
    (function () {
      const overlay  = document.getElementById('contactOverlay');
      const closeBtn = document.getElementById('contactClose');
      const form     = document.getElementById('contactForm');
      const success  = document.getElementById('contactSuccess');
      if (!overlay) return;

      function openContact() {
        overlay.classList.add('open');
        overlay.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
      }
      function closeContact() {
        overlay.classList.remove('open');
        overlay.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      }

      document.querySelectorAll('.js-contact').forEach(el => {
        el.addEventListener('click', e => { e.preventDefault(); openContact(); });
      });

      closeBtn.addEventListener('click', closeContact);
      overlay.addEventListener('click', e => { if (e.target === overlay) closeContact(); });
      document.addEventListener('keydown', e => { if (e.key === 'Escape') closeContact(); });

      form.addEventListener('submit', e => {
        e.preventDefault();
        const email   = form.querySelector('[name="email"]').value;
        const message = form.querySelector('[name="message"]').value;
        window.location.href = `mailto:hello@codeq.pl?subject=Zapytanie o Codeq Care&body=${encodeURIComponent(message)}%0A%0AEmail: ${encodeURIComponent(email)}`;
        form.classList.add('hidden');
        success.classList.add('visible');
      });
    })();

    // ─────────────────────────────────────────────
    // ROTACJA OSOBY W SUPPORCIE (inna twarz przy każdym odpaleniu)
    // ─────────────────────────────────────────────
    (function () {
      const PEOPLE = [
        {name:'Grzegorz', img:'Codeq Design System/assets/Awatar_Strateg_1.jpg'},
        {name:'Paweł',    img:'Codeq Design System/assets/Awatar_Strateg_2.jpg'},
        {name:'Tadeusz',  img:'Codeq Design System/assets/Awatar_Strateg_3.jpg'},
      ];
      const avatar = document.getElementById('supportAvatar');
      const nameEl = document.getElementById('supportName');
      if (!avatar || !nameEl) return;

      let idx;
      try {
        const last = parseInt(localStorage.getItem('cfgSupportPerson'), 10);
        idx = Number.isInteger(last) ? (last + 1) % PEOPLE.length : Math.floor(Math.random() * PEOPLE.length);
        localStorage.setItem('cfgSupportPerson', String(idx));
      } catch (e) {
        idx = Math.floor(Math.random() * PEOPLE.length);
      }

      const p = PEOPLE[idx];
      avatar.src = p.img;
      avatar.alt = p.name;
      nameEl.textContent = p.name;
    })();
