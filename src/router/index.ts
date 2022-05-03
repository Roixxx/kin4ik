import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Top250View from '../views/Top250View.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:page?',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/movies/top250/:page?',
    name: 'top250',
    component: Top250View,
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
