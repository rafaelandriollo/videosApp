/* eslint-disable @typescript-eslint/naming-convention */
export interface ISerieApi {
  poster_path?: string;
  first_air_date?: string;
  overview?: string;
  genre_ids?: number[];
  id?: number;
  original_name?: string;
  original_language?: string;
  origin_country?: string[];
  name?: string;
  backdrop_path?: string;
  popularity?: number;
  vote_count?: number;
  vote_average?: number;
}

export interface IListaSeries {
  page: number;
  results: ISerieApi[];
  total_results: number;
  total_pages: number;
}
