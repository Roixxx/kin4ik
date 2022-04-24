<template>
  <nav>
    <ul class="pagination">

      <li class="page-item"
          :class="{disabled: activePage === 1}"
          @click="prevPage" @keypress="prevPage">

        <a class="page-link" href="#">Предыдущая</a>
      </li>

      <li class="page-item"
          :class="{active: i === activePage}"
          v-for="i in pagesCount"
          :key="i"
          @click="navigate(i)" @keypress="navigate(i)">

          <a class="page-link" href="#">{{ i }}</a>
      </li>

      <li class="page-item"
          :class="{disabled: activePage === pagesCount}"
          @click="nextPage" @keypress="nextPage">

        <a class="page-link" href="#">Следующая</a>
      </li>

    </ul>
  </nav>
</template>

<script lang="ts">
import {
  computed, defineComponent, ref, watch,
} from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    const router = useRouter();
    const store = useStore();
    const route = useRoute();
    const pagesCount = computed(() => store.getters.pagesCountAll);
    const activePage = computed(() => Number(route.query.page) || 1);

    function navigate(pageIndex: number) {
      router.push({ query: { page: pageIndex } });
    }

    function navigateArrow() {

    }

    function nextPage() {
      if (activePage.value === pagesCount.value) return;
      navigate(activePage.value + 1);
    }

    function prevPage() {
      if (activePage.value === 1) return;
      navigate(activePage.value - 1);
    }

    watch(() => route.query.page, () => {
      store.dispatch('loadMovies', route.query.page);
    });

    return {
      activePage, navigate, nextPage, prevPage, pagesCount, route,
    };
  },
});
</script>

<style lang="scss" scoped>
  .pagination {
    margin: 30px 0;
  }
</style>
