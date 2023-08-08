
// массив объектов фотографий, загружаемых изначально на страницу
export const initialCards = [
  {
    name: 'Штормград',
    link: './images/schtormgrad.jpg'
  },
  {
    name: 'Вайтран',
    link: './images/whiterun.jpg'
  },
  {
    name: 'Новиград',
    link: './images/novigrad.jpg'
  },
  {
    name: 'Галактический город',
    link: './images/galactik-city.jpg'
  },
  {
    name: 'Ривенделл',
    link: './images/rivendal.jpg'
  },
  {
    name: 'Хогвартс',
    link: './images/hogwarts.jpg'
  }
];

export const CONFIG = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
  activeButtonClass: 'popup__save-button',
  templateSelector: '#template-elements'
};
