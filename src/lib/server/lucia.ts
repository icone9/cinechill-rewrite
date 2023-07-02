import lucia from 'lucia-auth';
import { sveltekit } from 'lucia-auth/middleware';
import { dev } from '$app/environment';
import { connect } from '@planetscale/database';
import { planetscale, mysql2 } from '@lucia-auth/adapter-mysql';
import { DATABASE_URL } from '$env/static/private';
import { dbConfig } from '../../db';
import { createPool } from 'mysql2/promise';

const connection = dev
	? mysql2(
			createPool({
				uri: DATABASE_URL
			})
	  )
	: planetscale(connect(dbConfig));

export const auth = lucia({
	adapter: connection,
	env: dev ? 'DEV' : 'PROD',
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
