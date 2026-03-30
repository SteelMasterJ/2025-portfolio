<template>
	<nav class="navbar">
		<div class="container">
			<div class="nav-header">
				<router-link to="/" class="logo">joeysteel.com</router-link>
				<button class="menu-toggle" @click="toggleMenu" aria-label="Toggle navigation menu">
					<span class="hamburger"></span>
					<span class="hamburger"></span>
					<span class="hamburger"></span>
				</button>
			</div>
			<ul class="nav-links" :class="{ 'is-open': isMenuOpen }">
				<li>
					<router-link to="/about" class="hover-white-blue-gradient" @click="closeMenu"
						>about</router-link
					>
				</li>
				<li>
					<router-link to="/projects" class="hover-white-blue-gradient" @click="closeMenu"
						>projects</router-link
					>
				</li>
				<li>
					<router-link to="/contact" class="hover-white-blue-gradient" @click="closeMenu"
						>contact</router-link
					>
				</li>
			</ul>
		</div>
	</nav>
</template>

<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);

const toggleMenu = () => {
	isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
	isMenuOpen.value = false;
};
</script>

<style scoped>
.navbar {
	/* Sticky and full-width properties */
	position: sticky;
	top: 0;
	width: 100%;
	z-index: 1000;
	background-color: var(--background-color);
	padding-top: 1rem;
	padding-bottom: 1rem;
}
.navbar .container {
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: 900px;
	margin: 0 auto;
	padding: 0 1.5rem;
}
.nav-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.navbar .logo {
	color: var(--text-color);
	font-size: 1.75rem;
	text-decoration: none;
}
.navbar .logo:hover {
	color: var(--text-lighter);
}

.menu-toggle {
	display: none;
	background: transparent;
	border: none;
	cursor: pointer;
	padding: 0.5rem;
	flex-direction: column;
	gap: 5px;
}
.hamburger {
	display: block;
	width: 25px;
	height: 3px;
	background-color: var(--text-color);
	border-radius: 2px;
	transition: all 0.3s ease;
}

.navbar .nav-links {
	list-style: none;
	display: flex;
	margin: 0;
	padding: 0;
	font-size: 1.1rem;
}
.navbar .nav-links li {
	margin-left: 20px;
}

@media (max-width: 768px) {
	.navbar .container {
		flex-direction: column;
		align-items: stretch;
	}

	.nav-header {
		width: 100%;
	}

	.menu-toggle {
		display: flex;
	}

	.navbar .nav-links {
		display: none;
		flex-direction: column;
		text-align: center;
		margin-top: 1rem;
	}

	.navbar .nav-links.is-open {
		display: flex;
	}

	.navbar .nav-links li {
		margin: 0.5rem 0;
	}
}
</style>
