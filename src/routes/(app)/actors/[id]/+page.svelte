<script lang="ts">
	import Spoiler from '$components/spoiler.svelte';
	import { TMDB_IMAGE_URL } from '$constants/index';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="max-w-5xl mx-auto">
	<div class="movie-info border-b border-gray-800 max-w-5xl mx-auto">
		<div class="px-2 md:px-4 pb-16 pt-24 flex flex-col md:flex-row space-x-0 md:space-x-6">
			<div class="flex-none grid place-items-center md:place-items-start">
				<img
					src={`${TMDB_IMAGE_URL}/original${data.actor.profile_path}`}
					width="520"
					height="480"
					class="w-full h-[26rem] rounded-2xl object-cover"
					alt={`${data.actor.name} | Actor avatar`}
				/>
			</div>

			<div>
				<h2 class="text-4xl mt-4 md:mt-0 font-semibold pt-4 lg:pt-0 md:pt-0">{data.actor.name}</h2>
				<div class="flex flex-wrap items-center text-gray-400 text-sm pt-4">
					<svg class="fill-current text-gray-400 hover:text-white w-4" viewBox="0 0 448 512"
						><path
							d="M448 384c-28.02 0-31.26-32-74.5-32-43.43 0-46.825 32-74.75 32-27.695 0-31.454-32-74.75-32-42.842 0-47.218 32-74.5 32-28.148 0-31.202-32-74.75-32-43.547 0-46.653 32-74.75 32v-80c0-26.5 21.5-48 48-48h16V112h64v144h64V112h64v144h64V112h64v144h16c26.5 0 48 21.5 48 48v80zm0 128H0v-96c43.356 0 46.767-32 74.75-32 27.951 0 31.253 32 74.75 32 42.843 0 47.217-32 74.5-32 28.148 0 31.201 32 74.75 32 43.357 0 46.767-32 74.75-32 27.488 0 31.252 32 74.5 32v96zM96 96c-17.75 0-32-14.25-32-32 0-31 32-23 32-64 12 0 32 29.5 32 56s-14.25 40-32 40zm128 0c-17.75 0-32-14.25-32-32 0-31 32-23 32-64 12 0 32 29.5 32 56s-14.25 40-32 40zm128 0c-17.75 0-32-14.25-32-32 0-31 32-23 32-64 12 0 32 29.5 32 56s-14.25 40-32 40z"
						/></svg
					>
					<span class="ml-2">
						{data.actor.birthday} in {data.actor.place_of_birth}
					</span>
				</div>
				<Spoiler content={data.actor.biography} maxLength={150} class="text-gray-300 mt-6" />
				<!-- <x-spoiler 
        :content="$actor['biography']"
        class="text-gray-300 mt-6"
        /> -->

				<h4 class="font-semibold mt-4">Known For</h4>
				<div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4" />

				<ul class="flex items-center mt-4">
					{#if data.socials.facebook_id}
						<li class="bg-gray-200 p-2 rounded-xl">
							<a
								href={`https://facebook.com/${data.socials.facebook_id}`}
								title="Facebook"
								target="_blank"
							>
								<svg class="fill-current w-6 h-6 text-gray-500" viewBox="0 0 448 512"
									><path
										d="M448 56.7v398.5c0 13.7-11.1 24.7-24.7 24.7H309.1V306.5h58.2l8.7-67.6h-67v-43.2c0-19.6 5.4-32.9 33.5-32.9h35.8v-60.5c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9h-58.4v67.6h58.4V480H24.7C11.1 480 0 468.9 0 455.3V56.7C0 43.1 11.1 32 24.7 32h398.5c13.7 0 24.8 11.1 24.8 24.7z"
									/></svg
								>
							</a>
						</li>
					{/if}
				</ul>
			</div>
		</div>
	</div>

	<div class="credits">
		<div class="mx-auto px-4 py-6">
			<h2 class="text-4xl font-semibold">Credits</h2>
			<ul class="list-disc leading-loose pl-5 mt-8">
				{#each data.credits.cast as credit}
					<li>
						{credit.release_date} &middot;
						<strong>
							<a
								href={credit.media_type === 'movie'
									? `/movies/${credit.id}`
									: `/series/${credit.id}`}
								class="hover:underline text-primary"
							>
								{credit.title}
							</a>
						</strong>
						{#if credit?.character && credit?.character?.length > 2}
							<span>as {credit.character}</span>
						{/if}
					</li>
				{/each}
			</ul>
		</div>
	</div>
</div>
<!--   if(isset($movie['title'])){
                    $title = $movie['title'];
                    
                }elseif($movie['name']){
                    $title = $movie['name'];
                }else{
                    $title = 'Untitled';
                }

                return collect($movie)->merge([
                    'poster_path' => $movie['poster_path']
                    ? 'https://image.tmdb.org/t/p/original/'. $movie['poster_path']
                    : 'https://via.placeholder.com/185x278',
                    'title' => $title,
                    'linkToPage' => $movie['media_type'] === 'movie' ? route('movie.show', $movie['id']) : route('tv.show', $movie['id']), 
                ]);
            }); -->
