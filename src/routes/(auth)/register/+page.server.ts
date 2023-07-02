import { fail, redirect } from '@sveltejs/kit';
import { auth } from '$lib/server/lucia';
import type { PageServerLoad, Actions } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const { session } = await locals.auth.validateUser();
	if (session) throw redirect(302, '/');
	return {};
};

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const form = await request.formData();
		const email = form.get('email');
		const username = form.get('username');
		const password = form.get('password');

		// check for empty values
		if (typeof email !== 'string' || typeof username !== 'string' || typeof password !== 'string') {
			return fail(400);
		}

		try {
			const user = await auth.createUser({
				primaryKey: {
					providerId: 'username',
					providerUserId: username,
					password
				},
				attributes: {
					username,
					email,
					avatar: `https://avatars.dicebear.com/api/initials/${username.trim()}.svg`
				}
			});
			const session = await auth.createSession(user.userId);
			locals.auth.setSession(session);
		} catch (e) {
			console.log(e, 'err');
			// username taken
			return fail(400);
		}
	}
};
