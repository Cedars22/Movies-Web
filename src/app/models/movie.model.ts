export interface Movie {
    id: number;
    copyright: string;
    popularity: number;
    voteCount: number;
    video: boolean;
    poster_path: string;
    adult: boolean;
    backdrop_path: string;
    original_language: string;
    original_title: string;
    genreIds: number[];
    title: string;
    voteAverage: number;
    overview: string; 
    release_date: string;
  }