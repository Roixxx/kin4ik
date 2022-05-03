<template>
  <div class="row">
    <MoviesCategory :category="Api.movies.top250"/>
  </div>
</template>

<script lang="ts" setup>
import MoviesCategory from '@/components/ui/MoviesCategory.vue';
import Api from '@/use/Api';

</script>
