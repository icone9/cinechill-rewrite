import type { TvShow } from "../../../types"
import { fetchTMDB } from "../../../utils/tmdb"

export async function getPopularMovies() {
  return fetchTMDB<{ page: number,  results:  TvShow[]}>("/tv/popular")
}


export async function getTopRatedMovies() {
  return fetchTMDB<{ page: number,  results:  TvShow[]}>("/tv/top_rated")
}
