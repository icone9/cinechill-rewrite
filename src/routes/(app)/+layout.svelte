<script lang="ts">
	import Footer from '$components/navigation/footer.svelte';
	import Navbar from '$components/navigation/navbar.svelte';
	import ModalCore from '$components/modals/modal-core.svelte';
	import type { LayoutData } from './$types';
	// import BottomNavigation from '$components/navigation/bottom-navigation.svelte';

	export let data: LayoutData;
</script>

<Navbar user={data.user} />
<main>
	<slot />
	<!-- <BottomNavigation/> -->
</main>
<ModalCore />
<Footer />
