<template>
	<div class="lower-about">
		<div>
			Beyond being a proud father, I'm a Ranger/Bard hybrid at heart. I spend much of my time as a
			trail runner, ultramarathoner, and backcountry explorer. When I'm not on the trails, I’m
			usually behind a drum kit, picking up a guitar, or diving into video games and immersive
			fantasy lore like Harry Potter or Lord of the Rings.
		</div>
		<ul class="links-list">
			<li>
				<a
					href="https://ultrasignup.com/results_participant.aspx?fname=Joseph&lname=Steel"
					target="_blank"
					>my ultramarathon results</a
				>
			</li>
			<li>
				<a href="https://open.spotify.com/artist/4cncWMR1Es6HRLdr2rSW9e" target="_blank"
					>my band slow fix on spotify</a
				>
			</li>
		</ul>
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
.links-list {
	list-style-type: none;
	padding: 0;
	margin: 3rem 0;
	li {
		margin-bottom: 2rem;
		display: flex;
		justify-content: center;
	}

	li:last-child {
		margin-bottom: 0;
	}
	a {
		background-color: $text-lighter;
		color: $background-color;
		padding: 10px 20px;
		border-radius: 5px;
		text-decoration: none;
		display: inline-block;
	}

	a:hover {
		background-color: $text-color;
	}

	a[href^="http"] {
		padding-right: 2.5rem;
		background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>');
		background-repeat: no-repeat;
		background-position: right 1rem center;
	}
}
</style>
