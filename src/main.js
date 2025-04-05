import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import Home from './components/Home.vue'
import PetInfo from './components/PetInfo.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/pet-info', component: PetInfo }
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
