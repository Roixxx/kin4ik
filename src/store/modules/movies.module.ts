/* eslint-disable class-methods-use-this */
import {
  Action, Module, Mutation, VuexModule,
} from 'vuex-module-decorators';

import UseFetchData from '@/use/FetchData';
import store from '@/store';
import { categoryI } from '@/use/Api';

interface dataI {
  films: [],
  items: [],
  pagesCount: number,
  totalPages: number,
}

@Module
export default class moviesModule extends VuexModule {
  moviesList = [];
  pagesCount = 0;

  get pagesCountVal() {
    return this.pagesCount;
  }

  get movies() {
    return this.moviesList;
  }

  @Mutation
  setMovies(data: dataI) {
    this.moviesList = data.films || data.items;
    this.pagesCount = data.pagesCount || data.totalPages;
  }

  @Action({ commit: 'setMovies' })
  async loadMovies(payload: categoryI) {
    const page = store.getters.currentPage;
    const { query } = payload;
    let { url } = payload;

    url += `?page=${page}`;

    if (query) url += `&${query}`;

    return UseFetchData(url);
  }
}
