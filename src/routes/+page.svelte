<script lang="ts">
	import Banner from '../components/banner.svelte';
	import MainPoster from '../components/posters/mainPoster.svelte';
	import Slider from '../components/slider.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<Banner
name={data.banner.title}
backgroundImage={data.banner.backdrop_path}
overview={data.banner.overview}
/>
<div class="mx-auto py-12">
  <Slider title="Trending Now" path="/">
    {#each data.trending as movie}
      <MainPoster
      title={movie.title}
      poster={movie.poster}
      id={movie.id}
      overview={movie.overview}
      vote_average={movie.vote_average}
      original_language={movie.original_language}
      release_date={movie.release_date}     
      path="/movies/{movie.id}"
      />
    {/each}
  </Slider>
</div>
