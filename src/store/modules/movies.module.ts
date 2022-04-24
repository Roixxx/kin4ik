/* eslint-disable class-methods-use-this */
import {
  Action, Module, VuexModule, Mutation, config,
} from 'vuex-module-decorators';

import FetchData from '@/use/FetchData';
import Api from '@/use/Api';

interface dataI {
  films: [],
  pagesCount: number,
}

@Module
export default class moviesModule extends VuexModule {
  movies = [];
  pagesCount = 0;

  get pagesCountAll() {
    return this.pagesCount;
  }

  get moviesAll() {
    return this.movies;
  }

  @Mutation
  setMovies(data: dataI) {
    this.movies = data.films;
    this.pagesCount = data.pagesCount;
  }

  @Action({ commit: 'setMovies' })
  loadMovies(page?: number) {
    let url = Api.movies.top250;
    if (page) url += `?page=${page}`;

    return FetchData(url);
  }
}
