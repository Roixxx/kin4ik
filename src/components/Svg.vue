<template>
  <inline-svg class="icon" :src="require(`/src/assets/img/icons/${name}.svg`)"
              :transformSource="transform"/>
</template>

<script setup lang="ts">
import InlineSvg from 'vue-inline-svg';
import { defineProps } from 'vue';

const transform = (svg: HTMLElement) => {
  const fills = svg.querySelectorAll('[fill]');
  fills.forEach((fill) => fill.removeAttribute('fill'));
  svg.removeAttribute('fill');
  return svg;
};

defineProps<{
  name: string,
}>();
</script>
