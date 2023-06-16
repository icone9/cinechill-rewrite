<script>
	import AuthCard from '$components/authCard.svelte';
</script>

<AuthCard>
	<div slot="logo">
		<a href="/" class="text-primary text-4xl font-bold">
			<span class="text-white">Cine</span>Chill
		</a>
	</div>

	<slot />
</AuthCard>
