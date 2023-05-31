import type { Actor, Credit, People, Social } from "../../../types";
import { fetchTMDB } from "../../../utils/tmdb";

export  async function getPopularActors() {
  return fetchTMDB<{ page: number,  results: People[]}>("/person/popular")
}

export  async function getActor(id: number) {
  return fetchTMDB<Actor>(`/person/${id}`)
}

export  async function getActorSocials(id: number) {
  return fetchTMDB<Social>(`/person/${id}/external_ids`)
}

export  async function getActorCredits(id: number) {
  return fetchTMDB<Credit>(`/person/${id}/combined_credits`)
}
