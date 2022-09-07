<template>
  <div class="row section">

    <h2 class="mb-3 mb-lg-4">{{ category.title }}</h2>
    <div class="col-lg-8">
      <button @click="openFilters" class="btn btn-primary w-100 mb-4 d-lg-none">
        Фильтры
      </button>
      <MovieListing/>
    </div>

    <div class="d-none d-lg-block col"></div>

    <div class="col-lg-3">
      <Suspense>
        <MovieFilter :isOpened="filtersOpened" @close="closeFilters"/>
      </Suspense>
    </div>

  </div>
</template>

<script lang="ts" setup>
import MovieListing from '@/components/movie/Movie-lisiting.vue';
import { inject, ref } from 'vue';
import { apiItemI } from '@/use/Api';
import MovieFilter from '@/components/movie/filters/Movie-filter.vue';

const filtersOpened = ref(false);
const category = inject('category') as apiItemI;

function openFilters() {
  filtersOpened.value = true;
  document.body.style.overflow = 'hidden';
}

function closeFilters() {
  filtersOpened.value = false;
  document.body.style.overflow = '';
}

</script>

<style scoped>

</style>
