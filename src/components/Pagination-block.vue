<template>
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
</template>

<script setup lang="ts">
import {
  computed, defineProps, inject, watch,
} from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
import PaginationRender from '@/use/PaginationRender';
import useDevice from '@/use/Device';
import { apiItemI } from '@/use/Api';

const props = defineProps<{
  scrollTo: HTMLElement
}>();

const router = useRouter();
const store = useStore();
const route = useRoute();
const { deviceType } = useDevice();

const pagesCount = computed(() => store.getters.pagesCountVal);
const activePage = computed(() => Number(route.query.page) || 1);
const paginationView = computed(() => PaginationRender(
  activePage.value,
  pagesCount.value,
  deviceType.value,
));

function navigate(pageIndex: number | string) {
  if (pageIndex === 'next') pageIndex = activePage.value + 1;
  if (pageIndex === 'prev') pageIndex = activePage.value - 1;

  if (pageIndex > pagesCount.value) return;
  if (pageIndex < 1) return;
  if (pageIndex === '...') return;

  window.scrollTo(0, props.scrollTo.offsetTop - 300);
  router.push({ query: { page: pageIndex } });
}

const category = inject<apiItemI>('category') as apiItemI;
watch(() => route.query.page, () => {
  if (!route.query.page) return;
  store.commit('setCurrentPage', route.query.page);
  store.dispatch('loadMovies', category);
});

</script>

<style lang="scss" scoped>
  .pagination {
    margin: 30px 0;
  }

  .page-link {
    height: 100%;
    padding: 9px;
    min-width: 44px;
    justify-content: center;
    display: flex;
    align-items: center;
  }

  @include sm {
    .pagination {
      justify-content: center;
    }

    .page-item {

      &.disabled .page-link {
        opacity: 0.5;
      }

      &:first-child .page-link, &:last-child .page-link {
        font-size: 0;
        padding: 6px;

        &:after {
          content: '';
          display: block;
          width: 24px;
          height: 24px;
          background: url("~/src/assets/img/icons/arrow-left-s-line.svg") no-repeat center;
        }
      }

      &:last-child .page-link:after {
        background: url("~/src/assets/img/icons/arrow-right-s-line.svg") no-repeat center;
      }
    }
  }

  @include xs {
    .page-link {
      padding: 6px;
      min-width: 39px;
    }
  }

</style>
