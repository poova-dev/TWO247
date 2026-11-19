// Navbar functionality: Scroll state, mobile drawer, active links, logo swapping
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("main-navbar");
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileMenuClose = document.getElementById("mobile-menu-close");
  const logoImgLight = document.getElementById("logo-img-light");
  const logoImgDark = document.getElementById("logo-img-dark");

  // Scroll effect
  const handleScroll = () => {
    if (!navbar) return;
    if (window.scrollY > 40) {
      navbar.classList.add("navbar-scrolled");
      navbar.classList.remove("navbar-transparent");
      if (logoImgLight && logoImgDark) {
        logoImgLight.classList.add("hidden");
        logoImgDark.classList.remove("hidden");
      }
    } else {
      navbar.classList.remove("navbar-scrolled");
      navbar.classList.add("navbar-transparent");
      if (logoImgLight && logoImgDark) {
        logoImgLight.classList.remove("hidden");
        logoImgDark.classList.add("hidden");
      }
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll(); // Initial check

  // Mobile menu toggle
  if (mobileMenuBtn && mobileMenu) {
    const toggleMenu = (open) => {
      const isOpen = open !== undefined ? open : mobileMenu.classList.contains("hidden");
      if (isOpen) {
        mobileMenu.classList.remove("hidden");
        document.body.classList.add("overflow-hidden");
        setTimeout(() => {
          mobileMenu.classList.remove("opacity-0", "-translate-y-4");
          mobileMenu.classList.add("opacity-100", "translate-y-0");
        }, 10);
      } else {
        mobileMenu.classList.add("opacity-0", "-translate-y-4");
        mobileMenu.classList.remove("opacity-100", "translate-y-0");
        setTimeout(() => {
          mobileMenu.classList.add("hidden");
          document.body.classList.remove("overflow-hidden");
        }, 200);
      }
    };

    mobileMenuBtn.addEventListener("click", () => toggleMenu(true));
    if (mobileMenuClose) {
      mobileMenuClose.addEventListener("click", () => toggleMenu(false));
    }

    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => toggleMenu(false));
    });
  }
});
