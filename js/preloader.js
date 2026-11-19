// TWO247 Brand Preloader & 3D Logo Experience
document.addEventListener("DOMContentLoaded", () => {
  const preloader = document.getElementById("two247-preloader");
  if (!preloader) return;

  const progressText = document.getElementById("preloader-percent");
  const progressBar = document.getElementById("preloader-progress-bar");
  const statusText = document.getElementById("preloader-status");
  const skipBtn = document.getElementById("preloader-skip");

  const statusCues = [
    "Calibrating 24/7 navigation...",
    "Connecting global travel desk...",
    "Curating bespoke itineraries...",
    "Your journey begins."
  ];

  let progress = 0;
  let statusIndex = 0;

  // Animate progress smoothly
  const interval = setInterval(() => {
    // Accelerate smoothly
    const increment = Math.max(1, Math.floor(Math.random() * 8) + 2);
    progress = Math.min(100, progress + increment);

    if (progressText) progressText.textContent = `${progress}%`;
    if (progressBar) progressBar.style.width = `${progress}%`;

    // Update status cues
    if (progress > 25 && statusIndex === 0) {
      statusIndex = 1;
      if (statusText) updateStatus(statusCues[1]);
    } else if (progress > 60 && statusIndex === 1) {
      statusIndex = 2;
      if (statusText) updateStatus(statusCues[2]);
    } else if (progress > 90 && statusIndex === 2) {
      statusIndex = 3;
      if (statusText) updateStatus(statusCues[3]);
    }

    if (progress >= 100) {
      clearInterval(interval);
      setTimeout(dismissPreloader, 350);
    }
  }, 45);

  function updateStatus(msg) {
    if (!statusText) return;
    statusText.style.opacity = "0";
    statusText.style.transform = "translateY(4px)";
    setTimeout(() => {
      statusText.textContent = msg;
      statusText.style.opacity = "1";
      statusText.style.transform = "translateY(0)";
    }, 150);
  }

  function dismissPreloader() {
    if (!preloader || preloader.classList.contains("preloader-hidden")) return;
    preloader.classList.add("preloader-hidden");
    document.body.classList.remove("overflow-hidden");

    // Remove from DOM after transition completes
    setTimeout(() => {
      preloader.style.display = "none";
    }, 700);
  }

  // Allow clicking anywhere to skip
  preloader.addEventListener("click", () => {
    clearInterval(interval);
    dismissPreloader();
  });

  if (skipBtn) {
    skipBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      clearInterval(interval);
      dismissPreloader();
    });
  }

  // Fallback timeout: preloader never blocks page longer than 2.2s
  setTimeout(() => {
    if (preloader && !preloader.classList.contains("preloader-hidden")) {
      clearInterval(interval);
      dismissPreloader();
    }
  }, 2200);
});
