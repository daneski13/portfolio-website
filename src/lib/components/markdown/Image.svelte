<script lang="ts">
	export let src: string;
	export let alt: string;
	export let caption: string | undefined = undefined;
</script>

{#if caption == undefined}
	<img {src} {alt} />
{:else}
	<figure>
		<img {src} {alt} />
		<figcaption>{caption}</figcaption>
	</figure>
{/if}

<style lang="scss">
	// Center image
	img,
	figure {
		display: block;
		margin-left: auto;
		margin-right: auto;
		max-width: 100%;
	}

	figcaption {
		padding: 0.9em 0;
		text-align: center;
		font-style: italic;
		font-size: 0.9em;
		color: rgb(108, 108, 108);
	}
</style>
