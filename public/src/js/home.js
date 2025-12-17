document.addEventListener('DOMContentLoaded', function () {
    // اسلایدر کارت‌های پرفروش‌ترین‌ها (اسلایدر بیرونی)
    const bestsellerSwiper = new Swiper('.bestseller-swiper', {
        slidesPerView: 2,
        spaceBetween: 16,
        loop: false,
        grabCursor: true,
        allowTouchMove: true, // موبایل: اسلاید با انگشت

        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 24,
                allowTouchMove: false, // دسکتاپ: مثل گرید ثابت
            },
        },

        navigation: {
            nextEl: '.bestseller-next',
            prevEl: '.bestseller-prev',
        },
        pagination: {
            el: '.bestseller-pagination',
            clickable: true,
        },
    });

    // اسلایدر تصاویر داخل هر کارت محصول (برای هر .product-swiper جدا)
    document.querySelectorAll('.product-swiper').forEach((el) => {
        new Swiper(el, {
            slidesPerView: 1,
            loop: true,
            nested: true, // چون داخل اسلایدر پرفروش‌هاست
            navigation: {
                nextEl: el.querySelector('.product-swiper-next'),
                prevEl: el.querySelector('.product-swiper-prev'),
            },
        });
    });

    // اسلایدر برندها (دایره‌ای)
    const brandSwiper = new Swiper('.brand-swiper', {
        slidesPerView: 3,
        spaceBetween: 24,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        breakpoints: {
            0: {
                slidesPerView: 3,
                spaceBetween: 16,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 24,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 24,
                allowTouchMove: false, // دسکتاپ: مثل گرید ثابت
            },
        },
    });

    // سرچ
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') {
                console.log('search:', e.target.value);
                // اینجا درخواست AJAX یا ریدایرکت رو بذار
            }
        });
    }
});
    document.addEventListener('DOMContentLoaded', () => {
    const addToCartBtn   = document.getElementById('addToCartBtn');
    const cartModal      = document.getElementById('cartModal');
    const cartModalClose = document.getElementById('cartModalClose');

    function openCartModal() {
    cartModal.classList.remove('hidden');
}

    function closeCartModal() {
    cartModal.classList.add('hidden');
}

    if (addToCartBtn) {
    addToCartBtn.addEventListener('click', openCartModal);
}

    if (cartModalClose) {
    cartModalClose.addEventListener('click', closeCartModal);
}

    // بستن با کلیک روی بک‌گراند تیره
    cartModal.addEventListener('click', (e) => {
    if (e.target === cartModal) {
    closeCartModal();
}
});

    // بستن با ESC
    document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
    closeCartModal();
}
});
});
