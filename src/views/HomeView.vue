<template>

  <div class="row">

    <MoviesCategory/>
  </div>

</template>

<script lang="ts" setup>
import MoviesCategory from '@/components/ui/MoviesCategory.vue';
import { Api } from '@/use/Api';
import { provide } from 'vue';

provide('category', Api.movies.popular);
</script>
