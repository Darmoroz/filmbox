import { getMovies } from '../api';
import { gallery, loader, modal, modalFullMovie } from '../refs';
import toggle from '../toggle';
import {
  closeModalEscape,
  closeModalByClickBackdropOrBtn,
} from '../closeModal';
import createMarkupMovieFullInfo from '../markup/createMarkupMovieFullInfo';
import renderTrailer from './renderTrailer';

async function renderMovieFullInfo(e) {
  if (e.target === gallery) {
    return;
  }

  const movieId = e.target.closest('li').dataset.id;
  toggle(loader);

  try {
    const response = await getMovies(`movie/${movieId}`);
    const markup = createMarkupMovieFullInfo(response.data);
    modalFullMovie.insertAdjacentHTML('beforeend', markup);
    const playTrailerBtn = document.getElementById('trailer');
    toggle(modal);
    window.addEventListener('keydown', closeModalEscape);
    modal.addEventListener('click', closeModalByClickBackdropOrBtn);
    playTrailerBtn.addEventListener('click', renderTrailer);
  } catch (error) {
    console.log('Error', error);
    return null;
  } finally {
    toggle(loader);
  }
}

export default renderMovieFullInfo;
