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
    {#each data.trending as media}
      <MainPoster
      title={media.title}
      poster={media.poster}
      id={media.id}
      overview={media.overview}
      vote_average={media.vote_average}
      original_language={media.original_language}
      release_date={media.release_date}   
      type={media.type}
      />
    {/each}
  </Slider>

  <Slider title="Action and Adventure" path="/">
    {#each data.aa as media}
      <MainPoster
      title={media.title}
      poster={media.poster}
      id={media.id}
      overview={media.overview}
      vote_average={media.vote_average}
      original_language={media.original_language}
      release_date={media.release_date}
      type={media.type}
      />
    {/each}
  </Slider>

  <Slider title="Top Rated" path="/">
    {#each data.topRated as media}
      <MainPoster
      title={media.title}
      poster={media.poster}
      id={media.id}
      overview={media.overview}
      vote_average={media.vote_average}
      original_language={media.original_language}
      release_date={media.release_date}  
      type={media.type}
      />
    {/each}
  </Slider>

  <Slider title="Animation" path="/">
    {#each data.animations as media}
      <MainPoster
      title={media.title}
      poster={media.poster}
      id={media.id}
      overview={media.overview}
      vote_average={media.vote_average}
      original_language={media.original_language}
      release_date={media.release_date} 
      type={media.type}
      />
    {/each}
  </Slider>
</div>
