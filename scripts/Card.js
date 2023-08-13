
import { openPopup } from './index.js';

// объект карточки с фотографией и описанием
class Card {
  constructor({ name, link }, templateSelector, OpenPopups) {
    this._name = name;
    this._link = link;
    this._openImagePopup = OpenPopups;
    this._template = templateSelector;
    this._newCard = this._getTemplate();
    this._cardPhoto = this._newCard.querySelector('.elements__photo');
    this._cardPlace = this._newCard.querySelector('.elements__place');
  };

  // клонируем и возвращаем общий template элемент
  _getTemplate() {
    const templateElement = document.querySelector(this._template).content.cloneNode(true);
    return templateElement;
  };

  // собираем данные одного элемента
  _setInfo() {
    this._cardPlace.textContent = this._name;
    this._cardPhoto.src = this._link;
    this._cardPhoto.alt = this._name;
  };

  // устанавливаем слушатели элемента
  _setListeners() {
    const btnDeleteCard = this._newCard.querySelector('.elements__delete');
    btnDeleteCard.addEventListener('click', () => this._handleClickDelete(btnDeleteCard));
    this._newCard.querySelector('.elements__like-button').addEventListener('click', (evt) => this._handleClickLike(evt));
    this._cardPhoto.addEventListener('click', () => this._handleOpenImage());
  };

  // добавляем лайк элементу
  _handleClickLike(e) {
    e.target.classList.toggle('elements__like-button_active');
  };

  // удаляем элемент
  _handleClickDelete(btnDeleteCard) {
    const elementsItem = btnDeleteCard.closest('.elements__item');
    elementsItem.remove();
  };

  // открываем фото элемента на весь экран
  _handleOpenImage() {
    imagePopupAbout.textContent = this._name;
    imagePopupImage.src = this._link;
    imagePopupImage.alt = this._name;

    openPopup(popupImages);
  };

  // создаем итоговый элемент (публичный метод)
  createCard() {
    this._setInfo();
    this._setListeners();

    return this._newCard;
  };
};

export default Card;
