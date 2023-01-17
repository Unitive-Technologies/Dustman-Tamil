// Testimonal JS

const slides = document.getElementsByClassName("testimonal");
let slidePosition = 0;
const totalSlides = slides.length;

function hideAllSlides() {
  for (let slide of slides) {
    slide.classList.remove("testimonal-visible");
    slide.classList.add("testimonal-hidden");
  }
}

function moveToNextSlide() {
  // console.log("Moving to next slide");
  hideAllSlides();

  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  slides[slidePosition].classList.remove("testimonal-hidden");
  slides[slidePosition].classList.add("testimonal-visible");
}

function moveToPrevSlide() {
  // console.log("Moving to previous slide");
  hideAllSlides();

  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }
  slides[slidePosition].classList.remove("testimonal-hidden");
  slides[slidePosition].classList.add("testimonal-visible");
}

document.getElementById("right-btn").addEventListener("click", moveToNextSlide);
document.getElementById("left-btn").addEventListener("click", moveToPrevSlide);