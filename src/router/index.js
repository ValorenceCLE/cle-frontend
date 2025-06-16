import { createRouter, createWebHistory } from 'vue-router';

// Example routes, update as needed
const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('@/views/LoginView.vue'),
  },
  // Removed the /login route for now
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
