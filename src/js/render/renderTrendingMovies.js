import { getMovies } from '../api';
import { gallery, loader } from '../refs';
import toggle from '../toggle';
import createMarkupGalleryMoviesCard from '../markup/createMarkupGalleryMoviesCard';
import renderMovieFullInfo from './renderMovieFullInfo';
import { observerGalleryTrendMovies } from '../infiniteScroll';

async function renderTrendingMovies(page = 1) {
  toggle(loader);
  try {
    const response = await getMovies(`trending/movie/day`, { page: page });
    const markup = createMarkupGalleryMoviesCard(response.data.results);
    gallery.insertAdjacentHTML('beforeend', markup);
    gallery.addEventListener('click', renderMovieFullInfo);

    const lastCard = document.querySelector('.movie-card:last-child');
    if (lastCard) {
      observerGalleryTrendMovies.observe(lastCard);
    }
  } catch (error) {
    console.log('Error', error);
    return null;
  } finally {
    toggle(loader);
  }
}

export default renderTrendingMovies;
