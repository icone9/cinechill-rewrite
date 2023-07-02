<script lang="ts">
	import IconPlay from '$components/icons/IconPlay.svelte';
	export let title: string;
	export let poster: string;
</script>

<div class="rounded max-w-full max-h-full transition-all duration-150 opacity-100 block md:hidden">
	<div class="relative Modal__image--wrp h-full w-full">
		<img src={poster} alt={title} class="h-full md:h-96 w-full object-cover" />
		<!-- <iframe
      src="https://youtube.com/embed/{{ $info['key'] }}?autoplay=1" 
      style="border: 0;" 
      with="360" height="390"  
      class=" w-full "
      allowfullscreen 
      allow="autoplay; encrypted-media">
      </iframe> -->
		<div
			class="absolute flex items-center left-1/2 top-1/2 Modal__image--buttonswrp"
			style="transform: translate(-50%, -50%);"
		>
			<button class="banner_button bg-primary px-10">
				<IconPlay />
				<span class="ml-2">Play</span>
			</button>
		</div>
	</div>
</div>
