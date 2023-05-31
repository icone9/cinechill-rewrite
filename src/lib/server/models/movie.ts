import type { Discover, Movie } from "../../../types"
import { fetchTMDB } from "../../../utils/tmdb"

export  async function getPopularMovies() {
  return fetchTMDB<{ page: number,  results:  Movie[]}>("/movie/popular")
}

export  async function getTopRatedMovies() {
  return fetchTMDB<{ page: number,  results:  Movie[]}>("/movie/top_rated")
}

export async function discoverMovieWithNetwork(network: number) {
  return fetchTMDB<{ page: number,  results:  Discover[]}>('/discover/movie', `?with_network=${network}`)
}

export async function  getMovie(id: number, query: string) {
  return fetchTMDB<Movie>(`/movie/${id}`, query)
}