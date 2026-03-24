<template>
	<div class="projects-page-top">
		<div class="projects-page-header">
			<h1>Contact</h1>
			<h3>A few links and ways to get in touch</h3>
		</div>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="100"
			height="100"
			viewBox="0 0 64 64"
			fill="none"
			role="img"
			aria-label="Coding Portfolio Icon"
		>
			<defs>
				<linearGradient id="portfolio-grad" x1="0%" y1="0%" x2="100%" y2="100%">
					<stop offset="0%" stop-color="#007CF0" />
					<stop offset="100%" stop-color="#00DFD8" />
				</linearGradient>
			</defs>

			<rect width="64" height="64" rx="32" fill="url(#portfolio-grad)" />

			<g stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
				<path d="M26 22L16 32L26 42" />
				<path d="M38 22L48 32L38 42" />
				<path d="M38 16L26 48" />
			</g>
		</svg>
	</div>

	<div class="contact-grid">
		<a
			v-for="contact in contacts"
			:key="contact.id"
			:href="contact.link"
			target="_blank"
			class="contact-card"
		>
			<div class="contact-info">
				<h4>{{ contact.title }}</h4>
				<p>{{ contact.subtitle }}</p>
			</div>
		</a>
	</div>
</template>

<script setup>
import { ref } from "vue";

const contacts = ref([
	{
		id: 0,
		title: "Email",
		subtitle: "Reach out via email",
		link: "mailto:joseph.steel@example.com",
	},
	{
		id: 1,
		title: "LinkedIn",
		subtitle: "Connect with me professionally",
		link: "https://linkedin.com/",
	},
	{
		id: 2,
		title: "GitHub",
		subtitle: "Check out my repositories",
		link: "https://github.com/SteelMasterJ",
	},
	{
		id: 3,
		title: "Spotify",
		subtitle: "My band slow fix on Spotify",
		link: "https://open.spotify.com/artist/4cncWMR1Es6HRLdr2rSW9e",
	},
]);
</script>

