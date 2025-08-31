import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router';
import Home from '../components/Home.vue';
import HabitDetail from '../components/HabitDetail.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/habit/:id', component: HabitDetail, props: true },
];

const history = typeof window !== 'undefined'
  ? createWebHistory(import.meta.env.BASE_URL)
  : createMemoryHistory();

export const router = createRouter({
  history,
  routes,
});
