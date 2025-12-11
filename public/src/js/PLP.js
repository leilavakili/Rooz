const sortWrapper = document.querySelector('[id="sortToggle"]').parentElement;
const sortToggle = document.getElementById('sortToggle');
const sortMenu = document.getElementById('sortMenu');
const sortLabel = document.getElementById('sortLabel');

// باز و بسته کردن منو با کلیک روی دکمه
sortToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    sortMenu.classList.toggle('hidden');
});

// انتخاب گزینه و بستن منو
sortMenu.querySelectorAll('button').forEach((btn) => {
    btn.addEventListener('click', () => {
        sortLabel.textContent = btn.dataset.value; // فقط متن دکمه رو بالا ست می‌کنه
        sortMenu.classList.add('hidden');

        // اینجا می‌تونی بر اساس مقدار انتخاب شده، لیست محصولات رو مرتب کنی
        // مثلاً: sortProducts(btn.dataset.value);
    });
});

// کلیک بیرون از منو → منو بسته شود
document.addEventListener('click', (e) => {
    if (!sortWrapper.contains(e.target)) {
        sortMenu.classList.add('hidden');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    // اسلایدر کارت‌های پرفروش‌ترین‌ها (اسلایدر بیرونی)
    const bestsellerSwiper = new Swiper('.bestseller-swiper', {
        slidesPerView: 1.1,
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


document.addEventListener('DOMContentLoaded', function () {
    const headers = document.querySelectorAll('[data-accordion-header]');

    headers.forEach(function (header) {
        const content = header.nextElementSibling;
        const icon = header.querySelector('[data-accordion-icon]');

        // اگر data-open="true" داشت، در شروع بازش کن
        if (content.dataset.open === 'true') {
            content.style.maxHeight = content.scrollHeight + 'px';
            if (icon) icon.textContent = '−';
        } else {
            content.style.maxHeight = '0px';
            if (icon) icon.textContent = '+';
        }

        header.addEventListener('click', function () {
            const isOpen = content.style.maxHeight && content.style.maxHeight !== '0px';

            if (isOpen) {
                // بستن
                content.style.maxHeight = '0px';
                if (icon) icon.textContent = '+';
            } else {
                // باز کردن (بدون بستن بقیه -> چندتا می‌تونن هم‌زمان باز باشن)
                content.style.maxHeight = content.scrollHeight + 'px';
                if (icon) icon.textContent = '−';
            }
        });
    });
});

    document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('brand-search');
    const container = document.getElementById('brand-filter');
    if (!input || !container) return;

    const labels = Array.from(container.querySelectorAll('label'));
    const emptyMessage = document.getElementById('brand-empty');

    function filterBrands() {
    const q = input.value.trim().toLowerCase(); // متن جستجو
    let visibleCount = 0;

    labels.forEach(label => {
    const name = label.querySelector('span')?.textContent.trim().toLowerCase() || '';
    const match = q === '' || name.includes(q);

    // اگر match نباشه، از لیست مخفی میشه
    label.style.display = match ? 'flex' : 'none';
    if (match) visibleCount++;
});

    // اگر هیچ برندی نموند، پیام "پیدا نشد" رو نشون بده
    if (emptyMessage) {
    emptyMessage.classList.toggle('hidden', visibleCount !== 0);
}
}

    // هر بار که کاربر تایپ می‌کند، فیلتر شود
    input.addEventListener('input', filterBrands);

    // مقدار اولیه (همه چیز نمایش داده بشه)
    filterBrands();
});


const minRange = document.getElementById("price-min");
const maxRange = document.getElementById("price-max");
const minInput = document.getElementById("price-min-input");
const maxInput = document.getElementById("price-max-input");

const MIN = +minRange.min;
const MAX = +minRange.max;

function formatPrice(value) {
    return new Intl.NumberFormat("fa-IR").format(value) + " تومان";
}

function updateTrack(e) {
    let minVal = +minRange.value;
    let maxVal = +maxRange.value;

    // جلوگیری از رد شدن دایره‌ها از هم
    if (maxVal < minVal) {
        if (e && e.target === minRange) {
            minRange.value = maxVal;
            minVal = maxVal;
        } else {
            maxRange.value = minVal;
            maxVal = minVal;
        }
    }

    const pMin = ((minVal - MIN) / (MAX - MIN)) * 100;
    const pMax = ((maxVal - MIN) / (MAX - MIN)) * 100;

    // قبل از حداقل: خاکستری، بین دو دایره: مشکی، بعد از حداکثر: خاکستری
    const bg = `
        linear-gradient(to right,
          #d1d5db 0%,
          #d1d5db ${pMin}%,
          #000000 ${pMin}%,
          #000000 ${pMax}%,
          #d1d5db ${pMax}%,
          #d1d5db 100%)
      `;

    minRange.style.background = bg;
    maxRange.style.background = "transparent";

    // آپدیت مقدارها در باکس‌ها
    minInput.value = formatPrice(minVal);
    maxInput.value = formatPrice(maxVal);
}

minRange.addEventListener("input", updateTrack);
maxRange.addEventListener("input", updateTrack);

// مقدار اولیه
updateTrack();