/**
 * navigation.js
 * Additional nav enhancements (keyboard nav, hide-on-scroll).
 * Loaded after includes.js has injected the header.
 */

(function () {
  'use strict';

  // ── Escape closes mobile menu ──
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      const navLinks = document.getElementById('nav-links');
      const burger   = document.getElementById('burger');
      if (navLinks && navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        burger && burger.classList.remove('open');
        burger && burger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
        burger && burger.focus();
      }
    }
  });

  // ── Hide nav on scroll down, reveal on scroll up ──
  (function initScrollNav() {
    var nav = document.getElementById('main-nav');
    if (!nav) return;

    var lastY     = window.scrollY;
    var ticking   = false;
    var THRESHOLD = 80; // px scrolled before we hide

    function update() {
      var currentY = window.scrollY;
      var delta    = currentY - lastY;

      if (currentY < THRESHOLD) {
        // Always show near the top
        nav.classList.remove('nav-hidden');
      } else if (delta > 4) {
        // Scrolling down – hide
        nav.classList.add('nav-hidden');
      } else if (delta < -4) {
        // Scrolling up – reveal
        nav.classList.remove('nav-hidden');
      }

      lastY    = currentY;
      ticking  = false;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    }, { passive: true });
  })();

})();
