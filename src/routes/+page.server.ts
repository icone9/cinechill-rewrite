import { discoverMovieWithNetwork } from "$lib/server/models/movie";
import { TMDB_IMAGE_URL } from "../constants";
import type { Movie } from "../types";
import { randomIntFromInterval } from "../utils/random-number-in-a-interval";
import { fetchTMDB } from "../utils/tmdb";
import type { PageServerLoad } from "./$types";

export const load = (async () => {
  const getBanner = async () => {
    const banner = (await discoverMovieWithNetwork(213)).results[randomIntFromInterval(1, 19)]
    return {
      title: banner.title,
      overview: banner.overview,
      backdrop_path: 
        `${TMDB_IMAGE_URL}/original${banner.backdrop_path}`
    }
  }

  const getTrendingMedia = async () => {
    const trendingMovies = (await fetchTMDB<{ page: number,  results:  Movie[]}>("/movie/popular")).results

    return [
      ...trendingMovies.map((movie) => ({
        id: movie.id,
        title: movie.original_title,
        poster: `${TMDB_IMAGE_URL}/w200${movie.poster_path}`,
        overview: movie.overview,
        vote_average: movie.vote_average,
        original_language: movie.original_language,
        release_date: movie.release_date
      }))
    ]
  }
  
	return {
    banner: getBanner(),
    trending: getTrendingMedia(),
	};
}) satisfies PageServerLoad;