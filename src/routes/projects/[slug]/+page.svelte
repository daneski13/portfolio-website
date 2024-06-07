<script lang="ts">
	import 'prism-themes/themes/prism-ghcolors.min.css';

	export let data;
	let { information, nextPrev } = data;
	const { content, title, date, isUpdated, updated, cover, description, proj_url, url } =
		information;
</script>

<svelte:head>
	<title>Project - {title}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content="Project - {title}" />
	<meta property="og:type" content="website" />
	<meta property="og:description" content={description} />
	<meta property="og:url" content="https://daneskalski.com/{url}" />
	<meta property="og:image" content="https://daneskalski.com{cover}" />
	<meta property="og:site_name" content="Dane Skalski" />
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
			<a class="project__meta__source" href={proj_url} target="_blank" rel="external"
				>View Project</a
			>
		</div>
		<div class="project__content">
			<svelte:component this={content} />
		</div>
	</article>
	{#if nextPrev.next || nextPrev.prev}
		<nav class="nav">
			<div class="nav__container">
				{#if nextPrev.prev}
					<a class="nav__item nav__item__prev" href={nextPrev.prev.path} target="_self">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
							<path
								fill-rule="evenodd"
								d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
							/>
						</svg>
						<p style="color:var(--comp-color);">{nextPrev.prev.title}</p>
					</a>
				{/if}
				{#if nextPrev.next}
					<a class="nav__item nav__item__next" href={nextPrev.next.path} target="_self">
						<p style="color:var(--comp-color);">{nextPrev.next.title}</p>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
							<path
								fill-rule="evenodd"
								d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
							/>
						</svg>
					</a>
				{/if}
			</div>
		</nav>
	{/if}
</main>

<style lang="scss">
	@import 'src/lib/styles/mixins.scss';

	.project {
		font-size: 112.5%;
		@include margin-horiz;
		margin-top: 1.5em;
		font-family: 'Open Sans', sans-serif;
		font-weight: 300;

		&__cover-img {
			max-width: min(100%, 500px);
			border: 1px solid;
			display: block;
			margin: 0 auto;
		}

		&__title {
			margin-bottom: 0.5rem;
			font-weight: 500;
			font-size: 3em;
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
				background-color: var(--light-grey);
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
				background-color: var(--dark-grey);
				padding: 0.5rem 1rem;
				border-radius: 100px;
				color: white;

				&:hover {
					background-color: var(--primary-color);
					color: black;
				}
			}
		}

		@for $i from 1 through 6 {
			:global(h#{$i}) {
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

		// Horizontal line style
		:global(hr) {
			background-color: var(--dark-grey);
			border-width: 0;
			border-radius: 1rem;
			height: 2px;
			margin-bottom: 2em;
		}
	}

	/* Table formatting */
	:global(th, td) {
		border: 1px solid #bbb;
		padding: 0.2em 0.5em;
	}

	// Table Headings
	:global(thead) {
		border: 1px solid #bbb;
	}
	:global(thead th) {
		background-color: #b0b0b0;
	}
	:global(thead tr:nth-child(2) th) {
		background-color: #c0c0c0;
	}

	// Every other row
	:global(tr:nth-child(even)) {
		background-color: #ddd;
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

	// Link svg to header id, like Github
	:global(.autolink_image) {
		margin-left: -0.6em;
		// padding-right: 0.1em;
		width: 0.6em;
		height: 0.6em;
		visibility: hidden;
		color: black;
	}

	@media only screen and (min-width: 768px) {
		.project {
			font-size: 125%;
			max-width: 700px;
			margin-left: auto;
			margin-right: auto;
		}
	}

	.nav {
		@include margin-horiz;
		padding: 0;
		padding-top: 3rem;

		&__container {
			--gap: 10px;
			display: flex;
			justify-content: space-between;
			gap: var(--gap);
		}

		&__item {
			@include flex-center-vert;
			border: var(--dark-grey) 3px solid;
			border-radius: 10px;
			width: calc(50% - var(--gap) / 2);
			padding: 0.5rem;

			&:hover {
				svg {
					fill: var(--primary-color);
				}
				border-color: var(--primary-color);
			}

			svg {
				min-width: 2rem;
				max-width: 2rem;
				height: auto;
				fill: var(--dark-grey);
				margin: 0;
				padding: 0;
			}

			p {
				margin: 0;
				padding: 0;
			}

			&__next {
				justify-content: flex-end;
				margin-left: auto;
			}
		}
	}
</style>
