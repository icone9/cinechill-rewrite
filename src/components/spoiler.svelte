<script lang="ts">
  import { onMount } from 'svelte';
  export let content: string;
  export let maxLength = 100;
  let className: string | undefined;

	export { className as class };
  let isCollapsed = true;
  let sliceContent = '';

	onMount(() => {
		if(content.length > maxLength) {
      sliceContent = content.slice(0, maxLength) + '...'
    }else{
      sliceContent = content
    }
	});

  function handleClick() {
    if(isCollapsed){
      isCollapsed = false;
      sliceContent = content;
    }else{
      isCollapsed = true
      sliceContent = content.slice(0, maxLength) + '...'
    }
  }
</script>

<p class={className ? className: ''}>
  <span>{sliceContent}</span>
  <button
  on:click={handleClick}
  class="block mt-2 underline text-primary font-semibold focus:outline-none"
  >{isCollapsed ? 'Show more' : 'Show less'}{maxLength}</button>
</p>