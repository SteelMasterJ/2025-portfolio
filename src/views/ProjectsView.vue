<template>
	<div class="projects-page-top">
		<div class="projects-page-header">
			<h1>Coding Projects</h1>
			<h3>Just a few case studies and old projects</h3>
		</div>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="100"
			height="100"
			viewBox="0 0 64 64"
			fill="none"
			role="img"
			aria-label="Coding Portfolio Icon"
		>
			<defs>
				<linearGradient id="portfolio-grad" x1="0%" y1="0%" x2="100%" y2="100%">
					<stop offset="0%" stop-color="#007CF0" />
					<stop offset="100%" stop-color="#00DFD8" />
				</linearGradient>
			</defs>

			<rect width="64" height="64" rx="32" fill="url(#portfolio-grad)" />

			<g stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
				<path d="M26 22L16 32L26 42" />
				<path d="M38 22L48 32L38 42" />
				<path d="M38 16L26 48" />
			</g>
		</svg>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped>
@use "../assets/variables" as *;
.projects-page-top {
	display: flex;
	justify-content: space-between; /* Pushes children to far edges */
	align-items: center; /* Vertically aligns text with the icon */
	padding: 2rem 0; /* Adds some vertical breathing room */
	width: 100%;

	.projects-page-header {
		/* Ensure text takes up available space but leaves room for icon */
		max-width: 70%;

		h1 {
			margin: 0 0 0.5rem 0;
			font-size: 2.5rem;
			line-height: 1.2;
		}

		h3 {
			margin: 0;
			font-weight: 400;
			color: #666; /* Or your preferred subtitle color */
			font-size: 1.2rem;
		}
	}

	svg {
		/* Prevents the icon from shrinking if the text gets too long */
		flex-shrink: 0;
		margin-left: 2rem; /* Adds a safety gap between text and icon */

		/* Optional: Add a subtle hover effect */
		transition: transform 0.3s ease;
		&:hover {
			transform: scale(1.05) rotate(5deg);
		}
	}

	/* Responsive: Stack them on small screens */
	@media (max-width: 767px) {
		flex-direction: column-reverse; /* Puts text below icon, or use 'column' */
		align-items: flex-start;
		gap: 1.5rem;

		svg {
			margin-left: 0;
			align-self: center; /* Centers icon on mobile */
		}

		.projects-page-header {
			max-width: 100%;
			text-align: center; /* Optional: Center text on mobile */
		}
	}
}
</style>
