<script lang="ts">
  export let disabled = false;
  export let id: string;
  export let name: string;
  export let type = 'text';
  export let value: string;
  export let required = false;
  let className: string | undefined;

	export { className as class };
</script>

<input
class={`rounded-md shadow-sm border-gray-500 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-gray-800 text-white ${className ? className: ''}`}
id={id}
type={type}
name={name}
value={value}
required={required}
disabled={disabled}/>