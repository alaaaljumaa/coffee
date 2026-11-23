'use strict';

/* ---------- Footer year (never goes out of date) ---------- */
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

/* ---------- Mobile navigation toggle ---------- */
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.getElementById('nav-menu');

if (navToggle && navMenu) {
  const setNavOpen = (open) => {
    navMenu.classList.toggle('open', open);
    navToggle.setAttribute('aria-expanded', String(open));
  };

  navToggle.addEventListener('click', () => {
    setNavOpen(navToggle.getAttribute('aria-expanded') !== 'true');
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && navMenu.classList.contains('open')) {
      setNavOpen(false);
      navToggle.focus();
    }
  });
}

/* ---------- Menu category filter ---------- */
const menuFilter = document.getElementById('menu-filter');

if (menuFilter) {
  const items = document.querySelectorAll('.menu-grid .item[data-category]');
  const status = document.getElementById('menu-status');

  const applyFilter = () => {
    const category = menuFilter.value;
    let visible = 0;

    items.forEach((item) => {
      const show = category === 'all' || item.dataset.category === category;
      item.hidden = !show;
      if (show) visible += 1;
    });

    if (status) {
      status.textContent = `Showing ${visible} of ${items.length} items`;
    }
  };

  menuFilter.addEventListener('change', applyFilter);
  applyFilter(); // also covers browsers that restore the select's value on Back
}
