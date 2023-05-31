<script lang="ts">
	let className: string | undefined;
	export { className as class };
  export let lineClamp: number | undefined;

</script>

<div 
class={className ? 
  lineClamp ? `custom-text line-clamp ${className}` : `custom-text ${className}`
  : lineClamp ? `custom-text line-clamp` : 'custom-text'
}
style="--line-clamp: {lineClamp}"
>
  <slot/>
</div>

<style>
  .custom-text{
    -webkit-tap-highlight-color: transparent;
    font-size: inherit;
    line-height: 1.55;
    -webkit-text-decoration: none;
    text-decoration: none;
  }
  .line-clamp{
    display: -webkit-box;
    -webkit-line-clamp: var(--line-clamp);
    -webkit-box-orient: vertical; 
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>