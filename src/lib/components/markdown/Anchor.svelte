<script lang="ts">
	export let href: string;
	export let target: string = '_blank'; // Open in new tab by default
	export let rel: string = '';
</script>

<a {href} {target} {rel}><slot /></a>

<style lang="scss">
	a {
		color: rgb(69, 69, 255);

		&:hover {
			text-decoration: underline;
		}
	}
</style>
