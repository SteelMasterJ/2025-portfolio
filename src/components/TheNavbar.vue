<template>
	<nav class="navbar">
		<div class="container">
			<router-link to="/" class="logo">joeysteel.com</router-link>
			<ul class="nav-links">
				<li><router-link to="/about" class="hover-white-blue-gradient">about</router-link></li>
				<li>
					<router-link to="/projects" class="hover-white-blue-gradient">projects</router-link>
				</li>
				<li><router-link to="/contact" class="hover-white-blue-gradient">contact</router-link></li>
			</ul>
		</div>
	</nav>
</template>

<style scoped lang="scss">
@use "../assets/variables" as *;

.navbar {
	// Sticky and full-width properties
	position: sticky;
	top: 0;
	width: 100%;
	z-index: 1000;
	background-color: $background-color;
	padding-top: 1rem;
	padding-bottom: 1rem;

	.container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		max-width: 900px;
		margin: 0 auto;
		padding: 0 1.5rem;

		.logo {
			color: $text-color;
			font-size: 1.75rem;
			text-decoration: none;
			&:hover {
				color: $text-lighter;
			}
		}

		.nav-links {
			list-style: none;
			display: flex;
			margin: 0;
			padding: 0;
			font-size: 1.1rem;

			li {
				margin-left: 20px;
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
