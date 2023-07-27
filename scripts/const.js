
// массив объектов фотографий, загружаемых изначально на страницу
const initialCards = [
  {
    name: 'Хогвартс',
    link: './images/hogwarts.jpg'
  },
  {
    name: 'Ривенделл',
    link: './images/rivendal.jpg'
  },
  {
    name: 'Галактика',
    link: './images/galactik-city.jpg'
  },
  {
    name: 'Новиград',
    link: './images/novigrad.jpg'
  },
  {
    name: 'Вайтран',
    link: './images/whiterun.jpg'
  },
  {
    name: 'Штормград',
    link: './images/schtormgrad.jpg'
  }
];

const CONFIG = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
  activeButtonClass: 'popup__save-button',
};
