<template>
	<div class="lower-about">
		<div class="skills-container">
			<h3>My Technical and Creative Skills</h3>

			<section class="skill-category frontend-development">
				<h4>Front-End Development</h4>
				<ul class="skills-list">
					<li>JavaScript</li>
					<li>CSS</li>
					<li>HTML</li>
					<li>TypeScript</li>
					<li>Vue.js</li>
					<li>React</li>
					<li>jQuery</li>
					<li>Bootstrap</li>
				</ul>
			</section>

			<section class="skill-category backend-fullstack">
				<h4>Back-End & Full-Stack</h4>
				<ul class="skills-list">
					<li>Node.js</li>
					<li>Next.js</li>
					<li>Gatsby</li>
					<li>APIs/GraphQL</li>
				</ul>
			</section>

			<section class="skill-category tools-and-versioning">
				<h4>Tools & Version Control</h4>
				<ul class="skills-list">
					<li>Git</li>
				</ul>
			</section>

			<section class="skill-category design-and-creative">
				<h4>Design & Creative</h4>
				<ul class="skills-list">
					<li>Adobe CC</li>
				</ul>
			</section>
		</div>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped>
@use "../assets/variables" as *;
.lower-about {
	// background-color: $background-color;
	background-image: url("../assets/nightsky.jpg");
	min-height: 25vh;
	display: flex;
	justify-content: center;
	flex-direction: column;
	color: $text-color;
	font-size: 1.75rem;
	padding: 3rem;
	border-radius: 0 0 1rem 1rem;
}
</style>
