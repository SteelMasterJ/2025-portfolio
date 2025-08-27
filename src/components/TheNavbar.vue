<template>
	<nav class="navbar">
		<div class="container">
			<router-link to="/" class="logo">joeysteel.com</router-link>
			<ul class="nav-links">
				<li><router-link to="/about">about</router-link></li>
				<li><router-link to="/projects">projects</router-link></li>
				<li><router-link to="/contact">contact</router-link></li>
			</ul>
		</div>
	</nav>
</template>

<style scoped lang="scss">
$primary-color: #71d7ff;
$text-color: #fff;
$background-color: #333;

.navbar {
	// Sticky and full-width properties
	position: sticky;
	top: 0;
	width: 100%;
	z-index: 1000;

	background-color: $background-color;
	padding: 1rem 0;

	.container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		max-width: 900px;
		margin: 0 auto;

		.logo {
			color: $text-color;
			font-size: 1.5rem;
			text-decoration: none;
		}

		.nav-links {
			list-style: none;
			display: flex;
			margin: 0;
			padding: 0;

			li {
				margin-left: 20px;
			}
		}

		a {
			text-decoration: none;
			color: transparent; // Make the text color transparent
			background-image: linear-gradient(to right, $text-color, $primary-color); // Your two colors
			background-size: 200% 100%; // Double the width
			background-position: 0 0; // Position to show the first color
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			background-clip: text;
			transition: background-position 0.3s ease; // Animate the position

			&:hover {
				background-position: 100% 0; // Slide the gradient over
			}
		}
	}
}

@media (max-width: 768px) {
	.navbar {
		.container {
			flex-direction: column;
			text-align: center;
		}

		.logo {
			margin-bottom: 1rem;
		}

		.nav-links {
			flex-direction: column;

			li {
				margin: 0.5rem 0;
			}
		}
	}
}
</style>
