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
          <div class="filter__list">
            <div class="form-check" v-for="(value, i) in filter.data" :key="filter.value + i">
              <input class="form-check-input"
                     :name="filter.name_en"
                     type="radio"
                     :id="filter.value + i"
                     v-model="model" :value="value.id">
              <label class="form-check-label" :for="filter.value +  i">
                {{ value[filter.value] }}
              </label>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
  {{model}}
</template>

<script lang="ts" setup>
import { Api } from '@/use/Api';
import UseFetchData from '@/use/FetchData';
import { ref } from 'vue';

const filtersData = await UseFetchData(Api.filters.url);
function clearData(data: []) {
  return data.filter((v) => Object.values(v).some((item) => item.length > 0));
}
const model = ref(''); //
const filters = [
  {
    name: 'Жанр',
    name_en: 'genres',
    value: 'genre',
    data: clearData(filtersData.genres),
  },
  {
    name: 'Страна',
    name_en: 'countries',
    value: 'country',
    data: filtersData.countries.slice(0, 35),
  },
];
console.log(filters);
</script>

<style lang="scss" scoped>
.filter {
  &__list {
    max-height: 258px;
    overflow: auto;
    margin-left: -5px;
    padding-left: 5px;
  }
}
</style>
