import { Kysely } from "kysely"
import type { DB } from "./types"
import { PlanetScaleDialect } from "kysely-planetscale";
import { DATABASE_URL } from '$env/static/private';

export const dbConfig = {
  url: DATABASE_URL,
  fetch: (url: string, init: any) => {
    delete init["cache"]; // Remove cache header
    return fetch(url, init);
  }
};

export const db = new Kysely<DB>({
  dialect: new PlanetScaleDialect(dbConfig)
})