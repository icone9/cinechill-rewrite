import { fail, redirect } from '@sveltejs/kit';
import { auth } from '$lib/server/lucia';
import type { PageServerLoad, Actions } from './$types';
import { LuciaError } from 'lucia';
// import { DATABASE_URL } from '$env/static/private';

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.auth.validate();
	if (session) throw redirect(302, '/');
	return {};
};

export const actions: Actions = {
	login: async ({ request, locals }) => {
		const form = await request.formData();
		const username = form.get('username');
		const password = form.get('password');
		console.log('DbLimte');
		// check for empty values
		if (
			typeof username !== "string" ||
			username.length < 1 ||
			username.length > 31
		) {
			return fail(400, {
				message: "Invalid username"
			});
		}
		if (
			typeof password !== "string" ||
			password.length < 1 ||
			password.length > 255
		) {
			return fail(400, {
				message: "Invalid password"
			});
		}
		try {
			const user = await auth.useKey('username', username.toLowerCase(), password);
			const session = await auth.createSession({
				userId: user.userId,
				attributes: {}
			});
			locals.auth.setSession(session);
		} catch (e) {
			console.log(e, 'err');
			if (
				e instanceof LuciaError &&
				(e.message === "AUTH_INVALID_KEY_ID" ||
					e.message === "AUTH_INVALID_PASSWORD")
			) {
				// user does not exist
				// or invalid password
				return fail(400, {
					message: "Incorrect username of password"
				});
			}
			return fail(500, {
				message: "An unknown error occurred"
			});
		}
		throw redirect(302, "/");
	},
	logout: async ({ locals }) => {
		const { session } = await locals.auth.validate();
		if (!session) return fail(401);
		await auth.invalidateSession(session.sessionId)
		locals.auth.setSession(null); // remove cookie
		throw redirect(302, "/");
	}
};
