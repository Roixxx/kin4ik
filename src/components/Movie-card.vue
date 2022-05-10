<template>
  <li v-if="!loading" class="movie-card card mb-3">
    <div class="row g-0">
      <div class="col-3 col-sm-2">
        <img
          :src="posterUrlPreview"
          class="img-fluid movie-card__img rounded-start" :alt="name"
        >
      </div>

      <div class="col-9 col-sm-10">
        <div class="card-body">
          <router-link
            class="card-title"
            :to="{name: 'movie', params: {id: id}}">
            {{ name }}
          </router-link>

          <div class="mb-1 movie-card__geners">{{ genre }}, {{ country }}</div>
          <div class="movie-card__year">{{ year }}, {{ filmLength }}</div>
          <MovieRating :rating="rating"/>
        </div>
      </div>
    </div>
  </li>
  <li v-else>
    <TheLoading></TheLoading>
  </li>
</template>

<script lang="ts" setup>

import {
  computed, defineProps, ref,
} from 'vue';
import { useStore } from 'vuex';
import TheLoading from '@/components/TheLoading.vue';
import { IMovie } from '@/types/movie';
import MovieRating from '@/components/Movie-rating.vue';

const props = defineProps<{ movie: IMovie }>();

const store = useStore();

const movieItem = ref(props.movie);
const movie = movieItem.value;

const name = movie.nameRu || movie.nameEn || movie.nameOriginal;
const id = movie.filmId || movie.kinopoiskId;
const rating = +movie.rating || +movie.ratingKinopoisk;
const filmLength = '2ч';
const { country } = movie.countries[0] || '';
const { genre } = movie.genres[0] || '';
const { posterUrlPreview, year } = movie;

const loading = computed(() => store.getters.loading);

</script>

<style lang="scss" scoped>

.movie-card {
  position: relative;

  &__img {
    height: 100%;
    max-height: 190px;
    object-fit: cover;
    object-position: center;
    width: 100%;
  }

  &__geners {
    font-size: 16px;

    @include sm {
      font-size: 13px;
    }
  }

  &__year {
    font-size: 14px;

    @include sm {
      font-size: 12px;
    }
  }

  .card-title {
    font-size: 22px;
    margin-bottom: 4px;

    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 60%;
      height: 100%;
    }

    @include sm() {
      margin-bottom: 0;
      line-height: 1.2;
      font-size: 16px;
    }

    @include xs {
      font-weight: 500;
      font-size: 14px;
    }
  }

  .card-body {
    padding-right: 70px;
  }

}
</style>
