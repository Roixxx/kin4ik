<template>
  <li class="movie-card card mb-3">
    <div class="row g-0">
      <div class="col-3 col-sm-2">
        <img
          :src="movie.posterUrlPreview"
          class="img-fluid movie-card__img rounded-start" :alt="movie.nameRu"
        >
      </div>

      <div class="col-9 col-sm-10">
        <div class="card-body">
          <router-link
            class="card-title"
            :to="{name: 'movie', params: {id: movie.filmId}}">
            {{ movie.nameRu }}
          </router-link>

          <div class="mb-1 movie-card__geners">{{ getGeners }}, {{ getCountries }}</div>
          <div class="movie-card__year">{{ movie.year }}, {{movie.filmLength}}</div>
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

<style lang="scss">

.movie-card {
  position: relative;

  &__img {
    height: 100%;
    object-fit: contain;
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

  .card-title {
    font-size: 22px;
    margin-bottom: 4px;

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
    @include sm {
      //padding: 8px;
    }
  }

}
</style>
