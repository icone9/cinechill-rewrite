<script lang='ts'>
	import IconPlay from "./icons/IconPlay.svelte";
	import Text from "./text.svelte";

  export let backgroundImage: string;
  export let name: string;
  export let overview: string;
</script>

<header class="banner bg-center bg-cover" style='background-image: url({backgroundImage});'>
  <div class="banner_contents">
      <h1 class="text-3xl md:text-5xl lg:text-5xl leading-none pb-4 font-semibold">
        {name}
      </h1>
      <div class="banner_buttons flex items-center flex-wrap mt-4 ">
        <a href="/" class="banner_button bg-primary px-10 mt-2">
          <IconPlay class="w-6 h-6"/>
          <span class="ml-2">Play</span>
        </a>
        <a href="/" class="banner_button px-5 mt-2">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8s3.589-8,8-8 s8,3.589,8,8S16.411,20,12,20z"></path><path d="M11 11H13V17H11zM11 7H13V9H11z"></path></svg>
          <span class="ml-2">More info</span>
        </a>
           
      </div>
      <Text class="pt-4 font-semibold text-lg max-w-2xl" lineClamp={2}>
        {overview}
      </Text>
    </div>
  <div class="fadeBottom" />
</header>
