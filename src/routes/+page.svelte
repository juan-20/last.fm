<script>
	let name = 'juancho-20';
	let current = '5';
</script>

<div class="flex items-center justify-center gap-4">
<input class="shadow appearance-none border border-indigo-700 rounded w-72 h-8 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
	bind:value={name} 
	placeholder="Seu @ do last.fm" id="lastfmUser" required autofocus>

	<a class="flex justify-center items-center bg-indigo-700 text-white w-32 h-8 rounded-lg" href="albuns/{name}/{current}">Click me</a>
</div>
<div class="flex">
<button
	class:active="{current === '3'}"
	on:click="{() => current = '3'}"
  class="bg-amber-500 w-32 hover:border-black hover:bg-amber-800"
>3 X 3 </button>

<button
	class:active="{current === '5'}"
	on:click="{() => current = '5'}"
  class="bg-amber-500 w-32 hover:border-black hover:bg-amber-800"
>5 X 5 </button>

<button
	class:active="{current === '10'}"
	on:click="{() => current = '10'}"
  class="bg-amber-500 w-32 hover:border-black hover:bg-amber-800"
>10 X 10 </button>
<button
	class:active="{current === '4'}"
	on:click="{() => current = '4'}"
  class="bg-amber-500 w-32 hover:border-black hover:bg-amber-800"
>4 X 4 </button>
</div>

<p>
	{current}
</p>