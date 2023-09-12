export type Movie = {
	adult: boolean;
	backdrop_path: string;
	genre_ids: number[];
	id: number;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	title: string;
	video: false;
	vote_average: number;
	vote_count: number;
};

export type Discover = {
	adult: boolean;
	backdrop_path: string;
	genre_ids: number[];
	id: number;
	original_language: string;
	original_title: string;
	name: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	title: string;
	video: false;
	vote_average: number;
	vote_count: number;
};

export type MovieDetails = Movie & {
	genres: Genre[];
	budget: number;
	belongs_to_collection: number | null;
	homepage: string;
	imdb_id: string;
	production_companies: ProductionCompany[];
	production_countries: ProductionCountry[];
	spoken_languages: SpokenLanguage[];
	similar?: {
		page: number;
		results: Movie[];
	};
	images?: {
		backdrops: unknown[];
		logos: unknown[];
		posters: unknown[];
	};
	credits?: {
		cast: {
			adult: boolean;
			gender: number;
			id: number;
			known_for_department: string;
			name: string;
			original_name: string;
			popularity: number;
			profile_path: string;
			cast_id: number;
			character: string;
			credit_id: string;
			order: number;
		}[];
		crew: {
			adult: boolean;
			gender: number;
			id: number;
			known_for_department: string;
			name: string;
			original_name: string;
			popularity: number;
			profile_path: string;
			credit_id: string;
			department: string;
			job: string;
		}[];
	};
};

export type TvShow = {
	backdrop_path: string;
	first_air_date: string;
	genre_ids: number[];
	id: number;
	name: string;
	origin_country: string[];
	original_language: string;
	original_name: string;
	overview: string;
	popularity: string;
	poster_path: string;
	vote_average: number;
	vote_count: number;
};

export type TvShowDetail = TvShow & {
	adult: boolean;
	seasons: Season[];
	networks: NetWork[];
	number_of_episodes: number;
	number_of_seasons: number;
	genres: Genre[];
	homepage: string;
	in_production: boolean;
	languages: string[];
	last_air_date: string;
	episode_run_time: number[];
	last_episode_to_air: Episode;
	next_episode_to_air: Episode;
	production_companies: ProductionCompany[];
	production_countries: ProductionCountry[];
	spoken_language: SpokenLanguage[];
	status: string;
	tagline: string;
	type: string;
	created_by: Creator[];
	similar?: {
		page: number;
		results: TvShow[];
	};
	images?: {
		backdrops: unknown[];
		logos: unknown[];
		posters: unknown[];
	};
	credits?: {
		cast: {
			adult: boolean;
			gender: number;
			id: number;
			known_for_department: string;
			name: string;
			original_name: string;
			popularity: number;
			profile_path: string;
			cast_id: number;
			character: string;
			credit_id: string;
			order: number;
		}[];
		crew: {
			adult: boolean;
			gender: number;
			id: number;
			known_for_department: string;
			name: string;
			original_name: string;
			popularity: number;
			profile_path: string;
			credit_id: string;
			department: string;
			job: string;
		}[];
	};
};

export type Genre = {
	id: number;
	name: string;
};

export type ProductionCompany = {
	id: number;
	logo_path: string;
	name: string;
	origin_country: string;
};

export type ProductionCountry = {
	iso_3166_1: string;
	name: string;
};

export type SpokenLanguage = {
	english_name: string;
	iso_639_1: string;
	name: string;
};

export type Season = {
	air_date: string;
	episode_count: number;
	id: number;
	name: string;
	overview: string;
	poster_path: string;
	season_number: number;
};

export type NetWork = {
	id: number;
	logo_path: string;
	name: string;
	origin_country: string;
};

export type Episode = {
	air_date: string;
	episode_number: number;
	id: number;
	name: string;
	overview: string;
	production_code: number | null | undefined;
	runtime: number;
	season_number: number;
	show_id: number;
	still_path: string;
	vote_average: number;
	vote_count: number;
	crew: unknown[];
	guest_stars: unknown;
};

export type Creator = {
	id: number;
	credit_id: string;
	name: string;
	gender: number;
	profile_path: string | null;
};

export type People = {
	adult: boolean;
	gender: number;
	id: number;
	known_for: {
		adult: boolean;
		backdrop_path: string;
		genre_ids: number[];
		id: number;
		media_type: string;
		original_language: string;
		original_title: string;
		overview: string;
		poster_path: string;
		release_date: string;
		title: string;
		video: boolean;
		vote_average: number;
		vote_count: number;
	}[];
	known_for_department: string;
	name: string;
	popularity: number;
	profile_path: string;
};

export type Actor = {
	adult: boolean;
	also_known_as: string[];
	biography: string;
	birthday: string;
	deathday: string;
	gender: number;
	homepage: string;
	id: number;
	imdb_id: string;
	known_for_department: string;
	name: string;
	place_of_birth: string;
	popularity: number;
	profile_path: string;
};

export type Social = {
	id: string;
	freebase_mid: string;
	freebase_id: string;
	imdb_id: string;
	tvrage_id: number;
	wikidata_id: string;
	facebook_id: string;
	instagram_id: string;
	tiktok_id: string;
	twitter_id: string;
	youtube_id: string;
};

export type Cast = {
	adult: boolean;
	backdrop_path: string;
	genre_ids: number[];
	id: number;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
	character: string;
	credit_id: string;
	name: string;
	order: number;
	media_type: string;
};

export type Crew = {
	adult: boolean;
	backdrop_path: string;
	genre_ids: number[];
	id: number;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
	credit_id: string;
	department: string;
	job: string;
	media_type: string;
};

export type Credit = {
	cast: Cast[];
	crew: Crew[];
	id: number;
};
