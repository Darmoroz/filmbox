import axios from 'axios';

const ACCESS_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZDc5OTA1N2VkMWUzY2JiZmVjOTBhNzYyZmUxOWQ5OCIsInN1YiI6IjY0OGMyNjg0NTU5ZDIyMDExYzRiMzgwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1RdcZoV5IPYOcFbCXJNJ1aLnntukhilkV6un6kG6ZoU';

const moviesAPI = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});
moviesAPI.defaults.headers.common['Authorization'] = `Bearer ${ACCESS_TOKEN}`;

export const getMovies = (pathName, params = {}) => {
  const resolve = moviesAPI
    .get(pathName, { params: { ...params } })
    .catch(error => console.log(error.message));
  return resolve;
};
