<script lang="ts">

	import MainPoster from "$components/posters/mainPoster.svelte";
	import type { Cast, TvShow } from "$types";
  export let casts: Cast[] | any;
  export let similars: TvShow[] | any;
</script>

{#if casts}
  <div class="mx-auto px-2 pb-8">
    <div class="serie-cast">
      <div class="text-4xl font-semibold">Cast</div>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {#each casts as cast}
          <div class="mt-8">
            <a href="/actors/{cast.id}">
              <img
                src={`https://image.tmdb.org/t/p/w300${cast.poster_path}`}
                alt="actor poster"
                class="hover:opacity-75 transition ease-in-out duration-150 rounded-md"
              />
            </a>
            <div class="mt-2">
              <a href="/actors/5433" class="text-lg mt-2 hover:text-gray:300">{cast.name}</a>
              <div class="flex items-center text-gray-400 text-sm">
                <span>{cast.character}</span>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
{/if}

{#if similars?.length > 0}
  <div class="pb-6">
    <h2 class="text-4xl font-semibold">Similar Series</h2>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mx-2">
      {#each similars as serie}
        <MainPoster
          title={serie.name}
          poster={serie.poster_path}
          id={serie.id}
          overview={serie.overview}
          vote_average={serie.vote_average}
          original_language={serie.original_language}
          release_date={serie.first_air_date}
          type={'serie'}
        />
      {/each}
    </div>
  </div>
{/if}