
// провалидировать все инпуты
function enableValidation(CONFIG) {
  const formList = Array.from(document.querySelectorAll(CONFIG.formSelector));

  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement, CONFIG);
  });
};

enableValidation(CONFIG);


// установить все слушатели
function setEventListeners(formElement, CONFIG) {
  const inputAll = Array.from(formElement.querySelectorAll(CONFIG.inputSelector));
  const buttonElement = document.querySelector(CONFIG.submitButtonSelector);

  toggleButtonState(inputAll, buttonElement, CONFIG);
  inputAll.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, CONFIG);
      toggleButtonState(inputAll, buttonElement, CONFIG);
    });
  });
};


// показать ошибки в форме
function showInputError(formElement, inputElement, errorMessage, CONFIG) {
  const errorElements = formElement.querySelector(`#error-${inputElement.id}`);

  inputElement.classList.add(CONFIG.inputErrorClass);
  errorElements.classList.add(CONFIG.errorClass);
  errorElements.textContent = errorMessage;
};


// скрыть ошибки в форме
function hideInputError(formElement, inputElement, CONFIG) {
  const errorElements = formElement.querySelector(`#error-${inputElement.id}`);

  inputElement.classList.remove(CONFIG.inputErrorClass);
  errorElements.classList.remove(CONFIG.errorClass);
  errorElements.textContent = ' ';
};


// проверить инпуты на валидность
function checkInputValidity(formElement, inputElement, CONFIG) {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, CONFIG);
  } else {
    hideInputError(formElement, inputElement, CONFIG);
  };
};


// вернуть инпут
function hasInvalidInput(inputAll) {
  return inputAll.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};


// если инпут валидный, показываем кнопку, иначе делаем ее неактивной
function toggleButtonState(inputAll, buttonElement, CONFIG) {
  if (hasInvalidInput(inputAll)) {
    activeSaveButton(buttonElement, CONFIG);
  } else {
    inactiveButtonSave(buttonElement, CONFIG);
  }
};


// сделать кнопку формы неактивной
function inactiveButtonSave(buttonElement, CONFIG) {
  buttonElement.classList.add(CONFIG.activeButtonClass);
  buttonElement.classList.remove(CONFIG.inactiveButtonClass);
};


// сделать кнопку формы активной
function activeSaveButton(buttonElement, CONFIG) {
  buttonElement.classList.remove(CONFIG.activeButtonClass);
  buttonElement.classList.add(CONFIG.inactiveButtonClass);
};
