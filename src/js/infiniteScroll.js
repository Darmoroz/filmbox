import { pagination, queryMovie } from './refs';
import renderSearchMovies from './render/renderSearchMovies';
import renderTrendingMovies from './render/renderTrendingMovies';

export const observerGalleryTrendMovies = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        pagination.nextPagePagination += 1;
        renderTrendingMovies(pagination.nextPagePagination);
      }
    });
  }
);
export const observerGallerySearchMovies = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        pagination.nextPagePagination += 1;
        renderSearchMovies(queryMovie, pagination.nextPagePagination);
      }
    });
  }
);

export function resetNextPagePagination() {
  pagination.nextPagePagination = 1;
}
