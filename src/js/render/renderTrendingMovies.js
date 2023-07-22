import { getMovies } from '../api';
import { gallery, loader } from '../refs';
import toggle from '../toggle';
import createMarkupGalleryMoviesCard from '../markup/createMarkupGalleryMoviesCard';
import renderMovieFullInfo from './renderMovieFullInfo';

// *create instance of IntersectionObserver(infinite scroll)
let nextPagePagination = 2;
const observerGallery = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      renderTrendingMovies(nextPagePagination++);
    }
  });
});

// *render trending movies with infinite scroll at home page
const renderTrendingMovies = async (page = 1) => {
  toggle(loader);

  try {
    const response = await getMovies(`trending/movie/day`, { page: page });
    const markup = await createMarkupGalleryMoviesCard(response.data.results);
    gallery.insertAdjacentHTML('beforeend', markup);
    gallery.addEventListener('click', renderMovieFullInfo);

    const lastCard = document.querySelector('.movie-card:last-child');
    if (lastCard) {
      observerGallery.observe(lastCard);
    }
  } catch (error) {
    console.log('Error', error);
    return null;
  } finally {
    toggle(loader);
  }
};

export default renderTrendingMovies;
