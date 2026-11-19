// Slider / Carousel functionality for Testimonials & Destinations
document.addEventListener("DOMContentLoaded", () => {
  // Generic horizontal scroll container helper
  const initSlider = (containerId, prevBtnId, nextBtnId) => {
    const container = document.getElementById(containerId);
    const prevBtn = document.getElementById(prevBtnId);
    const nextBtn = document.getElementById(nextBtnId);

    if (!container) return;

    const scrollAmount = () => container.clientWidth * 0.85;

    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        container.scrollBy({ left: scrollAmount(), behavior: "smooth" });
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        container.scrollBy({ left: -scrollAmount(), behavior: "smooth" });
      });
    }
  };

  initSlider("destinations-slider", "destinations-prev", "destinations-next");
  initSlider("testimonials-slider", "testimonials-prev", "testimonials-next");
});
