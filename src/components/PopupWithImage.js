import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(selectorPopup) {
    super(selectorPopup);
    this._imagePopupAbout = this._popup.querySelector('.popup-image__about');
    this._imagePopupImage = this._popup.querySelector('.popup-image__img');
  };

  open(element) {
    this._imagePopupAbout.textContent = element.name;
    this._imagePopupImage.src = element.link;
    this._imagePopupImage.alt = element.name;
    super.open();
  };
};
