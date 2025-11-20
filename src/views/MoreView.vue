<template>
	<div class="lower-about">
		<div>a little more!</div>
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
