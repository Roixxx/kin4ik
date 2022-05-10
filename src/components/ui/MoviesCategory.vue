<template>
  <div class="row">

    <h2 class="mb-3 mb-lg-4">{{ category.title }}</h2>
    <div class="col-lg-8">
      <MovieListing/>
    </div>

    <div class="d-none d-lg-block col"></div>

    <div class="col-lg-3">
      <aside>Фильтры</aside>
    </div>

  </div>
</template>

<script lang="ts" setup>
import MovieListing from '@/components/Movie-lisiting.vue';
import { inject } from 'vue';
import { categoryI } from '@/use/Api';

const category = inject('category') as categoryI;

</script>

<style scoped>

</style>
