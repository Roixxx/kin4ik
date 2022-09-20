<template>
  <div class="movie-plate">
    <div class="movie-plate__img">
      <img :src="movie.posterUrl" :alt="movie.nameRu">
    </div>
    <router-link :to="{name: 'movie', params: {id: movie.filmId}}"
                 class="movie-plate__link stretched-link">{{ movie.nameRu }}</router-link>
    <div>{{ movie.nameEn }}</div>
  </div>
</template>

<script setup lang="ts">
import { similarMovie } from '@/types/movie';
import { defineProps } from 'vue';

defineProps<{
  movie: similarMovie
}>();

</script>

<style lang="scss" scoped>
.movie-plate {
  max-width: 220px;
  position: relative;

  &:hover {
    .movie-plate__img img {
      opacity: 0.9;
    }
  }
  &__img {
    overflow: hidden;
    max-height: 300px;
    margin-bottom: 8px;
    position: relative;
    border-radius: 8px;

    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 1px;
      bottom: 0;
      background: black;
      z-index: -1;
    }

    img {
      width: 100%;
      opacity: 1;
      font-size: 16px;
      font-weight: 500;
      transition: opacity 0.3s;
    }
  }

  &__link {
    font-size: 16px;
    font-weight: 500;
  }
}
</style>
