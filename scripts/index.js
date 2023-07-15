
let popup = document.querySelector('.popup');
let formElement = document.querySelector('.popup__form');
let popupClose = popup.querySelector('.popup__close-button');
let popupSaveButton = popup.querySelector('.popup__save-button');

let profile = document.querySelector('.profile');
let popupOpen = profile.querySelector('.profile__edit-button');
let valueProfileName = profile.querySelector('.profile__name');
let valueProfileAbout = profile.querySelector('.profile__about');
let valuePopupName = popup.querySelector('.popup__input_value_name');
let valuePopupAbout = popup.querySelector('.popup__input_value_about');

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


initialCards.forEach(function ({ name, link }) {
  const elementsList = document.querySelector('.elements');
  const elementsTemplate = document.querySelector('#template-elements').content;
  const elementsItem = elementsTemplate.cloneNode(true);

  elementsItem.querySelector('.elements__photo').src = link;
  elementsItem.querySelector('.elements__place').textContent = name;

  elementsList.append(elementsItem);
});


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
