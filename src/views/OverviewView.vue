<template>
	<div class="lower-about">
		<div>
			<p>
				Based out of Charlottesville, VA, and specializing in Vue.js. I've been working full time in
				web development for {{ yearsSince2020 }}+ years.
			</p>
			<p>
				I've collected a wide number of different skills and have an appreciation for how they all
				come together to create a polished product. In a world of AI driven development you need
				someone who understands JavaScript, HTML, CSS, and Vue.js from the ground up. My
				professional journey has given me a deep understanding of the full web development
				lifecycle, from initial concept to deployment and maintenance. I've honed my skills in
				Node.js, building robust, scalable server-side applications. My experience includes creating
				high-performance APIs and microservices. I'm also adept at using TypeScript to add static
				typing to my codebase, which has significantly improved the reliability and maintainability
				of the projects I've worked on.
			</p>
			<p>
				Furthermore, I have a passion for Node package development, having created and published
				several packages that are used in various projects, streamlining common tasks and promoting
				code reuse.
			</p>
		</div>
	</div>
</template>

<script setup>
import { computed } from "vue";
const yearsSince2020 = computed(() => {
	// Define the past date (April 1, 2020)
	const pastDate = new Date("2020-04-01");
	// Get the current date
	const now = new Date();

	// Calculate the difference in milliseconds
	const diffInMs = now.getTime() - pastDate.getTime();

	// Convert milliseconds to years
	const years = diffInMs / (1000 * 60 * 60 * 24 * 365.25);

	// Return the number of years, rounded down
	return Math.floor(years);
});
</script>

<style scoped>
.lower-about {
	background-image: url("../assets/nightsky.jpg");
	min-height: 25vh;
	display: flex;
	justify-content: center;
	flex-direction: column;
	color: var(--text-color);
	font-size: 1.75rem;
	padding: 3rem;
	border-radius: 0 0 1rem 1rem;
}

@media (max-width: 500px) {
	.lower-about {
		padding-top: 11.5rem;
	}
}
</style>
