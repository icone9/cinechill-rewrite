import { getPopularActors } from '$lib/server/models/actor';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const actors = (await getPopularActors()).results;

	return {
		actors: actors.map((actor) => ({
			id: actor.id,
			profile_path: actor.profile_path
				? `https://image.tmdb.org/t/p/w235_and_h235_face/${actor.profile_path}`
				: `https://ui-avatars.com/api/?size=235&name=${actor.name}`,
			name: actor.name
		}))
	};
}) satisfies PageServerLoad;
