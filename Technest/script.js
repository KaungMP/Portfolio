
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const container = document.querySelector('.slider-container');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

nextBtn.addEventListener('click', () => {
  if (currentSlide < slides.length - 1) {
    currentSlide++;
    updateSlider();
  }
});

prevBtn.addEventListener('click', () => {
  if (currentSlide > 0) {
    currentSlide--;
    updateSlider();
  }
});

function updateSlider() {
  container.style.transform = `translateX(-${currentSlide * 100}%)`;
}