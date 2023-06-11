import { getSerie } from "$lib/server/models/tvShow";
import { TMDB_IMAGE_URL } from "../../../constants";
import type { PageServerLoad } from "./$types";

export const load = (async ({ params }) => {
	const serie = await getSerie(+params.id, '?append_to_response=credits,images,similar')
	return {
		serie: {
			id: serie.id,
			poster_path: `${TMDB_IMAGE_URL}/original${serie.poster_path}`,
			title: serie.name,
			overview: serie.overview,
			vote_average: serie.vote_average,
			release_date: serie.first_air_date,
			credits: {
				cast: serie.credits?.cast.slice(0, 10).map((cast) => ({
					id: cast.id,
					name: cast.name,
					character: cast.character,
					profile_path: `https://image.tmdb.org/t/p/w300${cast.profile_path}`
				})),
				crew: serie.credits?.crew.slice(0, 5).map((crew) => ({
					id: crew.id,
					name: crew.name,
					job: crew.job
				}))
			},
			similar: serie.similar?.results.slice(0, 10)
			.filter((serie) => serie.poster_path != null || serie.poster_path != undefined)
			.map((serie) => ({
				id: serie.id,
        title: serie.name,
        poster: `${TMDB_IMAGE_URL}/w200${serie.poster_path}`,
        overview: serie.overview,
        vote_average: serie.vote_average,
        original_language: serie.original_language,
        release_date: serie.first_air_date,
        type: 'serie',
			})) || [],
			images: serie.images
		}
	};
}) satisfies PageServerLoad;