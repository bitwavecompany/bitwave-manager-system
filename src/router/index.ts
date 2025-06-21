import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import loginView from '@/features/auth/login/views/loginView.vue';
import homeView from '@/features/home/views/homeView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: loginView
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
