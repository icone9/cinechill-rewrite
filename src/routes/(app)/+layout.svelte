
<script>
	import Footer from "$components/footer.svelte";
	import Navbar from "$components/navbar.svelte";
	import ModalCore from "$components/modals/modal-core.svelte";
</script>

<Navbar/>
  <main>
    <slot/>
  </main>
<ModalCore/>
<Footer/>
