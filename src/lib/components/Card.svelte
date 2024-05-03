<script lang="ts">
	export let title: string;
	export let image: string;
	export let description: string;
	export let url: string;
	export let tag: string;
	let tags = tag.split(',').map((tag) => tag.trim());
</script>

<article class="card">
	<div class="card__container">
		<a href={url}>
			<div class="card__tags">
				{#each tags as t}
					<p class="card__tags__text">{t}</p>
				{/each}
			</div>
			<!-- Wrapping the image in a div fixes some weird bug on mobile where its border radius is wonky -->
			<div>
				<img class="card__image" alt="{title} Preview Image" src={image} />
			</div>
			<div class="card__title-container">
				<h3 class="card__title">{title}</h3>
			</div>
			<div class="card__info">
				<p class="card__info__desc">{description}</p>
				<p class="card__info__action">See Details</p>
			</div>
		</a>
	</div>
</article>

<style lang="scss">
	@import '../styles/mixins.scss';

	@mixin border-rad($offeset: 0px, $top-l: 1.5rem, $top-r: 1.5rem, $bot-r: 0.5rem, $bot-l: 1.5rem) {
		border-radius: calc($top-l - $offeset) calc($top-r - $offeset) calc($bot-r - $offeset)
			calc($bot-l - $offeset);
	}

	.card {
		position: relative;
		width: 100%;
		aspect-ratio: 1/1.1;
		max-width: 15rem;
		border: 2px solid var(--primary-color);
		@include border-rad;
		@include shadow($y: 2.5px, $blur: 5px);

		&:hover {
			transform: scale(1.05);
			@include shadow($y: 7.5px, $blur: 15px);
		}

		&__container {
			width: 100%;
			height: 100%;
			@include border-rad;

			// Both hover slider and it's text
			&::after,
			.card__info {
				width: 0%;
				height: 0%;
				bottom: 0;
				right: 0;
				transition: all 0.3s ease-in;
			}

			// Hover slider
			&::after {
				@include pseudo($pos: absolute);
				background-color: var(--primary-color-opacity);
				backdrop-filter: blur(7px);
				@include border-rad(2px);
			}

			// Hover slider's text
			.card__info {
				position: absolute;
				z-index: 1;
				overflow: hidden;

				&__desc {
					margin: 1.5rem;
				}

				&__action {
					margin: 1rem;
					text-align: left;
					text-decoration: underline;
					text-align: center;
				}
			}

			// Hover of container
			&:hover {
				// Both hover slider and it's text when hovered
				&:after,
				.card__info {
					width: 100%;
					height: 100%;
				}
			}
		}

		&__tags {
			position: absolute;
			top: 10px;
			left: 7px;
			display: flex;
			flex-wrap: wrap;
			gap: 0px;
			&__text {
				background-color: var(--comp-color);
				text-align: center;
				@include shadow($y: 1px);
				color: white;
				border: 1px solid black;
				padding: 0.4rem 0.8rem;
				font-size: 0.8rem;
				border-radius: 100px;
				margin: 3px 3px;
			}
		}

		&__image {
			width: 100%;
			height: 100%;
			object-fit: contain;
			object-position: left top;
			@include border-rad(2px);
		}

		&__title-container {
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 30%;
			background-color: rgba(255, 255, 255, 0.6);
			backdrop-filter: blur(3px);
			@include border-rad(2px, $top-r: 2px, $top-l: 2px);
			@include shadow($y: -2px);

			.card__title {
				font-size: 1.2rem;
				margin: 1rem;
			}
		}
	}

	@media only screen and (min-width: 768px) {
		.card {
			max-width: 18rem;

			.card__title {
				font-size: 1.5rem;
			}

			.card__tags__text {
				font-size: 1rem;
			}
		}
	}
</style>
