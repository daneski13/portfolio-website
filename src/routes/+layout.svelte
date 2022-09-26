<script lang="ts">
	import Header from '$lib/components/Header.svelte';
</script>

<Header />
<slot />

<style global lang="scss">
	@import '../lib/styles/vars.scss';

	::-webkit-scrollbar {
		background: var(--background-color);
		width: 10px;
	}

	::-webkit-scrollbar-thumb {
		background: var(--primary-color);
	}

	body {
		margin: 0;
		background-color: var(--background-color);
	}

	a {
		text-decoration: none;
		color: black;
	}
</style>
