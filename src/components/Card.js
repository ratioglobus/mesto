export default class Card {
  constructor({ name, link }, templateSelector, openPopup) {
    this._name = name;
    this._link = link;
    this._openImagePopup = openPopup;
    this._templateSelector = templateSelector;
    this._newCard = this._getTemplate();

    this._cardItem = this._newCard.querySelector('.elements__item');
    this._cardPhoto = this._newCard.querySelector('.elements__photo');
    this._btnDeleteCard = this._newCard.querySelector('.elements__delete');
    this._btnLikeCard = this._newCard.querySelector('.elements__like-button');
  };

  _getTemplate() {
    return document.querySelector(this._templateSelector).content.cloneNode(true);
  };

  _setInfo() {
    this._cardItem.querySelector('.elements__place').textContent = this._name;
    this._cardPhoto.src = this._link;
    this._cardPhoto.alt = this._name;
  };

  _setListeners() {
    this._btnDeleteCard.addEventListener('click', () => this._handleClickDelete());
    this._btnLikeCard.addEventListener('click', (evt) => this._handleClickLike(evt));
    this._cardPhoto.addEventListener('click', () => this._openImagePopup(this._name, this._link));
  };

  _handleClickLike(evt) {
    evt.target.classList.toggle('elements__like-button_active');
  };

  _handleClickDelete() {
    this._cardItem.remove();
  };

  createCard() {
    this._setInfo();
    this._setListeners();

    return this._newCard;
  };
};
