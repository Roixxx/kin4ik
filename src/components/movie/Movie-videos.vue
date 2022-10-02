<template>
  <SliderBlock name="videos" :touch="false" class="videos">
    <swiper-slide v-for="(video, i) in videos" :key="i">
      <iframe class="videos__iframe"
              :title="video.name"
              :src="prettyUrl(video.url)"
              allowfullscreen>
      </iframe>
    </swiper-slide>
  </SliderBlock>
</template>

<script setup lang="ts">

import { SwiperSlide } from 'swiper/vue';
import { useStore } from 'vuex';
import SliderBlock from '@/components/Slider-block.vue';

const store = useStore();

const videos = store.getters['SingleMovie/getVideos'];

function prettyUrl(url: string) {
  return url.replace('/v/', '/embed/')
    .replace('/watch?', '/embed/');
}

</script>

<style lang="scss">
.videos {

  &-prev, &-next {
    display: flex !important;
  }

  @include md {
    &-prev {
      left: -5px;
    }
    &-next {
      right: 5px;
    }
  }

  &__iframe {
    user-select: none;
    width: 400px;
    height: 220px;

    @include sm {
      width: 300px;
      height: 180px;
    }
  }

}
</style>
