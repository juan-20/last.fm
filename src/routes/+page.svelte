<script>
	let name = '';
</script>

<div class="flex items-center justify-center gap-4">
<input class="shadow appearance-none border border-indigo-700 rounded w-72 h-8 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
	bind:value={name} 
	placeholder="Seu @ do last.fm" id="lastfmUser" required autofocus>

	<a class="flex justify-center items-center bg-indigo-700 text-white w-32 h-8 rounded-lg" href="albuns/{name}">Click me</a>
</div>