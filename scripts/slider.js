/**
 * slider.js – Touch/keyboard photo slider supporting portrait and landscape images.
 *
 * Usage: add class "photo-slider" to a wrapper containing
 *   .slider-track > .slide* elements (each slide should hold an <img>).
 *
 * Each slide gets a CSS custom property --slide-src set to its image URL so the
 * ::before pseudo-element can render a blurred backdrop fill behind the image,
 * making portrait images look great in a landscape container (and vice-versa).
 *
 * Modifier class "photo-slider--portrait" increases the container height for
 * galleries that are mostly portrait shots.
 */
(function () {
  'use strict';

  function initSlider(wrapper) {
    var track  = wrapper.querySelector('.slider-track');
    var slides = Array.prototype.slice.call(wrapper.querySelectorAll('.slide'));
    var total  = slides.length;
    if (total < 2) return;

    var current = 0;

    // Inject --slide-src on each slide so CSS ::before can create blurred backdrop
    slides.forEach(function (slide) {
      var img = slide.querySelector('img');
      if (!img) return;
      function apply() {
        slide.style.setProperty('--slide-src', 'url("' + img.src + '")');
      }
      if (img.complete && img.naturalWidth) apply();
      else img.addEventListener('load', apply);
    });

    // ── Build controls ──
    var prev = document.createElement('button');
    prev.className = 'slider-btn slider-prev';
    prev.setAttribute('aria-label', 'Vorheriges Bild');
    prev.innerHTML = '&#8249;';

    var next = document.createElement('button');
    next.className = 'slider-btn slider-next';
    next.setAttribute('aria-label', 'Nächstes Bild');
    next.innerHTML = '&#8250;';

    var dots = document.createElement('div');
    dots.className = 'slider-dots';
    for (var i = 0; i < total; i++) {
      var dot = document.createElement('button');
      dot.className = 'slider-dot';
      dot.setAttribute('aria-label', 'Bild ' + (i + 1));
      dot.dataset.index = i;
      dots.appendChild(dot);
    }

    wrapper.appendChild(prev);
    wrapper.appendChild(next);
    wrapper.appendChild(dots);

    function goTo(index) {
      current = (index + total) % total;
      track.style.transform = 'translateX(-' + (current * 100) + '%)';
      wrapper.querySelectorAll('.slider-dot').forEach(function (d, j) {
        d.classList.toggle('active', j === current);
      });
    }

    goTo(0);

    prev.addEventListener('click', function () { goTo(current - 1); });
    next.addEventListener('click', function () { goTo(current + 1); });
    dots.addEventListener('click', function (e) {
      var d = e.target.closest('.slider-dot');
      if (d) goTo(parseInt(d.dataset.index, 10));
    });

    // Keyboard
    wrapper.setAttribute('tabindex', '0');
    wrapper.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft')  goTo(current - 1);
      if (e.key === 'ArrowRight') goTo(current + 1);
    });

    // Touch swipe
    var startX = 0;
    track.addEventListener('touchstart', function (e) {
      startX = e.touches[0].clientX;
    }, { passive: true });
    track.addEventListener('touchend', function (e) {
      var dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 40) goTo(dx < 0 ? current + 1 : current - 1);
    }, { passive: true });
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.photo-slider').forEach(initSlider);
  });
})();
