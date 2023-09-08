export default class Card {
  constructor({ data, OpenPopup, DeleteCard, LikeCard }, templateSelector, userId) {
    this._name = data.name;
    this._link = data.link;
    this._idOwner = data.owner._id;
    this._idCard = data._id;
    this._likes = data.likes;
    this._template = templateSelector;
    this._openImagePopup = OpenPopup;
    this._handleClickDelete = DeleteCard;
    this._handleClickLike = LikeCard;
    this._userId = userId;
    this._newCard = this._getTemplate();

    this._cardItem = this._newCard.querySelector('.elements__item');
    this._cardPhoto = this._newCard.querySelector('.elements__photo');
    this._btnDeleteCard = this._newCard.querySelector('.elements__delete');
    this._btnLikeCard = this._newCard.querySelector('.elements__like-button');
    this._countLikes = this._newCard.querySelector('.elements__likes-count');
  };

  _getTemplate() {
    return document.querySelector(this._template).content.cloneNode(true);
  };

  _setInfo() {
    this._cardItem.querySelector('.elements__place').textContent = this._name;
    this._cardPhoto.src = this._link;
    this._cardPhoto.alt = this._name;

    if (this._userId !== this._idOwner) {
      this._btnDeleteCard.remove('elements__delete');
    };
  };

  removeCard() {
    this._cardItem.remove();
    this._cardItem = null;
  };

  _checkLike() {
    return this._likes.some(like => {
      return like._id === this._userId;
    });
  };

  setLikes(array) {
    this._countLikes.textContent = array.length;
    this._likes = array;
    if (this._checkLike()) {
      this._btnLikeCard.classList.add('elements__like-button_active');
    } else {
      this._btnLikeCard.classList.remove('elements__like-button_active');
    };
  };

  _setListeners() {
    this._btnDeleteCard.addEventListener('click', () => this._handleClickDelete(this._idCard, this));
    this._btnLikeCard.addEventListener('click', (evt) => this._handleClickLike(this._idCard, this._checkLike(), this));
    this._cardPhoto.addEventListener('click', () => this._openImagePopup(this._name, this._link));
  };

  createCard() {
    this._setInfo();
    this.setLikes(this._likes);
    this._setListeners();

    return this._newCard;
  };
};
