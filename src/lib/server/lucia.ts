import { lucia } from 'lucia';
import { sveltekit } from 'lucia/middleware';
import { dev } from '$app/environment';
import { planetscale } from "@lucia-auth/adapter-mysql";
import { connection } from '../../db';


export const auth = lucia({
	adapter: planetscale(connection, {
		user: "auth_user",
		key: "user_key",
		session: "user_session"
	}),
	env: dev ? 'DEV' : 'PROD',
	middleware: sveltekit(),
	experimental: {
		debugMode: dev ? true : false
	},
	getUserAttributes: (userData) => {
		return {
			userId: userData.id,
			email: userData.email,
			username: userData.username,
			avatar: userData.avatar
		};
	}
});

export type Auth = typeof auth;
