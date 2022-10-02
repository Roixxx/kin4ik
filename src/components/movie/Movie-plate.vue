<template>
  <div class="movie-plate">
    <div class="movie-plate__img">
      <img :src="movie.posterUrl" :alt="movie.nameRu" width="220" height="300">
    </div>
    <router-link :to="{name: 'movie', params: {id: movie.filmId}}"
                 class="movie-plate__link stretched-link">{{ movie.nameRu }}</router-link>
    <div>{{ movie.nameEn }}</div>
  </div>
</template>

<script setup lang="ts">
import { similarMovie } from '@/types/types';
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
      transform: scale(1.05);
    }
  }
  &__img {
    overflow: hidden;
    max-height: 300px;
    margin-bottom: 8px;
    position: relative;
    border-radius: 16px;
    background: black;

    img {
      width: 100%;
      opacity: 1;
      font-size: 16px;
      font-weight: 500;
      transition: opacity 0.3s, transform 0.3s;
    }
  }

  &__link {
    font-size: 16px;
    font-weight: 500;
  }
}
</style>
