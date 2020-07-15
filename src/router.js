import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Contact from "./views/Contact.vue";
import Blog from "./views/Blog.vue";



Vue.use(Router);

const routes = [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/about",
        name: "about",
        component: About
    },
    {
        path: "/contact",
        name: "contact",
        component: Contact
    },
    {
        path: "/blog",
        name: "blog",
        component: Blog
    }
];
export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});
