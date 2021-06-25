const buyButtons = document.querySelectorAll('.buy-button');
const additionModal = document.querySelector('.addition-modal');
const closeButton = additionModal.querySelector('.close-button');
const continueButton = additionModal.querySelector('.continue-button');

buyButtons.forEach((button) => {
  button.addEventListener('click', (evt) => {
    evt.preventDefault();
    additionModal.classList.add('modal-show');
  });
});

closeButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  additionModal.classList.remove('modal-show');
});

continueButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  additionModal.classList.remove('modal-show');
});

window.addEventListener('keydown', (evt) => {
  if(evt.key === 'Esc' || 'Escape') {
  additionModal.classList.remove('modal-show');
  }
});
