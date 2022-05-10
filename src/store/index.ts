import { createStore } from 'vuex';
import moviesModule from '@/store/modules/movies.module';
import SingleMovie from '@/store/modules/SingleMovie.module';

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
  modules: { moviesModule, SingleMovie },
});

export default store;
