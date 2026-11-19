/**
 * TWO247 — Main Application Script
 * Initializes navbar, mobile menu, FAQ, animations, and forms.
 */
import { initNavbar } from './navbar.js';
import { initMobileMenu } from './mobile-menu.js';
import { initFAQ } from './faq.js';
import { initForms } from './forms.js';
import { initAnimations } from './animations.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
  initFAQ();
  initForms();
  initAnimations();

  // Dynamic Copyright Year
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
