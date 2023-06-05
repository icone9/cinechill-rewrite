import type { TvShow, TvShowDetail } from "../../../types"
import { fetchTMDB } from "../../../utils/tmdb"

export async function getPopularMovies() {
  return fetchTMDB<{ page: number,  results:  TvShow[]}>("/tv/popular")
}


export async function getTopRatedMovies() {
  return fetchTMDB<{ page: number,  results:  TvShow[]}>("/tv/top_rated")
}

export async function  getSerie(id: number, query: string) {
  return fetchTMDB<TvShowDetail>(`/tv/${id}`, query)
}