import throttle from 'lodash.throttle';
import {
  QUEUE,
  WATCHED,
  gallery,
  genres,
  globalHandlers,
  toggleThemeBtn,
  watchedBtnLibrary,
  queueBtnLibrary,
  modal,
  modalFullMovie,
} from './refs';
import { setThemeFirstRender, toggleTheme } from './theme';
import handleScroll from './toTopBtn';
import { getLocalStorage, setLocalStorage } from './localStorage';
import createMarkupGalleryMoviesCard from './markup/createMarkupGalleryMoviesCard';
import renderMovieFullInfo from './render/renderMovieFullInfo';
import getAllGenres from './getAllGenres';
import toggle from './toggle';
import removeListener from './removeListener';
import { Notify } from 'notiflix';

setThemeFirstRender();

window.addEventListener('DOMContentLoaded', async () => {
  try {
    Object.assign(genres, await getAllGenres());

    renderLibraryMovies(watchedBtnLibrary);
    watchedBtnLibrary.addEventListener('click', getLibraryMovies);
    queueBtnLibrary.addEventListener('click', getLibraryMovies);
    window.addEventListener('scroll', throttle(handleScroll, 500));
    toggleThemeBtn.addEventListener('click', toggleTheme);
  } catch (error) {
    console.log('Error', error);
    return null;
  } finally {
  }
});

function getLibraryMovies(e) {
  const currentBtn = e.target;
  renderLibraryMovies(currentBtn);
}

function renderLibraryMovies(btnType) {
  btnType.classList.add('btn--active');
  btnType.setAttribute('disabled', true);
  let movies;
  const neighborBtn = [...btnType.parentElement.children].find(
    btn => btn !== btnType
  );
  neighborBtn.classList.remove('btn--active');
  neighborBtn.removeAttribute('disabled');

  if (btnType.dataset.value === 'watched') {
    movies = getLocalStorage(WATCHED);
  }
  if (btnType.dataset.value === 'queue') {
    movies = getLocalStorage(QUEUE);
  }
  movies.forEach(element => {
    element['genre_ids'] = element.genres.map(ganre => ganre.id);
  });
  if (!movies.length) {
    console.log('abra');
    gallery.innerHTML = '<p class="empty">empty list</p>';
    console.dir(gallery);
    return;
  }
  const markup = createMarkupGalleryMoviesCard(movies);
  gallery.innerHTML = '';
  gallery.insertAdjacentHTML('beforeend', markup);
  gallery.addEventListener('click', renderMovieFullInfoLibrary);
}

async function renderMovieFullInfoLibrary(e) {
  await renderMovieFullInfo(e);
  const currentType = document.querySelector('.btn--active').dataset.value;
  document.querySelectorAll('.btn--modify')[1].style.display = 'none';
  const currentBtn = document.querySelectorAll('.btn--modify')[0];
  currentBtn.removeAttribute('disabled');
  if (currentType === 'watched') {
    currentBtn.innerHTML = 'Remove from WATCHED';
  } else {
    currentBtn.innerHTML = 'Remove from QUEUE';
  }

  const btnCollectionBlock = document.getElementById('btn-collection');
  btnCollectionBlock.removeEventListener(
    'click',
    globalHandlers.handleClickAddToCollection
  );
  currentBtn.addEventListener('click', removeMoviesFromLibrary);
}

function removeMoviesFromLibrary(e) {
  const movieId = +e.target.dataset.movieId;
  const currentType = document.querySelector('.btn--active');
  e.target.setAttribute('disabled', true);
  let newMovies;
  Notify.success('Successful');
  if (currentType.dataset.value === 'watched') {
    newMovies = getLocalStorage(WATCHED).filter(movie => movie.id !== movieId);
    setLocalStorage(WATCHED, newMovies);
    setTimeout(() => {
      toggle(modal);
      removeListener();
      modalFullMovie.innerHTML = '';
    }, 1000);
    renderLibraryMovies(currentType);
  } else {
    newMovies = getLocalStorage(QUEUE).filter(movie => movie.id !== movieId);
    setLocalStorage(QUEUE, newMovies);
    setTimeout(() => {
      toggle(modal);
      removeListener();
      modalFullMovie.innerHTML = '';
    }, 1000);
    renderLibraryMovies(currentType);
  }
}
