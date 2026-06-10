/**
 * animations.js
 * Scroll-triggered reveal animations using IntersectionObserver.
 * Add class "reveal" to any element you want to animate on scroll.
 * Add "reveal-delay-1", "reveal-delay-2", etc. for staggered reveals.
 */

(function () {
  'use strict';

  if (!('IntersectionObserver' in window)) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  function observeAll() {
    document.querySelectorAll('.reveal:not(.revealed)').forEach(el => observer.observe(el));
  }

  // Exposed so other scripts (e.g. posts.js) can re-observe after dynamic injection
  window.observeReveal = observeAll;

  // Run after DOM and includes are loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', observeAll);
  } else {
    // Small delay to allow includes.js to inject components
    setTimeout(observeAll, 100);
  }
})();
