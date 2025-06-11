import { createApp } from 'vue'
import App from './App.vue' 
import router from './router'

import '@/assets/_main.scss'
import '@/assets/_normalize.scss'

createApp(App).mount('#app')

createApp(App).use(router).mount('#app')

App.mount('#app');