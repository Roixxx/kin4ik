<template>
  <SliderBlock>
    <swiper-slide v-for="movie in similarMovies" :key="movie.nameEn">
      <MoviePlate :movie="movie"/>
    </swiper-slide>
  </SliderBlock>

</template>

<script setup lang="ts">
import { SwiperSlide } from 'swiper/vue';
import { useStore } from 'vuex';
import { defineProps } from 'vue';
import MoviePlate from '@/components/movie/Movie-plate.vue';
import SliderBlock from '@/components/Slider-block.vue';

const store = useStore();
const props = defineProps< {id: number} >();
await store.dispatch('SingleMovie/loadSimilarMovies', props.id);
const similarMovies = store.getters['SingleMovie/getSimilarMovies'];

</script>
