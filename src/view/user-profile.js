import AbstractView from './abstract.js';

const createUserProfileTemplate = (filmsViewed) => {
  let rank = ``;

  if (filmsViewed > 0 && filmsViewed < 11) {
    rank = `novice`;
  } else if (filmsViewed > 10 && filmsViewed < 21) {
    rank = `fan`;
  } else if (filmsViewed > 20) {
    rank = `movie buff`;
  }

  return `<section class="header__profile profile">
    <p class="profile__rating">${rank}</p>
    <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
  </section>`;
};

export default class UserProfile extends AbstractView {
  constructor(filmsViewed) {
    super();
    this._filmsViewed = filmsViewed;
  }

  _getTemplate() {
    return createUserProfileTemplate(this._filmsViewed);
  }
}
