// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			auth: import('lucia-auth').AuthRequest;
		}
		// interface PageData {}
		interface Platform {
			env?: {
				TMDB_API_KEY: string;
				TMDB_V4_TOKEN: string;
				TMDB_ROUTE_URL: string;
			};
		}
	}
}

/// <reference types="lucia-auth" />
declare global {
	namespace Lucia {
		type Auth = import('$lib/server/lucia').Auth;
		type UserAttributes = {
			username: string;
			email: string;
			avatar: string;
		};
	}
}

export {};
