
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

// загрузить из массива на страницу первые фото, используя шаблон createElement
initialCards.forEach(item => { createCard(item, CONFIG) });

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

// создать новый элемент с возможностью лайкнуть, удалить и открыть его
function createCard({ name, link }, CONFIG) {
  const elementsItem = new Card({ name, link }, CONFIG.templateSelector);
  elements.prepend(elementsItem.createCard());

  return elementsItem;
};

// добавить новый элемент
function addNewElement(evt) {
  evt.preventDefault();
  const name = valuePopupAddImageName.value;
  const link = valuePopupAddImageLink.value;
  createCard({ name, link }, CONFIG);

  closePopup(popupAddImage);
};

// создаем экземляр класса для каждой формы
const popupProfileValidated = new FormValidator(CONFIG, popupProfile);
const popupElementValidated = new FormValidator(CONFIG, popupAddImage);
popupProfileValidated.enableValidation();
popupElementValidated.enableValidation();


// слушатели событий

// закрыть каждый из попапов
popupProfileClose.addEventListener('click', () => closePopup(popupProfile));
popupAddImageClose.addEventListener('click', () => closePopup(popupAddImage));
popupImagesClose.addEventListener('click', () => closePopup(popupImages));

// открыть попап с формой и отредактировать профиль
popupProfileOpen.addEventListener('click', openPopupProfile);
formProfile.addEventListener('submit', editProfile);

// открыть попап с формой добавления фото
popupAddImageOpen.addEventListener('click', openPopupElements);

// добавить новый элемент
formAddImage.addEventListener('submit', addNewElement);
