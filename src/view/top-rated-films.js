import AbstractView from './abstract.js';

const createTopRatedFilmsTemplate = () => {
  return `<section class="films-list--extra">
      <h2 class="films-list__title">Top rated</h2>
      <div class="films-list__container"></div>
    </section>`;
};

export default class TopRatedFilms extends AbstractView {
  _getTemplate() {
    return createTopRatedFilmsTemplate();
  }

  getFilmsContainer() {
    return this.getElement().querySelector(`.films-list__container`);
  }
}
