<template>

  <div class="row">

    <MoviesCategory/>
  </div>

</template>

<script lang="ts" setup>
import MoviesCategory from '@/components/ui/MoviesCategory.vue';
import Api from '@/use/Api';
import { provide } from 'vue';

export interface categoryI {
  url: string,
  title: string,
  query?: string,
}

provide('category', Api.movies.popular);
</script>
