/* eslint-disable class-methods-use-this */
import {
  Action, Module, Mutation, VuexModule,
} from 'vuex-module-decorators';

import UseFetchData from '@/use/FetchData';
import { apiItemI } from '@/use/Api';

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
  updateMovies(payload: { data: dataI, append: boolean }) {
    if (!payload.data) return;
    const movies = payload.data.films || payload.data.items;

    this.moviesList = payload.append ? this.moviesList.concat(movies) : movies;

    this.pagesCount = payload.data.pagesCount || payload.data.totalPages;
  }

  @Action({ commit: 'updateMovies' })
  async loadMovies(payload: {category: apiItemI, append: boolean}) {
    const { append } = payload;
    const { query } = payload.category;
    let { url } = payload.category;

    url += window.location.search;

    if (query) url += (window.location.search ? '&' : '?') + query;

    const data = await UseFetchData(url, { loading: !append, abortPrev: true });

    return ({ data, append });
  }
}
