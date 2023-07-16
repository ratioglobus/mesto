
// открыть и закрыть попап редактирования профиля
function openClosedPopupProfile() {
  popupProfile.classList.toggle('popup_opened');
  valuePopupName.value = valueProfileName.textContent;
  valuePopupAbout.value = valueProfileAbout.textContent;
};


// отправить данные в форму редактирования профиля
function editProfile (evt) {
    evt.preventDefault();
    valueProfileName.textContent = valuePopupName.value;
    valueProfileAbout.textContent = valuePopupAbout.value;
    openClosedPopupProfile();
};


// открыть и закрыть попап добавления новых фотографий
function openClosedPopupAddImage() {
  popupAddImage.classList.toggle('popup_opened');
  valuePopupAddImageName.value = '';
  valuePopupAddImageLink.value = '';
};


// загрузить первые фотографии на страницу из массива
initialCards.forEach(function ({ name, link }) {
  const elementsList = document.querySelector('.elements');
  const elementsTemplate = document.querySelector('#template-elements').content;
  const elementsItem = elementsTemplate.cloneNode(true);

  elementsItem.querySelector('.elements__photo').src = link;
  elementsItem.querySelector('.elements__place').textContent = name;

  elementsList.append(elementsItem);
});


// добавить новую фотографию
function createNewImage (evt) {
  evt.preventDefault();
  const elementsTemplate = document.querySelector('#template-elements').content;
  const elementsList = document.querySelector('.elements');
  const elementsItem = elementsTemplate.cloneNode(true);

  elementsItem.querySelector('.elements__place').textContent = valuePopupAddImageName.value;
  elementsItem.querySelector('.elements__photo').src = valuePopupAddImageLink.value;

  elementsList.prepend(elementsItem);
  popupAddImage.classList.toggle('popup_opened');

  // поставить лайк новым фотографиям
  const likeButtons = document.querySelector('.elements__like-button');
  likeButtons.addEventListener('click', function (evt) {
    const eventTarget = evt.target;
    eventTarget.classList.toggle('elements__like-button_active');
  });

  // удалить новую фотографию
  const deleteButton = document.querySelector('.elements__delete');
  deleteButton.addEventListener('click', function () {
    const listItem = deleteButton.closest('.elements__item');
    listItem.remove();
  });
};


// поставить лайк всем остальным фотографиям
const likeButtons = Array.from(document.querySelectorAll('.elements__like-button'));

likeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle('elements__like-button_active');
  });
});


// удалить загруженную фотографию из общего списка
const deleteButtons = Array.from(document.querySelectorAll('.elements__delete'));

deleteButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const listItem = button.closest('.elements__item');
    listItem.remove();
  });
});


// слушатели событий
popupProfileOpen.addEventListener('click', openClosedPopupProfile);
popupProfileClose.addEventListener('click', openClosedPopupProfile);
formProfile.addEventListener('submit', editProfile);

popupAddImageOpen.addEventListener('click', openClosedPopupAddImage);
popupAddImageClose.addEventListener('click', openClosedPopupAddImage);
formAddImage.addEventListener('submit', createNewImage);



// открыть попап с фотографией




// openPopupImage.addEventListener('click', openClosedPopupImage);
// closePopupImageBtn.addEventListener('click', openClosedPopupImage);
