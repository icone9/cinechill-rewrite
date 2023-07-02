<script lang="ts">
	import { modalPosterStore } from '../../stores/global-store';

	export let title: string;
	export let poster: string;
	export let type: string;
	export let id: number;
	export let overview: string;
	export let vote_average: number;
	export let original_language: string;
	export let release_date: string;

	function handleOpenModal() {
		modalPosterStore.set({
			isModalOpen: true,
			contentType: 'Movie',
			details: {
				id,
				title,
				overview,
				poster: poster.replace('w200', 'w780'),
				vote_average,
				original_language,
				release_date
			}
		});
	}
</script>

<div class="mt-4" style="min-width: 150px; max-width: 200px;">
	<button class="bg-skeleton rounded-lg" on:click={handleOpenModal}>
		<img
			class="hover:opacity-75 transition ease-in-out duration-150 rounded-lg bg-skeleton poster"
			alt={title}
			src={poster}
			loading="lazy"
			width="150"
			height="225"
		/>
	</button>
	<div>
		<a
			href={type === 'movie' ? `/movies/${id}` : `/series/${id}`}
			class="hover:text-gray:300 text-sm font-medium"
		>
			{title}
		</a>
		<div>
			<!-- @if ($displayGenres)
            @foreach ($genres as $key => $genre)
                @if($genre !== null)  
                    <a href="{{ route("{$type}.index"). "?category=$genre" }}" class="tag mini_tag">
                        {{ $genre }}
                    </a>
                @endif
            @endforeach
        @endif  -->
		</div>
	</div>
</div>
