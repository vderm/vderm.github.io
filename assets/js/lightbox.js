// Click a figure image to view it full size; Esc, a click anywhere, or the
// back button closes it. No-ops on pages with no figures.
(function () {
  var imgs = document.querySelectorAll('.post-body figure img');
  if (!imgs.length) return;

  var overlay = null;
  var lastFocused = null;

  function close() {
    if (!overlay) return;
    overlay.classList.remove('is-open');
    document.body.style.overflow = '';
    var el = overlay;
    overlay = null;
    // Let the fade finish before tearing the node down.
    setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, 150);
    if (lastFocused && lastFocused.focus) lastFocused.focus();
  }

  function open(src, alt, caption) {
    if (overlay) return;
    lastFocused = document.activeElement;

    overlay = document.createElement('div');
    overlay.className = 'lightbox';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    // The caption names the image better than alt, which is often empty.
    overlay.setAttribute('aria-label', caption || alt || 'Full size image');
    overlay.tabIndex = -1;

    // Figure wrapper, so the caption tracks the scaled image's width rather
    // than the full width of the overlay.
    var fig = document.createElement('figure');

    var full = document.createElement('img');
    full.src = src;
    full.alt = alt || '';
    fig.appendChild(full);

    if (caption) {
      var cap = document.createElement('figcaption');
      // textContent, not innerHTML: captions are rendered markup upstream and
      // are not re-injected here.
      cap.textContent = caption;
      fig.appendChild(cap);
    }

    overlay.appendChild(fig);
    document.body.appendChild(overlay);
    // Lock scroll behind the overlay.
    document.body.style.overflow = 'hidden';
    // Next frame, so the opening transition actually runs.
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        if (overlay) overlay.classList.add('is-open');
      });
    });
    overlay.focus();
  }

  // The caption belongs to the enclosing <figure>, which may be the image's
  // parent or a level up when figures are laid out side by side.
  function captionFor(img) {
    var fig = img.closest ? img.closest('figure') : null;
    if (!fig) return '';
    var cap = fig.querySelector('figcaption');
    return cap ? cap.textContent.trim() : '';
  }

  Array.prototype.forEach.call(imgs, function (img) {
    function show() {
      open(img.currentSrc || img.src, img.alt, captionFor(img));
    }
    img.addEventListener('click', show);
    // Reachable without a mouse.
    img.tabIndex = 0;
    img.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        show();
      }
    });
  });

  // A click anywhere in the overlay closes it, the image included.
  document.addEventListener('click', function (e) {
    if (overlay && overlay.contains(e.target)) close();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && overlay) close();
  });
})();
