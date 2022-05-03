<template>
  <div v-if="movies.length !== 0">
    <ul ref="list">
      <MovieCard
        v-for="movie in movies"
        :key="movie.filmId || movie.kinopoiskId"
        :movie="movie" />
    </ul>

    <Pagination-block :scrollTo="list"/>
  </div>
  <div v-else>
    <TheLoading v-for="i in [1,2,3,4,5]" :key="i"/>
  </div>
</template>

<script lang="ts" setup>
import MovieCard from '@/components/Movie-card.vue';
import PaginationBlock from '@/components/Pagination-block.vue';
import TheLoading from '@/components/TheLoading.vue';

import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import { computed, ref } from 'vue';

const store = useStore();
const route = useRoute();
const list = ref();
const page = route.query.page || 1;
const url = 'props';

store.dispatch('loadMovies', { page, url });
const movies = computed(() => store.getters.movies);
</script>

<style scoped>

</style>
