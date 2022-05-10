<template>
  <div class="row movie">
    <div class="col-md-3">
      <div class="movie__img-holder">
        <img :src="img.src" :class="{preview: img.preview}" :alt="movie.nameRu">
      </div>
    </div>
    <div class="col-md-9">
      <div class="movie__title mt-2 mt-md-0">{{movie.nameRu}} ({{movie.year}})</div>
      <div class="movie__subtitle">12334</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { computed } from 'vue';
import useDevice from '@/use/Device';

const route = useRoute();
const { deviceType } = useDevice();
const { id } = route.params;
const store = useStore();
store.dispatch('SingleMovie/loadMovie', id);
const movie = computed(() => store.getters['SingleMovie/getMovie']);

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
}
</style>
