import { gallery, searchMovieForm, urlPath } from './refs';
import renderFeaturedMovies from './render/renderFeaturedMovies';
import renderTrendingMovies from './render/renderTrendingMovies';

async function getFeaturedMovies(e) {
  searchMovieForm.searchMovieQuery.value = '';
  const targetElement = e.target;
  if (targetElement === e.currentTarget) {
    return;
  }
  const allBtns = [...e.currentTarget.querySelectorAll('.btn')];
  const activeBtn = allBtns.filter(btn =>
    btn.classList.contains('btn--active')
  );
  activeBtn[0]?.removeAttribute('disabled');
  if (activeBtn[0] === targetElement) {
    return;
  }
  allBtns.map(btn => btn.classList.remove('btn--active'));
  targetElement.classList.add('btn--active');
  targetElement.setAttribute('disabled', true);
  urlPath.value = targetElement.dataset.value;

  switch (urlPath.value) {
    case 'trend_day':
      gallery.innerHTML = '';
      renderTrendingMovies();
      break;
    case 'popular':
    case 'top_rated':
    case 'upcoming':
      renderFeaturedMovies(urlPath.value);
      break;

    default:
      console.log('something wrong');
  }
}

export default getFeaturedMovies;
