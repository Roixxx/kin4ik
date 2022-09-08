<template>
  <aside class="filter" :class="{'filter-loading': loading, 'filter-opened': isOpened}">
    <div class="d-lg-none filter-mobile-head">
      <button @click="$emit('close')" class="btn filter-back"></button>
      Фильтры
      <button v-if="activeFilters"
              class="btn btn-secondary py-1"
              @click="resetAll">Сбросить
      </button>
    </div>

    <div class="accordion mb-lg-3" id="filtersAcc">
      <div class="accordion-item" v-for="filter in filters" :key="filter.name">
        <div class="accordion-header">
          <button class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  :data-bs-target="`#${filter.name_en}`"
                  aria-expanded="false"
                  aria-controls="genres">
            {{ filter.name }}
            <span class="badge bg-primary rounded-pill ms-2">{{ filter.data.length }}</span>
          </button>
        </div>
        <div :id="filter.name_en"
             data-bs-parent="#filtersAcc"
             class="accordion-collapse collapse">
          <div class="accordion-body">

            <div v-if="filter.type === 'RadioInput'" class="filter__list">
              <RadioInput
                v-for="(value, i) in filter.data" :key="filter.value + i"
                :name="filter.name_en"
                :id="filter.value + i"
                :value="value.id"
                :label="value[filter.value]"
                v-model="filter.model"/>
            </div>

            <Range
              v-if="filter.type === 'Range'"
              :merge="filter.name_en === 'year' ? 15 : -1"
              :min="filter.min"
              :max="filter.max"
              class="filter__range"
              v-model="filter.model"/>
          </div>
        </div>
      </div>
    </div>

    <button v-if="activeFilters"
            class="btn btn-secondary w-100 d-none d-lg-block"
            @click="resetAll">Сбросить фильтры
    </button>
    <div v-if="activeFilters" class="filter__show-mobile d-lg-none">
      <button class="btn btn-primary w-100" @click="$emit('close')">Показать фильмы</button>
    </div>

  </aside>
</template>

<script lang="ts" setup>
/* eslint-disable prefer-destructuring */
import { Api, apiItemI } from '@/use/Api';
import UseFetchData from '@/use/FetchData';
import {
  computed, defineProps, inject, ref, watch,
} from 'vue';
import Range from '@vueform/slider';
import RadioInput from '@/components/inputs/Radio-input.vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';

const props = defineProps<{isOpened: boolean}>();
const store = useStore();
const router = useRouter();
const route = useRoute();
const filtersData = await UseFetchData(Api.filters.url);
const loading = computed(() => store.getters.loading);
const category = inject<apiItemI>('category') as apiItemI;

// Убрать лишнее из data
function prettyData(data: []) {
  return data.filter((v) => Object.values(v).some((item) => item.length > 0));
}

// Фильтры
const filters = ref([
  {
    name: 'Жанр',
    name_en: 'genres',
    value: 'genre',
    data: prettyData(filtersData.genres),
    type: 'RadioInput',
    model: route.query.genres || null,
  },
  {
    name: 'Страна',
    name_en: 'countries',
    value: 'country',
    data: filtersData.countries.slice(0, 35),
    type: 'RadioInput',
    model: route.query.countries || null,
  },
  {
    name: 'Год',
    name_en: 'year',
    value: 'year',
    data: [1],
    type: 'Range',
    min: 1950,
    max: new Date().getFullYear(),
    modelDefault: [1980, new Date().getFullYear()],
    model: (() => {
      if (route.query.yearFrom) {
        return [route.query.yearFrom, route.query.yearTo];
      }
      return [1980, new Date().getFullYear()];
    })(),
  },
  {
    name: 'Рейтинг',
    name_en: 'rating',
    value: 'rating',
    data: [1],
    type: 'Range',
    min: 2,
    max: 10,
    modelDefault: [2, 10],
    model: route.query.ratingFrom ? [route.query.ratingFrom, route.query.ratingTo] : [2, 10],
  },
]);

// Сбросить все фильтры
function resetAll() {
  filters.value.forEach((filter) => {
    filter.model = filter.modelDefault || null;
  });
}

// Активные фильтры
const activeFilters = computed(() => filters.value.some((filter) => {
  if (filter.type === 'Range' && Array.isArray(filter.model)) {
    return filter.modelDefault?.join('') !== filter.model?.join('');
  }
  return filter.model;
}));

function createFilterQuery() {
  const config: { [key: string]: any } = {};

  filters.value.forEach((f) => {
    if (!f.model) return;

    if (f.type === 'Range') {
      if (f.modelDefault?.join('') === f.model?.join('')) return;
      config[`${f.name_en}From`] = f.model[0];
      config[`${f.name_en}To`] = f.model[1];
      return;
    }

    config[f.name_en] = Number(f.model);
  });

  return config;
}

watch(filters, async () => {
  const page = route.query.page;
  const pageQ = page ? { page } : null;

  await router.push({ query: { ...createFilterQuery(), ...pageQ } });

  store.dispatch('loadMovies', { category });
}, { deep: true });

</script>

<style lang="scss" scoped>
.filter {

  @include lg {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 20;
    transform: translateX(-100%);
    transition: transform 0.3s;
    background-color: white;
    overflow: auto;
  }

  &-opened {
    transform: translateX(0);
  }

  &-loading {
    opacity: 0.8;
    pointer-events: none;

    @include lg {
      opacity: 1;
      pointer-events: initial;
    }
  }

  &-mobile-head {
    padding: 16px 20px;
    padding-left: 60px;
    font-weight: 500;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 22px;
    line-height: 1.6;
  }

  &-back {
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    left: 20px;
    width: 16px;
    height: 16px;
    background: url("~/src/assets/img/icons/arrow-left.png") no-repeat center;
    padding: 16px;
  }

  &__list {
    max-height: 258px;
    overflow: auto;
    margin-left: -5px;
    padding-left: 5px;
  }

  &__range {
    margin-top: 32px;

    @include lg {
      padding: 0 10px;
    }
  }

  &__show-mobile {
    position: sticky;
    bottom: 0;
    padding: 16px;
    width: 100%;
    margin-top: auto;
  }

  .accordion-item {
    @include lg {
      border-radius: 0;
      border-right: 0;
      border-left: 0;
    }
  }
}
</style>
