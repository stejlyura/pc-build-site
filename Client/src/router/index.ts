import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import ProductPage from '@/views/ProductPage.vue';
import Configurator from '@/views/Configurator.vue';
import underConstruction from '@/views/underConstruction.vue';

const routes = [
    {
        path: '/', name: 'Home', component: Home
    },
    {
        path: '/product/:id', name: 'ProductPage', component: ProductPage
    },
    {
        path: '/configurator', name: 'Configurator', component: Configurator
    },
    {
        path: '/underDevelop', name: 'underDevelop', component: underConstruction
    }
]

const router = createRouter({
  history: createWebHistory('/app'),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router