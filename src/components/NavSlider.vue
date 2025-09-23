<template>
	<div class="nav-slider-component">
		<nav class="nav-slider">
			<div class="nav-slider-wrapper">
				<button
					v-for="item in navItems"
					:key="item.id"
					@click="setActiveComponent(item.id)"
					:class="['nav-item', { active: activeComponent === item.id }]"
				>
					{{ item.name }}
				</button>
			</div>
		</nav>
	</div>
</template>

<script>
import { ref } from "vue";
export default {
	setup() {
		const navItems = ref([
			{ id: "dashboard", name: "Dashboard" },
			{ id: "settings", name: "Settings" },
			{ id: "profile", name: "Profile" },
			{ id: "messages", name: "Messages" },
		]);

		// The state variable that holds the ID of the currently active component.
		const activeComponent = ref("dashboard");

		// A method to update the activeComponent state when a nav button is clicked.
		const setActiveComponent = (id) => {
			activeComponent.value = id;
		};

		return {
			navItems,
			activeComponent,
			setActiveComponent,
		};
	},
};
</script>

<style lang="scss" scoped>
@use "../assets/variables" as *;
.nav-slider {
	display: flex;
	justify-content: center;
	flex-wrap: nowrap;
	overflow-x: auto;
	gap: 0.5rem;
	padding: 0.5rem;
	background-color: $text-color;
	-webkit-overflow-scrolling: touch;
}
.nav-slider-wrapper {
	// padding: 0.5rem 0.6rem;
	background-color: $text-lighter;
	border-radius: 9999px;
}
.nav-item {
	margin: 0.5rem 0.7rem;
	padding: 0.75rem 1.5rem;
	border-radius: 9999px;
	cursor: pointer;
	transition: all 0.4s ease-in-out;
	border: 0;
	color: $background-color;
	white-space: nowrap;
	background-color: $text-lighter;
	font-size: 1rem;
	font-weight: 600;
}
.nav-item:hover {
	background-color: $text-color;
}
.nav-item.active {
	background-color: $background-color;
	color: $text-color;
	box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}
</style>
