// --- LOGICĂ SLIDESHOW AUTOMAT & MANUAL ---
let slideIndex = 1;
let slideInterval;

window.addEventListener('DOMContentLoaded', () => {
    // Pornirea slideshow-ului doar pe pagina principală (dacă elementul există)
    if (document.querySelector('.slideshow-container')) {
        showSlides(slideIndex);
        startAutoSlide();
    }

    // --- LOGICĂ MODAL TARIFE ---
    const modal = document.getElementById('pricing-modal');
    const openBtn1 = document.getElementById('open-pricing');
    const openBtn2 = document.getElementById('open-pricing-hero');
    const closeBtn = document.querySelector('.close-btn');

    if (openBtn1) {
        openBtn1.addEventListener('click', () => modal.style.display = 'flex');
    }
    if (openBtn2) {
        openBtn2.addEventListener('click', () => modal.style.display = 'flex');
    }
    if (closeBtn) {
        closeBtn.addEventListener('click', () => modal.style.display = 'none');
    }

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // --- LOGICĂ FILTRE GALERIE ---
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Elimină clasa active de pe toate butoanele
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            galleryItems.iterrows = galleryItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});

// Control manual slideshow
function plusSlides(n) {
    clearInterval(slideInterval);
    showSlides(slideIndex += n);
    startAutoSlide();
}

function currentSlide(n) {
    clearInterval(slideInterval);
    showSlides(slideIndex = n);
    startAutoSlide();
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    
    if (!slides.length) return;

    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active-dot", "");
    }

    slides[slideIndex - 1].style.display = "block";
    if (dots.length > 0) {
        dots[slideIndex - 1].className += " active-dot";
    }
}

// Schimbare automată la fiecare 4 secunde
function startAutoSlide() {
    slideInterval = setInterval(() => {
        slideIndex++;
        showSlides(slideIndex);
    }, 4000);
}