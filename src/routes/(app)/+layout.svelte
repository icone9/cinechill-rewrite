<script lang="ts">
	import Footer from '$components/navigation/footer.svelte';
	import Navbar from '$components/navigation/navbar.svelte';
	import ModalCore from '$components/modals/modal-core.svelte';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<Navbar user={data.user} />
<main>
	<slot />
</main>
<ModalCore />
<Footer />
