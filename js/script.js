var popup = document.querySelector('.modal');
var openPopupButton = document.querySelector('.modal-open');
var form = document.querySelector('.find-hotel-form');

openPopupButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  form.classList.toggle('visually-hidden');
});

