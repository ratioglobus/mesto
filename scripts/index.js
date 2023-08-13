
import { initialCards, CONFIG } from "./const.js";
import Card from "./Card.js";
import FormValidator from './FormValidator.js';


// открыть попап + экспорт открытия попапов вовне
export function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupToEsc);
};

// закрыть попап по нажатию на крестик
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupToEsc);
};

// закрыть попап по нажатию на оверлей
function closePopupToOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.currentTarget);
  };
};

// закрыть попап по нажатию "Escape" на клавиатуре
function closePopupToEsc(evt) {
  if (evt.key === "Escape") {
    closePopup(document.querySelector('.popup_opened'));
  };
};

// установить слушатели событий
function setEventListenersOverlay() {
  const overlayList = Array.from(document.querySelectorAll('.popup'));
  overlayList.forEach((elem) => {
    elem.addEventListener('click', closePopupToOverlay);
  });
};

setEventListenersOverlay();

// открыть попап профиля вместе с имеющимися данными на странице
function openPopupProfile() {
  valuePopupName.value = valueProfileName.textContent;
  valuePopupAbout.value = valueProfileAbout.textContent;
  popupProfileValidated.cleanInputErrors();
	popupProfileValidated.toggleButtonState();

  openPopup(popupProfile);
};

// добавить на страницу отредактированные данные профиля
function editProfile (evt) {
  evt.preventDefault();
  valueProfileName.textContent = valuePopupName.value;
  valueProfileAbout.textContent = valuePopupAbout.value;

  closePopup(popupProfile);
};

// открыть попап добавления фотографии
function openPopupElements() {
  formAddImage.reset();
  popupElementValidated.cleanInputErrors();
	popupElementValidated.toggleButtonState();

  openPopup(popupAddImage);
};

// создаем и возвращаем новый экземляр класса Card
function createCard(item) {
  const card = new Card(item, CONFIG.templateSelector);
  return card.createCard();
};

// рендерим новый экземляр Card на страницу
const renderCard = (item) => {
  const card = createCard(item);
  elements.prepend(card);
};

// загружаем из массива на страницу первые фото
initialCards.forEach(item => {renderCard(item)});

// добавить новый элемент
function addNewElement(evt) {
  evt.preventDefault();
  const name = valuePopupAddImageName.value;
  const link = valuePopupAddImageLink.value;
  renderCard({ name, link }, CONFIG);

  closePopup(popupAddImage);
};

// создаем экземляр класса для каждой формы
const popupProfileValidated = new FormValidator(CONFIG, popupProfile);
const popupElementValidated = new FormValidator(CONFIG, popupAddImage);
popupProfileValidated.enableValidation();
popupElementValidated.enableValidation();


// слушатели событий

// закрываем каждый из попапов
closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

// открыть попап с формой и отредактировать профиль
popupProfileOpen.addEventListener('click', openPopupProfile);
formProfile.addEventListener('submit', editProfile);

// открыть попап с формой добавления фото
popupAddImageOpen.addEventListener('click', openPopupElements);

// добавить новый элемент
formAddImage.addEventListener('submit', addNewElement);
