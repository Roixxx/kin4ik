import { createStore } from 'vuex';
import moviesModule from '@/store/modules/movies.module';

const store = createStore({
  state() {
    return {
      loading: false,
      currentPage: 1,
    };
  },

  getters: {
    loading(state) {
      return state.loading;
    },
    currentPage(state) {
      return state.currentPage;
    },
  },

  mutations: {
    toggleLoading(state) {
      state.loading = !state.loading;
    },
    setCurrentPage(state, page) {
      state.currentPage = page;
    },
  },
  modules: { moviesModule },
});

export default store;
