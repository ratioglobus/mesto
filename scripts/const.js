
// значения формы, профиля и фото
const profile = document.querySelector('.profile');
const formProfile = document.querySelector('.popup-profile__form');
const formAddImage = document.querySelector('.popup-addimage__form');

const elementsItem = document.querySelector('.elements__item');

// значения попапа редактирования профиля
const popupProfile = document.querySelector('.popup-profile');
const popupProfileOpen = profile.querySelector('.profile__edit-button');
const popupProfileClose = popupProfile.querySelector('.popup__close-button');
const popupSaveButton = popupProfile.querySelector('.popup__save-button');

// тексты попапа редактирования профиля
const valuePopupName = popupProfile.querySelector('.popup__input_value_name');
const valuePopupAbout = popupProfile.querySelector('.popup__input_value_about');
const valueProfileName = profile.querySelector('.profile__name');
const valueProfileAbout = profile.querySelector('.profile__about');

// значения и тексты попапа добавления фотографий
const valuePopupAddImageName = document.querySelector('.popup__input_value_name-addimage');
const valuePopupAddImageLink = document.querySelector('.popup__input_value_link-addimage');
const popupAddImage = document.querySelector('.popup-addimage');
const popupAddImageOpen = document.querySelector('.profile__add-button');
const popupAddImageClose = document.querySelector('.popup-addimage__close-button');
const formPopupAddImage = document.querySelector('.popup-addimage__save-button');


// const openImagePopupElement = elementsItem.querySelector('.elements__photo');
// const imagePopupAbout = document.querySelector('.popup-image__about');
// const imagePopupImage = document.querySelector('.popup-image__img');
// const popupImages = document.querySelector('.popup-image');



// массив объектов фотографий, загружаемых на страницу
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
    name: 'Галактический город',
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
