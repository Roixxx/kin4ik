<template>
  <div  v-for="(video, i) in videos" :key="i">
    <div class="videos">
      <iframe width="330" height="200"
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

interface videoI {
  name: string,
  site: string,
  url: string,
}

const props = defineProps< {id: number} >();
const store = useStore();

const data = await store.dispatch('SingleMovie/loadVideos', props.id);
const videosWhiteList = ['фрагмент', 'фан-ролик', 'промо-ролик', 'телевизионный трейлер',
  'русский ТВ-ролик', 'международный трейлер', 'трейлер (русский язык)', 'русский тв-ролик'];

const videos = data.items.filter((v: videoI) => {
  const name = v.name.toLowerCase().trim();
  const yt = v.site === 'YOUTUBE';
  const inWhiteList = videosWhiteList.includes(name);
  const trailer = name === 'трейлер' || name === 'тизер';

  return yt && (inWhiteList || trailer);
});

function prettyUrl(url: string) {
  return url.replace('/v/', '/embed/')
    .replace('/watch?', '/embed/');
}

</script>

<style scoped lang="scss">
.videos {
  display: flex;
  gap: 32px;
}
</style>
