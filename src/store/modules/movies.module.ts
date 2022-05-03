/* eslint-disable class-methods-use-this */
import {
  Action, Module, Mutation, VuexModule,
} from 'vuex-module-decorators';

import UseFetchData from '@/use/FetchData';
import Api from '@/use/Api';

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
  async loadMovies(page?: number, listName: 'popular' | 'top250' = 'popular') {
    let { url } = Api.movies[listName];
    if (page) url += `?page=${page}`;

    return UseFetchData(url);
  }
}
