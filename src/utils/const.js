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
  templateSelector: '#template-elements',
  popupConfirmSelector: '.popup-deleteConfirm',
  popupNewAvatarSelector: '.popup-newAvatar',
  profileAvatarSelector: '.profile__avatar-img',
  apiConfig: {
    url: 'https://mesto.nomoreparties.co/v1/cohort-74',
    headers: {
      authorization: '95644a66-d73f-4c68-b73b-d19d376bbf1f',
      'Content-Type': 'application/json',
    }
  }
};
