<script lang="ts">
	import Input from "$components/form/input.svelte";
	import Label from "$components/form/label.svelte";
  import { enhance } from "$app/forms";
	import type { SubmitFunction } from "@sveltejs/kit";

  let loading = false;

  const onSubmit: SubmitFunction = () => {
    loading = true;
    return ({ update }) => {
      update({reset: false})
      loading = false
    }
  }
</script>
  <!-- <x-auth-header/> -->

  <!-- Session Status -->
  <!-- <x-auth-session-status class="mb-4" :status="session('status')" /> -->

  <!-- Validation Errors -->
  <!-- <x-auth-validation-errors class="mb-4" :errors="$errors" /> -->

<form method="POST" use:enhance={onSubmit} action="?/login">
  <div class="space-y-2">
    <div>
      <Label htmlFor="username" value="Username" />

      <Input id="username" class="block mt-1 w-full" type="text" name="username" required/>
    </div>

    <div class="mt-4">
      <Label htmlFor="password" value="Password" />

      <Input 
      id="password" 
      class="block mt-1 w-full"
      type="password"
      name="password"
      required />
    </div>
  </div>
  <!-- <div class="mt-2">
        <a class="underline text-sm text-gray-200 hover:text-gray-400" href="{{ route('password.request') }}">
            Forgot your password?
        </a>
  </div> -->

  <div class="flex items-center justify-between mt-4">
    <a class="underline text-sm text-gray-200 hover:text-gray-400 mr-2" href="/register">
      Create a account
    </a>

    <button type="submit" class="ml-3 bg-primary p-2 rounded-lg font-semibold">
      {loading ? "loading..." : 'Log in'}
    </button>
  </div>
</form>
