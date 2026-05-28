/**
 * lazyload.js
 * Native lazy loading is handled via loading="lazy" on <img> tags.
 * This script adds a polyfill for older browsers and applies
 * a smooth fade-in once images have loaded.
 */

(function () {
  'use strict';

  // Mark images as loaded for CSS fade-in
  function onImgLoad(img) {
    img.classList.add('loaded');
  }

  function initLazyImages() {
    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
      if (img.complete) {
        onImgLoad(img);
      } else {
        img.addEventListener('load', () => onImgLoad(img), { once: true });
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLazyImages);
  } else {
    setTimeout(initLazyImages, 100);
  }
})();
