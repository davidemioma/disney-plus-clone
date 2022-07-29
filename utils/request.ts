const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KET;
const BASE_URL = "https://api.themoviedb.org/3";

const requests = {
  fetchPopularMovies: `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US`,
  fetchPopularTvShows: `${BASE_URL}/tv/popular?api_key=${API_KEY}&language=en-US`,
  fetchTopRatedMovies: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchTopRatedTvShows: `${BASE_URL}/tv/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchMovie: (id: string) =>
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US&append_to_response=videos`,
  fetchSeries: (id: string) =>
    `${BASE_URL}/tv/${id}?api_key=${API_KEY}&language=en-US&append_to_response=videos`,
};

export default requests;
