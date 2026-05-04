document.querySelectorAll('.accordion-trigger').forEach((trigger) => {
    trigger.addEventListener('click', () => {
        const item = trigger.parentElement;
        item.classList.toggle('active');
    });
});

const mainImage = document.getElementById('mainProductImage');
const thumbs = document.querySelectorAll('.thumb-btn');

thumbs.forEach((thumb) => {
    thumb.addEventListener('click', () => {
        const image = thumb.getAttribute('data-image');
        if (mainImage && image) mainImage.src = image;

        thumbs.forEach((btn) => btn.classList.remove('thumb-active'));
        thumbs.forEach((btn) => {
            btn.classList.add('border-transparent', 'opacity-70');
            btn.classList.remove('border-[#101010]', 'opacity-100');
        });

        thumb.classList.add('thumb-active');
        thumb.classList.remove('border-transparent', 'opacity-70');
    });
});

new Swiper('.product-mobile-gallery', {
    slidesPerView: 1.1,
    spaceBetween: 12,
    rtl: true,
    pagination: {
        el: '.product-mobile-pagination',
        clickable: true,
    },
});

new Swiper('.related-swiper', {
    slidesPerView: 1.4,
    spaceBetween: 16,
    rtl: true,
    navigation: {
        nextEl: '.related-next',
        prevEl: '.related-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
        1280: {
            slidesPerView: 4,
            spaceBetween: 28,
        }
    }
});

new Swiper('.recent-swiper', {
    slidesPerView: 1.4,
    spaceBetween: 16,
    rtl: true,
    navigation: {
        nextEl: '.recent-next',
        prevEl: '.recent-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
        1280: {
            slidesPerView: 4,
            spaceBetween: 28,
        }
    }
});