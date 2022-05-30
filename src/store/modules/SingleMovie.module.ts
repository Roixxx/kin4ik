/* eslint-disable class-methods-use-this */
import {
  Module, Action, VuexModule, Mutation,
} from 'vuex-module-decorators';
import UseFetchData from '@/use/FetchData';
import { Api } from '@/use/Api';

interface MovieI {
  [someKey: string]: string | number,
}

interface StaffI {
  string: string,
}

@Module({ namespaced: true })
export default class SingleMovie extends VuexModule {
  movie: MovieI | null = null;
  staff: StaffI | null = null;

  get getMovie() {
    return this.movie;
  }

  get getStaff() {
    return this.staff;
  }

  @Mutation
  setMovie(movie: MovieI) {
    this.movie = movie;
  }

  @Mutation
  setStaff(staff: StaffI) {
    this.staff = staff;
  }

  @Action({ rawError: true, commit: 'setMovie' })
  async loadMovie(id: number) {
    const url = Api.singleMovie.main.url + id;
    return UseFetchData(url);
  }

  @Action({ rawError: true, commit: 'setStaff' })
  async loadStaff(id: number) {
    const url = `${Api.singleMovie.staff.url}?filmId=${id}`;
    return UseFetchData(url);
  }
}
