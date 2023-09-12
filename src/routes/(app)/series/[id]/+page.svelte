<script lang="ts">
	import MainPoster from '$components/posters/mainPoster.svelte';
	import MediaPoster from '$components/posters/mediaPoster.svelte';
	import Spoiler from '$components/spoiler.svelte';
	import type { PageData } from './$types';
	import * as Tabs from "$lib/components/ui/tabs";
	import SerieSocials from '$components/series/serie-socials.svelte';

	export let data: PageData;
</script>

<svelte:head>
  <title>Hello world!</title>
  <meta name="description" content="This is where the description goes for SEO" />
</svelte:head>

<div>
	<div class="serie-info border-b border-gray-800">
		<div class="pb-16 pt-0 md:pt-20 px-0 md:px-4 flex">
			<div class="w-[500px] flex-1">
				<img
					src={data.serie.poster_path}
					class="rounded-lg hidden md:block bg-skeleton h-72 w-full object-cover"
					alt={data.serie.title}
				/>
			</div>
			<!-- <MediaPoster poster={data.serie.poster_path} title={data.serie.title} /> -->
			<div class="px-2 md:px-0 md:ml-12 flex-1">
				<h2 class="text-4xl font-semibold pt-4 lg:pt-0 md:pt-0">{data.serie.title}</h2>
				<div class="flex flex-wrap items-center text-gray-400 text-sm mt-4">
					<svg class="fill-current text-blue-400 w-4" viewBox="0 0 24 24">
						<g data-name="Layer 2">
							<path
								d="M17.56 21a1 1 0 01-.46-.11L12 18.22l-5.1 2.67a1 1 0 01-1.45-1.06l1-5.63-4.12-4a1 1 0 01-.25-1 1 1 0 01.81-.68l5.7-.83 2.51-5.13a1 1 0 011.8 0l2.54 5.12 5.7.83a1 1 0 01.81.68 1 1 0 01-.25 1l-4.12 4 1 5.63a1 1 0 01-.4 1 1 1 0 01-.62.18z"
								data-name="star"
							/>
						</g>
					</svg>
					<span class="ml-1">{data.serie.vote_average}</span>
					<span class="mx-2">|</span>
					<span>{data.serie.release_date}</span>
					<span class="mx-2">|</span>
					<span> genres </span>
				</div>
				<Spoiler maxLength={250} content={data.serie.overview} class="text-gray-300 mt-4" />

				{#if data.serie?.creator}
					<div class="mt-8">
						<div class="flex mt-4 items-center flex-wrap">
							<div class="mr-4 py-3">
								<div>{data.serie?.creator.name}</div>
								<div class="text-sm text-gray-400">{data.serie?.creator.job}</div>
							</div>
						</div>
					</div>
				{/if}

				<div class="flex justify-between mt-6">
					<!-- <x-share-buttons/> -->
				</div>
			</div>
		</div>
		
		<div class="max-w-5xl mx-auto">
			<Tabs.Root value="socials">
				<Tabs.List class="w-full">
					<Tabs.Trigger class="w-full" value="socials">Socials</Tabs.Trigger>
					<Tabs.Trigger class="w-full" value="info">General info</Tabs.Trigger>
				</Tabs.List>
				<Tabs.Content value="socials">
					<SerieSocials
					casts={data.serie?.cast}
					similars={data.serie.similars}
					/>
				</Tabs.Content>
				<Tabs.Content value="info">Change your password here.</Tabs.Content>
			</Tabs.Root>
			<!-- {#if data.serie.credits?.cast}
				<div class="mx-auto px-2 pb-8">
					<div class="serie-cast">
						<div class="text-4xl font-semibold">Cast</div>
						<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
							{#each data.serie.credits.cast as cast}
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

			{#if data.serie.similar?.length > 0}
				<div class="pb-6">
					<h2 class="text-4xl font-semibold">Similar Series</h2>
					<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mx-2">
						{#each data.serie.similar as serie}
							<MainPoster
								title={serie.name}
								poster={serie.poster_path}
								id={serie.id}
								overview={serie.overview}
								vote_average={serie.vote_average}
								original_language={serie.original_language}
								release_date={serie.first_air_date}
								type={serie.type}
							/>
						{/each}
					</div>
				</div>
			{/if} -->
		</div>
	</div>
</div>
