
let popup = document.querySelector('.popup');
let profile = document.querySelector('.profile');
let formElement = document.querySelector('.popup__form');

let popupOpen = profile.querySelector('.profile__edit-button');
let popupClose = popup.querySelector('.popup__close-button');
let popupSaveButton = popup.querySelector('.popup__save-button');

let valueProfileName = profile.querySelector('.profile__name');
let valueProfileAbout = profile.querySelector('.profile__about');
let valuePopupName = popup.querySelector('.popup__input_value_name');
let valuePopupAbout = popup.querySelector('.popup__input_value_about');


function openPopup() {
  popup.classList.add('popup_opened');
  valuePopupName.value = valueProfileName.textContent;
  valuePopupAbout.value = valueProfileAbout.textContent;
}

function closedPopup() {
  popup.classList.remove('popup_opened');
}

function handleFormSubmit (evt) {
    evt.preventDefault();
    valueProfileName.textContent = valuePopupName.value;
    valueProfileAbout.textContent = valuePopupAbout.value;
    closedPopup();
}

popupOpen.addEventListener('click', openPopup);
popupClose.addEventListener('click', closedPopup);
formElement.addEventListener('submit', handleFormSubmit);
