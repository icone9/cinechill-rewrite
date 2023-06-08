import { fetchTMDB } from "$utils/tmdb";
import { TMDB_IMAGE_URL } from "../../constants";
import type { TvShow } from "../../types";
import type { PageServerLoad } from "./$types";

export const load = (async () => {
	const getPopularSeries = async () => {
    const series = (await fetchTMDB<{ page: number,  results:  TvShow[]}>("/tv/popular")).results
		return [
			...series.map((serie) => ({
        id: serie.id,
        title: serie.name,
        poster: `${TMDB_IMAGE_URL}/w200${serie.poster_path}`,
        overview: serie.overview,
        vote_average: serie.vote_average,
        original_language: serie.original_language,
        release_date: serie.first_air_date,
      }))
		];
	}

	const getTopRatedSeries = async () => {
    const series = (await fetchTMDB<{ page: number,  results:  TvShow[]}>("/tv/top_rated")).results
		return [
			...series.map((serie) => ({
        id: serie.id,
        title: serie.name,
        poster: `${TMDB_IMAGE_URL}/w200${serie.poster_path}`,
        overview: serie.overview,
        vote_average: serie.vote_average,
        original_language: serie.original_language,
        release_date: serie.first_air_date,
      }))
		];
	}


	const getOnTheAirSeries = async () => {
    const series = (await fetchTMDB<{ page: number,  results:  TvShow[]}>("/tv/on_the_air")).results
		return [
			...series.map((serie) => ({
        id: serie.id,
        title: serie.name,
        poster: `${TMDB_IMAGE_URL}/w200${serie.poster_path}`,
        overview: serie.overview,
        vote_average: serie.vote_average,
        original_language: serie.original_language,
        release_date: serie.first_air_date,
      }))
		];
	}

	return {
		popularSeries: getPopularSeries(),
		topRatedSeries: getTopRatedSeries(),
		onTheAirSeries: getOnTheAirSeries()
	};

}) satisfies PageServerLoad;