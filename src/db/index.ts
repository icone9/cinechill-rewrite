import { Kysely, MysqlDialect } from 'kysely';
import type { DB } from './types';
import { PlanetScaleDialect } from 'kysely-planetscale';
import { dev } from '$app/environment';
import { DATABASE_URL } from '$env/static/private';
import { createPool } from 'mysql2';

export const dbConfig = {
	url: DATABASE_URL,
	fetch: (url: string, init: any) => {
		delete init['cache']; // Remove cache header
		return fetch(url, init);
	}
};

const dialect = dev
	? new MysqlDialect({
			pool: createPool({
				database: DATABASE_URL
			})
	  })
	: new PlanetScaleDialect(dbConfig);

export const db = new Kysely<DB>({
	dialect: dialect
});
