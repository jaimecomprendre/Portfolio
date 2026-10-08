(function () {
  // Tiny DOM helper: sets properties when they exist, attributes otherwise (e.g. aria-label)
  function el(tag, props, ...kids) {
    const n = document.createElement(tag);
    for (const [k, v] of Object.entries(props || {})) (k in n) ? (n[k] = v) : n.setAttribute(k, v);
    kids.forEach(k => n.append(k));
    return n;
  }

  function mediaNode(m) {
    if (m.type === 'placeholder') return el('div', { className: 'placeholder', textContent: (m.label || 'Media') + ' – to be added' });
    if (m.type === 'image') return el('img', { src: m.src, alt: m.alt || '', loading: 'lazy' });
    if (m.type === 'youtube') {
      return el('iframe', { src: 'https://www.youtube-nocookie.com/embed/' + m.id, title: m.title || 'Video',
        loading: 'lazy', allowFullscreen: true, allow: 'accelerometer; encrypted-media; picture-in-picture' });
    }
    const v = el('video', { controls: true, playsInline: true });
    if (m.poster) v.poster = m.poster;
    v.append(el('source', { src: m.src, type: 'video/mp4' }));
    return v;
  }

  function slideshow(items) {
    const n = items.length;
    let index = 0;
    const slides = items.map(m => el('div', { className: 'slide' }, mediaNode(m)));
    const dots = items.map((_, i) => el('button', { className: 'dot', type: 'button', 'aria-label': 'Go to slide ' + (i + 1), onclick: () => show(i) }));
    const box = el('div', { className: 'media' }, ...slides,
      el('button', { className: 'prev', type: 'button', 'aria-label': 'Previous slide', textContent: '❮', onclick: () => show(index - 1) }),
      el('button', { className: 'next', type: 'button', 'aria-label': 'Next slide', textContent: '❯', onclick: () => show(index + 1) }),
      el('div', { className: 'dots' }, ...dots));

    function show(i) {
      index = (i + n) % n;
      box.querySelectorAll('video').forEach(v => v.pause());
      slides.forEach((s, k) => s.classList.toggle('active', k === index));
      dots.forEach((d, k) => d.classList.toggle('active', k === index));
    }
    show(0);
    return box;
  }

  // Build project cards from js/projects.js
  document.querySelectorAll('[data-group]').forEach(container => {
    (PROJECTS[container.dataset.group] || []).forEach(p => {
      const media = p.media.length > 1 ? slideshow(p.media) : el('div', { className: 'media' }, mediaNode(p.media[0]));
      container.append(el('article', { className: 'project-card' },
        el('div', { className: 'project-info' }, el('h3', { textContent: p.title }), ...p.description.map(t => el('p', { textContent: t }))),
        media));
    });
  });

  // Background artwork: scrolling only shifts the colours (hue) of the image
  const bg = document.querySelector('.hero-bg');
  const hero = document.getElementById('home');
  if (bg && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    let queued = false, lastHue = -1;
    const update = () => {
      const y = window.scrollY;
      const p = Math.min(y / innerHeight, 1);                                          // first screen
      const q = Math.min(y / Math.max(1, document.documentElement.scrollHeight - innerHeight), 1); // whole page
      const hue = Math.round(q * 70);
      if (hue !== lastHue) { bg.style.filter = `hue-rotate(${hue}deg)`; lastHue = hue; } // only repaint when it changes
      hero.style.opacity = Math.max(0, 1 - p * 1.6);
      queued = false;
    };
    addEventListener('scroll', () => { if (!queued) { queued = true; requestAnimationFrame(update); } }, { passive: true });
    addEventListener('resize', update);
    update();
  }

  // Only one video plays at a time ('play' doesn't bubble, so listen in capture phase)
  document.addEventListener('play', e => {
    document.querySelectorAll('video').forEach(v => { if (v !== e.target) v.pause(); });
  }, true);

  // Projects dropdown: click toggles (mobile), hover handled in CSS
  const item = document.querySelector('.nav-item');
  item.querySelector('.nav-link').addEventListener('click', e => { e.preventDefault(); item.classList.toggle('active'); });
  item.querySelectorAll('.dropdown-content a').forEach(a => a.addEventListener('click', () => item.classList.remove('active')));
  document.addEventListener('click', e => { if (!e.target.closest('.nav-item')) item.classList.remove('active'); });
})();