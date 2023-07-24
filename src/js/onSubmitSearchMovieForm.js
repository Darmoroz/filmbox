import { Notify } from 'notiflix';
import renderSearchMovies from './render/renderSearchMovies';
import { queryMovie } from './refs';

function onSubmitSearchMovieForm(e) {
  e.preventDefault();

  queryMovie.value = e.target.searchMovieQuery.value.trim();
  if (!queryMovie.value) {
    Notify.info('Please enter request');
    return;
  }
  renderSearchMovies(queryMovie, 1);
}

export default onSubmitSearchMovieForm;
