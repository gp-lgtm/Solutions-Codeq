    const nav = document.getElementById('mainNav');
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 20);
    });


    const stickyBar = document.getElementById('stickyBar');
    const hero = document.getElementById('hero');
    const finalCta = document.getElementById('finalCta');
    let heroVisible = true;
    let finalCtaVisible = false;
    const updateStickyBar = () => {
      stickyBar.classList.toggle('visible', !heroVisible && !finalCtaVisible);
    };
    new IntersectionObserver(([entry]) => {
      heroVisible = entry.isIntersecting;
      updateStickyBar();
    }, { threshold: 0.1 }).observe(hero);
    new IntersectionObserver(([entry]) => {
      finalCtaVisible = entry.isIntersecting;
      updateStickyBar();
    }, { threshold: 0.1 }).observe(finalCta);

    const SS_DATA = {
      tech: {
        name: 'Optymalizacja Techniczna',
        pkg: 'Pakiet Stability', pkgClass: 'stability', price: '3 200 PLN / mies',
        weeks: [
          { period: 'Tydzień 1', title: 'Kickoff & Audyt', tasks: ['Plan & Kickoff — zakres prac, priorytety', 'Audyt techniczny: Core Web Vitals, logi błędów', 'Weryfikacja bezpieczeństwa i długu technicznego'] },
          { period: 'Tydzień 2–3', title: 'Wdrożenie', tasks: ['Pełny update silnika i wtyczek (Test & Deploy)', 'Optymalizacja bazy danych i kompresja grafik', 'Konfiguracja cache i zabezpieczeń'] },
          { period: 'Tydzień 4', title: 'Odbiór & Raport', tasks: ['Deploy na produkcję po testach staging', 'Raport PageSpeed przed i po', 'Plan Sprint 2 z backlogu'] }
        ],
        kpi: ['PageSpeed Mobile ≥ 90 (strefa Green)', 'Uptime 99.9% dostępności sklepu', 'Zero krytycznych podatności wtyczek']
      },
      conversion: {
        name: 'Revenue Booster',
        pkg: 'Pakiet Growth', pkgClass: 'growth', price: '6 400 PLN / mies',
        weeks: [
          { period: 'Tydzień 1', title: 'Kickoff & Roadmapa', tasks: ['Warsztat strategiczny — cel sprintu', 'Audyt UX: ścieżka zakupowa i koszyk', 'Sprint Goal: Redesign Karty Produktu'] },
          { period: 'Tydzień 2–3', title: 'Wdrożenie Dev/UX', tasks: ['Redesign Karty Produktu (Mobile First UX)', 'One-Step / Express Checkout', 'Silnik Cross-selling ("Kup razem")'] },
          { period: 'Tydzień 4', title: 'Odbiór & Raport', tasks: ['Deploy na produkcję, testy A/B', 'Raport CR i porzuconych koszyków', 'Backlog i cel Sprint 2'] }
        ],
        kpi: ['Conversion Rate wzrost o min. 0,2–0,5 pp.', 'AOV (Średni Koszyk): +10–15%', 'Wyraźny spadek porzuconych koszyków']
      },
      b2b: {
        name: 'B2B Ecosystem Builder',
        pkg: 'Pakiet Growth', pkgClass: 'growth', price: '6 400 PLN / mies',
        weeks: [
          { period: 'Tydzień 1', title: 'Kickoff & Analiza', tasks: ['Kickoff — mapowanie procesu zamówień B2B', 'Analiza flow: od zapytania do faktury', 'Sprint Goal: Tiered Pricing + Generator Ofert'] },
          { period: 'Tydzień 2–3', title: 'Wdrożenie Dev', tasks: ['Tiered Pricing — ceny hurtowe po zalogowaniu', 'Generator Ofert PDF dla klienta końcowego', 'Quick Order — zamówienia hurtowe w 2 klikach'] },
          { period: 'Tydzień 4', title: 'Odbiór & Raport', tasks: ['Panel Klienta MVP (faktury, historia)', 'Deploy i testy z klientami B2B', 'Plan Sprint 2 (powtarzanie zamówień)'] }
        ],
        kpi: ['−40% zapytań do handlowców (oszczędność czasu)', 'Self-service: klienci zamawiają sami 24/7', 'Wzrost powracalności partnerów B2B']
      },
      marketing: {
        name: 'Wsparcie Marketingu',
        pkg: 'Pakiet Stability', pkgClass: 'stability', price: '3 200 PLN / mies',
        weeks: [
          { period: 'Tydzień 1', title: 'Kickoff & Audyt CMS', tasks: ['Kickoff — mapa sekcji edytowalnych', 'Audyt struktury treści i bloga', 'Sprint Goal: edytowalne banery + blog SEO'] },
          { period: 'Tydzień 2–3', title: 'Wdrożenie Dev/UX', tasks: ['Szablony sekcji edytowalnych (bez kodu)', 'Optymalizacja wpisów blogowych pod SEO', 'Sekcja Zespół / O nas, szablony grafik'] },
          { period: 'Tydzień 4', title: 'Odbiór & Szkolenie', tasks: ['Deploy + szkolenie zespołu marketingowego', 'Raport SEO Health (audyt treści)', 'Backlog i plan Sprint 2'] }
        ],
        kpi: ['SEO Health: Audyt treści ≥ 90/100 pkt', '100% kluczowych treści edytowalnych bez kodu', 'Marketing publikuje samodzielnie w 24h']
      }
    };

    function initSprintSim() {
      document.querySelectorAll('.ss-problem').forEach(btn => {
        btn.addEventListener('click', () => {
          document.querySelectorAll('.ss-problem').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          renderSprintPanel(document.getElementById('ss-panel'), SS_DATA[btn.dataset.scenario]);
        });
      });
    }

    function renderSprintPanel(panel, data) {
      const arrowSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`;

      const weeksHtml = data.weeks.map(w => `
        <div class="ss-week">
          <p class="ss-week__period">${w.period}</p>
          <p class="ss-week__title">${w.title}</p>
          <ul class="ss-week__tasks">${w.tasks.map(t => `<li>${t}</li>`).join('')}</ul>
        </div>
        <div class="ss-arrow">${arrowSvg}</div>
      `).join('');

      panel.innerHTML = `
        <div class="ss-panel__head">
          <span class="ss-panel__name">${data.name}</span>
          <span class="ss-panel__pkg-badge ${data.pkgClass}">${data.pkg} · ${data.price}</span>
        </div>
        <div class="ss-timeline">
          ${weeksHtml}
          <div class="ss-week ss-week--result">
            <p class="ss-week__period">Twarde wyniki</p>
            <p class="ss-week__title">Po pierwszym miesiącu</p>
            <ul class="ss-week__tasks">${data.kpi.map(k => `<li>${k}</li>`).join('')}</ul>
          </div>
        </div>
        <div class="ss-cta">
          <a href="#" class="btn btn--primary btn--lg">Umów bezpłatną konsultację →</a>
          <a href="#pricing" class="btn btn--outline-white btn--lg">Zobacz pełną ofertę <span class="btn-arrow">→</span></a>
        </div>
      `;

      panel.removeAttribute('hidden');
      panel.classList.remove('entering');
      void panel.offsetWidth;
      panel.classList.add('entering');

      const weeks = panel.querySelectorAll('.ss-week');
      const cta = panel.querySelector('.ss-cta');
      weeks.forEach((w, i) => setTimeout(() => w.classList.add('visible'), 80 + i * 160));
      setTimeout(() => cta.classList.add('visible'), 80 + weeks.length * 160 + 80);
      setTimeout(() => panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 60);
    }

    function initConfigurator() {
      const symptoms = document.querySelectorAll('.cfg-symptom');
      if (!symptoms.length) return;

      const idle        = document.getElementById('cfgIdle');
      const active      = document.getElementById('cfgActive');
      const roiAmount   = document.getElementById('cfgRoiAmount');
      const roiFill     = document.getElementById('cfgRoiFill');
      const recPkg      = document.getElementById('cfgRecPkg');
      const recDesc     = document.getElementById('cfgRecDesc');
      const sprintBlock = document.getElementById('cfgSprintBlock');
      const sprintName  = document.getElementById('cfgSprintName');
      const sprintWeeks = document.getElementById('cfgSprintWeeks');
      const sprintKpis  = document.getElementById('cfgSprintKpis');
      const ctaBlock    = document.getElementById('cfgCta');

      const MAX_ROI = 26200;
      const SCENARIO_PRIORITY = ['conversion', 'tech', 'b2b', 'marketing'];
      const PKG = {
        stability: { cls: 'stability', label: 'Pakiet Stability · 3 200 PLN / mies', desc: 'Twój sklep potrzebuje stabilnego zaplecza technicznego i jednego dedykowanego zespołu.' },
        growth:    { cls: 'growth',    label: 'Pakiet Growth · 6 400 PLN / mies',    desc: 'Twój sklep ma potencjał do skalowania — potrzebujesz Stratega, UX Designera i developera w jednym.' }
      };

      let currentRoi = 0, rafId = null;

      function animateRoi(target) {
        if (rafId) cancelAnimationFrame(rafId);
        const from = currentRoi, t0 = performance.now();
        function step(now) {
          const p = Math.min((now - t0) / 550, 1);
          const e = 1 - Math.pow(1 - p, 3);
          const v = Math.round(from + (target - from) * e);
          roiAmount.textContent = v.toLocaleString('pl-PL') + ' PLN';
          roiFill.style.width = (v / MAX_ROI * 100) + '%';
          if (p < 1) { rafId = requestAnimationFrame(step); } else { currentRoi = target; rafId = null; }
        }
        rafId = requestAnimationFrame(step);
      }

      function update() {
        const checked = [...symptoms].filter(s => s.classList.contains('is-checked'));
        if (!checked.length) {
          idle.style.display = '';
          active.classList.remove('visible');
          animateRoi(0);
          return;
        }
        idle.style.display = 'none';
        active.classList.add('visible');

        const totalRoi = checked.reduce((sum, s) => sum + parseInt(s.dataset.roi || 0), 0);
        animateRoi(totalRoi);

        const counts = {};
        checked.forEach(s => { const sc = s.dataset.scenario; if (sc !== 'model') counts[sc] = (counts[sc] || 0) + 1; });
        const scenario = SCENARIO_PRIORITY.find(sc => counts[sc]) || null;

        const pkgKey = (scenario === 'conversion' || scenario === 'b2b') ? 'growth' : 'stability';
        const pkg = PKG[pkgKey];
        recPkg.textContent = pkg.label;
        recPkg.className = 'cfg-rec__pkg ' + pkg.cls;
        recDesc.textContent = pkg.desc;

        if (scenario && SS_DATA[scenario]) {
          const d = SS_DATA[scenario];
          sprintBlock.style.display = '';
          sprintName.textContent = d.name;
          sprintWeeks.innerHTML = d.weeks.map(w => `<div class="cfg-sprint__week"><span class="cfg-sprint__week-period">${w.period}</span><span class="cfg-sprint__week-title">${w.title}</span></div>`).join('');
          sprintKpis.innerHTML = d.kpi.map(k => `<span class="cfg-sprint__kpi">${k}</span>`).join('');
        } else {
          sprintBlock.style.display = 'none';
        }

        ctaBlock.style.display = checked.length >= 2 ? '' : 'none';
      }

      symptoms.forEach(label => {
        label.addEventListener('click', () => {
          const input = label.querySelector('.cfg-input');
          input.checked = !input.checked;
          label.classList.toggle('is-checked', input.checked);
          update();
        });
      });
    }

    initConfigurator();
    initSprintSim();


    // Pricing toggle
    (function () {
      const btns    = document.querySelectorAll('.pricing-toggle__btn');
      const amounts = document.querySelectorAll('.price-card__amount[data-flexi]');
      const periods = document.querySelectorAll('.price-card__period[data-flexi]');

      btns.forEach(btn => {
        btn.addEventListener('click', () => {
          btns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          const flexi = btn.dataset.mode === 'flexi';
          amounts.forEach(el => {
            el.style.opacity = '0';
            setTimeout(() => {
              el.textContent = flexi ? el.dataset.flexi : el.dataset.annual;
              el.style.opacity = '1';
            }, 120);
          });
          periods.forEach(el => {
            el.textContent = flexi ? el.dataset.flexi : el.dataset.annual;
          });
        });
      });
    })();

    function toggleFaq(questionEl) {
      const item = questionEl.closest('.faq-item');
      const answer = item.querySelector('.faq-answer');
      const isOpen = item.classList.contains('open');

      document.querySelectorAll('.faq-item').forEach(i => {
        i.classList.remove('open');
        i.querySelector('.faq-answer').style.maxHeight = null;
      });

      if (!isOpen) {
        item.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    }

    // Shared sprint loop factory
    function makeSprintLoop(containerId) {
      let timer = null;
      function reset() { clearInterval(timer); timer = null; }
      function start() {
        const steps = document.querySelectorAll(`#${containerId} .sprint-step`);
        if (!steps.length) return;
        let cur = 0;
        clearInterval(timer);
        function activate(i) {
          steps.forEach(s => {
            s.classList.remove('s-active');
            const b = s.querySelector('.sprint-step__bar');
            b.style.animation = 'none';
            void b.offsetWidth; // force reflow
          });
          steps[i].classList.add('s-active');
          steps[i].querySelector('.sprint-step__bar').style.animation = 'sprintBar 2.5s linear forwards';
        }
        activate(0);
        timer = setInterval(() => { cur = (cur + 1) % steps.length; activate(cur); }, 2600);
      }
      return { start, reset };
    }
    const loopA         = makeSprintLoop('sprintLoop');
    const loopB         = makeSprintLoop('sprintLoopB');
    const loopDiagnoza  = makeSprintLoop('sprintLoopDiagnoza');
    const loopQBR       = makeSprintLoop('sprintLoopQBR');

    // Variant A — Phase tabs
    document.querySelectorAll('.phase-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.phase-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.phase-panel').forEach(p => p.classList.remove('active'));
        tab.classList.add('active');
        const panel = document.getElementById(tab.dataset.target);
        if (panel) panel.classList.add('active');
        loopA.reset();
        if (tab.dataset.target === 'phase-egzekucja') requestAnimationFrame(() => loopA.start());
      });
    });

    // Variant B — Tab-based storytelling
    const storyItems = document.querySelectorAll('.story-section');
    const storyNavItems = document.querySelectorAll('.story-nav__item[data-story]');

    function activateStory(id) {
      storyItems.forEach(s => s.classList.remove('ss-active'));
      storyNavItems.forEach(n => n.classList.remove('sn-active'));
      const target = document.getElementById(id);
      if (target) target.classList.add('ss-active');
      const nav = document.querySelector(`.story-nav__item[data-story="${id}"]`);
      if (nav) nav.classList.add('sn-active');
      [loopB, loopDiagnoza, loopQBR].forEach(l => l.reset());
      if (id === 'ss-1') requestAnimationFrame(() => loopDiagnoza.start());
      if (id === 'ss-2') requestAnimationFrame(() => loopB.start());
      if (id === 'ss-3') requestAnimationFrame(() => loopQBR.start());
    }
    requestAnimationFrame(() => loopDiagnoza.start());

    storyNavItems.forEach(nav => {
      nav.addEventListener('click', () => activateStory(nav.dataset.story));
    });

    // Contact modal
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

      // Hook up all pilot/contact CTAs
      document.querySelectorAll('.js-contact').forEach(el => {
        el.addEventListener('click', e => { e.preventDefault(); openContact(); });
      });

      closeBtn.addEventListener('click', closeContact);
      overlay.addEventListener('click', e => { if (e.target === overlay) closeContact(); });
      document.addEventListener('keydown', e => { if (e.key === 'Escape') closeContact(); });

      // Form submit → success state + mailto fallback
      form.addEventListener('submit', e => {
        e.preventDefault();
        if (!form.checkValidity()) {
          form.reportValidity();
          return;
        }
        const email   = form.querySelector('[name="email"]').value;
        const message = form.querySelector('[name="message"]').value;
        window.location.href = `mailto:hello@codeq.pl?subject=Zapytanie o Codeq Care&body=${encodeURIComponent(message)}%0A%0AEmail: ${encodeURIComponent(email)}`;
        form.classList.add('hidden');
        success.classList.add('visible');
      });
    })();

    // Diagnoza modal
    (function () {
      const openBtn  = document.getElementById('openDiagnoza');
      const overlay  = document.getElementById('diagnozaOverlay');
      const closeBtn = document.getElementById('diagnozaClose');
      const ctaLink  = document.getElementById('diagnozaCtaLink');
      if (!openBtn || !overlay) return;

      function openModal() {
        overlay.classList.add('open');
        overlay.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
      }
      function closeModal() {
        overlay.classList.remove('open');
        overlay.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      }

      openBtn.addEventListener('click', openModal);
      closeBtn.addEventListener('click', closeModal);
      overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });
      document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
      if (ctaLink) ctaLink.addEventListener('click', closeModal);
    })();

    // Diagnoza modelu
    (function () {
      const checks  = document.querySelectorAll('#diagnozaOverlay .dcheck');
      const idle    = document.getElementById('drIdle');
      const active  = document.getElementById('drActive');
      const numEl   = document.getElementById('drNum');
      const fill    = document.getElementById('drFill');
      const badge   = document.getElementById('drBadge');
      const title   = document.getElementById('drTitle');
      const desc    = document.getElementById('drDesc');
      const cta     = document.getElementById('drCta');
      if (!checks.length) return;

      const stages = [
        null,
        { badge: '⚠️ Pierwsze sygnały', cls: 'dr-badge--warn',
          title: 'Już jeden objaw to za dużo.',
          desc: 'Nawet jeden z tych problemów kosztuje Cię czas i pieniądze. Codeq Care eliminuje je wszystkie — stały zespół, jeden kontakt, wyniki mierzone co miesiąc.' },
        { badge: '⚠️ Model dorywczy', cls: 'dr-badge--warn',
          title: 'Prawdopodobnie pracujesz z Freelancerem.',
          desc: 'Brak ciągłości i strategii to typowe objawy modelu dorywczego. Płacisz za czas, nie za wzrost.' },
        { badge: '🔴 Model agencyjny', cls: 'dr-badge--alert',
          title: 'Brzmi jak typowy model agencyjny.',
          desc: 'Rotacja zespołu, rozliczenie za godziny, brak ciągłości. Agencja realizuje projekty — nie buduje Twojego wzrostu.' },
        { badge: '🔴 Poważny problem', cls: 'dr-badge--alert',
          title: 'Tracisz pieniądze i czas każdego miesiąca.',
          desc: 'Cztery objawy naraz to sygnał, że obecny model współpracy aktywnie szkodzi Twojemu sklepowi. Czas na zmianę.' },
        { badge: '🔴 Pilna zmiana', cls: 'dr-badge--alert',
          title: 'Twój sklep utknął w miejscu.',
          desc: 'Pięć objawów oznacza, że brak strategii i złe modele rozliczenia blokują wzrost. Codeq Care to odpowiedź na każdy z nich.' },
        { badge: '✅ To dokładnie o Tobie', cls: 'dr-badge--codeq',
          title: 'Codeq Care powstał właśnie dla Ciebie.',
          desc: 'Wszystkie 6 objawów to problemy, które rozwiązujemy każdego dnia: stały zespół, Flat Fee, Mapa Celów i KPI zamiast faktur za godziny.' },
      ];

      const meterColors = ['','#f59e0b','#f59e0b','#ef4444','#ef4444','#ef4444','#1F3FF9'];

      function update() {
        const n = [...checks].filter(c => c.classList.contains('is-checked')).length;
        numEl.textContent = n;
        fill.style.width  = (n / 6 * 100) + '%';
        fill.style.background = meterColors[n] || '#c7d2fe';

        if (n === 0) {
          idle.style.display  = '';
          active.classList.remove('visible');
          return;
        }
        idle.style.display = 'none';
        active.classList.add('visible');

        const s = stages[n];
        badge.textContent = s.badge;
        badge.className   = 'dr-badge ' + s.cls;
        title.textContent = s.title;
        desc.textContent  = s.desc;
        cta.classList.add('visible');
      }

      checks.forEach(label => {
        const input = label.querySelector('.dcheck__input');
        input.addEventListener('change', () => {
          label.classList.toggle('is-checked', input.checked);
          update();
        });
      });
    })();

    // Timeline compare
    (function () {
      const months = document.querySelectorAll('.tl-month');
      const cards  = document.querySelectorAll('.tl-card');
      if (!months.length) return;
      months.forEach(btn => {
        btn.addEventListener('click', () => {
          const m = btn.dataset.m;
          months.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          cards.forEach(c => {
            const show = c.dataset.m === m;
            c.classList.toggle('tl-visible', show);
          });
        });
      });
    })();

    // Squad role selector
    const squadNavItems = document.querySelectorAll('.squad-nav__item[data-squad]');
    const squadPanels = document.querySelectorAll('.squad-panel');
    squadNavItems.forEach(item => {
      item.addEventListener('click', () => {
        squadNavItems.forEach(n => n.classList.remove('sq-active'));
        squadPanels.forEach(p => p.classList.remove('sq-active'));
        item.classList.add('sq-active');
        const panel = document.getElementById(item.dataset.squad);
        if (panel) panel.classList.add('sq-active');
      });
    });

    // Parallax on team stack (rAF-throttled)
    (function () {
      const ts = document.querySelector('.team-stack');
      if (!ts) return;
      let ticking = false;
      window.addEventListener('scroll', () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            ts.style.transform = `translateY(${window.scrollY * 0.08}px)`;
            ticking = false;
          });
          ticking = true;
        }
      }, { passive: true });
    })();


    // Role chips — bottom sheet on touch devices
    const roleChipData = {
      strateg: {
        icon: '🧠', role: 'Rola #1', title: 'Strateg',
        desc: 'Filtruje Twoje pomysły przez ROI. Chroni budżet przed nietrafionymi inwestycjami i wyznacza kierunek rozwoju sklepu.',
        kpi: 'Co zyskujesz: mniej przepalonych złotówek, jasne priorytety na kwartał.'
      },
      pm: {
        icon: '🗂️', role: 'Rola #2', title: 'Project Manager',
        desc: 'Tłumaczy biznes na kod i pilnuje terminów w Pudełkach. Masz porządek bez mikrozarządzania z Twojej strony.',
        kpi: 'Co zyskujesz: dowożone sprinty, jeden punkt kontaktu, brak chaosu.'
      },
      ux: {
        icon: '🎨', role: 'Rola #3', title: 'UX Designer',
        desc: 'Sprawdza użyteczność przed wdrożeniem. Zmniejsza porzucenia koszyka i zwiększa konwersję.',
        kpi: 'Co zyskujesz: kod, który realnie sprzedaje.'
      },
      dev: {
        icon: '💻', role: 'Rola #4', title: 'Senior Developer',
        desc: 'Buduje szybki, stabilny sklep, który nie rozsypuje się przy aktualizacji wtyczki.',
        kpi: 'Co zyskujesz: lepszy PageSpeed, mniej awarii, bezpieczny wzrost ruchu.'
      }
    };

    function openRoleSheet(roleKey) {
      const data = roleChipData[roleKey];
      if (!data) return;
      const overlay = document.getElementById('roleSheetOverlay');
      overlay.querySelector('.role-sheet__icon').textContent = data.icon;
      overlay.querySelector('.role-sheet__role-label').textContent = data.role;
      overlay.querySelector('.role-sheet__title').textContent = data.title;
      overlay.querySelector('.role-sheet__desc').textContent = data.desc;
      overlay.querySelector('.role-sheet__kpi').textContent = data.kpi;
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function closeRoleSheet() {
      document.getElementById('roleSheetOverlay').classList.remove('open');
      document.body.style.overflow = '';
    }

    document.querySelectorAll('.lead-role[data-role]').forEach(chip => {
      chip.addEventListener('click', () => {
        if (window.matchMedia('(hover: none)').matches) {
          openRoleSheet(chip.dataset.role);
        }
      });
    });

    document.getElementById('roleSheetOverlay').addEventListener('click', function(e) {
      if (e.target === this) closeRoleSheet();
    });

    // Cases slider
    (function () {
      const grid = document.getElementById('casesGrid');
      const prev = document.getElementById('casesPrev');
      const next = document.getElementById('casesNext');
      if (!grid || !prev || !next) return;

      function cardWidth() {
        const card = grid.querySelector('.case-card');
        if (!card) return 320;
        return card.offsetWidth + parseInt(getComputedStyle(grid).gap || '16');
      }

      prev.addEventListener('click', () => {
        grid.scrollBy({ left: -cardWidth(), behavior: 'smooth' });
      });
      next.addEventListener('click', () => {
        grid.scrollBy({ left: cardWidth(), behavior: 'smooth' });
      });
    })();

    // Testimonials slider
    (function () {
      const track = document.getElementById('vtTrack');
      if (!track) return;
      const prev = document.getElementById('vtPrev');
      const next = document.getElementById('vtNext');

      function slideWidth() {
        const s = track.querySelector('.vt-slide');
        if (!s) return 380;
        return s.offsetWidth + parseInt(getComputedStyle(track).gap || '24');
      }
      prev && prev.addEventListener('click', () => track.scrollBy({ left: -slideWidth(), behavior: 'smooth' }));
      next && next.addEventListener('click', () => track.scrollBy({ left: slideWidth(), behavior: 'smooth' }));

      track.querySelectorAll('.vt-play').forEach(btn => {
        btn.addEventListener('click', () => {
          const card = btn.closest('.vt-slide--video');
          const video = card && card.querySelector('video');
          if (!video) return;
          card.classList.add('is-playing');
          video.setAttribute('controls', '');
          video.play();
        });
      });
    })();

    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        const target = document.querySelector(a.getAttribute('href'));
        if (target) {
          e.preventDefault();
          const top = target.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      });
    });
