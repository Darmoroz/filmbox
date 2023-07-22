import getAllGenres from '../getAllGenres';
import { BASE_POSTER_URL } from '../refs';

async function createMarkupGalleryMoviesCard(movies) {
  const genres = await getAllGenres();
  return movies
    .map(
      ({
        poster_path,
        title,
        genre_ids,
        vote_average,
        id,
      }) => `<li class="movie-card" data-id="${id}">
        <img 
          loading="lazy"
          src="${BASE_POSTER_URL}${poster_path}"
          alt="${title}"/>
          
        <div class="movie-card__content">
          <h3 class="movie-card__title">${title}</h3>
          <p class="movie-card__ganres">${genre_ids
            .map(el => genres[el])
            .join(' ')}
          </p>
        </div>
         <span class="movie-card__rating">${vote_average.toFixed(1)}</span>
        </li>`
    )
    .join('');
}

export default createMarkupGalleryMoviesCard;
