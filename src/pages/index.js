import './index.css';
import {
  popupProfileOpen,
  popupProfile,
  valuePopupName,
  valuePopupAbout,
  popupAddImageOpen,
  popupAddImage,
  popupNewAvatar,
  popupNewAvatarButton,
} from "../utils/elements.js";
import Api from '../components/Api.js';
import Card from "../components/Card.js";
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithConfirm from '../components/PopupWithConfirm.js';
import FormValidator from '../components/FormValidator.js';
import { CONFIG } from "../utils/const.js";

let userId = '';

const api = new Api(CONFIG.apiConfig);

Promise.all([ api.getUserData(), api.getInitialCards() ])
  .then(([user, cards]) => {
    userId = user._id
    userInfo.setUserInfo(user)
    cardsList.renderItems(cards, userId)
  })
  .catch((err) => { console.log(err) });


function openPopupNewAvatar() {
  popupNewAvatarValidate.cleanInputErrors();
  popupNewAvatarValidate.toggleButtonState();
  popupWithNewAvatar.open();
};

function openPopupProfile() {
  const { name, about } = userInfo.getUserInfo();
  valuePopupName.value = name;
  valuePopupAbout.value = about;
  popupProfileValidated.cleanInputErrors();
  popupProfileValidated.toggleButtonState();
  popupWithProfile.open();
};

function openPopupElements() {
  popupElementValidated.cleanInputErrors();
  popupElementValidated.toggleButtonState();
  popupWithNewImage.open();
};

function openPopupImage(name, link) {
  popupWithImage.open({ name, link });
};

function editNewAvatar(formData) {
  popupWithNewAvatar.renderSaving(true);

  api
  .changeUserAvatar(formData)
  .then((data) => {
    userInfo.setUserUrlAvatar(data.avatar);
    popupWithNewAvatar.close();
  })
  .catch((err) => {console.log(err)})
  .finally(() => {
    popupWithNewAvatar.renderSaving(false);
  });
};

function editProfile(formData) {
  popupWithProfile.renderSaving(true);

  api
  .changeUserInfo(formData)
  .then((data) => {
    userInfo.setUserInfo(data);
    popupWithProfile.close();
  })
  .catch((err) => {console.log(err)})
  .finally(() => {
    popupWithProfile.renderSaving(false);
  })
};

function likeCardHandler(id, isLiked, card) {
  if (isLiked) {
    api
    .dislikeCard(id)
    .then((data) => {
      card.setLikes(data.likes);
    })
    .catch((err) => {console.log(err)})
  } else {
    api
    .likeCard(id)
    .then((data) => {
      card.setLikes(data.likes);
    })
    .catch((err) => {console.log(err)})
  };
};

function deleteCardHandler(id, card) {
  popupWithConfirm.setSubmitProcess(() => {
    popupWithConfirm.renderSaving(true);

    api
    .deleteCard(id)
    .then(() => {
      card.removeCard();
      popupWithConfirm.close();
    })
    .catch((err) => {console.log(err)})
    .finally(() => {
      popupWithConfirm.renderSaving(false);
    });
  });
  popupWithConfirm.open();
};

function createCard(data, id) {
  const card = new Card({
    data: data,
    OpenPopup: openPopupImage,
    DeleteCard: deleteCardHandler,
    LikeCard: likeCardHandler,
  }, CONFIG.templateSelector, id);
  return card.createCard();
};

function addNewCard(formData) {
  popupWithNewImage.renderSaving(true);

  api
  .createCard(formData)
  .then((data) => {
    cardsList.setPrependItem(createCard(data, data.owner._id));
    popupWithNewImage.close();
  })
  .catch((err) => {console.log(err)})
  .finally(() => {
    popupWithNewImage.renderSaving(false);
  });
};

const cardsList = new Section({
  renderer: (data, id) => {
    cardsList.setItem(createCard(data, id));
  }
}, CONFIG.elementsSelector);


const userInfo = new UserInfo(CONFIG);

const popupWithConfirm = new PopupWithConfirm(CONFIG.popupConfirmSelector);

const popupWithImage = new PopupWithImage(CONFIG.popupImageSelector);

const popupWithProfile = new PopupWithForm({ selectorPopup: CONFIG.popupProfileSelector, submitCallback: editProfile });

const popupWithNewImage = new PopupWithForm({ selectorPopup: CONFIG.popupNewImageSelector, submitCallback: addNewCard });

const popupWithNewAvatar = new PopupWithForm({ selectorPopup: CONFIG.popupNewAvatarSelector, submitCallback: editNewAvatar });

const popupProfileValidated = new FormValidator(CONFIG, popupProfile);

const popupElementValidated = new FormValidator(CONFIG, popupAddImage);

const popupNewAvatarValidate = new FormValidator(CONFIG, popupNewAvatar);


popupWithNewAvatar.setEventListeners();
popupWithProfile.setEventListeners();
popupWithNewImage.setEventListeners();
popupWithImage.setEventListeners();
popupWithConfirm.setEventListeners();

popupProfileValidated.enableValidation();
popupElementValidated.enableValidation();
popupNewAvatarValidate.enableValidation();

popupNewAvatarButton.addEventListener('click', openPopupNewAvatar);
popupProfileOpen.addEventListener('click', openPopupProfile);
popupAddImageOpen.addEventListener('click', openPopupElements);
