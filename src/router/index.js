import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: HomeView,
		},
		{
			path: "/about",
			name: "about",
			component: () => import("../views/AboutView.vue"),
		},
		{
			path: "/projects",
			name: "Projects",
			component: () => import("../views/ProjectsView.vue"),
		},
		// { path: '/about', name: 'About', component: About },
		// { path: '/contact', name: 'Contact', component: Contact },
	],
});

export default router;
