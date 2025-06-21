import { createApp } from 'vue'
import { Icon } from '@iconify/vue'
import '@/assets/main.css'
import App from './AppMain.vue'
import router from './router'

const app = createApp(App)
app.component('Icon', Icon)
app.use(router)
app.mount('#app')

