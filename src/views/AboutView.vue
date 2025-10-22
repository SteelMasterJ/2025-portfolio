<template>
	<div class="about-page-top">
		<h1>joey steel</h1>
		<h2>i'm a front end web developer</h2>
	</div>
	<NavSlider :switchActiveComponent="switchActiveComponent" :navItems="navItems" />
	<component :is="activeComponent" />
</template>

<script setup>
import { computed, ref } from "vue";
// Vue automatically registers the component for use in the template
import NavSlider from "../components/NavSlider.vue";
import OverviewView from "@/views/OverviewView.vue";
import SkillsView from "./SkillsView.vue";
import MoreView from "./MoreView.vue";

const navItems = ref([
	{ id: "overview", name: "overview" },
	{ id: "skills", name: "skills" },
	{ id: "more", name: "a little more" },
]);

const componentMap = {
	// Key (from NavSlider) : Value (imported component object)
	overview: OverviewView,
	skills: SkillsView,
	more: MoreView,
};

const activeComponent = computed(() => {
	// This is the essential step: look up the component based on the ID
	return componentMap[activeComponentID.value];
});

const activeComponentID = ref("overview");

const switchActiveComponent = (navItemID) => {
	console.log(navItemID);
	activeComponentID.value = navItemID;
};

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
.about-page-top {
	/* Use the background-image property */
	background-image: url("../assets/profilepic550-550.png");

	/* These properties are crucial for controlling the photo's appearance */
	background-size: cover; /* This makes the image fill the entire div, cropping if necessary */
	background-position: center; /* This centers the image in the div */
	background-repeat: no-repeat; /* This prevents the image from tiling */

	/* Optional: Add a subtle overlay for better text readability */
	background-blend-mode: multiply; /* Blends the image with a background color */
	background-color: rgba(0, 0, 0, 0.4); /* A semi-transparent color */

	min-height: 75vh;
	display: flex;
	justify-content: center;
	flex-direction: column;
	border-radius: 1rem 1rem 0 0;
	padding: 1rem;
	margin-top: 2rem;
	h1 {
		font-size: 5em;
		color: $text-color;
	}

	h2 {
		font-size: 3em;
		color: $text-color;
	}

	.nav-links {
		list-style: none;
		display: flex;
		margin: 0;
		padding: 0;

		li {
			font-size: 2rem;
			margin-left: 20px;
			&:first-child {
				margin-left: 0;
			}
		}
	}
}
</style>
