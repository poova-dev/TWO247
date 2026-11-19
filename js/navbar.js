/**
 * TWO247 — Navbar Scroll Handler
 * Manages transparent-to-solid transitions, shadows, and logo variants.
 */
export function initNavbar() {
  const navbar = document.getElementById('navbar');
  const navLogo = document.getElementById('nav-logo');
  if (!navbar) return;

  const handleScroll = () => {
    const isScrolled = window.scrollY > 40;
    if (isScrolled) {
      navbar.classList.add('bg-white/95', 'backdrop-blur-md', 'shadow-sm', 'py-3.5', 'border-b', 'border-slate-100');
      navbar.classList.remove('bg-transparent', 'py-5');
      
      // Text styling for light navbar
      navbar.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('text-white', 'hover:text-brand-orange');
        link.classList.add('text-brand-text', 'hover:text-brand-orange');
      });

      if (navLogo) {
        navLogo.src = 'assets/logo/two247-logo-transparent.png';
      }
    } else {
      navbar.classList.remove('bg-white/95', 'backdrop-blur-md', 'shadow-sm', 'py-3.5', 'border-b', 'border-slate-100');
      navbar.classList.add('bg-transparent', 'py-5');

      // Text styling for transparent hero navbar
      navbar.querySelectorAll('.nav-link').forEach(link => {
        link.classList.add('text-white', 'hover:text-brand-orange');
        link.classList.remove('text-brand-text');
      });

      if (navLogo) {
        navLogo.src = 'assets/logo/two247-logo-white.png';
      }
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check
}
