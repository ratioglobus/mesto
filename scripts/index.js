
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
const formPopupAddImage = document.querySelector('.popup-addimage__save-button');

// значения попапа добавления фотографий
const valuePopupAddImageName = document.querySelector('.popup__input_value_name-addimage');
const valuePopupAddImageLink = document.querySelector('.popup__input_value_link-addimage');
const popupAddImageOpen = document.querySelector('.profile__add-button');
const popupAddImageClose = document.querySelector('.popup-addimage__close-button');

// попап раскрытия фото
const popupImages = document.querySelector('.popup-image');
const imagePopupAbout = document.querySelector('.popup-image__about');
const imagePopupImage = document.querySelector('.popup-image__img');
const popupImagesClose = document.querySelector('.popup-image__close-button');


// открыть и закрыть попап
function openPopup(popup) {
  popup.classList.add('popup_opened');
};

function closePopup(popup) {
  popup.classList.remove('popup_opened');
};


// открыть попап профиля и отправить данные через форму
function openPopupProfile() {
  valuePopupName.value = valueProfileName.textContent;
  valuePopupAbout.value = valueProfileAbout.textContent;
  openPopup(popupProfile);
};

function editProfile (evt) {
  evt.preventDefault();
  valueProfileName.textContent = valuePopupName.value;
  valueProfileAbout.textContent = valuePopupAbout.value;
  closePopup(popupProfile);
};


// открыть попап добавления фотографии
function openPopupElements() {
  formAddImage.reset();
  openPopup(popupAddImage);
};


// создать новый элемент с возможностью лайкнуть, удалить и открыть его
function createElement({ name, link }) {
  const cloneElement = elementsTemplate.content.cloneNode(true);
  const elementsItem = cloneElement.querySelector('.elements__item');
  const elementsItemImage = elementsItem.querySelector('.elements__photo');

  elementsItem.querySelector('.elements__place').textContent = name;
  elementsItemImage.src = link;
  elementsItemImage.alt = name;

  const likeElementButton = elementsItem.querySelector('.elements__like-button');
  likeElementButton.addEventListener('click', function (event) {
    event.target.classList.toggle('elements__like-button_active');
  });

  const deleteButton = elementsItem.querySelector('.elements__delete');
  deleteButton.addEventListener('click', function () {
    const listItem = deleteButton.closest('.elements__item');
    listItem.remove();
  });

  elementsItemImage.addEventListener('click', function () {
    imagePopupAbout.textContent = name;
    imagePopupImage.src = link;
    imagePopupImage.alt = name;
    openPopup(popupImages);
  });

  return elementsItem;
};


// загрузить из массива на страницу первые фото, используя шаблон createElement
initialCards.forEach(item => {
  const elementsItem = createElement(item);
  elements.append(elementsItem);
});


// добавить и удалить новый элемент
function addNewElement(evt) {
  evt.preventDefault();
  const name = valuePopupAddImageName.value;
  const link = valuePopupAddImageLink.value;
  const elementsItem = createElement({ name, link });

  elements.prepend(elementsItem);
  closePopup(popupAddImage);
};


// слушатели событий

// закрыть каждый из попапов
popupProfileClose.addEventListener('click', () => closePopup(popupProfile));
popupAddImageClose.addEventListener('click', () => closePopup(popupAddImage));
popupImagesClose.addEventListener('click', () => closePopup(popupImages));

// открыть попап с формой редактирования профиля
popupProfileOpen.addEventListener('click', openPopupProfile);
formProfile.addEventListener('submit', editProfile);

// открыть попап с формой добавления фото
popupAddImageOpen.addEventListener('click', openPopupElements);

// добавить новый элемент
formAddImage.addEventListener('submit', addNewElement);
