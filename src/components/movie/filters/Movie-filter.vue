<template>
  <div class="accordion" id="filtersAcc">
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
              :model="model"/>
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
  model {{model}}
</template>

<script lang="ts" setup>
import { Api } from '@/use/Api';
import UseFetchData from '@/use/FetchData';
import { ref } from 'vue';
import Range from '@vueform/slider';
import RadioInput from '@/components/inputs/Radio-input.vue';

const filtersData = await UseFetchData(Api.filters.url);
function clearData(data: []) {
  return data.filter((v) => Object.values(v).some((item) => item.length > 0));
}
const model = ref(''); // Refactor

const filters = ref([
  {
    name: 'Жанр',
    name_en: 'genres',
    value: 'genre',
    data: clearData(filtersData.genres),
    type: 'RadioInput',
  },
  {
    name: 'Страна',
    name_en: 'countries',
    value: 'country',
    data: filtersData.countries.slice(0, 35),
    type: 'RadioInput',
  },
  {
    name: 'Год',
    name_en: 'year',
    value: 'year',
    data: [1],
    type: 'Range',
    min: 1950,
    max: new Date().getFullYear(),
    model: [1980, new Date().getFullYear()],
  },
  {
    name: 'Рейтинг',
    name_en: 'rating',
    value: 'rating',
    data: [1],
    type: 'Range',
    min: 2,
    max: 10,
    model: [2, 10],
  },
]);

</script>

<style lang="scss" scoped>
.filter {
  &__list {
    max-height: 258px;
    overflow: auto;
    margin-left: -5px;
    padding-left: 5px;
  }

  &__range {
    margin-top: 32px;
  }
}
</style>
