import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

createApp(App)
.use(router)
// 挂载pinia
.use(store)
.mount('#app')
