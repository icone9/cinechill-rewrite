<script lang="ts">
	import MainPoster from "$components/posters/mainPoster.svelte";
	import Slider from "$components/slider.svelte";
	import type { PageData } from "./$types";

    export let data: PageData;
</script>


<div class="mx-auto pt-20 pb-12 px-4">
  <h2 class="uppercase tracking-wider text-4xl font-semibold">Series</h2>
      <!-- <div class="mx-auto mt-8 mb-5">
          @livewire('search-dropdown')
      </div>
      <h2 class=" tracking-wider text-lg font-semibold">Filter By: </h2>
      <div class="genres pt-2 pb-6">
          @foreach ($genres as $key => $genre)   
              <a href={{ route("tv.index")."?category=$genre" }} class="tag big_tag group hover:bg-blue-500">
                  @if ($genreSelected->get($key))
                      <svg width="24" class="inline-block text-blue-500 group-hover:text-white w-5" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" color="#000"><path d="M0 0h24v24H0z" fill="none"></path><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></svg>
                  @endif
                  <span class="pl-0.5"></span>{{ $genre }}
              </a>
          @endforeach
      </div>
      
      @if (empty($tv_with_genre) && request()->get('category'))
          <h2 class="uppercase tracking-wider text-2xl font-semibold">Don't Have nothing for : {{ request()->get('category') }}</h2>
      @endif
      @if (!empty($tv_with_genre) && request()->get('category'))
          <div class="popular-tv mx-4">
              <h2 class="uppercase tracking-wider text-lg font-semibold">Results for : {{ request()->get('category') }}</h2>
              <div class="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4">
                  @foreach ($tv_with_genre as $tvshow)
                          <x-poster
                          :image="$tvshow['poster_path']"
                          :name="$tvshow['title']"
                          type="tv" 
                          :mediaId="$tvshow['id']"
                          :genres="$tvshow['genres']"
                          :published-date="$tvshow['release_date']"
                          :overview="$tvshow['overview']"
                          :vote-average="$tvshow['vote_average']"
                          :lang="$tvshow['lang']"
                          />
                  @endforeach
              </div>
          </div>
      @endif -->
      <Slider title="Top Rated Tv Show" path="/serie/top_rated">
        {#each data.topRatedSeries as serie}
          <MainPoster
          title={serie.title}
          poster={serie.poster}
          id={serie.id}
          overview={serie.overview}
          vote_average={serie.vote_average}
          original_language={serie.original_language}
          release_date={serie.release_date}   
          type={'serie'}
          />
        {/each}
      </Slider>
  
      <Slider title="On the Air series" path="/series/on_the_air">
          {#each data.onTheAirSeries as serie}
            <MainPoster
            title={serie.title}
            poster={serie.poster}
            id={serie.id}
            overview={serie.overview}
            vote_average={serie.vote_average}
            original_language={serie.original_language}
            release_date={serie.release_date}   
            type={'serie'}
            />
          {/each}
      </Slider>
      <Slider title="Popular series" path="/series/popular">
          {#each data.popularSeries as serie}
            <MainPoster
            title={serie.title}
            poster={serie.poster}
            id={serie.id}
            overview={serie.overview}
            vote_average={serie.vote_average}
            original_language={serie.original_language}
            release_date={serie.release_date}   
            type={'serie'}
            />
          {/each}
      </Slider>
      <!-- @if (!empty($topratedtv))
          <x-slider
          title="Top Rated show"
          class="top_rated-series pt-4"
          :path="route('tv.top_rated')"
          >
              @foreach ($topratedtv as $tvshow)
                  <x-poster
                  :image="$tvshow['poster_path']"
                  :name="$tvshow['name']" 
                  :mediaId="$tvshow['id']"
                  type="tv"
                  :genres="$tvshow['genres']"
                  :published-date="$tvshow['release_date']"
                  class="{{ !$loop->first ? 'ml-4': '' }}"
                  :overview="$tvshow['overview']"
                  :vote-average="$tvshow['vote_average']"
                  :lang="$tvshow['lang']"
                  />
              @endforeach
          </x-slider>
      @endif -->

      <!-- @if (!empty($populartv))
          <x-slider
          title="Popular series"
          class="popular-series py-16"
          :path="route('tv.popular')"
          >
              @foreach ($populartv as $tvshow)
                  <x-poster
                  :image="$tvshow['poster_path']"
                  :name="$tvshow['name']" 
                  :mediaId="$tvshow['id']"
                  type="tv"
                  :genres="$tvshow['genres']"
                  :published-date="$tvshow['release_date']"
                  class="{{ !$loop->first ? 'ml-4': '' }}"
                  :overview="$tvshow['overview']"
                  :vote-average="$tvshow['vote_average']"
                  :lang="$tvshow['lang']"
                  />
              @endforeach
          </x-slider>
      @endif -->

      <!-- @if (!empty($on_the_air))
          <x-slider
          title="On The Air Series"
          class="ontheairseries pb-12"
          :path="route('tv.on_the_air')"
          >
              @foreach ($on_the_air as $tvshow)
                  <x-poster
                  :image="$tvshow['poster_path']"
                  :name="$tvshow['name']" 
                  :genres="$tvshow['genres']"
                  :mediaId="$tvshow['id']"
                  type="tv"
                  :published-date="$tvshow['release_date']"
                  class="{{ !$loop->first ? 'ml-4': '' }}"
                  :overview="$tvshow['overview']"
                  :vote-average="$tvshow['vote_average']"
                  :lang="$tvshow['lang']"
                  />
              @endforeach
          </x-slider>
      @endif -->
</div>