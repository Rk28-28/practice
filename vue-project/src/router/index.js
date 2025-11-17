import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/HomeView.vue'
import TestView from '../components/TestView.vue'
import FunView from '../components/FunView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/fun',
            name: 'fun',
            component: FunView,
        },
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/test',
            name: 'test',
            component: TestView,
        },
        {
            path: '/test/:id',
            name: 'test_w_id',
            component: TestView,
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../components/AboutView.vue'),
        },
    ],
})

export default router