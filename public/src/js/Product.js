document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('sizeToggle');
    const panel = document.getElementById('sizePanel');
    const chevron = document.getElementById('sizeChevron');

    if (toggle && panel && chevron) {
        toggle.addEventListener('click', () => {
            const isOpen = !panel.classList.contains('hidden');

            // باز/بسته کردن پنل
            panel.classList.toggle('hidden');

            // تغییر جهت فلش
            if (isOpen) {
                chevron.textContent = '⌄';
            } else {
                chevron.textContent = '⌃';
            }
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const reviewsToggle = document.getElementById('reviewsToggle');
    const reviewsPanel = document.getElementById('reviewsPanel');
    const reviewsIcon = document.getElementById('reviewsIcon');

    if (reviewsToggle && reviewsPanel && reviewsIcon) {
        reviewsToggle.addEventListener('click', () => {
            const isOpen = !reviewsPanel.classList.contains('hidden');
            reviewsPanel.classList.toggle('hidden');

            // عوض شدن آیکن + / -
            reviewsIcon.textContent = isOpen ? '+' : '−';
        });
    }
    const materialToggle = document.getElementById('materialToggle');
    const materialPanel  = document.getElementById('materialPanel');
    const materialIcon   = document.getElementById('materialIcon');

    if (materialToggle && materialPanel && materialIcon) {
        materialToggle.addEventListener('click', () => {
            const isOpen = !materialPanel.classList.contains('hidden');
            materialPanel.classList.toggle('hidden');
            materialIcon.textContent = isOpen ? '+' : '−'; // باز = منفی
        });
    }
    const careToggle = document.getElementById('careToggle');
    const carePanel  = document.getElementById('carePanel');
    const careIcon   = document.getElementById('careIcon');

    if (careToggle && carePanel && careIcon) {
        careToggle.addEventListener('click', () => {
            const isOpen = !carePanel.classList.contains('hidden');
            carePanel.classList.toggle('hidden');
            careIcon.textContent = isOpen ? '+' : '−';
        });
    }
    const shippingToggle = document.getElementById('shippingToggle');
    const shippingPanel  = document.getElementById('shippingPanel');
    const shippingIcon   = document.getElementById('shippingIcon');

    if (shippingToggle && shippingPanel && shippingIcon) {
        shippingToggle.addEventListener('click', () => {
            const isOpen = !shippingPanel.classList.contains('hidden');
            shippingPanel.classList.toggle('hidden');
            shippingIcon.textContent = isOpen ? '+' : '−';
        });
    }
});