<style scoped>
.projects-page-top {
	background-color: #333;
	background-image:
		/* White Stars */
		radial-gradient(1px 1px at 25px 35px, white, rgba(255, 255, 255, 0)),
		radial-gradient(1.5px 1.5px at 100px 60px, white, rgba(255, 255, 255, 0)),
		radial-gradient(2px 2px at 150px 120px, white, rgba(255, 255, 255, 0)),
		radial-gradient(1px 1px at 200px 150px, white, rgba(255, 255, 255, 0)),
		radial-gradient(3px 3px at 250px 80px, white, rgba(255, 255, 255, 0)),
		radial-gradient(1.5px 1.5px at 300px 50px, white, rgba(255, 255, 255, 0)),
		radial-gradient(2.5px 2.5px at 350px 180px, white, rgba(255, 255, 255, 0)),
		radial-gradient(1px 1px at 400px 250px, white, rgba(255, 255, 255, 0)),
		radial-gradient(4px 4px at 450px 40px, white, rgba(255, 255, 255, 0)),
		radial-gradient(2px 2px at 500px 100px, white, rgba(255, 255, 255, 0)),
		radial-gradient(1px 1px at 550px 220px, white, rgba(255, 255, 255, 0)),
		radial-gradient(1.5px 1.5px at 600px 300px, white, rgba(255, 255, 255, 0)),
		radial-gradient(3px 3px at 650px 150px, white, rgba(255, 255, 255, 0)),
		radial-gradient(1px 1px at 700px 80px, white, rgba(255, 255, 255, 0)),
		radial-gradient(2px 2px at 750px 250px, white, rgba(255, 255, 255, 0)),
		radial-gradient(1px 1px at 800px 200px, white, rgba(255, 255, 255, 0)),
		radial-gradient(3.5px 3.5px at 850px 60px, white, rgba(255, 255, 255, 0)),
		radial-gradient(1.5px 1.5px at 900px 150px, white, rgba(255, 255, 255, 0)),
		radial-gradient(2px 2px at 950px 280px, white, rgba(255, 255, 255, 0)),
		radial-gradient(1px 1px at 50px 400px, white, rgba(255, 255, 255, 0)),
		radial-gradient(2.5px 2.5px at 200px 500px, white, rgba(255, 255, 255, 0)),
		radial-gradient(1.5px 1.5px at 400px 600px, white, rgba(255, 255, 255, 0)),
		radial-gradient(3px 3px at 600px 450px, white, rgba(255, 255, 255, 0)),
		radial-gradient(1px 1px at 800px 550px, white, rgba(255, 255, 255, 0)),
		radial-gradient(2px 2px at 900px 400px, white, rgba(255, 255, 255, 0)),
		/* Orange Stars */
			radial-gradient(2px 2px at 75px 200px, rgba(255, 200, 100, 1), rgba(255, 200, 100, 0)),
		radial-gradient(3px 3px at 220px 330px, rgba(255, 200, 100, 0.8), rgba(255, 200, 100, 0)),
		radial-gradient(1.5px 1.5px at 480px 520px, rgba(255, 200, 100, 0.9), rgba(255, 200, 100, 0)),
		radial-gradient(2.5px 2.5px at 700px 400px, rgba(255, 200, 100, 1), rgba(255, 200, 100, 0)),
		radial-gradient(4px 4px at 880px 220px, rgba(255, 200, 100, 0.7), rgba(255, 200, 100, 0)),
		radial-gradient(2px 2px at 150px 750px, rgba(255, 200, 100, 1), rgba(255, 200, 100, 0)),
		radial-gradient(3px 3px at 550px 850px, rgba(255, 200, 100, 0.8), rgba(255, 200, 100, 0)),
		radial-gradient(1.5px 1.5px at 820px 920px, rgba(255, 200, 100, 0.9), rgba(255, 200, 100, 0)),
		/* Blue Stars */
			radial-gradient(2px 2px at 120px 450px, rgba(130, 210, 255, 1), rgba(130, 210, 255, 0)),
		radial-gradient(3px 3px at 380px 80px, rgba(130, 210, 255, 0.8), rgba(130, 210, 255, 0)),
		radial-gradient(1.5px 1.5px at 520px 280px, rgba(130, 210, 255, 0.9), rgba(130, 210, 255, 0)),
		radial-gradient(2.5px 2.5px at 650px 650px, rgba(130, 210, 255, 1), rgba(130, 210, 255, 0)),
		radial-gradient(4px 4px at 920px 500px, rgba(130, 210, 255, 0.7), rgba(130, 210, 255, 0)),
		radial-gradient(2px 2px at 280px 900px, rgba(130, 210, 255, 1), rgba(130, 210, 255, 0)),
		radial-gradient(3px 3px at 450px 700px, rgba(130, 210, 255, 0.8), rgba(130, 210, 255, 0)),
		radial-gradient(1.5px 1.5px at 720px 120px, rgba(130, 210, 255, 0.9), rgba(130, 210, 255, 0)),
		/* Additional White Stars for Density */
			radial-gradient(1px 1px at 180px 40px, white, rgba(255, 255, 255, 0)),
		radial-gradient(1px 1px at 320px 280px, white, rgba(255, 255, 255, 0)),
		radial-gradient(1.5px 1.5px at 580px 40px, white, rgba(255, 255, 255, 0)),
		radial-gradient(1px 1px at 740px 320px, white, rgba(255, 255, 255, 0)),
		radial-gradient(2px 2px at 960px 80px, white, rgba(255, 255, 255, 0)),
		radial-gradient(1px 1px at 40px 650px, white, rgba(255, 255, 255, 0)),
		radial-gradient(1.5px 1.5px at 260px 420px, white, rgba(255, 255, 255, 0)),
		radial-gradient(1px 1px at 500px 750px, white, rgba(255, 255, 255, 0)),
		radial-gradient(2px 2px at 780px 850px, white, rgba(255, 255, 255, 0));
	background-repeat: repeat;
	background-size: 1000px 1000px;
	min-height: 35vh;
	display: flex;
	align-items: center;
	border-radius: 1rem;
	padding: 4rem 2rem;
	margin-top: 2rem;
	position: relative;
	overflow: hidden;
	z-index: 1;
}

.projects-page-header {
	text-align: left;
	color: #fff;
	z-index: 2;
}

.projects-page-header h1 {
	margin: 0 0 0.5rem 0;
	font-size: 5em;
}

.projects-page-header h3 {
	margin: 0;
	font-weight: 400;
	font-size: 2.5em;
	color: #e7e7e7;
}

.projects-page-top svg {
	position: absolute;
	right: -20px;
	bottom: -20px;
	width: 400px;
	height: 400px;
	opacity: 0.15;
	z-index: 0;
	transform: rotate(-15deg);
	pointer-events: none;
	transition: transform 0.5s ease;
}

@media (max-width: 767px) {
	.projects-page-header h1 {
		font-size: 3em !important;
	}
	.projects-page-header h3 {
		font-size: 1.8em !important;
	}
}

.contact-grid {
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	margin-top: 2rem;
	padding-bottom: 4rem;
}

.contact-card {
	background-color: var(--text-lighter);
	color: var(--background-color);
	padding: 1.5rem 2rem;
	border-radius: 0.75rem;
	text-decoration: none;
	display: flex;
	flex-direction: column;
	width: 100%;
	transition:
		background-color 0.2s ease,
		transform 0.2s ease;
	background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>');
	background-repeat: no-repeat;
	background-position: right 2rem center;
	padding-right: 5rem;
	box-sizing: border-box;
}

.contact-card:hover {
	background-color: var(--text-color);
	transform: translateY(-3px);
}

.contact-info {
	display: flex;
	flex-direction: column;
}

.contact-info h4 {
	margin: 0 0 0.5rem 0;
	font-size: 1.5rem;
}

.contact-info p {
	margin: 0;
	font-size: 1.1rem;
	opacity: 0.8;
}
</style>
