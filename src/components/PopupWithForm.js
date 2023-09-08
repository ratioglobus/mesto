import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ selectorPopup, submitCallback }) {
    super(selectorPopup);
    this._submitCallback = submitCallback;
    this._form = this._popup.querySelector('.popup__form');
    this._inputsList = this._form.querySelectorAll('.popup__input');
    this._handleSubmit = this._handleSubmit.bind(this);
    this._btnSave = this._popup.querySelector('.popup__save-button');
    this._btnSaveText = this._btnSave.textContent;
  };

  _getInputValues() {
    this._values = {};
    this._inputsList.forEach(input => {
      this._values[input.id] = input.value;
    });

    return this._values;
  }

  _handleSubmit(evt) {
    evt.preventDefault();
    this._submitCallback(this._getInputValues());
    this.close();
  };

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', this._handleSubmit);
  };

  renderSaving(status){
    if(status){
      this._btnSave.textContent = 'Сохранение...';
    } else {
      this._btnSave.textContent = this._btnSaveText;
    }
  };

  close() {
    super.close();
    this._form.reset();
  };
};
