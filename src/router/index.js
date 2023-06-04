import { createRouter, createWebHistory } from 'vue-router';
import App from "../App.vue";

const router = createRouter({
    history: createWebHistory(),
    routes : [
        {
            path: "/",
            component: App
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: "smooth"
            }
        }
        if (savedPosition) {
            return {y: 0}
        }
    }
});

export default router;