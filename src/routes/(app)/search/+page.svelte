<script>
	import SearchDropdown from "$components/search/search-dropdown.svelte";
</script>

<div class="pt-16">
  <h1>Search Page</h1>
  <SearchDropdown/>
  <!-- <div class="p-4 md:px-8">
      <livewire:search-dropdown />
  </div> -->
  <!-- <div class="search-results mx-4">
      <div class="block md:flex justify-between py-4">
          <div>
              @if ($q)
              <h2 class="uppercase tracking-wider text-lg font-semibold">
                  Results for: {{ $q }}
              </h2>
              @endif
              @if (count($selectedGenres) > 0)
              <div class="max-w-lg tracking-wider text-base font-semibold pb-2">
                  Filter:
                  @foreach ($selectedGenres as $key => $genre)
                  <button class="tag big_tag group hover:bg-blue-500">
                      {{ $genre }}
                  </button>
                  @endforeach
              </div>
              @endif
          </div>
          {{-- <livewire:components.select 
          title="Select Type"
          :data="$types"
          :single-choice="true"
          />
          <div class="pt-4 block md:hidden">
              <livewire:components.select 
              title="Filter By Genre"
              :data="$genres"
              :single-choice="false"
              />
          </div> --}}
      </div>
      <div class="genres pt-2 pb-6">
          <h2 class=" tracking-wider text-base md:tex-lg font-semibold inline-block">Filter By:</h2>
          @foreach ($genres as $key => $genre)
              <button wire:click="addGenre({{ $key }}, '{{ $genre }}')" class="tag big_tag group hover:bg-blue-500">
                  @if (in_array($genre, $selectedGenres))
                      <svg width="24" class="inline-block text-blue-500 group-hover:text-white w-5" height="24"
                          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" color="#000">
                          <path d="M0 0h24v24H0z" fill="none"></path>
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                      </svg>
                  @endif
                  <span class="pl-0.5"></span>{{ $genre }}
              </button>
          @endforeach
      </div> -->

      <!-- <div class="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4">
          @foreach ($results as $result)
              <x-poster 
              :mediaId="$result['id']" 
              :image="$result['poster_path']" 
              :name="$result['name']"    
              :published-date="$result['release_date']" 
              :type="$result['type']" 
              :genres="$result['genres']"
              :overview="$result['overview']" 
              :lang="$result['lang']" 
              :vote-average="$result['vote_average']" 
              />
          @endforeach
      </div> -->
  <!-- </div> -->
</div>