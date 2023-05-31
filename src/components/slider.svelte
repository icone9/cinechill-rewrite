<script lang='ts'>
  export let title: string;
  export let path: string;
</script>

<div class='mt-4' >
  <div class="flex items-center justify-between ml-2">
      <h2 class="tracking-wider text-xl lg:text-2xl font-bold">
          {title}
      </h2>
      <span  class="p-1 bg-gray-500 bg-opacity-20 transform hover:scale-105 rounded-full mr-2 text-primary"
      >
        <a href={path}>
          <svg width="24" class="text-white" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" color="#000"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </a>
      </span>
  </div>
  <div>
    <div class="flex overflow-y-hidden overflow-x-scroll scrollbar-none space-x-4 ml-4 mr-2">
        <slot/>
    </div>
  </div>
</div>