import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import HelpView from "../views/HelpView.vue";
import AboutView from "../views/AboutView.vue";
import BlogView from "../views/BlogView.vue";
import ServicesView from "../views/ServicesView.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/blog",
        name: "blog",
        component: BlogView,
    },
    {
        path: "/services",
        name: "services",
        component: ServicesView,
    },
    {
        path: "/blog",
        name: "blog",
        component: BlogView,
    },
    {
        path: "/about",
        name: "about",
        component: AboutView,
    },
    {
        path: "/help",
        name: "help",
        component: HelpView,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
