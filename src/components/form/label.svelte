<script lang="ts">
  export let value: string | undefined;
  export let htmlFor: string;
</script>

<label class="block font-medium text-sm text-gray-200" for={htmlFor}>
    {value}
</label>