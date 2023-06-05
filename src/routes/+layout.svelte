<script>
	import "../styles/app.css";
	import Footer from "$components/footer.svelte";
	import Navbar from "$components/navbar.svelte";
	import ModalCore from "$components/modals/modal-core.svelte";
</script>

<div>
	<Navbar />

	<main>
		<slot />
	</main>
	<ModalCore/>
	<Footer/>
</div>
