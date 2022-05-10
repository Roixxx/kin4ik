<template>
  <div class="movie__rating" ref="ratingEl"></div>
</template>

<script lang="ts" setup>

import ProgressBar from 'progressbar.js';
import { ref, onMounted, defineProps } from 'vue';

const ratingEl = ref();
const props = defineProps<{ rating: number }>();

onMounted(() => {
  if (!ratingEl.value) return;
  const bar = new ProgressBar.Circle(ratingEl.value, {
    color: '#48ad0a',
    strokeWidth: 7,
    trailWidth: 7,
    text: {
      value: props.rating.toString(),
    },
  });
  bar.set(props.rating / 10);
});
</script>

<style scoped lang="scss">
.movie {
  &__rating {
    width: 40px;
    height: 40px;
    position: absolute !important;
    top: 20px;
    right: 20px;

    @include sm {
      width: 30px;
      height: 30px;
      font-size: 12px;
    }
  }
}
</style>
