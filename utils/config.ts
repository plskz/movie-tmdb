// Configuration for TMDB API
// Read more about the API here: https://developers.themoviedb.org/

export const API_URL: string = 'https://api.themoviedb.org/3/';
export const API_KEY: string | undefined = process.env.API_KEY;

export const SEARCH_BASE_URL: string = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=`;
export const POPULAR_BASE_URL: string = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US`;
// For single movie
export const movieUrl = (id?: string) => `${API_URL}movie/${id}?api_key=${API_KEY}`;
export const creditsUrl = (id?: string) => `${API_URL}movie/${id}/credits?api_key=${API_KEY}`;

export const IMAGE_BASE_URL: string = 'http://image.tmdb.org/t/p/';
// Sizes: w300, w780, w1280, original
export const BACKDROP_SIZE: string = 'w1280';
// w92, w154, w185, w342, w500, w780, original
export const POSTER_SIZE: string = 'w780';

