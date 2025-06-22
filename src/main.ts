import { createApp } from 'vue'
import { Icon } from '@iconify/vue'
import '@/assets/main.css'
import App from './AppMain.vue'
import router from './router'
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

const app = createApp(App)
app.component('Icon', Icon)
app.use(router)
app.use(Toast, {
  position: 'top-right',
  timeout: 2000,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  showCloseButtonOnHover: false,
  hideProgressBar: true,
  closeButton: false,
  icon: true,
  rtl: false
})
app.mount('#app')

