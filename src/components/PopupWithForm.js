import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ selectorPopup, submitCallback }) {
    super(selectorPopup);
    this._submitCallback = submitCallback;
    this._form = this._popup.querySelector('.popup__form');
    this._inputsList = this._form.querySelectorAll('.popup__input');
    this._handleSubmit = this._handleSubmit.bind(this);
  };

  _getInputValues() {
    const values = {};
    this._inputsList.forEach(input => {
      values[input.id] = input.value;
    });
    return values;
  };

  _handleSubmit(evt) {
    evt.preventDefault();
    this._submitCallback(this._getInputValues());
    this.close();
  };

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', this._handleSubmit);
  };

  close() {
    super.close();
    this._form.reset();
  };
};
