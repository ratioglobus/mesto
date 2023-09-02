import Schtormgrad from '../images/schtormgrad.jpg';
import Whiterun from '../images/whiterun.jpg';
import Novigrad from '../images/novigrad.jpg';
import GalactikCity from '../images/galactik-city.jpg';
import Rivendal from '../images/rivendal.jpg';
import Hogwarts from '../images/hogwarts.jpg';


export const initialCards = [
  {
    name: 'Штормград',
    link: Schtormgrad,
  },
  {
    name: 'Вайтран',
    link: Whiterun,
  },
  {
    name: 'Новиград',
    link: Novigrad,
  },
  {
    name: 'Галактический город',
    link: GalactikCity,
  },
  {
    name: 'Ривенделл',
    link: Rivendal,
  },
  {
    name: 'Хогвартс',
    link: Hogwarts,
  }
];

export const CONFIG = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  elementsSelector: '.elements',
  popupImageSelector: '.popup-image',
  submitButtonSelector: '.popup__save-button',
  profileNameSelector: '.profile__name',
  profileAboutSelector: '.profile__about',
  popupNewImageSelector: '.popup-addimage',
  popupProfileSelector: '.popup-profile',
  inactiveButtonClass: 'popup__save-button_disabled',
  activeButtonClass: 'popup__save-button',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
  templateSelector: '#template-elements'
};
