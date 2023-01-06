<header class="header">
	<a class="header__logo" href="/" rel="index">
		<svg
			version="1.1"
			viewBox="0 0 55 20"
			xmlns="http://www.w3.org/2000/svg"
			aria-label="Logo, Dane Skalski"
		>
			<use href="/logo.svg#logo" />
		</svg>
	</a>
	<div class="header__socials">
		<a
			href="https://www.linkedin.com/in/dane-skalski/"
			target="_blank"
			rel="noreferrer noopener external"
			aria-label="Link to my LinkedIn Account"
		>
			<svg class="header__socials__link" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
				<use href="/linkedin.svg#linkedin" />
			</svg>
		</a>
		<a
			href="https://github.com/Daneski13"
			target="_blank"
			rel="noreferrer noopener external"
			aria-label="Link to my Github Account"
		>
			<svg class="header__socials__link" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
				<use href="/github.svg#github" />
			</svg>
		</a>
	</div>
</header>

<style lang="scss">
	@import '../styles/mixins.scss';

	.header {
		display: flex;
		justify-content: space-between;
		background-color: rgb(255, 255, 255, 0.9);
		backdrop-filter: blur(10px);
		position: sticky;
		top: 0;
		z-index: 999;
		@include shadow;

		&__logo {
			margin: 1.5rem 0;
			margin-left: var(--margin-left-right);
			margin-right: auto;
		}

		&__socials {
			display: flex;
			gap: 1.5rem;
			margin: 1.5rem 0;
			margin-right: var(--margin-left-right);

			&__link {
				fill: var(--primary-color);
				stroke: black;
				stroke-width: 0.2px;

				&:hover {
					transform: scale(1.1);
				}
			}
		}
	}

	svg {
		height: 2.5rem;
	}

	@media only screen and (min-width: 768px) {
		svg {
			height: 3.5rem;
		}
	}
</style>
