let currentIndex = 0;

const slides = document.querySelectorAll('.slide');
// const prevButton = document.getElementById('prev');
// const nextButton = document.getElementById('next');

function showSlide(index) {
  const totalSlides = slides.length;
  if (index < 0) {
    currentIndex = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }
  const offset = -currentIndex * 100;
  document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
}

// prevButton.addEventListener('click', () => {
//   showSlide(currentIndex - 1);
// });

// nextButton.addEventListener('click', () => {
//   showSlide(currentIndex + 1);
// });

// Auto-slide functionality (optional)
setInterval(() => {
  showSlide(currentIndex + 1);
}, 5000);
