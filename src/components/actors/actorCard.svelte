<script lang='ts'>
  export let id: number;
  export let image: string;
  export let name: string;
</script>

<div class="actor mt-8 ">
  <a href="/actors/{id}" class="bg-skeleton rounded-lg">
      <img src={image}
      class="hover:opacity-75 transition ease-in-out duration-150 rounded-md lazyload"
      loading="lazy"
      width="190"
      height="190"
      alt=""
      >
  </a>
  <div class="mt-2">
      <a href="/actors/{id}" class="text-lg hover:text-gray-300">{name}</a>
      <!-- <div class="text-sm truncate text-gray-400">{{ $knownFor  }}</div> -->
  </div>
</div>