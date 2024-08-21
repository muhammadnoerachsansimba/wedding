import { createRouter, createWebHistory } from "vue-router";

const routes = [
	{
		path: "/:name?",
		name: "cover",
		component: () => import("../views/CoverView.vue"),
	},
	{
		path: "/undangan",
		name: "undangan",
		component: () => import("../views/UndanganView.vue"),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
