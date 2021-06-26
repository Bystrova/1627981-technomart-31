const catalogButtonLeft = document.querySelector('.left-button');
const catalogButtonRight = document.querySelector('.right-button');
const sliderPhotos = document.querySelectorAll('.slide');
const circleButtons = document.querySelectorAll('.circle');
const serviceButtons = document.querySelectorAll('.service-name-button');
const serviceSliders = document.querySelectorAll('.service-slider-item');

const deleteClass = (someArray, someClass) => {
  let currentIndex = 0;
  for (let i = 0; i < someArray.length; i++) {
    if (someArray[i].classList.contains(someClass)) {
      someArray[i].classList.remove(someClass);
      currentIndex = i;
    }
  }
  return currentIndex;
};

const changeSlide = (sliders, buttons, slideClass, buttonClass) => {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (evt) => {
      evt.preventDefault();
      deleteClass(buttons, buttonClass);
      deleteClass(sliders, slideClass);
      sliders[i].classList.add(slideClass);
      buttons[i].classList.add(buttonClass);
    });
  }
};

catalogButtonLeft.addEventListener('click', (evt) => {
  evt.preventDefault();
  const slideIndex = deleteClass(sliderPhotos,'current');
  deleteClass(circleButtons, 'current-slide');
  if (slideIndex > 0) {
    sliderPhotos[slideIndex - 1].classList.add('current');
    circleButtons[slideIndex - 1].classList.add('current-slide');
  } else {
    sliderPhotos[sliderPhotos.length - 1].classList.add('current');
    circleButtons[sliderPhotos.length - 1].classList.add('current-slide');
  }
});

catalogButtonRight.addEventListener('click', (evt) => {
  evt.preventDefault();
  const slideIndex = deleteClass(sliderPhotos, 'current');
  deleteClass(circleButtons, 'current-slide');
  if (slideIndex < sliderPhotos.length - 1) {
    sliderPhotos[slideIndex + 1].classList.add('current');
    circleButtons[slideIndex + 1].classList.add('current-slide');
  } else {
    sliderPhotos[0].classList.add('current');
    circleButtons[0].classList.add('current-slide');
  }
});

changeSlide(sliderPhotos, circleButtons, 'current', 'current-slide');
changeSlide(serviceSliders, serviceButtons, 'current-service-slide', 'current-service');
