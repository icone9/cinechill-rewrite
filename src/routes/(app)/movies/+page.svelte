<script lang="ts">
	import MainPoster from '$components/posters/mainPoster.svelte';
	import Slider from '$components/slider.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="mx-auto pt-20 pb-12 px-2">
	<h2 class="uppercase tracking-wider text-4xl font-semibold">Movies</h2>
	<!-- <div class="mx-auto mt-8 mb-5">
        @livewire('search-dropdown')
    </div> -->
	<!-- <div class="genres pt-2 pb-6">
        <h2 class=" tracking-wider text-base md:tex-lg font-semibold inline-block">Filter By:</h2>
        @foreach ($genres as $key => $genre)   
            <a 
            href={{ route("movie.index")."?category=$genre" }} 
            class="tag big_tag group hover:bg-blue-500">
                @if ($genreSelected->get($key))
                    <svg width="24" class="inline-block text-blue-500 group-hover:text-white w-5" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" color="#000"><path d="M0 0h24v24H0z" fill="none"></path><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></svg>
                @endif
                <span class="pl-0.5"></span>{{ $genre }}
            </a>
        @endforeach
    </div> -->

	<!-- @if (empty($movies_with_genre) && request()->get('category'))
        <h2 class="uppercase tracking-wider text-2xl font-semibold">
            Don't Have nothing for :{{ request()->get('category') }}
        </h2>
    @endif -->
	<!-- @if (!empty($movies_with_genre) && request()->get('category'))
    <div class="movies_with_genre mx-4">
        <h2 class="uppercase tracking-wider text-lg font-semibold">
            Results for : {{ request()->get('category') }}
        </h2>
        <div class="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4">
            @foreach ($movies_with_genre as $movie)
                <x-poster 
                :movieId="$movie['id']"
                type="movie"
                :image="$movie['poster_path']"
                :name="$movie['title']" 
                :genres="$movie['genres']"
                :published-date="$movie['release_date']"
                :overview="$movie['overview']"
                :vote-average="$movie['vote_average']"
                :lang="$movie['lang']"
                />
            @endforeach
        </div>
    </div>
    @endif -->
	<Slider title="Now Playing" path="/movie/now_playing">
		{#each data.nowPlayingMovies as movie}
			<MainPoster
				title={movie.title}
				poster={movie.poster}
				id={movie.id}
				overview={movie.overview}
				vote_average={movie.vote_average}
				original_language={movie.original_language}
				release_date={movie.release_date}
				type={'movie'}
			/>
		{/each}
	</Slider>

	<Slider title="Popular Movies" path="/movies/popular">
		{#each data.popularMovies as movie}
			<MainPoster
				title={movie.title}
				poster={movie.poster}
				id={movie.id}
				overview={movie.overview}
				vote_average={movie.vote_average}
				original_language={movie.original_language}
				release_date={movie.release_date}
				type={'movie'}
			/>
		{/each}
	</Slider>
	<Slider title="Upcoming Movies" path="/movies/upcoming">
		{#each data.upcomingMovies as movie}
			<MainPoster
				title={movie.title}
				poster={movie.poster}
				id={movie.id}
				overview={movie.overview}
				vote_average={movie.vote_average}
				original_language={movie.original_language}
				release_date={movie.release_date}
				type={'movie'}
			/>
		{/each}
	</Slider>
</div>
