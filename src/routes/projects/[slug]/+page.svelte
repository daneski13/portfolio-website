<script lang="ts">
	import type { ProjectData } from './data';

	export let data: ProjectData;
	const { content, title, date, isUpdated, updated, cover, description, code } = data;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
</svelte:head>

<main>
	<article class="project">
		<img class="project__cover-img" src={cover} alt="Article cover" />
		<h1 class="project__title">{title}</h1>
		<div class="project__meta">
			<span>
				<p class="project__meta__date"><b>Published:</b> {date}</p>
				{#if isUpdated}
					<p class="project__meta__date"><b>Updated:</b> {updated}</p>
				{/if}
			</span>
			<a class="project__meta__source" href={code} target="_blank" rel="external">View Project</a>
		</div>
		<div class="project__content">
			<svelte:component this={content} />
		</div>
	</article>
</main>

<style lang="scss">
	@import 'src/lib/styles/mixins.scss';
	@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,600;1,300;1,600&display=swap');

	.project {
		font-size: 125%;
		@include margin-horiz;
		margin-top: 7rem;
		font-family: 'Open Sans', sans-serif;
		font-weight: 300;

		&__cover-img {
			max-width: 100%;
			border: 1px solid;
			display: block;
			margin: 0 auto;
		}

		&__title {
			margin-bottom: 0.5rem;
			font-weight: 500;
		}

		&__meta {
			margin: 3em 0em 5em 0em;
			gap: 2rem;
			display: flex;
			justify-content: space-evenly;
			flex-wrap: wrap;

			&:before {
				@include pseudo;
				width: 30%;
				max-width: 15em;
				height: 0.15em;
				background-color: rgb(191, 191, 191);
				margin: -1em 0;
				border-radius: 3px;
			}

			&__date {
				font-size: 0.85em;
				margin: 0;
			}

			&__source {
				align-self: center;
				font-size: 0.8em;
				background-color: rgb(66, 66, 66);
				padding: 0.5rem 1rem;
				border-radius: 100px;
				color: white;

				&:hover {
					background-color: var(--primary-color);
					color: black;
				}
			}
		}

		@for $i from 2 through 6 {
			:global(h#{$i}) {
				font-size: 1rem + 0.2 * (6 - $i);
				margin-bottom: 0.8em;

				// offsets each heading so the header bar doesn't hide stuff
				padding-top: var(--header-height);
				margin-top: calc(var(--header-height) * -1);
			}

			// Show the link svg on hover of the heading
			:global(h#{$i}:hover .autolink_image) {
				visibility: visible;
			}
		}
	}

	// Table formatting
	:global(th, td) {
		border: 1px solid;
	}

	:global(table) {
		border-collapse: collapse;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 1em;
		display: block;
		width: max-content;
		max-width: 100%;
		overflow: auto;
	}

	:global(th, td) {
		padding: 0.2em 0.5em;
	}

	// Horizontal line style
	:global(hr) {
		background-color: rgb(76, 76, 76);
		border-width: 0;
		border-radius: 1rem;
		height: 2px;
		margin-bottom: 2em;
	}

	// Link svg to header id, like Github
	:global(.autolink_image) {
		margin-left: -1.4rem;
		padding-right: 0.2rem;
		width: 1.2rem;
		visibility: hidden;
		color: black;
	}

	// Like github show a line after h2 headings
	:global(.h-2::after) {
		@include pseudo;
		position: relative;
		margin-top: 0.3em;
		margin-bottom: -0.1em;
		height: 1px;
		width: 100%;
		border-radius: 1px;
		background-color: #bdbdbd;
	}

	@media only screen and (min-width: 768px) {
		.project {
			max-width: 700px;
			margin-left: auto;
			margin-right: auto;
		}
	}
</style>
