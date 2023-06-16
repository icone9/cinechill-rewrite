import lucia from "lucia-auth";
import { sveltekit } from "lucia-auth/middleware";
import { dev } from "$app/environment";
import { connect } from "@planetscale/database";
import { planetscale } from "@lucia-auth/adapter-mysql";
import { dbConfig } from "../../db";

const connection = connect(dbConfig);

export const auth = lucia({
	adapter: planetscale(connection),
	env: dev ? "DEV" : "PROD",
	middleware: sveltekit(),
	experimental: {
		debugMode: dev ? true : false
	},
	transformDatabaseUser: (userData) => {
		return {
			userId: userData.id,
			email: userData.email,
			username: userData.username,
			avatar: userData.avatar
		};
	}
});

export type Auth = typeof auth;