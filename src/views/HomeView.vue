<template>

  <div class="row">

    <h2 class="mb-3 mb-lg-4">Топ 250 фильмов</h2>
    <div class="col-lg-8">

      <ul ref="list">
        <MovieCard v-for="movie in movies" :key="movie.filmId" :movie="movie" />
      </ul>

      <Pagination-block :scrollTo="list"/>
    </div>
    <div class="d-none d-lg-block col"></div>

    <div class="col-lg-3">
      <aside>Фильтры</aside>
    </div>

  </div>

</template>

<script lang="ts" setup>
import MovieCard from '@/components/Movie-card.vue';
import PaginationBlock from '@/components/Pagination-block.vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import { computed, ref } from 'vue';

const store = useStore();
const route = useRoute();
const list = ref();

store.dispatch('loadMovies', route.query.page || 1);
const movies = computed(() => store.getters.moviesAll);

</script>
