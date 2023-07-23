import { queryValue } from './onSubmitSearchMovieForm';
import renderSearchMovies from './render/renderSearchMovies';
import renderTrendingMovies from './render/renderTrendingMovies';

export let nextPagePagination = 1;

export const observerGalleryTrendMovies = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        nextPagePagination += 1;
        renderTrendingMovies(nextPagePagination);
      }
    });
  }
);
export const observerGallerySearchMovies = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        nextPagePagination += 1;
        renderSearchMovies(queryValue, nextPagePagination);
      }
    });
  }
);

export function resetNextPagePagination() {
  nextPagePagination = 1;
}
