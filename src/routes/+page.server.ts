import { discoverMovieWithNetwork } from "$lib/server/models/movie";
import { TMDB_IMAGE_URL } from "../constants";
import type { Movie } from "../types";
import { randomIntFromInterval } from "../utils/random-number-in-a-interval";
import { fetchTMDB } from "../utils/tmdb";
import type { PageServerLoad } from "./$types";

export const load = (async () => {

  const banner = (await discoverMovieWithNetwork(213)).results[randomIntFromInterval(1, 19)]
  const trendingMovies = (await fetchTMDB<{ page: number,  results:  Movie[]}>("/movie/popular")).results

	return {
    banner: {
      title: banner.title,
      overview: banner.overview,
      backdrop_path: 
        `${TMDB_IMAGE_URL}/original${banner.backdrop_path}`
    },
    trending: [
      ...trendingMovies.map((movie) => ({
        id: movie.id,
        title: movie.original_title,
        poster: `${TMDB_IMAGE_URL}/w200${movie.poster_path}`
      }))
    ],
	};
}) satisfies PageServerLoad;