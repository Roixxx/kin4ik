<template>
  <MoviesCategory :filters="true"/>
</template>

<script lang="ts" setup>
import MoviesCategory from '@/components/movie/Movie-category.vue';
import { Api } from '@/use/Api';
import { provide } from 'vue';

provide('category', Api.movies.popular);
</script>
