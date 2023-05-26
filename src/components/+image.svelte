<script lang="ts">
    import { onMount } from "svelte";
  
    export let name: string;
    export let album: string;
    export let onImageUrlSet: (url: string) => void;
  
    let urlImage = "";
  
    onMount(async () => {
      const res = await fetch(
        `https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${import.meta.env.VITE_API_KEY}&artist=${name}&album=${album}&format=json`
      );
      const data = await res.json();
      urlImage = data.album.image[1]["#text"];
  
      // Notify the parent component about the urlImage
      if (onImageUrlSet) {
        onImageUrlSet(urlImage);
      }
    });
  </script>
  
  <img src={urlImage} alt={name} />
  