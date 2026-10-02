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

    // Pricing toggle
    (function () {
      const btns    = document.querySelectorAll('.pricing-toggle__btn');
      const amounts = document.querySelectorAll('.price-card__amount[data-flexi]');

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
        });
      });
    })();

    // Pricing feature tooltips — touch devices have no hover, so a tap on the name toggles the tip
    (function () {
      if (!window.matchMedia('(hover: none)').matches) return;
      const features = document.querySelectorAll('.price-feature');
      const closeAll = except => features.forEach(f => { if (f !== except) f.classList.remove('is-open'); });

      features.forEach(f => {
        f.querySelector('.price-feature__title').addEventListener('click', e => {
          e.stopPropagation();
          closeAll(f);
          f.classList.toggle('is-open');
        });
      });
      document.addEventListener('click', () => closeAll());
      document.addEventListener('keydown', e => { if (e.key === 'Escape') closeAll(); });
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
    const loopB         = makeSprintLoop('sprintLoopB');
    const loopDiagnoza  = makeSprintLoop('sprintLoopDiagnoza');
    const loopQBR       = makeSprintLoop('sprintLoopQBR');
    const loopsByStory  = { 'ss-1': loopDiagnoza, 'ss-2': loopB, 'ss-3': loopQBR };

    // Variant B — Tab-based storytelling
    const storyItems = document.querySelectorAll('.story-section');
    const storyNavItems = document.querySelectorAll('.story-nav__item[data-story]');
    let howVisible = false;

    function activateStory(id) {
      storyItems.forEach(s => s.classList.remove('ss-active'));
      storyNavItems.forEach(n => n.classList.remove('sn-active'));
      const target = document.getElementById(id);
      if (target) target.classList.add('ss-active');
      const nav = document.querySelector(`.story-nav__item[data-story="${id}"]`);
      if (nav) nav.classList.add('sn-active');
      Object.values(loopsByStory).forEach(l => l.reset());
      if (howVisible && loopsByStory[id]) requestAnimationFrame(() => loopsByStory[id].start());
    }

    // The loop only runs while "Jak to działa" is on screen (no timers ticking off-screen)
    new IntersectionObserver(([entry]) => {
      howVisible = entry.isIntersecting;
      Object.values(loopsByStory).forEach(l => l.reset());
      const active = document.querySelector('.story-section.ss-active');
      if (howVisible && active && loopsByStory[active.id]) loopsByStory[active.id].start();
    }).observe(document.getElementById('how'));

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

      function openContact(cta) {
        // Który przycisk otworzył formularz — trafia do maila jako pole „Przycisk”
        form.elements.Przycisk.value = cta.dataset.cta || cta.textContent.trim();
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
        el.addEventListener('click', e => { e.preventDefault(); openContact(el); });
      });

      closeBtn.addEventListener('click', closeContact);
      overlay.addEventListener('click', e => { if (e.target === overlay) closeContact(); });
      document.addEventListener('keydown', e => { if (e.key === 'Escape') closeContact(); });

      // Form submit → Web3Forms (fetch, no redirect) → success state
      form.addEventListener('submit', async e => {
        e.preventDefault();
        if (!form.checkValidity()) {
          form.reportValidity();
          return;
        }
        const btn   = form.querySelector('.btn--submit');
        const error = form.querySelector('.contact-form__error');
        const data  = Object.fromEntries(new FormData(form));
        data.gdpr = 'Tak — zgoda na przetwarzanie danych udzielona w formularzu';

        error.hidden = true;
        btn.disabled = true;
        btn.textContent = 'Wysyłanie…';
        try {
          const res  = await fetch(form.action, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            body: JSON.stringify(data)
          });
          const json = await res.json();
          if (!json.success) throw new Error(json.message);
          form.reset();
          form.classList.add('hidden');
          success.classList.add('visible');
        } catch (err) {
          error.hidden = false;
        } finally {
          btn.disabled = false;
          btn.textContent = 'Wyślij';
        }
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

    // Carousel arrows — one handler for every .carousel-nav[data-carousel="<track id>"]
    document.querySelectorAll('.carousel-nav[data-carousel]').forEach(nav => {
      const track = document.getElementById(nav.dataset.carousel);
      if (!track) return;
      const btns = nav.querySelectorAll('.carousel-nav__btn[data-dir]');

      // One step = one slide plus the gap after it
      function step() {
        const slide = track.firstElementChild;
        const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
        return slide ? slide.offsetWidth + gap : track.clientWidth;
      }

      // Disable the arrow that has nowhere left to go
      function update() {
        const max = track.scrollWidth - track.clientWidth - 1;
        btns.forEach(btn => {
          btn.disabled = btn.dataset.dir < 0 ? track.scrollLeft <= 1 : track.scrollLeft >= max;
        });
      }

      btns.forEach(btn => btn.addEventListener('click', () => {
        track.scrollBy({ left: step() * Number(btn.dataset.dir), behavior: 'smooth' });
      }));
      track.addEventListener('scroll', update, { passive: true });
      window.addEventListener('resize', update);
      update();
    });

    // Testimonials slider
    (function () {
      const track = document.getElementById('vtTrack');
      if (!track) return;
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
        // href="#" (logo) has no target and falls through to the default jump to top
        const id = a.getAttribute('href').slice(1);
        const target = id && document.getElementById(id);
        if (target) {
          e.preventDefault();
          const top = target.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      });
    });
