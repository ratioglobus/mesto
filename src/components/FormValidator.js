export default class FormValidator {
  constructor(config, formElement) {
    this._formElement = formElement;
    this._inputSelector = config.inputSelector;
    this._errorClass = config.errorClass;
    this._inputErrorClass = config.inputErrorClass;
    this._submitButtonSelector = config.submitButtonSelector;
    this._activeButtonClass = config.activeButtonClass;
    this._inactiveButtonClass = config.inactiveButtonClass;

    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
  };

  enableValidation() {
    this._formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    this._setEventListeners();
  };

  _setEventListeners() {
    this.toggleButtonState();

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this.toggleButtonState();
      });
    });
  };

  _showInputError(inputElement, errorMessage) {
    const errorElements = this._formElement.querySelector(`#error-${inputElement.id}`);
    inputElement.classList.add(this._inputErrorClass);
    errorElements.classList.add(this._errorClass);
    errorElements.textContent = errorMessage;
  };

  _hideInputError(inputElement) {
    const errorElements = this._formElement.querySelector(`#error-${inputElement.id}`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElements.classList.remove(this._errorClass);
    errorElements.textContent = ' ';
  };

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    };
  };

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  _activeButtonSave() {
    this._buttonElement.classList.remove(this._activeButtonClass);
    this._buttonElement.classList.add(this._inactiveButtonClass);
  };

   _inactiveButtonSave() {
    this._buttonElement.classList.add(this._activeButtonClass);
    this._buttonElement.classList.remove(this._inactiveButtonClass);
  };

  cleanInputErrors() {
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
  };

  toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._activeButtonSave();
    } else {
      this._inactiveButtonSave();
    }
  };
};
