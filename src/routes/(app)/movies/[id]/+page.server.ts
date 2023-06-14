import { getMovie } from "$lib/server/models/movie";
import { TMDB_IMAGE_URL } from "$constants/index";
import type { PageServerLoad } from "./$types";

export const load = (async ({ params }) => {
	// "movie" => HttpCall::Tmdbget("/movie/{$id}", "?append_to_response=credits,images,similar"),
	// "videos" => HttpCall::Tmdbget("/movie/{$id}/videos")
	// 238,447277
	const movie = await getMovie(+params.id, '?append_to_response=credits,images,similar')
	// console.log(movie.similar?.results, 'cast')
	return { 
		movie: {
			id: movie.id,
			poster_path: `${TMDB_IMAGE_URL}/original${movie.poster_path}`,
			title: movie.title,
			overview: movie.overview,
			vote_average: movie.vote_average,
			release_date: movie.release_date,
			credits: {
				cast: movie.credits?.cast.slice(0, 10).map((cast) => ({
					id: cast.id,
					name: cast.name,
					character: cast.character,
					profile_path: `https://image.tmdb.org/t/p/w300${cast.profile_path}`
				})),
				crew: movie.credits?.crew.slice(0, 5).map((crew) => ({
					id: crew.id,
					name: crew.name,
					job: crew.job
				}))
			},
			similar: movie.similar?.results.slice(0, 10)
			.filter((movie) => movie.poster_path != null || movie.poster_path != undefined)
			.map((movie) => ({
				id: movie.id,
        title: movie.original_title,
        poster: `${TMDB_IMAGE_URL}/w200${movie.poster_path}`,
        overview: movie.overview,
        vote_average: movie.vote_average,
        original_language: movie.original_language,
        release_date: movie.release_date,
        type: 'movie',
			})) || [],
			images: movie.images
		}
	};
}) satisfies PageServerLoad;