import { fetchTMDB } from "$utils/tmdb";
import { TMDB_IMAGE_URL } from "../../constants";
import type { Movie } from "../../types";
import type { PageServerLoad } from "./$types";

export const load = (async () => {
	const getPopularMovies = async () => {
    const movies = (await fetchTMDB<{ page: number,  results:  Movie[]}>("/movie/popular")).results
		return [
			...movies.map((movie) => ({
        id: movie.id,
        title: movie.original_title,
        poster: `${TMDB_IMAGE_URL}/w200${movie.poster_path}`,
        overview: movie.overview,
        vote_average: movie.vote_average,
        original_language: movie.original_language,
        release_date: movie.release_date,
      }))
		];
	}

	const getNowPlayingMovies = async () => {
    const movies = (await fetchTMDB<{ page: number,  results:  Movie[]}>("/movie/now_playing")).results
		return [
			...movies.map((movie) => ({
        id: movie.id,
        title: movie.original_title,
        poster: `${TMDB_IMAGE_URL}/w200${movie.poster_path}`,
        overview: movie.overview,
        vote_average: movie.vote_average,
        original_language: movie.original_language,
        release_date: movie.release_date,
      }))
		];
	}


	const getUpcomingMovies = async () => {
    const movies = (await fetchTMDB<{ page: number,  results:  Movie[]}>("/movie/upcoming")).results
		return [
			...movies.map((movie) => ({
        id: movie.id,
        title: movie.original_title,
        poster: `${TMDB_IMAGE_URL}/w200${movie.poster_path}`,
        overview: movie.overview,
        vote_average: movie.vote_average,
        original_language: movie.original_language,
        release_date: movie.release_date,
      }))
		];
	}
            
	return {
    nowPlayingMovies: getNowPlayingMovies(),
    popularMovies: getPopularMovies(),
    upcomingMovies: getUpcomingMovies()
	};
}) satisfies PageServerLoad;