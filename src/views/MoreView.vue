<template>
	<div class="lower-about">
		<div>
			In my personal life, my class would be a Ranger/Bard hybrid. I'm a trail runner and
			ultramarathoner, and I also love exploring the backcountry as a hiker and backpacker. Playing
			drums is a true passion for me, as is some guitar, getting lost in video games, and diving
			deep into fantasy lore like Harry Potter or Lord of the Rings.
		</div>
		<ul class="links-list">
			<li>
				<a
					href="https://ultrasignup.com/results_participant.aspx?fname=Joseph&lname=Steel"
					target="_blank"
					>My UltraMarathon results</a
				>
			</li>
			<li>
				<a href="https://open.spotify.com/artist/4cncWMR1Es6HRLdr2rSW9e" target="_blank"
					>My band Slow Fix on Spotify</a
				>
			</li>
		</ul>
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
.links-list {
	list-style-type: none;
	padding: 0;
	margin: 3rem 0;
	li {
		margin-bottom: 2rem;
		display: flex;
		justify-content: center;
	}

	li:last-child {
		margin-bottom: 0;
	}
	a {
		background-color: $text-lighter;
		color: $background-color;
		padding: 10px 20px;
		border-radius: 5px;
		text-decoration: none;
		display: inline-block;
	}

	a:hover {
		background-color: $text-color;
	}
}
</style>
