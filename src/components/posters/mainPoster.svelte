<script lang='ts'>
  export let name: string;
  export let image: string;
  export let path: string;
</script>

<div class='mt-4' style="min-width: 150px; max-width: 200px;">     
  <button class="bg-skeleton rounded-lg">
      <img 
      class="hover:opacity-75 transition ease-in-out duration-150 rounded-lg bg-skeleton poster"
      alt={name}
      src={image}
      loading="lazy"
      width="150"
      height="225"
      />
  </button>
  <div>
    <a href={path} class="hover:text-gray:300 text-sm font-medium">
      {name}
    </a>
    <div>
         <!-- @if ($displayGenres)
            @foreach ($genres as $key => $genre)
                @if($genre !== null)  
                    <a href="{{ route("{$type}.index"). "?category=$genre" }}" class="tag mini_tag">
                        {{ $genre }}
                    </a>
                @endif
            @endforeach
        @endif  -->
    </div>
  </div>
</div>