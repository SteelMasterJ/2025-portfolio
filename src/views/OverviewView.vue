<template>
	<div class="lower-about">
		<div>
			based out of charlottesville, va, and specializing in vue.js. i've been working full time in
			web development for {{ yearsSince2020 }}+ years. i've collected a wide number of different
			skills and have an appreciation for how they all come together to create a polished product.
			my professional journey has given me a deep understanding of the full web development
			lifecycle, from initial concept to deployment and maintenance. i've honed my skills in
			node.js, building robust, scalable server-side applications. my experience includes creating
			high-performance apis and microservices. i'm also adept at using typescript to add static
			typing to my codebase, which has significantly improved the reliability and maintainability of
			the projects i've worked on. furthermore, i have a passion for node package development,
			having created and published several packages that are used in various projects, streamlining
			common tasks and promoting code reuse.
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

<style lang="scss" scoped>
@use "../assets/variables" as *;
.lower-about {
	// background-color: $background-color;
	background-image: url("../assets/nightsky.jpg");
	min-height: 25vh;
	display: flex;
	justify-content: center;
	flex-direction: column;
	color: $text-color;
	font-size: 1.75rem;
	padding: 1rem;
	border-radius: 0 0 1rem 1rem;
}
</style>
