import axios from 'axios';
import { ACCESS_TOKEN } from './refs';

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
