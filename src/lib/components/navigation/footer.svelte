<script>
	let date = new Date();
</script>

<footer class="rounded-2xl shadow py-2 px-4 bg-gray-900 bg-opacity-30 mt-6">
	<div class="sm:flex sm:items-center sm:justify-between">
		<a href="/" class="text-2xl font-bold mb-4 sm:mb-0">
			Cine<span class="text-main">chill</span>
		</a>
		<ul class="flex flex-wrap items-center mb-4 pt-1.5 text-sm sm:mb-0">
			<li>
				<a href="/pages/about" class="mr-4 hover:underline md:mr-6"> About </a>
			</li>
			<li>
				<a href="/pages/contact" class="mr-4 hover:underline md:mr-6"> Privacy Policy </a>
			</li>

			<li>
				<a href="/pages/contact" class="hover:underline"> Contact </a>
			</li>
		</ul>
	</div>
	<hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
	<span class="block text-sm text-center">
		© {date.getFullYear()} <a href="https://icone.com/" class="hover:underline">Icone</a>. All
		Rights Reserved.
	</span>
</footer>
