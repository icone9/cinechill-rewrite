<script lang="ts">
	import { Home, Layers, Compass, User2, Heart } from "lucide-svelte"
</script>

<section id="bottom-navigation" class="block fixed inset-x-0 bottom-0 z-10 bg-gray-900 shadow">
  <div id="tabs" class="flex justify-between teext-white">
    <a href="/" class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
      <Home class="inline-block mb-1"/>
      <span class="tab tab-home block text-xs">Home</span>
    </a>
    <a href="/" class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
      <Layers class="inline-block mb-1"/>
      <span class="block text-xs">Category</span>
    </a>
    <a href="/" class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
      <Compass class="inline-block mb-1"/>
      <span class="block text-xs">Explore</span>
    </a>
    <a href="/" class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
      <Heart class="inline-block mb-1"/>
      <span class="block text-xs">Whishlist</span>
    </a>
    <a href=/ class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
      <User2 class="inline-block mb-1"/>
      <span class=" block text-xs">Account</span>
    </a>
  </div>
</section>