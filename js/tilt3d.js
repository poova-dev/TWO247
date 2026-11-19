// 3D Tilt & Specular Glare Micro-Interactions
// Adds perspective depth to cards and interactive components
export function init3DTilt() {
  const cards = document.querySelectorAll(".travel-card, [data-tilt-3d]");

  // Skip on touch-only mobile devices to preserve scrolling performance
  if (window.matchMedia("(hover: none)").matches) return;

  cards.forEach((card) => {
    // Avoid double initialization
    if (card.dataset.tiltInitialized) return;
    card.dataset.tiltInitialized = "true";

    // Create dynamic specular glare layer
    const glare = document.createElement("div");
    glare.className = "tilt-glare pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 rounded-[inherit] z-20";
    glare.style.background = "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) 65%)";
    card.style.position = card.style.position || "relative";
    card.style.transformStyle = "preserve-3d";
    card.appendChild(glare);

    let bounds;

    const onMouseEnter = () => {
      bounds = card.getBoundingClientRect();
      card.style.transition = "transform 0.1s ease-out, box-shadow 0.3s ease";
      glare.style.opacity = "0.7";
    };

    const onMouseMove = (e) => {
      if (!bounds) bounds = card.getBoundingClientRect();
      const mouseX = e.clientX - bounds.left;
      const mouseY = e.clientY - bounds.top;

      const xPct = mouseX / bounds.width - 0.5;
      const yPct = mouseY / bounds.height - 0.5;

      // Max rotation: 9 degrees for refined luxury feel
      const maxRot = 9;
      const rotX = -yPct * maxRot;
      const rotY = xPct * maxRot;

      card.style.transform = `perspective(1000px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;

      // Move specular glare with light source position
      const glareX = (mouseX / bounds.width) * 100;
      const glareY = (mouseY / bounds.height) * 100;
      glare.style.background = `radial-gradient(circle at ${glareX.toFixed(1)}% ${glareY.toFixed(1)}%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 70%)`;
    };

    const onMouseLeave = () => {
      card.style.transition = "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s ease";
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
      glare.style.opacity = "0";
      bounds = null;
    };

    card.addEventListener("mouseenter", onMouseEnter);
    card.addEventListener("mousemove", onMouseMove);
    card.addEventListener("mouseleave", onMouseLeave);
  });
}

document.addEventListener("DOMContentLoaded", init3DTilt);
