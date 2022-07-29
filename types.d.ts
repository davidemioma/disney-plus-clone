export interface Data {
  backdrop_path: string;
  genres: {
    id: number;
    name: string;
  }[];
  id: number;
  original_language: string;
  original_title: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  number_of_seasons: number;
  number_of_episodes: number;
  release_date: string;
  first_air_date: string;
  runtime: number;
  title: string;
  videos: {
    results: {
      type: string;
      key: string;
    }[];
  };
  vote_average: number;
  vote_count: number;
}
