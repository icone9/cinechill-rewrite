import { getPopularActors } from "$lib/server/models/actor";
import type { PageServerLoad } from "./$types";

export const load = (async () => {
	const actors = (await getPopularActors()).results

	return {
		actors,
	};
}) satisfies PageServerLoad;