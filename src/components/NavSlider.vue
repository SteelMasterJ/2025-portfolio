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
import { ref, watchEffect } from "vue";
export default {
	props: {
		navItems: Array,
		switchActiveComponent: Function,
	},
	setup(props) {
		// The state variable that holds the ID of the currently active component.
		const activeComponent = ref(null);

		//   Use watchEffect to set the initial value of activeComponent.
		//    This runs immediately and re-runs if props.navItems changes.
		watchEffect(() => {
			if (props.navItems && props.navItems.length > 0) {
				// Set the initial active component to the ID of the first item
				activeComponent.value = props.navItems[0].id;
			}
		});

		// A method to update the activeComponent state when a nav button is clicked.
		const setActiveComponent = (id) => {
			activeComponent.value = id;
			props.switchActiveComponent(id);
		};

		return {
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
	background-color: transparent;
	margin-top: -4.75em;
	-webkit-overflow-scrolling: touch;
}
.nav-slider-wrapper {
	// padding: 0.5rem 0.6rem;
	background-color: $text-lighter;
	border-radius: 9999px;
	display: flex;
	flex-direction: row;
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

@media (max-width: 500px) {
	.nav-slider {
		margin-top: 0rem;
		padding-left: 1rem;
		padding-right: 1rem;
		margin-bottom: -12.5rem;
		position: relative;
		z-index: 10;
	}
	.nav-slider-wrapper {
		flex-direction: column;
		border-radius: 1rem;
		padding: 0.5rem;
		width: 100%;
	}
	.nav-item {
		margin: 0.25rem 0;
		width: 100%;
	}
}
</style>
