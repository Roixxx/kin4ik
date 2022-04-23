import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '@/assets/global.scss';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

createApp(App).use(store).use(router).mount('#app');
