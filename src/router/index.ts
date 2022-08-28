import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Top250View from '../views/Top250View.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:page?:countries?',
    name: 'home',
    component: HomeView,
    props: true,
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
  linkActiveClass: 'active',
});

export default router;
