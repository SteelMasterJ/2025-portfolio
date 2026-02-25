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

<style lang="scss">
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
