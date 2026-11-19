/**
 * TWO247 — Package Filter System
 * Dynamically filters package cards based on destination, type, duration, and budget.
 */
export function initFilters() {
  const container = document.getElementById('package-grid');
  const emptyState = document.getElementById('filter-empty-state');
  const destFilter = document.getElementById('filter-destination');
  const typeFilter = document.getElementById('filter-type');
  const durFilter = document.getElementById('filter-duration');
  const budgetFilter = document.getElementById('filter-budget');
  const resetBtn = document.getElementById('filter-reset');

  if (!container) return;

  const cards = container.querySelectorAll('.package-card');

  const applyFilters = () => {
    const selectedDest = destFilter ? destFilter.value.toLowerCase() : 'all';
    const selectedType = typeFilter ? typeFilter.value.toLowerCase() : 'all';
    const selectedDur = durFilter ? durFilter.value : 'all';
    const selectedBudget = budgetFilter ? budgetFilter.value : 'all';

    let visibleCount = 0;

    cards.forEach(card => {
      const cardDest = (card.getAttribute('data-destination') || '').toLowerCase();
      const cardType = (card.getAttribute('data-type') || '').toLowerCase();
      const cardDur = parseInt(card.getAttribute('data-duration') || '0', 10);
      const cardPrice = parseInt(card.getAttribute('data-price') || '0', 10);

      let match = true;

      // Destination filter
      if (selectedDest !== 'all' && cardDest !== selectedDest) {
        match = false;
      }

      // Type filter
      if (selectedType !== 'all' && !cardType.includes(selectedType)) {
        match = false;
      }

      // Duration filter
      if (selectedDur !== 'all') {
        if (selectedDur === 'short' && (cardDur < 1 || cardDur > 4)) match = false;
        if (selectedDur === 'medium' && (cardDur < 5 || cardDur > 7)) match = false;
        if (selectedDur === 'long' && cardDur < 8) match = false;
      }

      // Budget filter
      if (selectedBudget !== 'all') {
        if (selectedBudget === 'under50k' && cardPrice > 50000) match = false;
        if (selectedBudget === '50k-100k' && (cardPrice < 50000 || cardPrice > 100000)) match = false;
        if (selectedBudget === 'above100k' && cardPrice <= 100000) match = false;
      }

      if (match) {
        card.classList.remove('hidden');
        visibleCount++;
      } else {
        card.classList.add('hidden');
      }
    });

    if (emptyState) {
      if (visibleCount === 0) {
        emptyState.classList.remove('hidden');
      } else {
        emptyState.classList.add('hidden');
      }
    }
  };

  [destFilter, typeFilter, durFilter, budgetFilter].forEach(filter => {
    if (filter) filter.addEventListener('change', applyFilters);
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (destFilter) destFilter.value = 'all';
      if (typeFilter) typeFilter.value = 'all';
      if (durFilter) durFilter.value = 'all';
      if (budgetFilter) budgetFilter.value = 'all';
      applyFilters();
    });
  }
}
