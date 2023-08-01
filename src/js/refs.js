// api
export const ACCESS_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZDc5OTA1N2VkMWUzY2JiZmVjOTBhNzYyZmUxOWQ5OCIsInN1YiI6IjY0OGMyNjg0NTU5ZDIyMDExYzRiMzgwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1RdcZoV5IPYOcFbCXJNJ1aLnntukhilkV6un6kG6ZoU';

//
export const BASE_POSTER_URL = 'https://image.tmdb.org/t/p/w500/';
export const DARK_THEME = 'dark';
export const LIGHT_THEME = 'light';
// localStorage
export const WATCHED = 'watchedCollectionMovies';
export const QUEUE = 'queueCollectionMovies';
export const THEME = 'mainThemeFilmsbox';

//class
export const gallery = document.querySelector('.movies-gallery');
export const closeModalBtn = document.querySelector('.modal__close');
// id
export const modal = document.getElementById('modal-backdrop');
export const loader = document.getElementById('loader');
export const modalFullMovie = document.getElementById('modal-full-movie');
export const modalTrailer = document.getElementById('modal-trailer');
export const toTopBtn = document.getElementById('to-top');
export const toggleThemeBtn = document.getElementById('toggle-theme');
export const searchMovieForm = document.getElementById('search-form');
export const featuredBtns = document.getElementById('btns-featured');

export const genres = {};
export const pagination = { nextPagePagination: 1 };
export const queryMovie = { value: '' };
export const globalHandlers = {};
export const urlPath = { value: '' };

//library page
export const watchedBtnLibrary = document.querySelector(
  'button[data-value="watched"]'
);
export const queueBtnLibrary = document.querySelector(
  'button[data-value="queue"]'
);
