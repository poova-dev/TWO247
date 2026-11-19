// FAQ Accordion functionality
document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const trigger = item.querySelector(".faq-trigger");
    const content = item.querySelector(".faq-content");
    const icon = item.querySelector(".faq-icon");

    if (!trigger || !content) return;

    trigger.addEventListener("click", () => {
      const isExpanded = trigger.getAttribute("aria-expanded") === "true";

      // Optional: Close other accordions for single-item focus
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          const otherTrigger = otherItem.querySelector(".faq-trigger");
          const otherContent = otherItem.querySelector(".faq-content");
          const otherIcon = otherItem.querySelector(".faq-icon");
          if (otherTrigger && otherContent) {
            otherTrigger.setAttribute("aria-expanded", "false");
            otherContent.style.maxHeight = null;
            otherContent.classList.add("hidden");
            if (otherIcon) otherIcon.classList.remove("rotate-180");
          }
        }
      });

      // Toggle current
      if (isExpanded) {
        trigger.setAttribute("aria-expanded", "false");
        content.style.maxHeight = null;
        content.classList.add("hidden");
        if (icon) icon.classList.remove("rotate-180");
      } else {
        trigger.setAttribute("aria-expanded", "true");
        content.classList.remove("hidden");
        content.style.maxHeight = content.scrollHeight + "px";
        if (icon) icon.classList.add("rotate-180");
      }
    });
  });
});
