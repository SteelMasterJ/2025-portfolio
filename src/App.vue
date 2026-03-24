<script setup>
import { RouterView } from "vue-router";
import TheNavbar from "./components/TheNavbar.vue";
import TheFooter from "./components/TheFooter.vue";
</script>

<template>
	<div id="app">
		<TheNavbar />
		<main>
			<router-view />
		</main>
		<TheFooter />
	</div>
</template>

<style>
:root {
	--primary-color: #71d7ff;
	--text-color: #fff;
	--text-lighter: #e7e7e7;
	--background-color: #333;
}

a.hover-white-blue-gradient {
	text-decoration: none;
	color: transparent;
	background-image: linear-gradient(to right, var(--text-color), var(--primary-color));
	background-size: 300% 100%;
	background-position: 0 0;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background-clip: text;
	transition: background-position 0.3s ease;
}
a.hover-white-blue-gradient:hover {
	background-position: 100% 0;
}

.hover-black-blue-gradient {
	text-decoration: none;
	color: transparent;
	background-image: linear-gradient(to right, var(--background-color), var(--primary-color));
	background-size: 300% 100%;
	background-position: 0 0;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background-clip: text;
	transition: background-position 0.3s ease;
}
.hover-black-blue-gradient:hover {
	background-position: 100% 0;
	cursor: pointer;
}

*,
*::before,
*::after {
	box-sizing: border-box;
}

body {
	font-family:
		-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
		"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
	line-height: 1.6;
	margin: 0;
	background-color: #f4f4f4;
	color: #333;
}

#app {
	display: flex;
	flex-direction: column;
	min-height: 100vh;
}

main {
	flex: 1;
	width: 100%;
	max-width: 900px;
	margin: 0 auto;
	padding: 20px;
}
</style>
