const popup = document.querySelector('.modal');
const openPopupButton = document.querySelector('.modal-open');
const form = document.querySelector('.find-hotel-form');
const img = document.querySelector('.map-img');

img.classList.add('map-hide');

form.classList.add('modal-hide');

openPopupButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  form.classList.toggle('modal-hide');
});
