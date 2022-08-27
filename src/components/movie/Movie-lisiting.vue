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
import MovieCard from '@/components/movie/Movie-card.vue';
import PaginationBlock from '@/components/Pagination-block.vue';
import TheLoading from '@/components/TheLoading.vue';

import { useStore } from 'vuex';
import { computed, inject, ref } from 'vue';
import { useRoute } from 'vue-router';
import { apiItemI } from '@/use/Api';

const route = useRoute();
const store = useStore();
const list = ref();
const page = route.query.page || 1;
store.commit('setCurrentPage', page);
const category = inject<apiItemI>('category') as apiItemI;

store.dispatch('loadMovies', { category });
const movies = computed(() => store.getters.movies);
</script>

<style scoped>

</style>
