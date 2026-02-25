<template>
	<div class="projects-page-top">
		<div class="projects-page-header">
			<h1>Coding Projects</h1>
			<h3>Just a few case studies and old projects</h3>
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

	<div class="projects-grid">
		<a v-for="project in projects" :key="project.id" :href="project.link" class="project-card">
			<div class="project-image">
				<img :src="project.image" :alt="project.title + ' preview'" />
			</div>
			<div class="project-content">
				<h4>{{ project.title }}</h4>
				<p>{{ project.description }}</p>
				<div class="tech-specs">
					<span v-for="tech in project.tech" :key="tech">{{ tech }}</span>
				</div>
			</div>
		</a>
	</div>
</template>

<script setup>
import { ref } from "vue";

const getImageUrl = (name) => {
	return new URL(`../assets/${name}`, import.meta.url).href;
};

const projects = ref([
	{
		id: 1,
		title: "Old Portfolio",
		description:
			"A look back at my previous portfolio site. It shows how far I've come in my development journey.",
		tech: [
			"React",
			"Gatsby",
			"SASS/SCSS",
			"Tailwind",
			"React Helmet",
			"Babel",
			"GraphQL",
			"CSS",
			"HTML",
		],
		link: "#",
		image: getImageUrl("old-portfolio.png"),
	},
	{
		id: 2,
		title: "Poke Dragger",
		description:
			"A fun interactive application involving Pokemon data and drag-and-drop functionality.",
		tech: [
			"Vue",
			"Vite",
			"Node.js",
			"HTML5 Drag and Drop API",
			"Bootstrap",
			"CSS Animations",
			"CSS",
			"HTML",
		],
		link: "#",
		image: getImageUrl("pokedragger.png"),
	},
	{
		id: 3,
		title: "Shopping Cart App",
		description:
			"A fully functional shopping cart experience with state management and product listings.",
		tech: ["React", "Redux", "React Router", "Tailwind", "Node.js", "Axios", "Jest", "CSS", "HTML"],
		link: "#",
		image: getImageUrl("shoppingcartapp.png"),
	},
	{
		id: 4,
		title: "Stock Number",
		description: "An application designed for tracking stock levels or numbers efficiently.",
		tech: ["React", "Bootstrap", "Node.js", "Axios", "Jest", "CSS", "HTML"],
		link: "#",
		image: getImageUrl("stocknumber.png"),
	},
]);
</script>

<style scoped>
.projects-page-top {
	background-color: #333;
	background-image:
		radial-gradient(1px 1px at 25px 35px, white, rgba(255, 255, 255, 0)),
		radial-gradient(1.5px 1.5px at 100px 60px, white, rgba(255, 255, 255, 0)),
		radial-gradient(1px 1px at 200px 150px, white, rgba(255, 255, 255, 0)),
		radial-gradient(1.5px 1.5px at 300px 50px, white, rgba(255, 255, 255, 0)),
		radial-gradient(1px 1px at 400px 250px, white, rgba(255, 255, 255, 0)),
		radial-gradient(2px 2px at 500px 100px, white, rgba(255, 255, 255, 0)),
		radial-gradient(1px 1px at 600px 300px, white, rgba(255, 255, 255, 0)),
		radial-gradient(1.5px 1.5px at 700px 80px, white, rgba(255, 255, 255, 0)),
		radial-gradient(1px 1px at 800px 200px, white, rgba(255, 255, 255, 0)),
		radial-gradient(1.5px 1.5px at 900px 150px, white, rgba(255, 255, 255, 0));
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

.projects-grid {
	display: grid;
	grid-template-columns: 1fr;
	gap: 2rem;
	margin-top: 2rem;
	padding-bottom: 4rem;
}

.project-card {
	background-color: #333;
	border-radius: 0.75rem;
	text-decoration: none;
	color: #fff;
	box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
	transition:
		transform 0.2s ease,
		box-shadow 0.2s ease;
	display: flex;
	flex-direction: column;
	overflow: hidden;
}

@media (min-width: 768px) {
	.project-card {
		flex-direction: row;
	}
}

.project-card:hover {
	transform: translateY(-5px);
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
	background-color: #3b3b3b;
}

.project-image {
	width: 100%;
	height: 250px;
	background-color: transparent;
	/* Explicitly round top corners for mobile stack */
	border-radius: 0.75rem 0.75rem 0 0;
	overflow: hidden;
}

@media (min-width: 768px) {
	.project-image {
		width: 40%;
		height: auto;
		min-height: 250px;
		/* Specific corners for horizontal layout */
		border-radius: 0.75rem 0 0 0.75rem;
	}
}

.project-image img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	/* Ensure the image itself respects the container's radius */
	border-radius: inherit;
	display: block;
}

.project-content {
	padding: 1.5rem;
	display: flex;
	flex-direction: column;
	flex-grow: 1;
}

.project-content h4 {
	margin: 0 0 1rem 0;
	font-size: 1.5rem;
	color: #fff;
}

.project-content p {
	margin: 0 0 1.5rem 0;
	line-height: 1.5;
	color: #e7e7e7;
	flex-grow: 1;
}

.tech-specs {
	display: flex;
	flex-wrap: wrap;
	gap: 0.5rem;
}

.tech-specs span {
	background-color: #333;
	padding: 0.25rem 0.5rem;
	border-radius: 0.25rem;
	font-size: 0.875rem;
	color: #71d7ff;
	border: 1px solid #444;
	font-weight: 500;
}
</style>
