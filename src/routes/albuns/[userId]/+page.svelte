<script lang="ts">

   // Define the interface types
   interface Last {
      topalbums: Topalbums;
    }

     interface Topalbums {
      album:   Album[];
      "@attr": TopalbumsAttr;
    }

     interface TopalbumsAttr {
      user:       string;
      totalPages: string;
      page:       string;
      perPage:    string;
      total:      string;
    }

     interface Album {
      artist:    Artist;
      image:     Image[];
      mbid:      string;
      url:       string;
      playcount: string;
      "@attr":   AlbumAttr;
      name:      string;
    }

     interface AlbumAttr {
      rank: string;
    }

     interface Artist {
      url:  string;
      name: string;
      mbid: string;
    }

     interface Image {
      size:    Size;
      "#text": string;
    }


    enum Size {
      Extralarge = "extralarge",
      Large = "large",
      Medium = "medium",
      Small = "small",
    }
 

  export let data
  console.log(data.Album.topalbums.album.length > 0);

  import { afterUpdate } from 'svelte';
  import domtoimage from 'dom-to-image';

let divRef: HTMLElement;

const downloadAsImage = () => {
    if (divRef) {
      const element = divRef;

      domtoimage.toBlob(element).then((blob) => {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'my_image.png';
        link.click();

        // Create sharing links
        const imageUrl = URL.createObjectURL(blob);
        const twitterShareUrl = `https://twitter.com/intent/tweet?text=Check%20out%20my%20image&url=${encodeURIComponent(imageUrl)}`;

        // Open sharing links in new windows
        window.open(twitterShareUrl, '_blank');
      });
    }
  };

  afterUpdate(() => {
	  if (divRef) {
		// Remove the automatic download when the component updates
		// downloadAsImage();
	  }
	});

</script>


<h1 class="p-10">Mais ouvidos</h1>
<!-- svelte-ignore missing-declaration -->
<div bind:this={divRef} class="grid grid-cols-2 gap-3 md:grid-cols-8 2xl:grid-cols-10">
  {#if data.Album.topalbums.album.length > 0}
      {#each data.Album.topalbums.album as item}
      <div class="">
          <img src={item.image[2]['#text']} alt="">
          <p class="max-h-8 truncate ">{item.name}</p>
          <p class="max-h-8 truncate ">{item.artist.name}</p>
      </div>
      {/each}
  {:else}
    <p>Loading...</p>
  {/if}
</div>
<button on:click={downloadAsImage} class="flex justify-center items-center bg-indigo-700 text-white w-32 h-8 rounded-lg">Gerar imagem</button>