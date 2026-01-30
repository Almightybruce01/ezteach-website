(function () {
  'use strict';

  // Support email links (set in firebase-config.js)
  var supportEmail = window.EZTEACH_SUPPORT_EMAIL || 'support@ezteach.org';
  document.querySelectorAll('.support-email').forEach(function (a) {
    a.href = 'mailto:' + supportEmail;
    a.textContent = supportEmail;
  });

  // Current year in footer
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
      toggle.classList.toggle('active');
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    var href = a.getAttribute('href');
    if (href === '#') return;
    var target = document.querySelector(href);
    if (!target) return;
    a.addEventListener('click', function (e) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (links && links.classList.contains('open')) {
        links.classList.remove('open');
        toggle.classList.remove('active');
      }
    });
  });

  // Reveal animation for feature cards
  var cards = document.querySelectorAll('[data-reveal]');
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );
  cards.forEach(function (card) { observer.observe(card); });
})();
