let currentSlide = 0;
const slides = document.querySelectorAll("#roadmap-slider .slide");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${100 * (i - index)}%)`;
    });
}

prevButton.addEventListener("click", () => {
    currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
    showSlide(currentSlide);
});

nextButton.addEventListener("click", () => {
    currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
    showSlide(currentSlide);
});

// Initialize slider
showSlide(currentSlide);


