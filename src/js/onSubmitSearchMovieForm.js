import { Notify } from 'notiflix';
import renderSearchMovies from './render/renderSearchMovies';

export let queryValue;

function onSubmitSearchMovieForm(e) {
  e.preventDefault();

  queryValue = e.target.searchMovieQuery.value.trim();
  if (!queryValue) {
    Notify.info('Please enter request');
    return;
  }
  renderSearchMovies(queryValue, 1);
}

export default onSubmitSearchMovieForm;
