import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup {
  constructor(selectorPopup) {
    super(selectorPopup);
    this._form = this._popup.querySelector('.popup__form');
    this._btnSave = this._popup.querySelector('.popup__save-button');
  };

  renderSaving(status){
    if(status){
      this._btnSave.textContent = 'Сохранение...';
    } else {
      this._btnSave.textContent = 'Да';
    }
  };

  setSubmitProcess(submitProcess) {
    this._handleSubmitCallback = submitProcess;
  };

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleSubmitCallback();
    });
  };
};

