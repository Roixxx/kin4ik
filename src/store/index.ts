import { createStore } from 'vuex';
import moviesModule from '@/store/modules/movies.module';

const store = createStore({
  state() {
    return {
      loading: false,
    };
  },

  getters: {
    loading(state) {
      return state.loading;
    },
  },

  mutations: {
    toggleLoading(state) {
      state.loading = !state.loading;
    },
  },
  modules: { moviesModule },
});

export default store;
