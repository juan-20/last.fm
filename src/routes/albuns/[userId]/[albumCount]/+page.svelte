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

  const shareOnTwitter = () => {
    if (imageCover) {
      // Create sharing links
      const twitterShareUrl = `https://twitter.com/intent/tweet?text=Check%20out%20my%20image`;

      // Open sharing links in new windows
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
      // Create sharing links
      const twitterShareUrl = `https://twitter.com/intent/tweet?text=Check%20out%20my%20image`;

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
    content="Discover the most popular albums from your favorite artists on Last.fm. Our site displays the most listened albums for any user, updated in real-time. Explore new music and rediscover old favorites with our comprehensive album rankings."
  />
  <meta property="og:image" content={imageCover} />
</svelte:head>

<h1 class="p-10">Mais ouvidos</h1>

<!-- svelte-ignore missing-declaration -->
<div bind:this={divRef} class="grid grid-cols-2 gap-3 md:grid-cols-8 2xl:grid-cols-10">
  {#if data.Album.weeklyalbumchart.album.length > 0}
    {#each data.Album.weeklyalbumchart.album as item}
      <div class="">
        <!-- <img src={item.image[2]["#text"]} alt="" /> -->
        <Image
          name={item.artist['#text']}
          album={item.name}
          onImageUrlSet={handleImageUrlSet}
        />
        <p class="max-h-8 truncate">{item.name}</p>
        <p class="max-h-8 truncate">{item.artist['#text']}</p>
      </div>
    {/each}
  {:else}
    <p>Loading...</p>
  {/if}
</div>
<div class="pt-3 flex gap-4">
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