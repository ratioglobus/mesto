import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(selectorPopup) {
    super(selectorPopup);
    this._imagePopupAbout = this._popup.querySelector('.popup-image__about');
    this._imagePopupImage = this._popup.querySelector('.popup-image__img');
  };

  open(elementData) {
    this._imagePopupAbout.textContent = elementData.name;
    this._imagePopupImage.src = elementData.link;
    this._imagePopupImage.alt = elementData.name;
    super.open();
  };
};
