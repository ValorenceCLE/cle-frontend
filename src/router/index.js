import { createRouter, createWebHistory } from 'vue-router';

// Example routes, update as needed
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/components/Home.vue'), // Make sure this file exists or update the path
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
