// Main Entrypoint
import { siteConfig } from "../data/site-config.js";
import { destinations } from "../data/destinations.js";
import { packages } from "../data/packages.js";

document.addEventListener("DOMContentLoaded", () => {
  console.log("TWO247 Travel System Initialized — " + siteConfig.brand.fullName);

  // Sync brand configurations across any data-bind elements
  document.querySelectorAll("[data-bind='brand-name']").forEach((el) => {
    el.textContent = siteConfig.brand.name;
  });
  document.querySelectorAll("[data-bind='brand-fullname']").forEach((el) => {
    el.textContent = siteConfig.brand.fullName;
  });
  document.querySelectorAll("[data-bind='brand-tagline']").forEach((el) => {
    el.textContent = siteConfig.brand.tagline;
  });
  document.querySelectorAll("[data-bind='contact-phone']").forEach((el) => {
    el.textContent = siteConfig.contact.phoneDisplay;
  });
  document.querySelectorAll("[data-bind='contact-email']").forEach((el) => {
    el.textContent = siteConfig.contact.email;
  });

  // Reveal elements smoothly on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("opacity-100", "translate-y-0");
        entry.target.classList.remove("opacity-0", "translate-y-6");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll(".reveal-on-scroll").forEach((el) => {
    el.classList.add("transition-all", "duration-700", "ease-out", "opacity-0", "translate-y-6");
    revealObserver.observe(el);
  });
});
