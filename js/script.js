const popup = document.querySelector('.modal');
const openPopupButton = document.querySelector('.modal-open');
const form = document.querySelector('.find-hotel-form');

openPopupButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  form.classList.toggle('modal-hide');
});
