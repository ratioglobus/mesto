import './index.css';
import {
  popupProfileOpen,
  popupProfile,
  valuePopupName,
  valuePopupAbout,
  popupAddImageOpen,
  popupAddImage,
} from "../utils/elements.js";
import Card from "../components/Card.js";
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import { initialCards, CONFIG } from "../utils/const.js";


function openPopupElements() {
  popupElementValidated.cleanInputErrors();
  popupElementValidated.toggleButtonState();
  popupWithNewImage.open();
};


function openPopupProfile() {
  const { name, about } = userInfo.getUserInfo();
  valuePopupName.value = name;
  valuePopupAbout.value = about;
  popupProfileValidated.cleanInputErrors();
  popupProfileValidated.toggleButtonState();
  popupWithProfile.open();
};


function openPopupImage(name, link) {
  popupWithImage.open({ name, link });
};


function editProfile(formData) {
  userInfo.setUserInfo(formData);
};


function createCard(element, templateSelector, news) {
  const card = new Card(element, templateSelector, news);
  return card.createCard();
};


function addNewCard(formData) {
  const cardElement = createCard({ name: formData['namenewimage'],
  link: formData['linknewimage'] }, CONFIG.templateSelector, openPopupImage);
  cardsList.addItem(cardElement);
};

const cardsList = new Section({
  items: initialCards,
  renderer: element => {
    const cardElement = createCard(element, CONFIG.templateSelector, openPopupImage);
    cardsList.addItem(cardElement);
  }
}, CONFIG.elementsSelector);


const userInfo = new UserInfo(CONFIG);

const popupWithProfile = new PopupWithForm({ selectorPopup: CONFIG.popupProfileSelector, submitCallback: editProfile });

const popupWithNewImage = new PopupWithForm({ selectorPopup: CONFIG.popupNewImageSelector, submitCallback: addNewCard });

const popupWithImage = new PopupWithImage(CONFIG.popupImageSelector);

const popupProfileValidated = new FormValidator(CONFIG, popupProfile);

const popupElementValidated = new FormValidator(CONFIG, popupAddImage);


popupWithProfile.setEventListeners();
popupWithNewImage.setEventListeners();
popupWithImage.setEventListeners();

popupProfileValidated.enableValidation();
popupElementValidated.enableValidation();

popupProfileOpen.addEventListener('click', openPopupProfile);
popupAddImageOpen.addEventListener('click', openPopupElements);
cardsList.renderItems();
