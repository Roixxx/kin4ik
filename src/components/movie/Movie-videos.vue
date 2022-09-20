<template>
  <div class="videos">
    <div v-for="(video, i) in videos" :key="i">
        <iframe class="videos__iframe"
                :title="video.name"
                :src="prettyUrl(video.url)"
                allowfullscreen>
        </iframe>
    </div>
  </div>
</template>

<script setup lang="ts">

import { useStore } from 'vuex';
import { defineProps } from 'vue';

const props = defineProps< {id: number} >();
const store = useStore();

await store.dispatch('SingleMovie/loadVideos', props.id);
const videos = store.getters['SingleMovie/getVideos'];

function prettyUrl(url: string) {
  return url.replace('/v/', '/embed/')
    .replace('/watch?', '/embed/');
}

</script>

<style scoped lang="scss">
.videos {
  display: flex;
  gap: 24px;

  &__iframe {
    max-width: 300px;
    height: 100%;
  }
}
</style>
