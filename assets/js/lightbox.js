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

  function open(src, alt) {
    if (overlay) return;
    lastFocused = document.activeElement;

    overlay = document.createElement('div');
    overlay.className = 'lightbox';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', alt ? alt : 'Full size image');
    overlay.tabIndex = -1;

    var full = document.createElement('img');
    full.src = src;
    full.alt = alt || '';
    overlay.appendChild(full);

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

  Array.prototype.forEach.call(imgs, function (img) {
    img.addEventListener('click', function () {
      open(img.currentSrc || img.src, img.alt);
    });
    // Reachable without a mouse.
    img.tabIndex = 0;
    img.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        open(img.currentSrc || img.src, img.alt);
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
