<script lang="ts">
	const year = new Date().getFullYear();
</script>

<footer class="footer">
	<p class="footer__copyright">&#169; {year} Dane Skalski</p>
</footer>

<style lang="scss">
	@import '../styles/mixins.scss';

	.footer {
		background-color: var(--background-color);
		padding: 0.2rem 0;
		border-top: 1.5px solid #555;
		margin-top: 5rem;
		@include margin-horiz;

		&__copyright {
			color: #555;
			font-weight: 300;
			text-align: center;
		}
	}
</style>
