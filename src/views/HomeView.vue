<template>
  <div class="container">
    <div class="intro mb-3 mb-md-5">
      <h1>Kin4ik - поиск кино</h1>
    </div>
    <div class="row">
      <h2 class="mb-3 mb-lg-4">Топ 250 фильмов</h2>
      <div class="col-lg-8">

        <ul>
          <MovieCard v-for="movie in movies" :key="movie" :movie="movie" />
        </ul>
        <Pagination-block />
      </div>
      <div class="d-none d-lg-block col"></div>

      <div class="col-lg-3">
        <aside>Фильтры</aside>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import MovieCard from '@/components/Movie-card.vue';
import { useStore } from 'vuex';
import { computed } from 'vue';
import PaginationBlock from '@/components/Pagination-block.vue';
import { useRoute } from 'vue-router';

export default {
  setup() {
    const store = useStore();
    const route = useRoute();

    store.dispatch('loadMovies', route.query.page || 1);
    const movies = computed(() => store.getters.moviesAll);

    return { movies };
  },
  components: { MovieCard, PaginationBlock },
};
</script>
