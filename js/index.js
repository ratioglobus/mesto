
// edit popup

let popup = document.querySelector('.popup');
let profile = document.querySelector('.profile');
let popupClose = popup.querySelector('.popup__close-button');
let popupOpen = profile.querySelector('.profile__edit-button');

function openPopup() {
  popup.classList.add('popup_opened');
}

function closedPopup() {
  popup.classList.remove('popup_opened');
}

popupOpen.addEventListener('click', openPopup);
popupClose.addEventListener('click', closedPopup);
