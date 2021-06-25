const mapOpenButton = document.querySelector('.map-link');
const mapModal = document.querySelector('.modal-map ');
const mapCloseButton = mapModal.querySelector('.close-button');

mapOpenButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  mapModal.classList.add('modal-show');
});

mapCloseButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  mapModal.classList.remove('modal-show');
});

window.addEventListener('keydown', (evt) => {
  if (evt.key === 'Esc' || 'Escape') {
    mapModal.classList.remove('modal-show');
  }
});
