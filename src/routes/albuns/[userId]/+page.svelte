<script lang="ts">
  // Define the interface types
  interface Last {
    topalbums: Topalbums;
  }

  interface Topalbums {
    album: Album[];
    "@attr": TopalbumsAttr;
  }

  interface TopalbumsAttr {
    user: string;
    totalPages: string;
    page: string;
    perPage: string;
    total: string;
  }

  interface Album {
    artist: Artist;
    image: Image[];
    mbid: string;
    url: string;
    playcount: string;
    "@attr": AlbumAttr;
    name: string;
  }

  interface AlbumAttr {
    rank: string;
  }

  interface Artist {
    url: string;
    name: string;
    mbid: string;
  }

  interface Image {
    size: Size;
    "#text": string;
  }

  enum Size {
    Extralarge = "extralarge",
    Large = "large",
    Medium = "medium",
    Small = "small",
  }

  export let data;
  console.log(data.Album.topalbums.album.length > 0);

  import { afterUpdate } from "svelte";
  import domtoimage from "dom-to-image";

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
      link.download = "my_image.png";
      link.click();
    }
  };


  afterUpdate(() => {
    if (divRef) {
      // Remove the automatic download when the component updates
      
   generateImage()
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
  {#if data.Album.topalbums.album.length > 0}
    {#each data.Album.topalbums.album as item}
      <div class="">
        <img src={item.image[2]["#text"]} alt="" />
        <p class="max-h-8 truncate">{item.name}</p>
        <p class="max-h-8 truncate">{item.artist.name}</p>
      </div>
    {/each}
  {:else}
    <p>Loading...</p>
  {/if}
</div>
<button
  on:click={downloadImage}
  class="flex justify-center items-center bg-indigo-700 text-white w-32 h-8 rounded-lg"
>
  Gerar imagem
</button>
