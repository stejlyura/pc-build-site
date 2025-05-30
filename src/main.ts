import { createApp } from 'vue'
import App from './App.vue' 

import '@/assets/_main.scss'
import '@/assets/_normalize.scss'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

createApp(App).mount('#app')

App.use(VueSweetalert2);
App.mount('#app');