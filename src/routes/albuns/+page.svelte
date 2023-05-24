<script lang="ts">
	import { afterUpdate } from 'svelte';
	import domtoimage from 'dom-to-image';
  
	let divRef: HTMLDivElement;
  
	const downloadAsImage = () => {
	  if (divRef) {
		const element = divRef;
  
		domtoimage.toBlob(element).then((blob: Blob | MediaSource) => {
		  const link = document.createElement('a');
		  link.href = URL.createObjectURL(blob);
		  link.download = 'my_image.png';
		  link.click();
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

  
  <div>
	<!-- Display the image -->
	<!-- {#if imageUrl}
	  <img src={imageUrl} alt="Captured Image" />
	{/if} -->
  
	<!-- Your content goes here -->
	<div bind:this={divRef}>
		<h1>teste</h1>
		<p>galo</p>
		<img src="https://avatars.githubusercontent.com/u/49418565?v=4" alt="">
	</div>
  
	<!-- Download button -->
	<button on:click={downloadAsImage}>Download as Image</button>
  </div>
  