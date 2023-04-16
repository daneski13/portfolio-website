<script lang="ts">
	import { onMount } from 'svelte';
	import Image from './Image.svelte';

	export let backupImageSrc: string;
	export let src: string;
	export let alt: string;
	export let caption: string | undefined = undefined;
	export let height: number = 400;

	let js = false;
	onMount(() => {
		js = true;
	});
</script>

<!-- If javascript is enabled -->
{#if js}
	{#if caption == undefined}
		<iframe title={alt} id="igraph" scrolling="no" {src} {height} />
	{:else}
		<figure>
			<iframe title={alt} id="igraph" scrolling="no" {src} {height} />
			<figcaption>{caption}</figcaption>
		</figure>
	{/if}
	<!-- otherwise, display the backup image -->
{:else}
	<Image src={backupImageSrc} {alt} {caption} />
{/if}

<style lang="scss">
	// Center figure
	figure {
		display: block;
		margin-left: auto;
		margin-right: auto;
		max-width: 100%;
	}

	iframe {
		width: 100%;
		border: none;
	}

	figcaption {
		padding: 0.9em 0;
		text-align: center;
		font-style: italic;
		font-size: 0.9em;
		color: rgb(108, 108, 108);
	}
</style>
