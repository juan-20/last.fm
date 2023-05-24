<script>
	import "../app.css";
</script>

<div class="app dark:bg-zinc-900 bg-slate-200 dark:text-white text-black">
	<nav>
		<a href="/">Inicio</a>
	</nav>

	<main>
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
