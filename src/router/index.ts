import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:page?',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/movie/:id',
    name: 'movie',
    component: () => import(/* webpackChunkName: "movie" */ '../views/MovieView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
