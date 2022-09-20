/* eslint-disable class-methods-use-this */
import {
  Module, Action, VuexModule, Mutation,
} from 'vuex-module-decorators';
import UseFetchData from '@/use/FetchData';
import { Api } from '@/use/Api';
import { MovieI, VideoI, similarMovie } from '@/types/movie';

interface StaffI {
  string: string,
}

@Module({ namespaced: true })
export default class SingleMovie extends VuexModule {
  movie: MovieI | null = null;
  staff: StaffI | null = null;
  videos: VideoI[] | null = null;
  similarMovies: { items: similarMovie[] } | null = null;
  videosWhiteList = ['фрагмент', 'фан-ролик', 'промо-ролик', 'телевизионный трейлер',
    'русский ТВ-ролик', 'международный трейлер', 'трейлер (русский язык)', 'русский тв-ролик'];

  get getMovie() {
    return this.movie;
  }

  get getStaff() {
    return this.staff;
  }

  get getVideos() {
    return this.videos;
  }

  get getSimilarMovies() {
    return this.similarMovies?.items;
  }

  @Mutation
  setMovie(movie: MovieI) {
    this.movie = movie;
  }

  @Mutation
  setStaff(staff: StaffI) {
    this.staff = staff;
  }

  @Mutation
  setVideos(videos: { items: VideoI[] }) {
    this.videos = videos.items.filter((v: VideoI) => {
      const name = v.name.toLowerCase().trim();
      const yt = v.site === 'YOUTUBE';
      const inWhiteList = this.videosWhiteList.includes(name);
      const trailer = name === 'трейлер' || name === 'тизер';

      return yt && (inWhiteList || trailer);
    });
  }

  @Mutation
  setSimilarMovies(similarMovies: { items: similarMovie[] }) {
    this.similarMovies = similarMovies;
  }

  // Карточка фильма
  @Action({ rawError: true, commit: 'setMovie' })
  async loadMovie(id: number) {
    const url = Api.singleMovie.main.url + id;
    return UseFetchData(url);
  }

  // Актёры
  @Action({ rawError: true, commit: 'setStaff' })
  async loadStaff(id: number) {
    const url = `${Api.singleMovie.staff.url}?filmId=${id}`;
    return UseFetchData(url);
  }

  // Видео о фильме
  @Action({ rawError: true, commit: 'setVideos' })
  async loadVideos(id: number) {
    const url = `${Api.singleMovie.main.url}${id}/videos`;
    return UseFetchData(url);
  }

  // Похожие фильмы
  @Action({ rawError: true, commit: 'setSimilarMovies' })
  async loadSimilarMovies(id: number) {
    const url = `${Api.singleMovie.main.url}${id}/similars`;
    return UseFetchData(url);
  }
}
