import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import cors from 'cors'
import piniaPersistedState from 'pinia-plugin-persistedstate';

import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia();

pinia.use(piniaPersistedState);  // Use the persisted state plugin

app.use(pinia)
app.use(router)
app.use(cors)

app.mount('#app')
