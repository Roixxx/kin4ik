<template>
  <div class="row movie gx-5">
    <div class="col-md-3">
      <div class="movie__img-holder">
        <div class="preview-blur" :style="img.previewBg" v-if="img.preview"></div>
        <img :src="img.src" :class="{preview: img.preview}" :alt="movie.nameRu">
      </div>
    </div>
    <div class="col-md-9">

      <div class="movie__title-holder mt-4 mt-md-0">
        <h1 class="movie__title">{{movie.nameRu}} ({{movie.year}})</h1>
        <div class="movie__subtitle">{{ movie.nameOriginal }}</div>
        <MovieRating :rating="rating"/>
      </div>
      <div class="my-2">Жанр: {{ geners }}</div>
      <ReadMore v-if="description" :str="description" class="movie__description"></ReadMore>

      <div class="my-3">
        <div v-if="filmLength">Время: {{ filmLength }}</div>
        <div v-if="country">Страна: {{ country }}</div>
        <div v-if="slogan">Слоган: {{ slogan }}</div>
      </div>

      <div class="my-3">
        <MovieStaff :id="id" :film="movie.nameRu"/>
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
import MovieRating from '@/components/movie/Movie-rating.vue';
import ReadMore from '@/components/Readmore.vue';
import useFilmLength from '@/use/FilmLenght';
import MovieStaff from '@/components/staff/Staff-list.vue';

const route = useRoute();
const { deviceType } = useDevice();
const id = Number(route.params.id);
const store = useStore();
await store.dispatch('SingleMovie/loadMovie', id);

const movieItem: ComputedRef<IMovie> = computed(() => store.getters['SingleMovie/getMovie']);

const movie = movieItem.value;

const rating = +movie.rating || +movie.ratingKinopoisk;
const geners = movie.genres.map((el) => el.genre).join(', ');
const country = movie.countries.map((el) => el.country).join(', ') || '';
const { description, slogan } = movie;

const filmLength = useFilmLength(+movie.filmLength);

const img = computed(() => {
  if (deviceType.value === 'desktop' || !movie.coverUrl) {
    return {
      src: movie.posterUrlPreview,
      preview: true,
      previewBg: `background: linear-gradient(0deg, rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.4)), url(${movie.posterUrlPreview})`,
    };
  }
  return { src: movie.coverUrl };
});
</script>

<style lang="scss" scoped>
.movie {
  &__img-holder {
    justify-content: center;
    display: flex;
    position: relative;

    img {
      border-radius: 16px;
      object-fit: contain;
      box-shadow: rgba(17, 12, 46, 0.15) 0 48px 100px 0;

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

  .preview-blur {
    width: 100%;
    height: 100%;
    position: absolute;
    transform: translateY(-50%);
    left: 0;
    bottom: -50%;
    background-size: cover;
    background-position: center;
    filter: blur(35px);
    z-index: -1;
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

  &__subtitle {
    font-size: 14px;
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
