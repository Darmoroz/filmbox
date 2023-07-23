import { getMovies } from '../api';
import { loader, modalTrailer } from '../refs';
import toggle from '../toggle';
import createMarkupTrailer from '../markup/createMarkupTrailer';
import { Notify } from 'notiflix';

async function renderTrailer(e) {
  const movieId = e.target.closest('button').dataset.movieId;
  toggle(loader);
  try {
    const response = await getMovies(`movie/${movieId}/videos`);
    const results = response.data.results;
    if (!results.length) {
      Notify.info(`Sorry, not found trailer`);
      return;
    }
    const urlPath = `https://www.youtube.com/embed/${
      results.find(el => el.type === 'Trailer')?.key
    }`;
    const markup = createMarkupTrailer(urlPath);
    modalTrailer.insertAdjacentHTML('beforeend', markup);
    modalTrailer.style.zIndex = 3;
  } catch (error) {
    console.log('Error', error);
    return null;
  } finally {
    toggle(loader);
  }
}

export default renderTrailer;
