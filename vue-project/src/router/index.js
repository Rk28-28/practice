import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import Testing from '@/components/Testing.vue'
import TestId from '@/components/TestId.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/testing', component: Testing },
    { path: '/test/:id', component: TestId, props: true }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
