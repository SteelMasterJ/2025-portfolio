<template>
	<div class="home-page">
		<h1>Hello. I'm <span class="joey hover-black-blue-gradient">Joey.</span></h1>
		<ul class="nav-links">
			<li><router-link to="/about" class="hover-black-blue-gradient">developer.</router-link></li>
			<li><router-link to="/projects" class="hover-black-blue-gradient">designer.</router-link></li>
			<li><router-link to="/contact" class="hover-black-blue-gradient">artist.</router-link></li>
		</ul>
	</div>
</template>

<style lang="scss" scoped>
@use "../assets/variables" as *;
.home-page {
	min-height: 100vh;
	display: flex;
	justify-content: center;
	flex-direction: column;

	h1 {
		font-size: 5em;
		color: $background-color;
		width: 100%;
		.joey {
			&:hover {
				cursor: default;
			}
		}
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
