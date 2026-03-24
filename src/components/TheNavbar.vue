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
.navbar .container .logo {
	color: var(--text-color);
	font-size: 1.75rem;
	text-decoration: none;
}
.navbar .container .logo:hover {
	color: var(--text-lighter);
}
.navbar .container .nav-links {
	list-style: none;
	display: flex;
	margin: 0;
	padding: 0;
	font-size: 1.1rem;
}
.navbar .container .nav-links li {
	margin-left: 20px;
}

@media (max-width: 768px) {
	.navbar .container {
		flex-direction: column;
		text-align: center;
	}

	.navbar .logo {
		margin-bottom: 1rem;
	}

	.navbar .nav-links {
		flex-direction: column;
	}

	.navbar .nav-links li {
		margin: 0.5rem 0;
	}
}
</style>
