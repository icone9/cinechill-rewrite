import type { Movie, MovieDetails } from "../../../types"
import { fetchTMDB } from "../../../utils/tmdb"

export  async function getPopularMovies() {
  return fetchTMDB<{ page: number,  results:  Movie[]}>("/movie/popular")
}

export  async function getTopRatedMovies() {
  return fetchTMDB<{ page: number,  results:  Movie[]}>("/movie/top_rated")
}


export async function  getMovie(id: number, query: string) {
  return fetchTMDB<MovieDetails>(`/movie/${id}`, query)
}