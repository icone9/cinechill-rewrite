<script>
	import IconPlay from "$components/icons/IconPlay.svelte";
	import IconX from "$components/icons/IconX.svelte";
	import { clickOutside } from "$utils/click-outside";
    import { modalPosterStore } from "../../stores/global-store";

    function closeModal() {
        modalPosterStore.set({isModalOpen: false, contentType: null, details: null})
    }
</script>
<div
class={`fixed inset-0 w-screen bg-gray-900 bg-opacity-80 transition-opacity duration-300 
${$modalPosterStore.isModalOpen ? 'opacity-100 h-screen z-30': 'opacity-0 pointer-events-none z-0 h-0'}`}
>
    <div
    class={`absolute top-1/2 left-1/2 block overflow-y-auto scrollbar-none rounded-xl max-w-full max-h-full bg-gray-800 transition-opacity duration-150 h-[28rem] w-[90%] md:w-[50%]
    ${$modalPosterStore.isModalOpen ? 'opacity-100 z-50': 'opacity-0 pointer-events-none z-0'}
    `}
    style="transform: translate(-50%, -50%);"
    use:clickOutside={() => closeModal()}
    >
        <button
        on:click={closeModal}
        class="group Modal__closebtn absolute z-10 inline-flex p-2 rounded-full text-lg cursor-pointer mb-3 bg-black text-white border  border-white outline-none duration-300 hover:bg-white hover:text-white"
        style="top: 2%;right: 2%; margin: 0 5px;"
        >
            <IconX class="text-white group-hover:text-black w-6 h-6"/>
        </button>
        <div class="relative w-full">
            <img
            class="w-[50rem] h-[24rem] rounded-tl-md rounded-tr-md object-cover Modal__image--img bg-skeleton"
            src={$modalPosterStore.details?.poster}
            alt="John wick 4 poster"
            loading="lazy"
            >
            <div class="absolute bottom-0 left-0 w-full fadeBottom"/>
            <div class="absolute flex items-center left-6 bottom-6">
                <a href="/test" class="banner_button bg-primary px-10">
                    <IconPlay class="w-4 h-4"/>
                    <span class="ml-2">Play</span>
                </a>
                <!-- <x-like-button/> -->
            </div>
        </div>
        <div  style="padding: 1em 1.5em;" class="Modal__info--wrp">
            <h3 class="text-xl leading-snug font-semibold mb-4" >
              {$modalPosterStore.details?.title} 
            </h3>
            <p class="text-sm leading-relaxed">
              {$modalPosterStore.details?.overview}
            </p>
            <hr style=" border-color: rgba(121,121,121,0.7);
      margin: 1em 0;" class="Modal__info--line">
            <h4 class="leading-snug font-medium mb-4 text-base">
                Info on <span>{$modalPosterStore.details?.title}</span>
            </h4>
            <div class="text-sm ml-0 m-2 break-all leading-normal font-medium">
                <span class='text-gray-500'>Genres: </span>
                <span class="text-gray-200"/>
               
                <a href="/" class="tag mini_tag" >genre</a>
                <a href="/" class="tag mini_tag" >Adventure</a>
                <a href="/" class="tag mini_tag" >Animation</a>
                <a href="/" class="tag mini_tag" >Drama</a>
                <a href="/" class="tag mini_tag" >Romance</a>
            </div>
          
             <div class="text-sm ml-0 m-2 break-all leading-normal font-medium">
                <span class=' text-gray-500'>Release date: </span>
                <span class="text-gray-200">{$modalPosterStore.details?.release_date}</span>
            </div>
   
            <div class="text-sm ml-0 m-2 break-all leading-normal font-medium">
                <span class=' text-gray-500'>Average vote: </span>
                <span class="text-gray-200">{$modalPosterStore.details?.vote_average}</span>
            </div>

            <div class="text-sm ml-0 m-2 break-all leading-normal font-medium">
                <span class=' text-gray-500'>Original language: </span>
                <span class="text-gray-200">{$modalPosterStore.details?.original_language}<span>
            </div>
  
        </div> 
    </div>
</div>
