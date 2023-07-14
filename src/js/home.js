import { Loading } from 'notiflix';
import { getMovies } from './api';
import markupMoviesGalleryCard from './markupMoviesGalleryCard';
import loader from './loader';
import modalToggle from './modalToggle';

// *use lozad
// import lozad from 'lozad';
// const observerLozad = lozad(document.querySelectorAll('img'));
// observerLozad.observe();
const gallery = document.querySelector('.movies-gallery');
const modal = document.querySelector('.modal__backdrop');
const closeModalBtn = document.querySelector('.modal__close');

// create instance of IntersectionObserver(infinite scroll)
let nextPagePagination = 2;
const observerGallery = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      getTrandingMovies(nextPagePagination++);
    }
  });
});

// render tranding movies with infinite scroll at home page
const getTrandingMovies = async (page = 1) => {
  loader();
  try {
    const response = await getMovies(`trending/movie/day`, { page: page });
    const results = response.data.results;
    console.log(results);
    const markupMoviesGallery = await markupMoviesGalleryCard(results);

    gallery.insertAdjacentHTML('beforeend', markupMoviesGallery);
    gallery.addEventListener('click', showFullMovieInfo);

    const lastCard = document.querySelector('.movie-card:last-child');
    if (lastCard) {
    }
    observerGallery.observe(lastCard);

    loader();
    return;
  } catch (error) {
    console.log('Error', error);
    return null;
  }
};

window.addEventListener('DOMContentLoaded', () => {
  getTrandingMovies();
});

// open and close Modal
window.addEventListener('keydown', e => {
  if (e.code !== 'Escape') {
    return;
  }
  modalToggle();
});
modal.addEventListener('click', e => {
  if (e.target === modal || e.target === closeModalBtn) {
    modalToggle();
  }
});

async function showFullMovieInfo(e) {
  if (e.target === gallery) {
    return;
  }
  const movieId = e.target.closest('li').dataset.id;
  const response = await getMovies(`movie/${movieId}`);
  console.log(response.data);
  // loader();
  modalToggle();
}
