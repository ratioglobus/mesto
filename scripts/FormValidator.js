
// объект валидации формы
class FormValidator {
  constructor(CONFIG, formElement) {
    this._formElement = formElement;
    this._inputSelector = CONFIG.inputSelector;
    this._errorClass = CONFIG.errorClass;
    this._inputErrorClass = CONFIG.inputErrorClass;
    this._submitButtonSelector = CONFIG.submitButtonSelector;
    this._activeButtonClass = CONFIG.activeButtonClass;
    this._inactiveButtonClass = CONFIG.inactiveButtonClass;

    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
  };

  // включает валидацию формы
  enableValidation() {
    this._formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    this._setEventListeners();
  };

  // установить все слушатели
  _setEventListeners() {
    this.toggleButtonState();

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this.toggleButtonState();
      });
    });
  };

  // показать ошибки в форме
  _showInputError(inputElement, errorMessage) {
    const errorElements = this._formElement.querySelector(`#error-${inputElement.id}`);
    inputElement.classList.add(this._inputErrorClass);
    errorElements.classList.add(this._errorClass);
    errorElements.textContent = errorMessage;
  };

  // скрыть ошибки в форме
  _hideInputError(inputElement) {
    const errorElements = this._formElement.querySelector(`#error-${inputElement.id}`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElements.classList.remove(this._errorClass);
    errorElements.textContent = ' ';
  };

  // внешний метод очистки форм
  cleanInputErrors() {
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
  };

  // проверить инпуты на валидность
  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    };
  };

  // вернуть инпут
  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  // если инпут валидный, показываем кнопку, иначе делаем ее неактивной
  toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._activeButtonSave();
    } else {
      this._inactiveButtonSave();
    }
  };

   // сделать кнопку формы активной
   _activeButtonSave() {
    this._buttonElement.classList.remove(this._activeButtonClass);
    this._buttonElement.classList.add(this._inactiveButtonClass);
  };

   // сделать кнопку формы неактивной
   _inactiveButtonSave() {
    this._buttonElement.classList.add(this._activeButtonClass);
    this._buttonElement.classList.remove(this._inactiveButtonClass);
  };
};

export default FormValidator;
