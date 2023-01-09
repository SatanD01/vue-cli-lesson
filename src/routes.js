import {createRouter, createWebHashHistory} from 'vue-router';
const routerHistory = createWebHashHistory();

import TheHome from "@/pages/TheHome";
import TheAbout from "@/pages/TheAbout";
import TheVacancy from "@/pages/TheVacancy";
import TheNotFound from "@/pages/TheNotFound";

const routers = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            name: 'home',
            component: TheHome,
        },
        {
            path: '/about',
            name: 'about',
            component: TheAbout,
        },
        {
            path: '/vacancy',
            name: 'vacancy',
            component: TheVacancy,
        },
        {
            path: '/:CatchAll(.*)',
            name: 'notFound',
            component: TheNotFound,
        }
    ]
})

export default routers;
