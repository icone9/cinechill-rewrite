import type { LayoutServerLoad } from './$types';

export const load = (async ({ locals }) => {
	const session = await locals.auth.validate();
	if (session) return { user: session.user }

	return {};
}) satisfies LayoutServerLoad;
