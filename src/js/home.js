import throttle from 'lodash.throttle';
import renderTrendingMovies from './render/renderTrendingMovies';
import handleScroll from './toTopBtn';
import { searchMovieForm, toggleThemeBtn } from './refs';
import { setTheme, toggleTheme } from './theme';
import onSubmitSearchMovieForm from './onSubmitSearchMovieForm';
import getAllGenres from './getAllGenres';

export let genres;

if (!window.localStorage.getItem('mainThemeFilmsbox')) {
  window.localStorage.setItem('mainThemeFilmsbox', 'light');
  document.body.classList.add('light-theme');
} else {
  setTheme();
}

if (document.title === 'Filmsbox') {
  window.addEventListener('DOMContentLoaded', async () => {
    genres = await getAllGenres();
    await renderTrendingMovies();

    searchMovieForm.addEventListener('submit', onSubmitSearchMovieForm);
    document.body.addEventListener('scroll', throttle(handleScroll, 500));
    toggleThemeBtn.addEventListener('click', toggleTheme);
  });
}
