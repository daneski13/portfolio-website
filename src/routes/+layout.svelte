<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import '../lib/styles/vars.scss';
</script>

<Header />
<slot />
<Footer />

<style global lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,600;1,300;1,600&display=swap');

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
