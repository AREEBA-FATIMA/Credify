var navbar = document.querySelector(".header .navbar");
var menuBtn = document.querySelector("#menu-btn");
var header = document.querySelector('.header');
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
        }
        else {
            header.classList.remove('active');
        }
    }
};
var slides = document.querySelectorAll('.reviews .row .slider-container .slide');
var index = 0;
function next() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}
function prev() {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}
var nextBtn = document.querySelector("#next");
var prevBtn = document.querySelector("#prev");
if (nextBtn) {
    nextBtn.addEventListener('click', next);
}
if (prevBtn) {
    prevBtn.addEventListener('click', prev);
}
