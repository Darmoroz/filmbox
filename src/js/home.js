// import { Loading } from 'notiflix';
import renderTrendingMovies from './render/renderTrendingMovies';

if (document.title === 'Filmsbox') {
  window.addEventListener('DOMContentLoaded', () => {
    renderTrendingMovies();
  });
}

//* show trailer by btn click
