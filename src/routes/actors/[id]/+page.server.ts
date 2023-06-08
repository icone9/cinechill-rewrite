
import { getActor, getActorCredits, getActorSocials } from "../../../lib/server/models/actor";
import type { PageServerLoad } from "./$types";

export const load = (async ({ params }) => {
	const actor = await getActor(+params.id)
	const socials = await getActorSocials(+params.id)
	const credits = await getActorCredits(+params.id)
	
	return { actor, socials, credits };

}) satisfies PageServerLoad;