/* =========================================================================
   Kyle Joyce — site behaviour
   Rendering + motion. Vanilla JS, no dependencies.
   ========================================================================= */
(function () {
  'use strict';

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  /* ---------- render: projects ---------- */
  function renderProjects() {
    const wrap = $('#projects');
    if (!wrap || typeof PROJECTS === 'undefined') return;
    wrap.classList.add('reveal-child');
    wrap.innerHTML = PROJECTS.map((p) => {
      const links = p.links.map((l) => l.muted
        ? `<span class="card__link card__link--muted">${l.label}</span>`
        : `<a class="card__link" href="${l.url}" target="_blank" rel="noopener">${l.label} ${ICONS[l.icon] || ICONS.arrow}</a>`
      ).join('');
      const tags = p.tags.map((t) => `<span class="tag">${t}</span>`).join('');
      const badge = p.badge ? `<span class="card__badge">${p.badge}</span>` : `<span class="card__year">${p.year}</span>`;
      return `
        <article class="card ${p.wide ? 'card--wide' : ''} ${p.soon ? 'card--soon' : ''}" data-tilt>
          <div class="card__top">
            <div class="card__icon">${ICONS[p.icon]}</div>
            ${badge}
          </div>
          <h3 class="card__name">${p.name}</h3>
          <p class="card__tagline">${p.tagline}</p>
          <p class="card__desc">${p.desc}</p>
          <div class="card__tags">${tags}</div>
          <div class="card__links">${links}</div>
        </article>`;
    }).join('');

    // cursor-follow sheen
    $$('.card', wrap).forEach((card) => {
      card.addEventListener('pointermove', (e) => {
        const r = card.getBoundingClientRect();
        card.style.setProperty('--mx', `${e.clientX - r.left}px`);
        card.style.setProperty('--my', `${e.clientY - r.top}px`);
      });
    });
  }

  /* ---------- render: skills ---------- */
  function renderSkills() {
    const wrap = $('#skills-grid');
    if (!wrap || typeof SKILLS === 'undefined') return;
    wrap.classList.add('reveal-child');
    wrap.innerHTML = SKILLS.map((g) => `
      <div class="skill-group">
        <h3>${g.title}</h3>
        <div class="chips">${g.items.map((i) => `<span class="chip">${i}</span>`).join('')}</div>
      </div>`).join('');
  }

  /* ---------- render: timeline + beyond ---------- */
  function renderTimeline() {
    const wrap = $('#timeline');
    if (wrap && typeof TIMELINE !== 'undefined') {
      wrap.classList.add('reveal-child');
      wrap.innerHTML = TIMELINE.map((t) => `
        <li class="tl-item">
          <span class="tl-date">${t.date}</span>
          <h3 class="tl-title">${t.title}</h3>
          <span class="tl-org">${t.org}</span>
          <p class="tl-desc">${t.desc}</p>
        </li>`).join('');
    }
    const beyond = $('#beyond');
    if (beyond && typeof BEYOND !== 'undefined') {
      beyond.classList.add('reveal-child');
      beyond.innerHTML = BEYOND.map((b) => `
        <div class="beyond__item">
          <div class="beyond__icon">${b.icon}</div>
          <div class="beyond__label">${b.label}</div>
          <div class="beyond__note">${b.note}</div>
        </div>`).join('');
    }
  }

  /* ---------- typed roles ---------- */
  function typedRoles() {
    const el = $('#typed');
    if (!el) return;
    const roles = [
      'systems software in C',
      'games & simulations',
      'full-stack web apps',
      'hardware & PCBs',
      'earraí as Gaeilge'
    ];
    if (prefersReduced) { el.textContent = roles[0]; return; }

    let ri = 0, ci = 0, deleting = false;
    function tick() {
      const word = roles[ri];
      el.textContent = word.slice(0, ci);
      if (!deleting && ci < word.length) { ci++; setTimeout(tick, 55 + Math.random() * 40); }
      else if (!deleting && ci === word.length) { deleting = true; setTimeout(tick, 1500); }
      else if (deleting && ci > 0) { ci--; setTimeout(tick, 28); }
      else { deleting = false; ri = (ri + 1) % roles.length; setTimeout(tick, 320); }
    }
    tick();
  }

  /* ---------- scroll reveal ---------- */
  function revealOnScroll() {
    const els = $$('.reveal, .reveal-child');
    if (prefersReduced || !('IntersectionObserver' in window)) {
      els.forEach((e) => e.classList.add('is-visible'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add('is-visible'); io.unobserve(entry.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    els.forEach((e) => io.observe(e));
  }

  /* ---------- count-up stats ---------- */
  function countUp() {
    const nums = $$('.hero__stat-num');
    if (prefersReduced) { nums.forEach((n) => n.textContent = n.dataset.count); return; }
    nums.forEach((n) => {
      const target = parseInt(n.dataset.count, 10);
      const dur = 1400, start = performance.now();
      function step(now) {
        const t = Math.min(1, (now - start) / dur);
        const eased = 1 - Math.pow(1 - t, 3);
        n.textContent = Math.round(eased * target);
        if (t < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    });
  }

  /* ---------- nav: scrolled state, active link, mobile toggle ---------- */
  function navBehaviour() {
    const nav = $('#nav');
    const toggle = $('#nav-toggle');
    const links = $('.nav__links');
    const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    if (toggle && links) {
      toggle.addEventListener('click', () => {
        const open = links.classList.toggle('is-open');
        toggle.classList.toggle('is-open', open);
        toggle.setAttribute('aria-expanded', String(open));
      });
      $$('a', links).forEach((a) => a.addEventListener('click', () => {
        links.classList.remove('is-open');
        toggle.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }));
    }

    // active section highlight
    const navLinks = $$('.nav__links a');
    const map = {};
    navLinks.forEach((a) => { map[a.getAttribute('href').slice(1)] = a; });
    const sections = Object.keys(map).map((id) => document.getElementById(id)).filter(Boolean);
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navLinks.forEach((a) => a.classList.remove('is-active'));
            const link = map[entry.target.id];
            if (link) link.classList.add('is-active');
          }
        });
      }, { rootMargin: '-45% 0px -50% 0px' });
      sections.forEach((s) => io.observe(s));
    }
  }

  /* ---------- animated background: drifting particle constellation ---------- */
  function backgroundCanvas() {
    const canvas = $('#bg-canvas');
    if (!canvas || prefersReduced) return;
    const ctx = canvas.getContext('2d');
    let w, h, dpr, particles = [], raf, mouse = { x: -9999, y: -9999 };

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.width = Math.floor(innerWidth * dpr);
      h = canvas.height = Math.floor(innerHeight * dpr);
      canvas.style.width = innerWidth + 'px';
      canvas.style.height = innerHeight + 'px';
      const count = Math.min(90, Math.floor((innerWidth * innerHeight) / 17000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.22 * dpr,
        vy: (Math.random() - 0.5) * 0.22 * dpr,
        r: (Math.random() * 1.6 + 0.6) * dpr
      }));
    }

    const LINK = 130;
    function draw() {
      ctx.clearRect(0, 0, w, h);
      const link = LINK * dpr;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(239,68,68,0.55)';
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x, dy = p.y - q.y;
          const d = Math.hypot(dx, dy);
          if (d < link) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(248,113,113,${0.14 * (1 - d / link)})`;
            ctx.lineWidth = dpr * 0.6;
            ctx.stroke();
          }
        }
        // cursor attraction line
        const mdx = p.x - mouse.x, mdy = p.y - mouse.y;
        const md = Math.hypot(mdx, mdy);
        if (md < link * 1.6) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y); ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(251,113,133,${0.18 * (1 - md / (link * 1.6))})`;
          ctx.lineWidth = dpr * 0.7;
          ctx.stroke();
        }
      }
      raf = requestAnimationFrame(draw);
    }

    window.addEventListener('resize', resize, { passive: true });
    window.addEventListener('pointermove', (e) => { mouse.x = e.clientX * dpr; mouse.y = e.clientY * dpr; }, { passive: true });
    window.addEventListener('pointerleave', () => { mouse.x = -9999; mouse.y = -9999; });
    // pause when tab hidden to save battery
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) { cancelAnimationFrame(raf); }
      else { cancelAnimationFrame(raf); raf = requestAnimationFrame(draw); }
    });

    resize();
    draw();
  }

  /* ---------- boot ---------- */
  function init() {
    $('#year').textContent = new Date().getFullYear();
    renderProjects();
    renderSkills();
    renderTimeline();
    typedRoles();
    navBehaviour();
    backgroundCanvas();
    // reveal must run after content injection
    revealOnScroll();
    // count-up when hero visible
    if ('IntersectionObserver' in window && !prefersReduced) {
      const hero = $('#hero');
      const io = new IntersectionObserver((ents, obs) => {
        ents.forEach((e) => { if (e.isIntersecting) { countUp(); obs.disconnect(); } });
      }, { threshold: 0.4 });
      io.observe(hero);
    } else {
      countUp();
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
