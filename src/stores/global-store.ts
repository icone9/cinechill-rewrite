import { writable } from 'svelte/store';

interface Store {
	isModalOpen: boolean;
	contentType: string | null | undefined;
	details:
		| {
				id: number;
				poster: string;
				title: string;
				overview: string;
				vote_average: number;
				original_language: string;
				release_date: string;
		  }
		| null
		| undefined;
}
export const modalPosterStore = writable<Store>({
	isModalOpen: false,
	contentType: undefined,
	details: undefined
});
