import { Movie } from "./movie.model";

export interface MovieApiResponse {
    dates: {
      maximum: string;
      minimum: string;
    };
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
  }
  