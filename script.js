(() => {
  'use strict';

  // ========== NAVBAR SCROLL ==========
  const navbar = document.getElementById('navbar');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    navbar.classList.toggle('scrolled', currentScroll > 40);
    lastScroll = currentScroll;
  }, { passive: true });

  // ========== MOBILE NAV TOGGLE ==========
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });

  // ========== ACTIVE NAV LINK ON SCROLL ==========
  const sections = document.querySelectorAll('section[id]');
  const navLinkElements = document.querySelectorAll('.nav-link');

  function updateActiveLink() {
    const scrollY = window.scrollY + 200;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollY >= top && scrollY < top + height) {
        navLinkElements.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });

  // ========== FADE-UP ON SCROLL (Intersection Observer) ==========
  const fadeElements = document.querySelectorAll('.fade-up');

  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 80);
        fadeObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -60px 0px'
  });

  fadeElements.forEach(el => fadeObserver.observe(el));

  // ========== LOGO SLIDE-REVEAL (independent 20s idle timers) ==========
  const IDLE_DELAY = 20000;
  const REVEAL_DURATION = 2500;

  document.querySelectorAll('.nav-logo, .footer-logo').forEach(parent => {
    const pill = parent.querySelector('.logo-pill');
    let timer = null;

    function reveal() {
      pill.classList.add('expanded');
      setTimeout(() => {
        pill.classList.remove('expanded');
        startTimer();
      }, REVEAL_DURATION);
    }

    function startTimer() {
      clearTimeout(timer);
      timer = setTimeout(reveal, IDLE_DELAY);
    }

    parent.addEventListener('mouseenter', () => {
      clearTimeout(timer);
      pill.classList.remove('expanded');
    });

    parent.addEventListener('mouseleave', () => {
      startTimer();
    });

    startTimer();
  });

  // ========== SMOOTH SCROLL FOR ANCHOR LINKS ==========
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;

      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
})();
