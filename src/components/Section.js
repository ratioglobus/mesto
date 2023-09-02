export default class Section {
  constructor({ items, renderer }, selectorContainer) {
    this._initialArray = items;
    this._renderer = renderer;
    this._container = document.querySelector(selectorContainer);
  };

  renderItems() {
    this._initialArray.forEach(item => {
      this._renderer(item);
    });
  };

  addItem(element) {
    this._container.prepend(element);
  };
};
