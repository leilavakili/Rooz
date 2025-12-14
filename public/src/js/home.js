//
//     // اسلایدر اصلی پرفروش‌ترین‌ها (بیرونی)
//     const bestsellerSwiper = new Swiper(".bestseller-swiper", {
//     slidesPerView: 2,       // موبایل: دو کارت
//     spaceBetween: 12,
//     navigation: {
//     nextEl: ".bestseller-next",
//     prevEl: ".bestseller-prev",
// },
//     pagination: {
//     el: ".bestseller-pagination",
//     clickable: true,
// },
//     breakpoints: {
//     768: {
//     slidesPerView: 4,   // دسکتاپ: چهار کارت شبیه گرید
//     spaceBetween: 24,
//     allowTouchMove: false, // روی دسکتاپ اسلاید با درگ نه، فقط فلش‌ها
// },
// },
// });
//
//     // اسلایدر داخلی هر محصول (تصاویر لباس‌ها)
//     const productSwipers = document.querySelectorAll(".product-swiper");
//     productSwipers.forEach((el) => {
//     new Swiper(el, {
//         slidesPerView: 1,
//         effect: "slide",
//         navigation: {
//             nextEl: el.querySelector(".product-swiper-next"),
//             prevEl: el.querySelector(".product-swiper-prev"),
//         },
//     });
// });
//
//     // اسلایدر کارت‌های پرفروش‌ترین‌ها
//     const bestsellerSwiper = new Swiper('.bestseller-swiper', {
//     slidesPerView: 1.1,
//     spaceBetween: 16,
//     loop: false,
//     grabCursor: true,
//     allowTouchMove: true, // موبایل: اسلاید با انگشت
//
//     breakpoints: {
//     640: {
//     slidesPerView: 2,
//     spaceBetween: 20,
// },
//     1024: {
//     slidesPerView: 4,
//     spaceBetween: 24,
//     allowTouchMove: false, // دسکتاپ: مثل گرید ثابت
// },
// },
//
//     navigation: {
//     nextEl: '.bestseller-next',
//     prevEl: '.bestseller-prev',
// },
// });
//
//     // اسلایدر تصاویر هر کارت (برای هر .product-swiper جداگانه)
//     document.querySelectorAll('.product-swiper').forEach((el) => {
//     new Swiper(el, {
//         slidesPerView: 1,
//         loop: true,
//         nested: true,
//         navigation: {
//             nextEl: el.querySelector('.product-swiper-next'),
//             prevEl: el.querySelector('.product-swiper-prev'),
//         },
//     });
// });
//
//     const productSwiper = new Swiper('.product-swiper', {
//     loop: true,
//     navigation: {
//     nextEl: '.product-swiper-next',
//     prevEl: '.product-swiper-prev',
// },
// });
//
//     const brandSwiper = new Swiper('.brand-swiper', {
//     slidesPerView: 3,        // always show 3
//     spaceBetween: 24,        // gap between circles
//     loop: true,
//     autoplay: {
//     delay: 2000,
//     disableOnInteraction: false,
// },
//     // If you want slightly smaller gap on mobile, you can tweak breakpoints:
//     breakpoints: {
//     0: {
//     slidesPerView: 3,
//     spaceBetween: 16,
// },
//     768: {
//     slidesPerView: 3,
//     spaceBetween: 24,
// },
//     1024: {
//     slidesPerView: 4,
//     spaceBetween: 24,
//     allowTouchMove: false, // دسکتاپ: مثل گرید ثابت
// },
// }
// });
//     const searchInput = document.getElementById('searchInput');
//     searchInput.addEventListener('keydown', function (e) {
//     if (e.key === 'Enter') {
//     console.log('search:', e.target.value);
//     // اینجا می‌تونی درخواست AJAX یا هر چیزی بزنی
// }
// });
//
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
