
import { discoverWithGenre, discoverWithNetwork } from "$lib/server/models/common";
import shuffleArray from "$utils/shuffle-array";
import { TMDB_IMAGE_URL } from "$constants/index";
import type { Movie, TvShow } from "$types";
import { randomIntFromInterval } from "$utils/random-number-in-a-interval";
import { fetchTMDB } from "$utils/tmdb";
import type { PageServerLoad } from "./$types";

export const load = (async () => {
  const getBanner = async () => {
    const banner = (await discoverWithNetwork('movie', '213')).results[randomIntFromInterval(1, 19)]
    return {
      title: banner.title,
      overview: banner.overview,
      backdrop_path: 
        `${TMDB_IMAGE_URL}/original${banner.backdrop_path}`
    }
  }

  const getTrendingMedia = async () => {
    const trendingMovies = (await fetchTMDB<{ page: number,  results:  Movie[]}>("/movie/popular")).results
    const trendingTvShow = (await fetchTMDB<{ page: number,  results:  TvShow[]}>("/tv/popular")).results

    const trending = [
      ...trendingMovies.map((movie) => ({
        id: movie.id,
        title: movie.original_title,
        poster: `${TMDB_IMAGE_URL}/w200${movie.poster_path}`,
        overview: movie.overview,
        vote_average: movie.vote_average,
        original_language: movie.original_language,
        release_date: movie.release_date,
        type: 'movie',
      })),
      ...trendingTvShow.map((tvShow) => ({
        id: tvShow.id,
        title: tvShow.name,
        poster: `${TMDB_IMAGE_URL}/w200${tvShow.poster_path}`,
        overview: tvShow.overview,
        vote_average: tvShow.vote_average,
        original_language: tvShow.original_language,
        release_date: tvShow.first_air_date,
        type: 'serie',
      }))
    ]
    return shuffleArray(trending).slice(0, 19)
  }

  const getActionAndAdventureMedia = async () => {
    const aaMovies = (await discoverWithGenre('movie', '28,12')).results
    const aaTvShow = (await discoverWithGenre('tv', '10759')).results
    
    const aa = [
      ...aaMovies.map((movie) => ({
        id: movie.id,
        title: movie.original_title,
        poster: `${TMDB_IMAGE_URL}/w200${movie.poster_path}`,
        overview: movie.overview,
        vote_average: movie.vote_average,
        original_language: movie.original_language,
        release_date: movie.release_date,
        type: 'movie',
      })),
      ...aaTvShow.map((tvShow) => ({
        id: tvShow.id,
        title: tvShow.name,
        poster: `${TMDB_IMAGE_URL}/w200${tvShow.poster_path}`,
        overview: tvShow.overview,
        vote_average: tvShow.vote_average,
        original_language: tvShow.original_language,
        release_date: tvShow.release_date,
        type: 'serie',
      }))
    ]
    return shuffleArray(aa).slice(0, 19)
  }

  const getTopRatedMedia = async () => {
    const topRatedMovies = (await fetchTMDB<{ page: number,  results:  Movie[]}>("/movie/top_rated")).results
    const topRatedTvShow = (await fetchTMDB<{ page: number,  results:  TvShow[]}>("/tv/top_rated")).results
    
    const topRated = [
      ...topRatedMovies.map((movie) => ({
        id: movie.id,
        title: movie.title,
        poster: `${TMDB_IMAGE_URL}/w200${movie.poster_path}`,
        overview: movie.overview,
        vote_average: movie.vote_average,
        original_language: movie.original_language,
        release_date: movie.release_date,
        type: 'movie',
      })),
      ...topRatedTvShow.map((tvShow) => ({
        id: tvShow.id,
        title: tvShow.name,
        poster: `${TMDB_IMAGE_URL}/w200${tvShow.poster_path}`,
        overview: tvShow.overview,
        vote_average: tvShow.vote_average,
        original_language: tvShow.original_language,
        release_date: tvShow.first_air_date,
        type: 'serie',
      }))
    ]
    return shuffleArray(topRated).slice(0, 19)
  }

  const getAnimationsMedia = async () => {
    const animationMovies = (await discoverWithGenre('movie', '16')).results
    const animationTvShow = (await discoverWithGenre('tv', '16')).results
    // console.log(animationTvShow, 'an')
    const animations = [
      ...animationMovies.map((movie) => ({
        id: movie.id,
        title: movie.original_title,
        poster: `${TMDB_IMAGE_URL}/w200${movie.poster_path}`,
        overview: movie.overview,
        vote_average: movie.vote_average,
        original_language: movie.original_language,
        release_date: movie.release_date,
        type: 'movie',
      })),
      ...animationTvShow.map((tvShow) => ({
        id: tvShow.id,
        title: tvShow.name,
        poster: `${TMDB_IMAGE_URL}/w200${tvShow.poster_path}`,
        overview: tvShow.overview,
        vote_average: tvShow.vote_average,
        original_language: tvShow.original_language,
        release_date: tvShow.release_date,
        type: 'serie',
      }))
    ]
    return shuffleArray(animations).slice(0, 19)
  }


  
	return {
    banner: getBanner(),
    trending: getTrendingMedia(),
    aa: getActionAndAdventureMedia(),
    topRated: getTopRatedMedia(),
    animations: getAnimationsMedia()
	};

}) satisfies PageServerLoad;