<script>
	import { onMount } from 'svelte';
	export let url;
	onMount(() => {
		const script = document.createElement('script');
		script.src = 'https://public.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js';
		script.type = 'module';
		document.body.appendChild(script);
		// Need to refire the DOMContentLoaded event to trigger the Tableau API
		var domContentLoadedEvent = new Event('DOMContentLoaded', {
			bubbles: true,
			cancelable: true
		});

		// Dispatch the event on the document
		document.dispatchEvent(domContentLoadedEvent);
	});
</script>

<div>
	<tableau-viz id="tableauViz" src={url} toolbar="bottom" hide-tabs></tableau-viz>
</div>

<style>
	div {
		margin-left: calc(var(--margin-left-right) * -1);
		margin-right: calc(var(--margin-left-right) * -1);
		max-width: 100vw;
	}
	tableau-viz {
		margin: 0 auto;
	}
</style>
