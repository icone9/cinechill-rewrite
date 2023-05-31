<script>
	import AuthCard from "$components/authCard.svelte";
	import Input from "$components/form/input.svelte";
	import Label from "$components/form/label.svelte";
</script>

<AuthCard>
  <div slot="logo">
      <a href="/" class="text-primary text-4xl font-bold">
          <span class="text-white">Cine</span>Chill
      </a>
  </div>

  <!-- <x-auth-header/> -->

  <!-- Session Status -->
  <!-- <x-auth-session-status class="mb-4" :status="session('status')" /> -->

  <!-- Validation Errors -->
  <!-- <x-auth-validation-errors class="mb-4" :errors="$errors" /> -->

  <form method="POST" >

      <!-- Email Address -->
      <div>
        <Label htmlFor="email" value="Email" />

        <Input id="email" class="block mt-1 w-full" type="email" name="email" value="" required/>
      </div>

      <!-- Password -->
      <div class="mt-4">
        <Label htmlFor="password" value="Password" />

        <Input 
        id="password" 
        class="block mt-1 w-full"
        type="password"
        name="password"
        value=''
        required />
      </div>

      <!-- Remember Me -->
      <div class="block mt-4">
        <label for="remember_me" class="inline-flex items-center">
            <input id="remember_me" type="checkbox" class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" name="remember">
            <span class="ml-2 text-sm text-gray-200">Remember me</span>
        </label>
      </div>
      <!-- <div class="mt-2">
            <a class="underline text-sm text-gray-200 hover:text-gray-400" href="{{ route('password.request') }}">
                Forgot your password?
            </a>
      </div> -->

      <div class="flex items-center justify-end mt-4">
          <a class="underline text-sm text-gray-200 hover:text-gray-400 mr-2" href="/auth/register">
            Create a account
          </a>

          <x-button class="ml-3 b-primary">
              Log in
          </x-button>
      </div>
      
  </form>
</AuthCard>