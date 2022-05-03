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
          <div class="movie-card__rating" ref="ratingEl"></div>
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
  computed, defineProps, onMounted, ref,
} from 'vue';
import ProgressBar from 'progressbar.js';
import { useStore } from 'vuex';
import TheLoading from '@/components/TheLoading.vue';

const props = defineProps<{
  movie: {
    countries: [{ country: string }],
    genres: [{ genre: string }],
    rating: number,
    ratingKinopoisk: number,
    filmId: number,
    kinopoiskId: number,
    nameRu: string,
    nameEn: string,
    nameOriginal: string,
    posterUrlPreview: string,
    year: string,
    filmLength: string | number,
  }
}>();

const store = useStore();

const movieItem = ref(props.movie);
const movie = movieItem.value;

const name = movie.nameRu || movie.nameEn || movie.nameOriginal;
const rating = movie.rating || movie.ratingKinopoisk;
const id = movie.filmId || movie.kinopoiskId;
const filmLength = '2ч';
const { country } = movie.countries[0] || '';
const { genre } = movie.genres[0] || '';
const { posterUrlPreview } = movie;
const { year } = movie;

const ratingEl = ref();
const loading = computed(() => store.getters.loading);

onMounted(() => {
  if (!ratingEl.value) return;
  const bar = new ProgressBar.Circle(ratingEl.value, {
    color: '#48ad0a',
    strokeWidth: 7,
    trailWidth: 7,
    text: {
      value: rating.toString(),
    },
  });
  bar.set(rating / 10);
});

</script>

<style lang="scss">

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

  &__rating {
    width: 40px;
    height: 40px;
    position: absolute !important;
    top: 20px;
    right: 20px;

    @include sm {
      width: 30px;
      height: 30px;
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
