import { fail, redirect } from '@sveltejs/kit';
import { auth } from '$lib/server/lucia';
import type { PageServerLoad, Actions } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.auth.validate();
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
		if (typeof email !== 'string') {
			return fail(400, {
				message: "Invalid email"
			});
		}

		if (
			typeof username !== "string" ||
			username.length < 4 ||
			username.length > 31
		) {
			return fail(400, {
				message: "Invalid username"
			});
		}
		if (
			typeof password !== "string" ||
			password.length < 6 ||
			password.length > 255
		) {
			return fail(400, {
				message: "Invalid password"
			});
		}

		try {
			const user = await auth.createUser({
				key: {
					providerId: 'username',
					providerUserId: username.toLocaleLowerCase(),
					password
				},
				attributes: {
					username,
					email,
					avatar: `https://avatars.dicebear.com/api/initials/${username.trim()}.svg`
				}
			});
			const session = await auth.createSession({
				userId: user.userId,
				attributes: {},
			});
			locals.auth.setSession(session);
		} catch (e) {
			console.log(e, 'err');
			// if (
			// 	e instanceof SomeDatabaseError &&
			// 	e.message === USER_TABLE_UNIQUE_CONSTRAINT_ERROR
			// ) {
			// 	return fail(400, {
			// 		message: "Username already taken"
			// 	});
			// }
			return fail(500, {
				message: "An unknown error occurred"
			});
		}
		throw redirect(302, "/");
	}
};
