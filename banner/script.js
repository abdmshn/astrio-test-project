const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const slides = document.getElementsByClassName("slide");
var slideIndex = 1;

prev.addEventListener('click', prevSlide);
next.addEventListener('click', nextSlide);

function prevSlide() {
    makeSlides(slideIndex -= 1);
}

function nextSlide() {
    makeSlides(slideIndex += 1);
}

function makeSlides(n = 1) {    
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex-1].style.display = "block";
}