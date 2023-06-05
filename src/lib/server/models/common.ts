import { fetchTMDB } from "$utils/tmdb";
import type { Discover } from "../../../types";

export async function discoverWithNetwork(mediaType: 'movie' | 'tv', network: string) {
  return fetchTMDB<{ page: number,  results:  Discover[]}>(`/discover/${mediaType}`, `?with_network=${network}`)
}

export async function discoverWithGenre(mediaType: 'movie' | 'tv', genre: string) {
  return fetchTMDB<{ page: number,  results:  Discover[]}>(`/discover/${mediaType}`, `?with_genres=${genre}`)
}
