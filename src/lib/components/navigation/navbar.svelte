<script lang="ts">
	import { enhance } from '$app/forms';
	import { clickOutside } from '$utils/click-outside';
	import IconMenu from '../icons/IconMenu.svelte';
	import IconSearch from '../icons/IconSearch.svelte';
	import IconX from '../icons/IconX.svelte';
	export let user: any | undefined | null;

	let open = false;
	let userDropdownOpen = false;
	let y: number;
	const handleNavOpen = () => (open = !open);
	const handleUserDropdownOpen = () => (userDropdownOpen = !userDropdownOpen);
</script>

<nav 
class={`fixed w-full navigation z-30 ${y > 100 ? 'bg-[#232426] shadow-md' : ''} ${open ? 'bg-[#232426]' : ''}`}
>
	<div class="max-w-7xl mx-auto px-1 md:px-6">
		<div class="relative flex items-center justify-between py-4">
			<div class="flex items-center">
				<button
					on:click={handleNavOpen}
					class="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 focus:outline-none sm:hidden"
					aria-expanded="false"
				>
					<span class="sr-only">Open main menu</span>
					<div class={open ? 'hidden' : 'inline-block'}>
						<IconMenu class="inline-block h-6 w-6" />
					</div>
					<div class={open ? 'inline-block' : 'hidden'}>
						<IconX class="inline-block h-6 w-6" />
					</div>
				</button>
				<h4 class="font-semibold text-xl text-white ml-2">
					<a href="/">
						Cine<span class="text-main">Chill</span>
					</a>
				</h4>
			</div>
			<div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
				<div class="hidden sm:block sm:ml-6">
					<div class="flex space-x-4">
						<a
							href="movies"
							class="py-2 px-3 rounded-md text-sm font-medium flex items-center justify-center text-white"
						>
							Movies
						</a>
						<a
							href="/series"
							class=" py-2 px-3 rounded-md text-sm font-medium flex items-center justify-center text-white"
						>
							Series
						</a>
						<a
							href="/actors"
							class="py-2 px-3 rounded-md text-sm font-medium flex items-center justify-center text-white"
						>
							Actors
						</a>
					</div>
				</div>
			</div>
			<a
				href="/search"
				class="p-1 rounded-full text-gray-200 hover:text-white focus:outline-none flex item-center justify-center mr-1"
			>
				<span class="sr-only">Open Search</span>
				<IconSearch class="inline-block h-6 w-6" stroke={2} />
			</a>
			<div class="flex items-center ml-2 md:ml-4">
				{#if !user}
					<a
						href="/login"
						class="bg-main py-2 px-3 rounded-md text-sm font-medium flex items-center justify-center text-white mr-1 md:mr-2"
					>
						Login
					</a>
				{/if}
				{#if user}
					<button
						class="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0"
						type="button"
						on:click={handleUserDropdownOpen}
					>
						<span class="sr-only">Open user menu</span>
						<div
							class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600"
						>
							<svg
								class="absolute w-12 h-12 text-gray-400 -left-1"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
								><path
									fill-rule="evenodd"
									d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
									clip-rule="evenodd"
								/></svg
							>
						</div>
					</button>

					<div
						use:clickOutside={() => (userDropdownOpen = false)}
						class={`z-10 divide-y rounded-lg shadow w-44 bg-gray-700 divide-gray-600 absolute top-16 right-0 ${
							userDropdownOpen ? '' : 'hidden'
						}`}
					>
						<div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
							<div>{user.username}</div>
							<div class="font-medium truncate">{user.email}</div>
						</div>
						<ul
							class="py-2 text-sm text-gray-700 dark:text-gray-200"
							aria-labelledby="dropdownUserAvatarButton"
						>
							<li>
								<a
									href="/favorites"
									class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
									>Favorites</a
								>
							</li>

							<li>
								<a
									href="/dashboard"
									class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
									>Dashboard</a
								>
							</li>
						</ul>
						<div class="py-2">
							<form method="POST" action="/login?/logout" use:enhance>
								<button
									type="submit"
									class="block px-4 py-2 text-sm hover:bg-gray-600 text-gray-200 hover:text-white w-full text-start"
								>
									Sign out
								</button>
							</form>
						</div>
					</div>
				{/if}

				<!-- <a href="/auth/register"
            class="py-2 px-3 rounded-md text-sm font-medium  flex items-center justify-center text-white navbar">
                Register
            </a> -->
			</div>
		</div>
	</div>
	<!-- @endauth :class="{'block': navOpen, 'hidden': !navOpen } -->
	<div
		class={`h-screen mb-4 mt-10 ${open ? '' : 'hidden'}`}
		style="font-family: 'antique-olive,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji';"
	>
		<div class="px-2 pt-2 pb-3 space-y-1 text-5xl tracking-wider font-bold ml-2">
			<a href="/movies" class="hover:text-white rounded-md flex items-center px-2 py-2">
				<span class="text-primary">Movies</span>
			</a>
			<a
				href="/series"
				class="text-gray-200 hover:bg-gray-200/10 hover:text-white px-3 py-2 rounded-md flex items-center"
			>
				Series
			</a>
			<a
				href="/favorites"
				class="text-gray-200hover:bg-gray-200/10 hover:text-white px-3 py-2 rounded-md flex items-center"
			>
				Favorites
			</a>
			<!-- <a 
          href="/musicplaylists"
          class="text-gray-300 hover:bg-gray-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Anime
          </a>  -->
			<a
				href="/actors"
				class="text-gray-200 hover:bg-gray-200/10 hover:text-white px-3 py-2 rounded-md flex items-center"
			>
				Actors
			</a>
		</div>
	</div>
</nav>

<svelte:window bind:scrollY={y} />
