
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


// создать новый элемент с возможностью лайкнуть его и открыть
function createElement({ name, link }) {
  const cloneElement = elementsTemplate.content.cloneNode(true);
  const elementsItem = cloneElement.querySelector('.elements__item');

  elementsItem.querySelector('.elements__place').textContent = name;
  elementsItem.querySelector('.elements__photo').src = link;
  elementsItem.querySelector('.elements__photo').alt = name;

  const likeElementButton = elementsItem.querySelector('.elements__like-button');
  likeElementButton.addEventListener('click', function (event) {
    event.target.classList.toggle('elements__like-button_active');
  });

  const openImagePopupElement = elementsItem.querySelector('.elements__photo');
  openImagePopupElement.addEventListener('click', function () {
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

  const deleteButtons = Array.from(document.querySelectorAll('.elements__delete'));
  deleteButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const listItem = button.closest('.elements__item');
      listItem.remove();
    });
  });

  closePopup(popupAddImage);
};


// удалить уже добавленный элемент
const deleteButtons = Array.from(document.querySelectorAll('.elements__delete'));
  deleteButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const listItem = button.closest('.elements__item');
      listItem.remove();
  });
});


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
