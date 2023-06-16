import type { LayoutServerLoad } from "./$types";

export const load = (async ({ locals }) => {
	const { user } = await locals.auth.validateUser();
	if(user) return { user};

	return {};
}) satisfies LayoutServerLoad;