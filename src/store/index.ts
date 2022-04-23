import { createStore } from 'vuex';
import moviesModule from '@/store/modules/movies.module';

export default createStore({
  modules: { moviesModule },
});
