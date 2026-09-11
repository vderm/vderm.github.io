// Highlights the "On this page" entry for the section currently being read.
// No-ops on pages without a TOC (and below 900px, where the TOC is hidden).
(function () {
  // Posts get Hugo's generated #TableOfContents; the home page hand-writes
  // its own list in the same gutter.
  var nav = document.getElementById('TableOfContents') ||
            document.querySelector('.post-gutter-right nav');
  if (!nav) return;

  var links = {};
  var headings = [];

  Array.prototype.forEach.call(nav.querySelectorAll('a[href^="#"]'), function (a) {
    var id = decodeURIComponent(a.getAttribute('href').slice(1));
    var el = document.getElementById(id);
    if (!el) return;
    links[id] = a;
    headings.push(el);
  });
  if (!headings.length) return;

  var current = null;
  // Tracks which headings are above the reading line, keyed by id.
  var visible = Object.create(null);

  function setActive(id) {
    if (id === current) return;
    if (current && links[current]) links[current].classList.remove('active');
    if (id && links[id]) links[id].classList.add('active');
    current = id;
  }

  function update() {
    // Prefer the topmost heading intersecting the band; otherwise fall back to
    // the last heading scrolled past, so a long section stays highlighted.
    var best = null;
    var bestTop = Infinity;
    for (var i = 0; i < headings.length; i++) {
      var h = headings[i];
      if (!visible[h.id]) continue;
      var top = h.getBoundingClientRect().top;
      if (top < bestTop) {
        bestTop = top;
        best = h.id;
      }
    }

    if (!best) {
      var passed = null;
      for (var j = 0; j < headings.length; j++) {
        if (headings[j].getBoundingClientRect().top <= 100) passed = headings[j].id;
      }
      best = passed;
    }
    setActive(best);
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) visible[entry.target.id] = true;
      else delete visible[entry.target.id];
    });
    update();
  }, {
    // A band near the top of the viewport acts as the "reading line".
    rootMargin: '-80px 0px -70% 0px',
    threshold: 0
  });

  headings.forEach(function (h) { observer.observe(h); });

  // Bottom of the page: the last section may never reach the band, so pin it.
  window.addEventListener('scroll', function () {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
      setActive(headings[headings.length - 1].id);
    }
  }, { passive: true });

  update();
})();
