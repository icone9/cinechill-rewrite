<script lang="ts">
	import MainPoster from '$components/posters/mainPoster.svelte';
	import MediaPoster from '$components/posters/mediaPoster.svelte';
	import Spoiler from '../../../components/spoiler.svelte';
    import type { PageData } from './$types';

    export let data: PageData;
</script>

<div>
    <div class="movie-info border-b border-gray-800 max-w-5xl mx-auto">
        <div class="pb-6 pt-0 md:pt-28 px-0 md:px-4 flex flex-col md:flex-row">
            <img 
            src={data.movie.poster_path} 
            class="rounded-lg hidden md:block bg-skeleton" 
            width="320" 
            height="560" 
            alt={data.movie.title} 
            />
            <MediaPoster poster={data.movie.poster_path} title={data.movie.title}/>
            <div class="px-4 md:px-0 md:ml-12 ">
                <h2 class="text-4xl font-semibold pt-4 lg:pt-0 md:pt-0">{data.movie.title}</h2>
                <div class="flex flex-wrap items-center text-gray-400 text-sm mt-4">
                    <svg class="fill-current text-blue-400 w-4" viewBox="0 0 24 24">
                        <g data-name="Layer 2">
                            <path
                                d="M17.56 21a1 1 0 01-.46-.11L12 18.22l-5.1 2.67a1 1 0 01-1.45-1.06l1-5.63-4.12-4a1 1 0 01-.25-1 1 1 0 01.81-.68l5.7-.83 2.51-5.13a1 1 0 011.8 0l2.54 5.12 5.7.83a1 1 0 01.81.68 1 1 0 01-.25 1l-4.12 4 1 5.63a1 1 0 01-.4 1 1 1 0 01-.62.18z"
                                data-name="star" />
                        </g>
                    </svg>
                    <span class="ml-1">{data.movie.vote_average}</span>
                    <span class="mx-2">|</span>
                    <span>{data.movie.release_date}</span>
                    <span class="mx-2">|</span>
                    <span>
                        genres
                    </span>
                </div>
                <Spoiler
                maxLength={250}
                content={data.movie.overview}
                class="text-gray-300 mt-4"
                />
    
                {#if data.movie.credits?.crew}
                    <div class="mt-8">
                        <h4 class="text-white font-semibold">Featured Cast</h4>
                        <div class="flex mt-4 items-center flex-wrap">
                            {#each data.movie.credits.crew as crew}
                                <div class="mr-4 py-3">
                                    <div>{crew.name}</div>
                                    <div class="text-sm text-gray-400">{crew.job}</div>
                                </div>
                            {/each}
                        </div>
                    </div>
                {/if}
                
                <div class="flex justify-between mt-6">
                    <!-- <x-share-buttons/> -->
                </div>
    
            </div>
    
        </div>
        {#if data.movie.credits?.cast}
            <div class="mx-auto px-2 pb-8">
                <div class="movie-cast">
                    <div class="text-4xl font-semibold"> Cast</div>
                    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {#each data.movie.credits.cast as cast}
                            <div class="mt-8">
                                <a href="/actors/{cast.id}">
                                    <img 
                                    src={`https://image.tmdb.org/t/p/w300${cast.profile_path}`} 
                                    alt="actor poster"
                                    class="hover:opacity-75 transition ease-in-out duration-150 rounded-md "
                                    />
                                </a>
                                <div class="mt-2">
                                    <a href="/actors/5433" class="text-lg mt-2 hover:text-gray:300">{cast.name}</a>
                                    <div class="flex items-center text-gray-400 text-sm ">
                                        <span>{cast.character}</span>
                                    </div>
                                </div>
                            </div>
                        {/each}
                    </div>
                </div>
            </div>
        {/if}

        {#if data.movie.similar?.length > 0}
            <div class="py-6">
                <h2 class="text-4xl font-semibold">Similar Movies</h2>
                <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mx-2"> 
                    {#each data.movie.similar as movie}
                        <MainPoster
                        title={movie.title}
                        poster={movie.poster}
                        id={movie.id}
                        overview={movie.overview}
                        vote_average={movie.vote_average}
                        original_language={movie.original_language}
                        release_date={movie.release_date}  
                        type={movie.type}
                        />
                    {/each}
                </div>
            </div>
        {/if}
    </div>
</div>
