import { BASE_POSTER_URL, genres } from '../refs';

function createMarkupGalleryMoviesCard(movies) {
  return movies
    .map(
      ({
        poster_path,
        title,
        genre_ids = [],
        vote_average,
        id,
      }) => `<li class="movie-card" data-id="${id}">
        <img 
          loading="lazy"
          src="${
            poster_path
              ? BASE_POSTER_URL + poster_path
              : 'https://www.csaff.org/wp-content/uploads/csaff-no-poster.jpg'
          }"
          alt="${title}"/>
          
        <div class="movie-card__content">
          <h3 class="movie-card__title">${title}</h3>
          <p class="movie-card__ganres">${genre_ids
            .map(el => genres[el])
            .join(' ')}
          </p>
        </div>
         <span class="movie-card__rating">${vote_average?.toFixed(1)}</span>
        </li>`
    )
    .join('');
}

export default createMarkupGalleryMoviesCard;
