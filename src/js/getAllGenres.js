import { getMovies } from './api';

const getAllGenres = async () => {
  try {
    const response = await getMovies('genre/movie/list?language=en');
    const genres = response.data.genres.reduce((result, genre) => {
      result[genre.id] = genre.name;
      return result;
    }, {});
    return genres;
  } catch (error) {
    console.log('Error', error);
    return null;
  }
};

export default getAllGenres;
