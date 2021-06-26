const feedbackOpenButton = document.querySelector('.contact-us');
const feedbackPopup = document.querySelector('.feedback-modal');
const userNameField = feedbackPopup.querySelector('[name=user-name]');
const userEmailField = feedbackPopup.querySelector('[name=user-email');
const userMessageField = feedbackPopup.querySelector('[name=message]');
const feedbackCloseButton = feedbackPopup.querySelector('.close-button');
const modal = document.querySelector('.addition-modal');
const feedbackForm = document.querySelector('.feedback-form');
const submitButton = feedbackPopup.querySelector('.submit-button');

let isStorageSupport = true;
let storage = '';

try {
  storage = localStorage.getItem('userName');
} catch (err) {
  isStorageSupport = false;
}

feedbackOpenButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  feedbackPopup.classList.add('modal-show');
  if(storage){
    userNameField.value = storage;
    userEmailField.value = localStorage.getItem('userEmail');
  }
  if (!userNameField.value) {
    userNameField.focus();
  } else {
    userMessageField.focus();
  }
});

feedbackCloseButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  feedbackPopup.classList.remove('modal-error');
  feedbackPopup.classList.remove('modal-show');
});

window.addEventListener('keydown', (evt) => {
  if (evt.key === 'Esc' || evt.key === 'Escape') {
    feedbackPopup.classList.remove('modal-error');
    feedbackPopup.classList.remove('modal-show');
  }
});

feedbackForm.addEventListener('submit', (evt) => {
  if (!userNameField.value || !userEmailField.value || !userMessageField.value) {
    evt.preventDefault();
    feedbackPopup.classList.remove('modal-error');
    feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
    feedbackPopup.classList.add('modal-error');
  } else {
    if (isStorageSupport) {
      localStorage.setItem('userName', userNameField.value);
      localStorage.setItem('userEmail', userEmailField.value);
    }
  }
});

