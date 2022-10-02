<template>
  <suspense>
    <MovieSingle :key="route.fullPath"/>
  </suspense>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import MovieSingle from '@/components/movie/Movie-single.vue';

const route = useRoute();
</script>

<style lang="scss" scoped>

</style>
