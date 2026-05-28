/**
 * navigation.js
 * Additional nav enhancements (keyboard nav, focus trap, etc.)
 * Loaded after includes.js has injected the header.
 */

(function () {
  'use strict';

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
})();
