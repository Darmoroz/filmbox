import { Notify } from 'notiflix';
import { getMovies } from '../api';
import { gallery, loader, searchMovieForm } from '../refs';
import toggle from '../toggle';
import createMarkupGalleryMoviesCard from '../markup/createMarkupGalleryMoviesCard';
import {
  observerGallerySearchMovies,
  resetNextPagePagination,
} from '../infiniteScroll';

async function renderSearchMovies(query, page) {
  if (page === 1) {
    gallery.innerHTML = '';
    resetNextPagePagination();
  }
  toggle(loader);
  try {
    const response = await getMovies('search/movie', {
      query: query.value,
      page,
    });
    const results = response.data.results;
    const totalPages = response.data.total_pages;
    if (!results.length) {
      Notify.info(`${query.value} nothing found. Try again.`, {
        position: 'center-top',
        fontSize: '16px',
        info: {
          textColor: '#000',
        },
      });
      searchMovieForm.searchMovieQuery.value = '';
      return;
    }
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
      observerGallerySearchMovies.observe(lastCard);
    }
  } catch (error) {
    console.log('Error', error);
    return null;
  } finally {
    toggle(loader);
  }
}

export default renderSearchMovies;
