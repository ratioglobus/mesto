export default class Section {
  constructor({ renderer }, selector) {
    this._renderer = renderer;
    this._selector = selector;
    this._container = this._getContainer();
  };

  _getContainer() {
    return document.querySelector(this._selector);
  }

  setItem(element) {
    this._container.append(element);
  }

  setPrependItem(element) {
    this._container.prepend(element);
  }

  renderItems(array, id) {
    array.forEach((item) => {
      this._renderer(item, id);
    });
  }
};
