<template>
	<div class="home-page-top">
		<h1>Hello. I'm <span class="joey hover-black-blue-gradient">Joey.</span></h1>
		<ul class="nav-links">
			<li><router-link to="/about" class="hover-black-blue-gradient">developer.</router-link></li>
			<li>
				<router-link to="/projects" class="hover-black-blue-gradient">designer.</router-link>
			</li>
			<li><router-link to="/contact" class="hover-black-blue-gradient">artist.</router-link></li>
		</ul>
	</div>
	<div class="lower-home">
		<div>
			I am a web developer, designer, and artist who is passionate about creative solutions that
			empower all.
		</div>
	</div>
</template>

<style lang="scss" scoped>
@use "../assets/variables" as *;
.home-page-top {
	min-height: 75vh;
	display: flex;
	justify-content: center;
	flex-direction: column;
	background-color: $text-color;
	border-radius: 1rem 1rem 0 0;
	padding: 1rem;
	margin-top: 2rem;
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
.lower-home {
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
