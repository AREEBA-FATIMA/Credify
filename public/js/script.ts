const navbar = document.querySelector(".header .navbar") as HTMLElement | null;
const menuBtn = document.querySelector("#menu-btn") as HTMLElement | null;
const header = document.querySelector('.header') as HTMLElement | null;

if (menuBtn && navbar) {
    menuBtn.onclick = function () {
        menuBtn.classList.toggle("fa-xmark");
        navbar.classList.toggle("active");
    };
}

window.onscroll = function () {
    if (menuBtn) {
        menuBtn.classList.remove('fa-xmark');
    }
    if (navbar) {
        navbar.classList.remove('active');
    }
    if (header) {
        if (window.scrollY > 0) {
            header.classList.add('active');
        } else {
            header.classList.remove('active');
        }
    }
};

const slides = document.querySelectorAll('.reviews .row .slider-container .slide') as NodeListOf<HTMLElement>;
let index = 0;

function next(): void {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(): void {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

const nextBtn = document.querySelector("#next") as HTMLElement | null;
const prevBtn = document.querySelector("#prev") as HTMLElement | null;

if (nextBtn) {
    nextBtn.addEventListener('click', next);
}

if (prevBtn) {
    prevBtn.addEventListener('click', prev);
}
