import { createApp } from 'vue'
import App from './App.vue' 
import router from './router'

import '@/assets/_main.scss'
import '@/assets/_normalize.scss'

const app = createApp(App)

app.use(router)
app.mount('#app')