<template>
  <div class="container">
    <div class="intro mb-3 mb-md-5">
      <h1>Kin4ik - поиск кино</h1>
    </div>
    <div class="row">

      <div class="col-lg-8">
        <h2 class="mb-3 mb-lg-4">Список фильмов</h2>

        <ul>
          <MovieCard v-for="movie in movies" :key="movie" :movie="movie" />
        </ul>
        <Pagination-block/>
      </div>

      <div class="d-none d-lg-block col"></div>

      <div class="col-lg-3">
        <div class="">Фильтры</div>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import MovieCard from '@/components/Movie-card.vue';
import { useStore } from 'vuex';
import { computed } from 'vue';
import PaginationBlock from '@/components/Pagination-block.vue';

export default {
  setup() {
    const store = useStore();

    store.dispatch('loadMovies');
    const movies = computed(() => store.getters.moviesAll);

    return { movies };
  },
  components: { MovieCard, PaginationBlock },
};
</script>
