<template>
  <nav>

    <ul class="pagination">

      <li class="page-item" :class="{disabled: activePage === 1}">

        <a class="page-link"
           :href="`?page=${activePage - 1}`"
           @click.prevent="navigate('prev')"
           @keypress.prevent="navigate('prev')">Предыдущая</a>
      </li>

      <li class="page-item"
          v-for="val in paginationView"
          :key="val"
          :class="{active: val === activePage, disabled: val === '...'}">

        <a class="page-link"
           :href="`?page=${val}`"
           @click.prevent="navigate(val)"
           @keypress.prevent="navigate(val)">{{ val }}</a>
      </li>

      <li class="page-item" :class="{disabled: activePage === pagesCount}">

        <a class="page-link"
           :href="`?page=${activePage + 1}`"
           @click.prevent="navigate('next')"
           @keypress.prevent="navigate('next')">Следующая</a>
      </li>
    </ul>

  </nav>
</template>

<script lang="ts">
import {
  computed, defineComponent, watch,
} from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
import PaginationRender from '@/use/PaginationRender';

export default defineComponent({
  setup() {
    const router = useRouter();
    const store = useStore();
    const route = useRoute();

    const pagesCount = computed(() => store.getters.pagesCountAll);
    const activePage = computed(() => Number(route.query.page) || 1);
    const paginationView = computed(() => PaginationRender(activePage.value, pagesCount.value));

    function navigate(pageIndex: number | string) {
      if (pageIndex === 'next') pageIndex = activePage.value + 1;
      if (pageIndex === 'prev') pageIndex = activePage.value - 1;

      if (pageIndex > pagesCount.value) return;
      if (pageIndex < 1) return;
      if (pageIndex === '...') return;

      router.push({ query: { page: pageIndex } });
    }

    watch(() => route.query.page, () => {
      store.dispatch('loadMovies', route.query.page);
    });

    return {
      activePage, navigate, pagesCount, route, paginationView,
    };
  },
});
</script>

<style lang="scss" scoped>
  .pagination {
    margin: 30px 0;
  }
</style>
