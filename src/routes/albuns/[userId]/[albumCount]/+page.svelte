<script lang="ts">
  export let data;

  import { afterUpdate, onMount } from "svelte";
  import domtoimage from "dom-to-image";
  import Image from "../../../../components/+image.svelte";

  let divRef: HTMLElement;

  let imageCover: string;

  const generateImage = () => {
    if (divRef) {
      const element = divRef;

      domtoimage.toBlob(element).then((blob) => {
        // Update the value of imageCover
        imageCover = URL.createObjectURL(blob);
      });
    }
  };

  const downloadImage = () => {
    if (imageCover) {
      const link = document.createElement("a");
      link.href = imageCover;
      const date = new Date();
      link.download = `semaninha${date.getDay()}${date.getDate()}${date.getMonth()}.png`;
      link.click();
    }
  };

  let choosedWord: string = "";

  function PhaseTwitter() {
    const frases: string[] = [
      "eita",
      "semaninhaa",
      "o dessa semana",
      "amaram?",
      "meu deus...",
      "literalmente eu",
    ];
    choosedWord = frases[Math.floor(Math.random() * frases.length)];
    console.log(choosedWord);
  }
  const shareOnTwitter = () => {
  if (imageCover) {
    PhaseTwitter();

    // Share
    const twitterShareUrl: string = `https://twitter.com/intent/tweet?text=${encodeURIComponent(choosedWord)}`;

    // Open sharing link in a new window
    window.open(twitterShareUrl, "_blank");
  }
};



  const shareOnTwitterAndDowload = () => {
    if (imageCover) {
      const link = document.createElement("a");
      link.href = imageCover;
      const date = new Date();
      link.download = `semaninha${date.getDay()}${date.getDate()}${date.getMonth()}.png`;
      link.click();
      // Share
      PhaseTwitter();
      const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(choosedWord)}`;

      // Open sharing links in new windows
      window.open(twitterShareUrl, "_blank");
    }
  };

  const handleImageUrlSet = (url: string) => {
    generateImage();
  };

  onMount(() => {
    if (divRef) {
      generateImage();
    }
  });

  afterUpdate(() => {
    if (divRef) {
      generateImage();
    }
  });
</script>


<svelte:head>
  <title>Semaninha</title>
  <meta
    name="description"
    content="Descubra os álbuns mais ouvidos por você de seus artistas favoritos no lastinha.fm. 
    Nosso site exibe os álbuns mais ouvidos por qualquer usuário, atualizados em tempo real para mostrar para seus amigos."
  />
  <meta property="og:image" content="https://pbs.twimg.com/media/FuhlebOX0AEMBaG.png" />
</svelte:head>

<div class="relative" id="home">
  <div class="relative pt-36 ml-auto">
      <div class="lg:w-2/3 text-center mx-auto">
<nav>
  <a class="flex items-center gap-1 dark:text-yellow-300 cursor-pointer z-50" href="/">
    <svg class="dark:fill-yellow-300 fill-black" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path d="M232,184a8,8,0,0,1-16,0A88,88,0,0,0,67.47,120.16l26.19,26.18A8,8,0,0,1,88,160H24a8,8,0,0,1-8-8V88a8,8,0,0,1,13.66-5.66l26.48,26.48A104,104,0,0,1,232,184Z"></path></svg>
    Voltar
  </a>
</nav>
<h1 class="p-10">Mais ouvidos</h1>

<!-- svelte-ignore missing-declaration -->
{#if data.Album.weeklyalbumchart.album.length >= 10}
<div class="flex items-center content-center flex-col">
<div bind:this={divRef} class="grid grid-cols-5 w-fit">
  {#if data.Album.weeklyalbumchart.album.length > 0}
    {#each data.Album.weeklyalbumchart.album as item}
    <div class="flex flex-col items-center w-fit">
        <!-- <img src={item.image[2]["#text"]} alt="" /> -->
        <Image
          name={item.artist['#text']}
          album={item.name}
          onImageUrlSet={handleImageUrlSet}
        />
        <!-- <p class="max-h-8 truncate">{item.name}</p>
        <p class="max-h-8 truncate">{item.artist['#text']}</p> -->
      </div>
      {/each}
      {:else}
      <p>Loading...</p>
      {/if}
    </div>
    
    </div>
    {:else}
    <div class="flex items-center content-center flex-col">
    <div bind:this={divRef} class="grid grid-cols-3 md:grid-cols-3 2xl:grid-cols-3 w-fit">
      {#if data.Album.weeklyalbumchart.album.length > 0}
        {#each data.Album.weeklyalbumchart.album as item}
          <div class="flex flex-col items-center w-fit">
            <!-- <img src={item.image[2]["#text"]} alt="" /> -->
            <Image
              name={item.artist['#text']}
              album={item.name}
              onImageUrlSet={handleImageUrlSet}
            />
            <!-- <p class="max-h-8 truncate">{item.name}</p>
            <p class="max-h-8 truncate">{item.artist['#text']}</p> -->
          </div>
          {/each}
          {:else}
          <p>Loading...</p>
          {/if}
        </div>
    </div>

    {/if}
<div class="pt-10 gap-4 grid grid-cols-2 md:grid-cols-3">
  <button
    on:click={downloadImage}
    class="flex gap-4 justify-center items-center bg-indigo-700 text-white w-32 h-8 rounded-sm"
  >
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ecf3f3" viewBox="0 0 256 256"><path d="M82.34,117.66A8,8,0,0,1,88,104h32V40a8,8,0,0,1,16,0v64h32a8,8,0,0,1,5.66,13.66l-40,40a8,8,0,0,1-11.32,0ZM216,144a8,8,0,0,0-8,8v56H48V152a8,8,0,0,0-16,0v56a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V152A8,8,0,0,0,216,144Z"></path></svg>
  <p class="text-sm">Dowload</p>
  </button>
  <button
    on:click={shareOnTwitter}
    class="flex gap-4 justify-center items-center bg-sky-500 hover:bg-sky-700 text-white w-40 h-8 rounded-sm"
  >
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#fff" viewBox="0 0 256 256"><path d="M245.66,77.66l-29.9,29.9C209.72,177.58,150.67,232,80,232c-14.52,0-26.49-2.3-35.58-6.84-7.33-3.67-10.33-7.6-11.08-8.72a8,8,0,0,1,3.85-11.93c.26-.1,24.24-9.31,39.47-26.84a110.93,110.93,0,0,1-21.88-24.2c-12.4-18.41-26.28-50.39-22-98.18a8,8,0,0,1,13.65-4.92c.35.35,33.28,33.1,73.54,43.72V88a47.87,47.87,0,0,1,14.36-34.3A46.87,46.87,0,0,1,168.1,40a48.66,48.66,0,0,1,41.47,24H240a8,8,0,0,1,5.66,13.66Z"></path></svg>
    <p class="text-sm">Share on Twitter</p>
  </button>
  <button
    on:click={shareOnTwitterAndDowload}
    class="flex gap-4 justify-center items-center bg-sky-500 hover:bg-sky-700 text-white w-48 h-8 rounded-sm"
  >
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#fff" viewBox="0 0 256 256"><path d="M245.66,77.66l-29.9,29.9C209.72,177.58,150.67,232,80,232c-14.52,0-26.49-2.3-35.58-6.84-7.33-3.67-10.33-7.6-11.08-8.72a8,8,0,0,1,3.85-11.93c.26-.1,24.24-9.31,39.47-26.84a110.93,110.93,0,0,1-21.88-24.2c-12.4-18.41-26.28-50.39-22-98.18a8,8,0,0,1,13.65-4.92c.35.35,33.28,33.1,73.54,43.72V88a47.87,47.87,0,0,1,14.36-34.3A46.87,46.87,0,0,1,168.1,40a48.66,48.66,0,0,1,41.47,24H240a8,8,0,0,1,5.66,13.66Z"></path></svg>
    <p class="text-sm">Dowload and share</p>
  </button>
</div>

<footer class="dark:bg-zinc-900 bg-gray-300">
  <div class="mx-auto w-full max-w-screen-xl">

  <div class="px-4 py-6 dark:bg-zinc-900 bg-gray-300 md:flex md:items-center md:justify-between">
      <span class="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2023 <a href="https://flowbite.com/">LASTinha™</a>. All Rights Reserved.
      </span>
      <div class="flex mt-4 space-x-6 sm:justify-center md:mt-0">
          <a href="https://github.com/juan-20/last.fm" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ecf3f3" viewBox="0 0 256 256"><path d="M216,104v8a56.06,56.06,0,0,1-48.44,55.47A39.8,39.8,0,0,1,176,192v40a8,8,0,0,1-8,8H104a8,8,0,0,1-8-8V216H72a40,40,0,0,1-40-40A24,24,0,0,0,8,152a8,8,0,0,1,0-16,40,40,0,0,1,40,40,24,24,0,0,0,24,24H96v-8a39.8,39.8,0,0,1,8.44-24.53A56.06,56.06,0,0,1,56,112v-8a58.14,58.14,0,0,1,7.69-28.32A59.78,59.78,0,0,1,69.07,28,8,8,0,0,1,76,24a59.75,59.75,0,0,1,48,24h24a59.75,59.75,0,0,1,48-24,8,8,0,0,1,6.93,4,59.74,59.74,0,0,1,5.37,47.68A58,58,0,0,1,216,104Z"></path></svg>
              <span class="sr-only">GitHub</span>
          </a>
      </div>
    </div>
  </div>
</footer>

      </div>
    </div>
  </div>