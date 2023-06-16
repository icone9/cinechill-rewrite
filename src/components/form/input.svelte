<script lang="ts">
	export let disabled = false;
	export let id: string;
	export let name: string;
	export let type = 'text';
	export let required = false;
	let className: string | undefined;

	export { className as class };
</script>

<input
	class={`rounded-md shadow-sm border-gray-500 focus:border-purple-400 focus:ring focus:ring-purple-300 focus:ring-opacity-50 bg-gray-800 text-white py-2.5 px-2 ${
		className ? className : ''
	}`}
	{id}
	{type}
	{name}
	{required}
	{disabled}
/>
