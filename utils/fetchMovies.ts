import { Movies } from '@types';
import { basicFetch } from './basicFetch';

export const fetchMovies = async (search = '', page = 1): Promise<Movies> => {
  return await basicFetch<Movies>(`/api/movies?search=${search}&page=${page}`);
};
