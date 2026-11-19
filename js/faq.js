/**
 * TWO247 — Accessible FAQ Accordion
 * Ensures keyboard navigation (Enter/Space), ARIA states, and single active item.
 */
export function initFAQ() {
  const faqButtons = document.querySelectorAll('.faq-trigger');
  if (!faqButtons.length) return;

  faqButtons.forEach(button => {
    button.addEventListener('click', () => {
      const isExpanded = button.getAttribute('aria-expanded') === 'true';
      const panelId = button.getAttribute('aria-controls');
      const panel = document.getElementById(panelId);
      const icon = button.querySelector('.faq-icon');

      // Close all other panels
      faqButtons.forEach(otherBtn => {
        if (otherBtn !== button) {
          otherBtn.setAttribute('aria-expanded', 'false');
          const otherPanelId = otherBtn.getAttribute('aria-controls');
          const otherPanel = document.getElementById(otherPanelId);
          const otherIcon = otherBtn.querySelector('.faq-icon');
          if (otherPanel) {
            otherPanel.style.maxHeight = null;
            otherPanel.classList.add('hidden');
          }
          if (otherIcon) {
            otherIcon.classList.remove('rotate-180', 'text-brand-orange');
          }
        }
      });

      // Toggle current panel
      if (!isExpanded) {
        button.setAttribute('aria-expanded', 'true');
        if (panel) {
          panel.classList.remove('hidden');
          panel.style.maxHeight = panel.scrollHeight + 'px';
        }
        if (icon) {
          icon.classList.add('rotate-180', 'text-brand-orange');
        }
      } else {
        button.setAttribute('aria-expanded', 'false');
        if (panel) {
          panel.style.maxHeight = null;
          panel.classList.add('hidden');
        }
        if (icon) {
          icon.classList.remove('rotate-180', 'text-brand-orange');
        }
      }
    });

    // Keyboard access
    button.addEventListener('keydown', (e) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        button.click();
      }
    });
  });
}
