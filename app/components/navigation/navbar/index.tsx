import { Link } from '@remix-run/react'
import { IconSearch, IconMenu, IconX } from '@tabler/icons'
import { useState } from 'react'
import { useOptionalUser } from '~/utils'
import cn from 'classnames'

interface NavbarProps {
  className?: string
}

const Navbar = ({ className }: NavbarProps) => {
   const user = useOptionalUser();
   const [open, setOpen] = useState(false)

  // {{ $attributes->merge(['className' => ""]) }} 
  //  :className="{'bg-black': navOpen }" x-data="{ navOpen: false }"
  return (
    <nav className='fixed w-full navigation z-30'>
    <div className="max-w-7xl mx-auto px-1 md:px-6">
        <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* @click="navOpen = !navOpen" */}
                <button
                onClick={() => setOpen(o => !o)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <div className={cn({'inline-block': !open, 'hidden': open })}>
                        <IconMenu className="h-6 w-6 text-white"/>
                    </div>
                    <div className={cn({ 'inline-block': open, 'hidden': !open })}>
                        <IconX className="h-6 w-6 text-white"/>
                    </div>
                </button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                    <h4 className="font-semibold text-xl text-primary">
                        <Link to="/">
                            <span className="text-white">Cine</span>Chill
                        </Link>
                    </h4>
                </div>
                <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                        <a href="/home"
                            className="{{ isRouteActive('home') }} py-2 px-3 rounded-md text-sm font-medium  flex items-center justify-center text-white">
                            Home
                        </a>
                        <a href="movies"
                            className="{{ isRouteActive('movie.*') }} py-2 px-3 rounded-md text-sm font-medium  flex items-center justify-center text-white">
                            Movies
                        </a>
                        <a href="/tv"
                            className="{{ isRouteActive('tv.*') }} py-2 px-3 rounded-md text-sm font-medium  flex items-center justify-center text-white">
                            Series
                        </a>
                        <a href="/actors"
                            className="{{ isRouteActive('actors.*') }} py-2 px-3 rounded-md text-sm font-medium  flex items-center justify-center text-white">
                            Actors
                        </a>
                        <a href="/favorites"
                            className="{{ isRouteActive('favorite.*') }} py-2 px-3 rounded-md text-sm font-medium  flex items-center justify-center text-white">
                            Favorites
                        </a>
                    </div>
                </div>
            </div>
            <div>
                <a href="/search"
                    className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white flex item-center justify-center">
                    <span className="sr-only">Open Search</span>
                    <IconSearch className="inline-block h-6 w-6"/>
                </a>
            </div>
            {!user ? <div className="flex items-center ml-2 md:ml-4">
                <Link 
                to="/login"
                className="bg-primary py-2 px-3 rounded-md text-sm font-medium  flex items-center justify-center text-white mr-1 md:mr-2">
                    Login
                </Link>
                <Link to="/join"
                className="py-2 px-3 rounded-md text-sm font-medium  flex items-center justify-center text-white navbar">
                    Register
                </Link>
            </div> : null}

            {/* @auth */}
            {/* <x-dropdown align="right" width="48">
                <x-slot name="trigger">
                    <button
                        className="flex items-center text-sm font-medium text-gray-300 bg-gray-500 bg-opacity-20 py-1 px-2 rounded-lg transition duration-150 ease-in-out">
                        <div>{{ Auth::user()->username }}</div>

                        <div className="ml-1">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
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
                        <x-dropdown-link className="flex items-center" :href="route('logout')" onclick="event.preventDefault();
                                                this.closest('form').submit();">
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none"
                            className="text-gray-300 mr-4"
                            viewBox="0 0 24 24" stroke="currentColor" color="#000"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                            {{ __('Log Out') }}
                        </x-dropdown-link>
                    </form>
                </x-slot>
            </x-dropdown> */}
            
        </div>
    </div>
    {/* @endauth :className="{'block': navOpen, 'hidden': !navOpen }"*/}
    <div className="hidden sm:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="/"
                className="{{ isRouteActive('home') }} text-gray-300 hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-base font-medium flex items-center">
                {/* <x-icon.home className="text-gray-300 mr-4"/> */}
                Home
            </a>
            <a href="/tv"
                className="{{ isRouteActive('movie.*') }}  text-gray-300 hover:bg-gray-900 hover:text-white  px-3 py-2 rounded-md text-base font-medium flex items-center">
                {/* <x-icon.movie className="text-gray-300 mr-4"/> */}
                Movies
            </a>
            <a href="/tv"
                className="{{ isRouteActive('tv.*') }} text-gray-300 hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-base font-medium flex items-center">
                {/* <x-icon.serie className="text-gray-300 mr-4"/> */}
                Series
            </a>
            <a href="/favorites"
                className="{{ isRouteActive('favorite.*') }} text-gray-300 hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-base font-medium flex items-center">
                {/* <x-icon.heart className="text-gray-300 mr-4"/> */}
                Favorites
            </a>
            {/* <a 
            href="/musicplaylists"
            className="text-gray-300 hover:bg-gray-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Anime
            </a> */}
            <a href="/actors"
            className="{{ isRouteActive('actors.*') }}  text-gray-300 hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-base font-medium flex items-center">
                {/* <x-icon.people className="text-gray-300 mr-4"/> */}
                Actors
            </a>
        </div>
    </div>
</nav>

  )
}

export default Navbar