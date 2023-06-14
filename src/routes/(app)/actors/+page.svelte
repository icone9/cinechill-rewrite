<script lang="ts">
  import ActorCard from '../../components/actors/actorCard.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<div class="mx-auto px-4 pt-28">
  <h2 class="uppercase tracking-wider text-4xl font-semibold">Popular actors</h2>

  <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
    {#each data.actors as actor}
      <ActorCard
      id={actor.id}
      image="{actor.profile_path ? `https://image.tmdb.org/t/p/w235_and_h235_face/${actor.profile_path}`: `https://ui-avatars.com/api/?size=235&name=${actor.name}`}"
      name={actor.name}
      />
    {/each}
  </div>
</div>
