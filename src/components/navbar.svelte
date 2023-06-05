<script lang="ts">
	import IconMenu from "./icons/IconMenu.svelte";
	import IconSearch from "./icons/IconSearch.svelte";
	import IconX from "./icons/IconX.svelte";

    let open = false;
    let y: number;
</script>

<nav class={`fixed w-full navigation z-30 ${y > 100 ?'bg-black' : ''}`}>
  <div class="max-w-7xl mx-auto px-1 md:px-6">
      <div class="relative flex items-center justify-between h-16">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <!-- @click="navOpen = !navOpen"  -->
              <button
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false">
                  <span class="sr-only">Open main menu</span>
                  <div class="{open ? 'hidden' : 'inline-block'}">
                    <IconMenu  class="inline-block h-6 w-6"/>
                  </div>
                  <div class="{open ? 'inline-block' : 'hidden'}">
                    <IconX class="inline-block h-6 w-6"/>
                  </div>
              </button>
          </div>
          <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div class="flex-shrink-0 flex items-center">
                  <h4 class="font-semibold text-xl text-white">
                      <a href="/">
                          Cine<span class="text-primary">Chill</span>
                      </a>
                  </h4>
              </div>
              <div class="hidden sm:block sm:ml-6">
                  <div class="flex space-x-4">
                      <a href="movies"
                          class="py-2 px-3 rounded-md text-sm font-medium  flex items-center justify-center text-white">
                          Movies
                      </a>
                      <a href="/series"
                          class=" py-2 px-3 rounded-md text-sm font-medium  flex items-center justify-center text-white">
                          Series
                      </a>
                      <a href="/actors"
                          class="py-2 px-3 rounded-md text-sm font-medium  flex items-center justify-center text-white">
                          Actors
                      </a>
                      <a href="/favorites"
                          class="py-2 px-3 rounded-md text-sm font-medium  flex items-center justify-center text-white">
                          Favorites
                      </a>
                  </div>
              </div>
          </div>
          <div>
              <a 
              href="/search"
              class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white flex item-center justify-center">
                  <span class="sr-only">Open Search</span>
                  <IconSearch class="inline-block h-6 w-6"/>
              </a>
          </div>
          <div class="flex items-center ml-2 md:ml-4">
              <a 
              href="/auth/login"
              class="bg-primary py-2 px-3 rounded-md text-sm font-medium  flex items-center justify-center text-white mr-1 md:mr-2">
                  Login
              </a>
              <a href="/auth/register"
              class="py-2 px-3 rounded-md text-sm font-medium  flex items-center justify-center text-white navbar">
                  Register
              </a>
          </div>

           <!-- @auth
          <x-dropdown align="right" width="48">
              <x-slot name="trigger">
                  <button
                      class="flex items-center text-sm font-medium text-gray-300 bg-gray-500 bg-opacity-20 py-1 px-2 rounded-lg transition duration-150 ease-in-out">
                      <div>{{ Auth::user()->username }}</div>

                      <div class="ml-1">
                          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                              <path fill-rule="evenodd"
                                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                  clip-rule="evenodd" />
                          </svg>
                      </div>
                  </button>
              </x-slot>

              <x-slot name="content">
                  <form method="POST" action="{{ route('logout') }}">
                      @csrf
                      <x-dropdown-link class="flex items-center" :href="route('logout')" onclick="event.preventDefault();
                                              this.closest('form').submit();">
                          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none"
                          class="text-gray-300 mr-4"
                          viewBox="0 0 24 24" stroke="currentColor" color="#000"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                          {{ __('Log Out') }}
                      </x-dropdown-link>
                  </form>
              </x-slot>
          </x-dropdown> -->
          
      </div>
  </div>
  <!-- @endauth :class="{'block': navOpen, 'hidden': !navOpen } -->
  <div class="hidden sm:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
          <a href="/movies"
              class="text-gray-300 hover:bg-gray-900 hover:text-white  px-3 py-2 rounded-md text-base font-medium flex items-center">
              Movies
          </a>
          <a href="/series"
              class="text-gray-300 hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-base font-medium flex items-center">
              Series
          </a>
          <a href="/favorites"
              class="text-gray-300 hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-base font-medium flex items-center">
              Favorites
          </a>
          <!-- <a 
          href="/musicplaylists"
          class="text-gray-300 hover:bg-gray-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Anime
          </a>  -->
          <a href="/actors"
          class="text-gray-300 hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-base font-medium flex items-center">
              Actors
          </a>
      </div>
  </div>
</nav>

<svelte:window bind:scrollY={y} />