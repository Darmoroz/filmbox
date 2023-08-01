import { Notify } from 'notiflix';
import { getMovies } from '../api';
import createMarkupGalleryMoviesCard from '../markup/createMarkupGalleryMoviesCard';
import { gallery, loader } from '../refs';
import toggle from '../toggle';
import {
  observerGalleryFeaturedMovies,
  resetNextPagePagination,
} from '../infiniteScroll';

async function renderFeaturedMovies(urlPath, page = 1) {
  if (page === 1) {
    gallery.innerHTML = '';
    resetNextPagePagination();
  }
  toggle(loader);
  try {
    const response = await getMovies(`movie/${urlPath}`, { page: page });
    const results = response.data.results;
    const totalPages = response.data.total_pages;
    if (page > totalPages) {
      Notify.info(`It was last page`, {
        position: 'center-top',
        fontSize: '16px',
        info: {
          textColor: '#000',
        },
      });
      return;
    }
    const markup = createMarkupGalleryMoviesCard(results);
    gallery.insertAdjacentHTML('beforeend', markup);
    const lastCard = document.querySelector('.movie-card:last-child');
    if (lastCard) {
      observerGalleryFeaturedMovies.observe(lastCard);
    }
  } catch (error) {
    console.log('Error', error);
    return null;
  } finally {
    toggle(loader);
  }
}

export default renderFeaturedMovies;
