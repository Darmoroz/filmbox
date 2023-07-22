import playBtnImg from '../../images/play-btn.webp';
import { BASE_POSTER_URL } from '../refs';

function createMarkupMovieFullInfo(movie) {
  const {
    poster_path,
    title,
    vote_average,
    vote_count,
    popularity,
    genres,
    id,
    overview,
  } = movie;
  return `<div class="movie"><img src="${BASE_POSTER_URL}${poster_path}" alt="${title}">
  <div class="movie__content">
    <p class="movie__title">${title}</p>
    <div class="movie__info">
        <p class="movie__info-block"><span>Vote / Votes</span><span class="movie__info-block--dark"><span class="movie__info-block--orange">${vote_average.toFixed(
          1
        )}</span> / ${vote_count}</span></p>
        <p class="movie__info-block"><span>Popularity</span><span class="movie__info-block--dark"">${popularity}</span></p>
        <p class="movie__info-block"><span>Original Title</span><span class="movie__info-block--dark">${title}</span></p>
        <p class="movie__info-block"><span>Genre</span><span class="movie__info-block--dark">${genres
          .map(genre => genre.name)
          .join(' ')}</span></p>
    </div>
		<div class="movie__trailer">Trailer<button class="movie__btn-play" id="trailer" type="button" data-movie-id="${id}"><img src="${playBtnImg}" alt="trailer"></button></div>
    <div class="movie__description">
        <p class="movie__description--title">About</p>
        <p class="movie__description--about">${overview}</p>
    </div>
    <div class="btn__block">
      <button class="btn btn--modify" type="button" data-value="watched">ADD TO WATCHED</button>
      <button class="btn btn--modify" type="button" data-value="queue">ADD TO QUEUE</button>
    </div>
  </div></div>`;
}

export default createMarkupMovieFullInfo;
