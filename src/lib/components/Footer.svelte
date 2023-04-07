<footer class="footer">
	<p class="footer__copyright">&#169; 2023 Dane Skalski</p>
</footer>

<style lang="scss">
	@import '../styles/mixins.scss';

	.footer {
		background-color: var(--background-color);
		padding: 0.2rem 0;
		border-top: 1.5px solid #777;
		margin-top: 5rem;
		@include margin-horiz;

		&__copyright {
			color: #777;
			font-weight: 300;
			text-align: center;
		}
	}
</style>
