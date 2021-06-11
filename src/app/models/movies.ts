export interface Movies {
  results: (ResultsEntity)[] | null;
  page: number;
  total_results: number;
  dates: Dates;
  total_pages: number;
}

export interface ResultsEntity {
  popularity: number;
  vote_count: number;
  video: boolean;
  poster_path: string;
  id: number;
  adult: boolean;
  backdrop_path: string;
  title: string;
  vote_average: number;
  release_date: string;
}
export  interface Dates {
  maximum: string;
  minimum: string;
}

