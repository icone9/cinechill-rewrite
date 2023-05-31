// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		interface Platform {
			env?: {
				TMDB_API_KEY: string;
				TMDB_V4_TOKEN: string;
				TMDB_ROUTE_URL: string
			};
		}
	}
}

export {};
