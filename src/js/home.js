import throttle from 'lodash.throttle';
import renderTrendingMovies from './render/renderTrendingMovies';
import handleScroll from './toTopBtn';
import { genres, searchMovieForm, toggleThemeBtn, featuredBtns } from './refs';
import { setThemeFirstRender, toggleTheme } from './theme';
import onSubmitSearchMovieForm from './onSubmitSearchMovieForm';
import getAllGenres from './getAllGenres';
import getFeaturedMovies from './getFeaturedMovies';

setThemeFirstRender();

window.addEventListener('DOMContentLoaded', async () => {
  try {
    Object.assign(genres, await getAllGenres());
    renderTrendingMovies();

    searchMovieForm.addEventListener('submit', onSubmitSearchMovieForm);
    document.body.addEventListener('scroll', throttle(handleScroll, 500));
    toggleThemeBtn.addEventListener('click', toggleTheme);
    featuredBtns.addEventListener('click', getFeaturedMovies);
  } catch (error) {
    console.log('Error', error);
    return null;
  } finally {
  }
});
