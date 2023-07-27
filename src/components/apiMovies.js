import axios from 'axios';
const API_KEY = '55709ebe5652dc1e73cf51b35cdf9877';
const BASE_URL = 'https://api.themoviedb.org/3/';

axios.defaults.baseURL = BASE_URL;

export const fetchMoviesTrend = async () => {
    return await axios.get(`trending/movie/day?api_key=${API_KEY}`);
};

export const fetchMovieDetal = async (movieId) => {
    return await axios.get(`movie/${movieId}?api_key=${API_KEY}&language=en-US`);
}
export const fetchCast = async (movieId) => {
    return await axios.get(`movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`);
}

export const fetchReviews = async (movieId) => {
    return await axios.get(`movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`);
}