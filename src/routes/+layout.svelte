<script>
	import "../app.css";
</script>

<div class="app dark:bg-zinc-900 bg-slate-200 dark:text-white text-black">


	<main>
		<div aria-hidden="true" class="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
			<div class="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
			<div class="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
		</div>
		<slot />
	</main>


</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
