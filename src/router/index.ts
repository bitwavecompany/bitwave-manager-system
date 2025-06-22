import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import loginView from '@/features/auth/login/views/loginView.vue';
import registerView from '@/features/auth/register/views/registerView.vue';
import homeView from '@/features/home/views/homeView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: loginView
  },
  {
    path: '/register',
    name: 'Register',
    component: registerView
  },
  {
    path: '/home',
    name: 'Home',
    component: homeView
  },
  {
    path: '/',
    redirect: '/login'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
