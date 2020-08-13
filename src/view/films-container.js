import {createElement} from '../utils.js';

const createFilmsContainerTemplate = () => {
  return `<section class="films"></section>`;
};

export default class FilmsContainer {
  constructor() {
    this._element = null;
  }

  _getTemplate() {
    return createFilmsContainerTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this._getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
