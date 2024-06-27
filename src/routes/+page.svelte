<script lang="ts">
	import Card from '$lib/components/Card.svelte';

	export let data;
</script>

<svelte:head>
	<title>Dane Skalski</title>
	<meta name="description" content="Personal website showcasing my projects." />
	<meta property="og:title" content="Dane Skalski" />
	<meta property="og:description" content="Personal website showcasing my projects." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://daneskalski.com/" />
	<meta property="og:image" content="https://daneskalski.com/cover.webp" />
</svelte:head>

<main>
	<section class="hero">
		<h1 class="hero__heading">
			<span class="hero__heading_top">Hello, I'm </span><span class="hero__heading_bottom"
				>Dane Skalski</span
			>
		</h1>
		<a href="#about"
			><svg
				viewBox="0 0 40 40"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				class="hero__down-arrow"
				aria-label="down arrow"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M20 2.5C20.3315 2.5 20.6495 2.6317 20.8839 2.86612C21.1183 3.10054 21.25 3.41848 21.25 3.75V33.2325L29.115 25.365C29.3497 25.1303 29.6681 24.9984 30 24.9984C30.3319 24.9984 30.6503 25.1303 30.885 25.365C31.1197 25.5997 31.2516 25.9181 31.2516 26.25C31.2516 26.5819 31.1197 26.9003 30.885 27.135L20.885 37.135C20.7689 37.2514 20.6309 37.3438 20.4791 37.4068C20.3272 37.4698 20.1644 37.5022 20 37.5022C19.8356 37.5022 19.6728 37.4698 19.5209 37.4068C19.369 37.3438 19.2311 37.2514 19.115 37.135L9.11499 27.135C8.88028 26.9003 8.74841 26.5819 8.74841 26.25C8.74841 25.9181 8.88028 25.5997 9.11499 25.365C9.34971 25.1303 9.66805 24.9984 9.99999 24.9984C10.3319 24.9984 10.6503 25.1303 10.885 25.365L18.75 33.2325V3.75C18.75 3.41848 18.8817 3.10054 19.1161 2.86612C19.3505 2.6317 19.6685 2.5 20 2.5V2.5Z"
					fill="white"
				/>
			</svg>
		</a>
	</section>

	<div class="non-hero-container">
		<section class="about" id="about">
			<a href="/#about"><h2>About</h2></a>

			<div class="about__blurb">
				<p>
					I am an analyst in the financial services industry by trade and a hobbyist
					developer/engineer. I grew up near Seattle, Washington and now live in Dallas, Texas. I
					graduated from Washington State University in 2024, majoring in both Finance and
					Management Information Systems. I pride myself on autodidactism, with interests in data
					and computer science, machine learning, and artificial intelligence.
				</p>
				<p>
					I'm a movie, television, travel, and (Italian) food enthusiast. When not pretending to be
					a professional chef, immersed in a side project, or indulging in film, I can be found at
					the gym, playing golf, or enjoying the outdoors.
				</p>
			</div>
		</section>

		<section class="projects" id="projects">
			<a href="/#projects"><h2>Projects</h2></a>

			<div class="projects__items content">
				{#each data.projects as project}
					<Card
						title={project.meta.title}
						image={project.meta.card}
						url={project.path}
						description={project.meta.description}
						tag={project.meta.tag}
					/>
				{/each}
			</div>
		</section>
	</div>
</main>

<style lang="scss">
	@import '../lib/styles/mixins.scss';

	section {
		// offsets each section so the header bar doesn't hide stuff
		padding-top: var(--header-height);
		margin-top: calc(var(--header-height) * -1);
		font-size: 125%;
		width: 100%;
		height: 100%;
	}

	.hero {
		position: relative;
		min-height: calc(100vh - var(--header-height));
		background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
			linear-gradient(-45deg, var(--primary-color), #6688ff, #66ffdd);
		background-size: 400% 400%;
		animation: gradient 10s ease infinite;
		@include shadow;

		&__heading {
			white-space: nowrap;
			padding-top: 25vh;
			padding-bottom: 0.2em;
			font-size: clamp(39px, 6rem, 6vmax);
			color: white;
			@include margin-horiz;
			min-width: 260px;

			&_top,
			&_bottom {
				display: block;
				overflow: hidden;
			}

			&_top {
				border-right: 0.1em solid white;
				max-width: 4.4em;
				width: 10ch;
				animation: typing_top 0.8s steps(8) both;
			}

			&_bottom {
				max-width: 6.2em;
				width: 12ch;
				animation:
					typing 1.4s steps(14) both 0.8s,
					blink 1s infinite 2.2s;
			}

			&::after {
				@include pseudo;
				width: 3.3em;
				height: 0.1em;
				background-color: white;
				border-radius: 1em;
			}
		}

		&__down-arrow {
			height: 4.5rem;
			position: absolute;
			bottom: 5vh;
			right: var(--margin-left-right);
			animation: up-down 1s ease-out infinite 3.2s;
			visibility: hidden;
		}
	}

	.non-hero-container {
		@include margin-horiz;
	}

	.about {
		&__blurb {
			font-family: 'Open Sans', sans-serif;
			font-weight: 300;
			line-height: 1.75em;
		}

		p {
			margin: 1.5rem 0;
		}
	}

	.projects {
		&__items {
			@include flex-center;
			flex-wrap: wrap;
			gap: 25px;
			padding: 0;
		}
	}

	@media only screen and (min-width: 768px) {
		.hero__heading {
			padding-top: 15vh;
		}

		.hero__down-arrow {
			height: 6rem;
		}

		.about__blurb {
			max-width: 800px;
			margin: 0 auto;
			text-indent: 4ch;
			padding: 1em 2em;
			border: 1px solid var(--primary-color);
			border-radius: 20px;
		}
	}

	@keyframes gradient {
		0% {
			background-position: 0% 75%;
		}
		50% {
			background-position: 100% 75%;
		}
		100% {
			background-position: 0% 75%;
		}
	}

	@keyframes up-down {
		100% {
			transform: translateY(0);
		}
		99% {
			visibility: visible;
		}
		50% {
			transform: translateY(-1.5em);
		}
	}

	@keyframes typing {
		0% {
			width: 0;
		}

		1% {
			border-right: 0.1em solid white;
		}

		100% {
			border-right: 0.1em solid white;
		}
	}

	@keyframes typing_top {
		0% {
			width: 0;
		}

		99% {
			border-right: 0.1em solid white;
		}
		100% {
			border: none;
		}
	}

	@keyframes blink {
		50% {
			border-color: transparent;
		}
	}

	@keyframes -global-slide-in-left {
		0% {
			transform: translateX(6vw);
			opacity: 0;
		}
		100% {
			transform: translateX(0);
			opacity: 1;
		}
	}
</style>
