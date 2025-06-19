import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import ProductPage from '@/views/ProductPage.vue';
import Configurator from '@/views/Configurator.vue';

const routes = [
    {
        path: '/', name: 'Home', component: Home
    },
    {
        path: '/product/:id', name: 'ProductPage', component: ProductPage
    },
    {
        path: '/configurator', name: 'Configurator', component: Configurator
    }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router