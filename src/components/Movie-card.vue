<template>
  <li class="movie-card card mb-3">
    <div class="row g-0">
      <div class="col-md-2">
        <img
          :src="movie.posterUrlPreview"
          class="img-fluid movie-card__img rounded-start" :alt="movie.nameRu"
        >
      </div>

      <div class="col-md-10">
        <div class="card-body">
          <a href="#" class="card-title movie-card__title">{{ movie.nameRu }}</a>
          <div>{{ getGeners }}, {{ getCountries }}</div>

          <div class="card-text text-secondary">{{ movie.year }}, {{movie.filmLength}}</div>
        </div>
      </div>

    </div>
  </li>
</template>

<script lang="ts">

import { computed, defineComponent, PropType } from 'vue';

interface MovieI {
  countries: [{ country: string }],
  genres: [{ genre: string }],
}

export default defineComponent({
  setup(props) {
    const getCountries = computed(() => props.movie.countries[0].country);
    const getGeners = computed(() => props.movie.genres[0].genre);

    return { getCountries, getGeners };
  },
  props: {
    movie: {
      type: Object as PropType<MovieI>,
      required: true,
    },
  },
});

</script>

<style scoped lang="scss">
.movie-card {
  position: relative;

  &__title {
    font-size: 24px;
  }

  &__img {

  }
}
</style>
