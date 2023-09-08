export default class Popup {
  constructor(selectorPopup) {
    this._selector = selectorPopup;
    this._popup = this._getPopup();
    this._buttonPopupClose = this._popup.querySelector('.popup__close-button');
  };

  _getPopup() {
    return document.querySelector(this._selector);
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  };

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  };

  _handleEscClose = (evt) => {
    if (evt.key === 'Escape') {
      this.close();
    }
  };

  _handleButtonClose = () => {
    this.close();
  };

  _handleOverlayClose = (evt) => {
    if (evt.target === evt.currentTarget) {
      this.close();
    };
  };

  setEventListeners() {
    this._buttonPopupClose.addEventListener('click', this._handleButtonClose);
    this._popup.addEventListener('mousedown', this._handleOverlayClose);
  };
};
