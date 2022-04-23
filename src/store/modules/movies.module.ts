/* eslint-disable class-methods-use-this */
import {
  Action, Module, VuexModule, Mutation,
} from 'vuex-module-decorators';

import axios from 'axios';
import Api from '@/use/Api';

@Module
export default class moviesModule extends VuexModule {
  movies = [];

  get moviesAll() {
    return this.movies;
  }

  @Mutation
  setMovies(data: []) {
    this.movies = data;
  }

  @Action({ commit: 'setMovies' })
  loadMovies() {
    return axios.get(Api.movies.top250, { headers: { 'X-API-KEY': '17bc2778-ec19-4c92-8a7b-e11508d408a9' } })
      .then((res) => {
        console.log(res);
        return res.data.films;
      });
  }
}
