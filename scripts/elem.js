
// форма редактирования профиля
const profile = document.querySelector('.profile');
const formProfile = document.querySelector('.popup-profile__form');
const popupProfile = document.querySelector('.popup-profile');
const popupProfileOpen = profile.querySelector('.profile__edit-button');
const popupProfileClose = popupProfile.querySelector('.popup__close-button');
const popupSaveButton = popupProfile.querySelector('.popup__save-button');

// значения попапа редактирования профиля
const valuePopupName = popupProfile.querySelector('.popup__input_value_name');
const valuePopupAbout = popupProfile.querySelector('.popup__input_value_about');
const valueProfileName = profile.querySelector('.profile__name');
const valueProfileAbout = profile.querySelector('.profile__about');

// template блок
const elements = document.querySelector('.elements');
const elementsItem = document.querySelector('.elements__item');
const elementsTemplate = document.querySelector('#template-elements');

// форма добавления фотографий
const popupAddImage = document.querySelector('.popup-addimage');
const formAddImage = document.querySelector('.popup-addimage__form');
const btnPopupGallerySave = document.querySelector('.popup-addimage__save-button');

// значения попапа добавления фотографий
const valuePopupAddImageName = document.querySelector('.popup__input_value_name-addimage');
const valuePopupAddImageLink = document.querySelector('.popup__input_value_link-addimage');
const popupAddImageOpen = document.querySelector('.profile__add-button');
const popupAddImageClose = document.querySelector('.popup-addimage__close-button');
const btnPopupProfileSave = document.querySelector('.popup-profile__save-button');

// попап раскрытия фото
const popupImages = document.querySelector('.popup-image');
const imagePopupAbout = document.querySelector('.popup-image__about');
const imagePopupImage = document.querySelector('.popup-image__img');
const popupImagesClose = document.querySelector('.popup-image__close-button');
