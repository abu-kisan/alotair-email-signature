// Al-Ateer Real Estate Design System — template base loader.
// Links the DS global stylesheet + compiled component bundle so this
// template previews with real brand tokens.
(() => {
  const base = '../..';
  for (const p of ['styles.css']) {
    const l = document.createElement('link');
    l.rel = 'stylesheet';
    l.href = base + '/' + p;
    document.head.appendChild(l);
  }
  const s = document.createElement('script');
  s.src = base + '/_ds_bundle.js';
  s.onerror = () => {};
  document.head.appendChild(s);
})();
