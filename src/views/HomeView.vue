<template>
  <div class="container">
    <div class="intro mb-3 mb-md-5">
      <h1>Kin4ik - поиск кино</h1>
    </div>
    <div class="row">

      <div class="col-lg-8">
        <ul>
          <MovieCard v-for="movie in movies" :key="movie" />
        </ul>
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

export default {
  setup() {
    const movies = [1, 2, 3];

    return { movies };
  },

  components: { MovieCard },
};
</script>
