<script>
	import "../styles/app.css";
	import Footer from "../components/footer.svelte";
	import Navbar from "../components/navbar.svelte";
</script>

<div >
	<Navbar />

	<main>
		<slot />
	</main>

	<Footer/>
</div>
