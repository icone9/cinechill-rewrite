<script lang="ts">
  import { Search } from 'lucide-svelte'
	let open = false;
	const handleNavOpen = () => (open = !open);
  const onFocus = () => open =true;
  const onKeydown = (e: any) => {
    // if (event.key === 'Escape') {
		// 	open = false;	
		// }
    // if(event.keyCode === 191) {
    //   // focus
    // }
  }
</script>

<div class="relative mt-3 md:mt-0">
  <form method="GET" action='/search'>
      <input type="text"  
      class="bg-gray-800 rounded-full w-full px-4 pl-8 py-1 focus:outline-none focus:shadow-outline" 
      placeholder="Search"
      autocomplete="off"
      name="q"
      on:focus={onFocus}
      on:keydown={onFocus}
      >

      <div class="absolute top-1/2 -translate-x-1/2 -translate-y-1/2">
        <Search class="fill-current w-4 text-gray-500 ml-8"/>
      </div>
      <div  class="absolute top-0 right-0 mr-2 my-1">
          <svg width="24" height="24" class="text-gray-400 w-5" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" color="#000"><g transform="translate(1 1)" stroke-width="2" fill="none" fill-rule="evenodd"><circle stroke-opacity=".5" cx="18" cy="18" r="18"></circle><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"></animateTransform></path></g></svg>
      </div>
  </form>
<!-- 
  @if(strlen($q) > 2)
      <div class="z-50 absolute bg-gray-800 rounded w-full mt-4"
      x-show.transition.opacity="isOpen"       
      >
          @if($searchResults->count() > 0)
              <ul>
                  @foreach ($searchResults as $result)
                      <li class="border-b border-gray-700">
                          <a href="{{ route('movie.show', $result['id']) }}" class="hover:bg-gray-700 px-3 py-3 flex items-center transition ease-in-out
                          duration-150"
                          @if($loop->last) @keydown.tab="isOpen = false" @endif
                          >
                              @if($result['poster_path'])
                                  <img src="{{ 'https://image.tmdb.org/t/p/w92'.$result['poster_path'] }}"  class="w-8" alt="poster">
                              @else
                                  <img src="https://via.placeholder.com/50x75" class="w-8" alt="">
                              @endif
                                  <span class="text-white ml-4">{{ $result['title'] }}</span>
                          </a>
                      </li>
                  @endforeach
              </ul>
          @else
              <div class="px-3 py-3">No results for *{{ $q }}*</div>
          @endif           
      </div>
  @endif -->
</div>