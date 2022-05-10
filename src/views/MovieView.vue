<template>
  <div class="row movie">
    <div class="col-md-3">
      <div class="movie__img-holder">
        <img :src="img.src" :class="{preview: img.preview}" :alt="movie.nameRu">
      </div>
    </div>
    <div class="col-md-9">
      <div class="movie__title-holder mt-4 mt-md-0">
        <h1 class="movie__title">{{movie.nameRu}} ({{movie.year}})</h1>
        <div class="movie__subtitle">{{ movie.nameOriginal }}</div>
        <MovieRating :rating="rating"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { computed, ComputedRef } from 'vue';
import useDevice from '@/use/Device';
import { IMovie } from '@/types/movie';
import MovieRating from '@/components/Movie-rating.vue';

const route = useRoute();
const { deviceType } = useDevice();
const { id } = route.params;
const store = useStore();
store.dispatch('SingleMovie/loadMovie', id);

const movie: ComputedRef<IMovie> = computed(() => store.getters['SingleMovie/getMovie']);
const rating = +movie.value.rating || +movie.value.ratingKinopoisk;

const img = computed(() => {
  if (deviceType.value === 'desktop' || !movie.value.coverUrl) {
    return { src: movie.value.posterUrlPreview, preview: true };
  }
  return { src: movie.value.coverUrl };
});

</script>

<style lang="scss" scoped>
.movie {
  &__img-holder {
    justify-content: center;
    display: flex;

    img {
      border-radius: 16px;
      object-fit: contain;
      box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;

      @include sm {
        max-height: 100%;
        width: 100%;

        &.preview {
          max-height: 300px;
          width: auto;
        }
      }
    }
  }

  &__title {
    font-size: 40px;
    font-weight: 700;

    &-holder {
      display: flex;
      position: relative;
      padding-right: 100px;
      flex-direction: column;
    }

    @include lg {
      font-size: 30px;
    }

    @include sm {
      font-size: 26px;
    }

    @include xs {
      font-size: 20px;
    }
  }

  &__rating {
    width: 50px;
    height: 50px;
    transform: translateY(-50%);
    top: 50%;
    font-size: 18px;
  }

}
</style>
