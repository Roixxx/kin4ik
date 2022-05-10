/* eslint-disable class-methods-use-this */
import {
  Module, Action, VuexModule, Mutation,
} from 'vuex-module-decorators';
import UseFetchData from '@/use/FetchData';
import { Api } from '@/use/Api';

interface MovieI {
  [someKey: string]: string | number,
}

@Module({ namespaced: true })
export default class SingleMovie extends VuexModule {
  movie: MovieI = {} as MovieI;

  get getMovie() {
    return this.movie;
  }

  @Mutation
  setMovie(movie: MovieI) {
    this.movie = movie;
  }

  @Action({ rawError: true, commit: 'setMovie' })
  async loadMovie(id: number) {
    const url = Api.movies.singleMovie.url + id;
    return UseFetchData(url);
  }
}
