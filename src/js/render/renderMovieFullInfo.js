import { getMovies } from '../api';
import {
  QUEUE,
  WATCHED,
  gallery,
  globalHandlers,
  loader,
  modal,
  modalFullMovie,
} from '../refs';
import toggle from '../toggle';
import {
  closeModalEscape,
  closeModalByClickBackdropOrBtn,
} from '../closeModal';
import createMarkupMovieFullInfo from '../markup/createMarkupMovieFullInfo';
import renderTrailer from './renderTrailer';
import addToCollection from '../addToCollection';
import { getLocalStorage } from '../localStorage';

async function renderMovieFullInfo(e) {
  if (e.target === gallery) {
    return;
  }

  const movieId = +e.target.closest('li').dataset.id;
  const watchedBtn = hasDisabledBtn(getLocalStorage(WATCHED), movieId);
  const queueBtn = hasDisabledBtn(getLocalStorage(QUEUE), movieId);

  toggle(loader);
  try {
    const response = await getMovies(`movie/${movieId}`);
    const movie = response.data;

    const markup = createMarkupMovieFullInfo(movie, watchedBtn, queueBtn);
    modalFullMovie.insertAdjacentHTML('beforeend', markup);

    const playTrailerBtn = document.getElementById('trailer');
    const btnCollectionBlock = document.getElementById('btn-collection');
    globalHandlers.handleClickAddToCollection = function (e) {
      addToCollection(movie, e);
      console.log('abra');
    };

    toggle(modal);

    window.addEventListener('keydown', closeModalEscape);
    modal.addEventListener('click', closeModalByClickBackdropOrBtn);
    playTrailerBtn.addEventListener('click', renderTrailer);
    btnCollectionBlock.addEventListener(
      'click',
      globalHandlers.handleClickAddToCollection
    );
  } catch (error) {
    console.log('Error', error);
    return null;
  } finally {
    toggle(loader);
  }
}

function hasDisabledBtn(movies, movieId) {
  return movies.map(movie => movie.id).includes(movieId)
    ? 'disabled="true"'
    : '';
}

export default renderMovieFullInfo;
