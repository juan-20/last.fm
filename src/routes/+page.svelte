<script>
	let name = 'juancho-20';
	let current = '5';
</script>

<!-- <div class="flex items-center justify-center gap-4">

</div>
<h2>Selecione o grid que deseja:</h2>
<p>
	{current} X {current}  esta selecionado.
</p>
<div class="flex items-center justify-center gap-4">

</div> -->
<svelte:head>
  <title>Semaninha</title>
  <meta charset="utf-8">
  <meta name="language" content="pt-BR">
  <title>Lastinha</title>
  <meta name="description" content="Gerador de colagem dos albuns mais escutados na semaninha do last.fm">
  <meta name="robots" content="all">
  <meta name="author" content="Semaninha">
  <meta name="keywords" content="lastinha,last.fm,semaninha ">

  <meta property="og:type" content="page">
  <meta property="og:url" content="https://last-fm-rho.vercel.app/">
  <meta property="og:title" content="Lastinha">
  <meta property="og:image" content="https://pbs.twimg.com/media/FuhlebOX0AEMBaG.png">
  <meta property="og:description" content="Gerador de colagem dos albuns mais escutados na semaninha do last.fm">

  <meta property="article:author" content="Juan">

  <meta name="twitter:card" content="summary">
  <meta name="twitter:site" content="@Semaninha">
  <meta name="twitter:title" content="Lastinha">
  <meta name="twitter:creator" content="@Semaninha">
  <meta name="twitter:description" content="Gerador de colagem dos albuns mais escutados na semaninha do last.fm">
  <link rel="canonical" />
</svelte:head>


<div class="relative" id="home">
        <div class="relative pt-36 ml-auto">
            <div class="lg:w-2/3 text-center mx-auto">
                <h1 class="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">Semaninha <span class="text-primary dark:text-white">Last.fm</span></h1>
                <p class="mt-8 text-gray-700 dark:text-gray-300">Explore seus álbuns mais ouvidos na semaninha no Last.fm. Descubra sua trilha sonora pessoal em apenas alguns cliques. Música sob medida para você</p>
                <div class="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
                    <input class="shadow appearance-none border border-indigo-700 rounded w-72 h-8 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
					bind:value={name} 
					placeholder="Seu @ do last.fm" id="lastfmUser" required autofocus>

				<a class="flex justify-center items-center bg-yellow-500 hover:bg-yellow-600 text-black w-32 h-8 rounded-lg" href="albuns/{name}/{current}">Gerar semaninha</a>
                </div>
                <div class="py-8 mt-16 border-y border-gray-100 dark:border-gray-800 flex flex-col gap-4 justify-between items-center">
					<h2>Selecione o grid que deseja:</h2>
                    <div class="text-left">
                        <button
							class:active="{current === '3'}"
							on:click="{() => current = '3'}"
						class="bg-yellow-500 text-black w-32 hover:border-black hover:bg-yellow-600"
						>3 X 3 </button>
                    </div>
                    <div class="text-left">
                        <button
						class:active="{current === '5'}"
						on:click="{() => current = '5'}"
						class="bg-yellow-500 text-black w-32 hover:border-black hover:bg-yellow-600"
						>5 X 5 </button>
                    </div>
                    <div class="text-left">
                        <button
							class:active="{current === '10'}"
							on:click="{() => current = '10'}"
						class="bg-yellow-500 text-black w-32 hover:border-black hover:bg-yellow-600"
						>10 X 10 </button>
                    </div>
                </div>
				<p>
					{current} X {current}  esta selecionado.
				</p>
            </div>
           
        </div>
</div>

