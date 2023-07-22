// import { Loading } from 'notiflix';
import throttle from 'lodash.throttle';
import renderTrendingMovies from './render/renderTrendingMovies';
import handleScroll from './toTopBtn';
import { toggleThemeBtn } from './refs';
import { setTheme, toggleTheme } from './theme';

if (document.title === 'Filmsbox') {
  if (!window.localStorage.getItem('mainThemeFilmsbox')) {
    window.localStorage.setItem('mainThemeFilmsbox', 'light');
    document.body.classList.add('light-theme');
  } else {
    setTheme();
  }

  renderTrendingMovies();

  document.body.addEventListener('scroll', throttle(handleScroll, 500));
  toggleThemeBtn.addEventListener('click', toggleTheme);
}
