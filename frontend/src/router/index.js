import { createRouter, createWebHistory } from 'vue-router';
import Home from "../views/Home.vue";

const router = createRouter({
    history: createWebHistory(),
    routes : [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: {
              title : "Leslie EL KATTOUSSI : Accueil"
            }
        },
        {
            name : "notfound",
            path : "/notfound",
            component : () => import("../views/NotFound.vue"),
            meta: {
                title : "Leslie EL KATTOUSSI : Page introuvable"
            }
        },
        {
            path : "/:pathMatch(.*)",
            redirect:  'notfound'
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
router.afterEach((from, to) => {
    document.title = from.meta.title
});

export default router;