import { getMovie } from "$lib/server/models/movie";
import { TMDB_IMAGE_URL } from "../../../constants";
import type { PageServerLoad } from "./$types";

export const load = (async ({ params }) => {
	// "movie" => HttpCall::Tmdbget("/movie/{$id}", "?append_to_response=credits,images,similar"),
	// "videos" => HttpCall::Tmdbget("/movie/{$id}/videos")
	// 238,447277
	const movie = await getMovie(+params.id, '?append_to_response=credits,images,similar')
	// console.log(movie.credits?.cast, 'cast')
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
			images: movie.images
		}
	};
}) satisfies PageServerLoad;