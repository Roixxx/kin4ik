<template>
  <div class="staff d-flex p-4">
    <div class="staff__block">
      <div class="mb-3">Режиссер</div>

      <div class="d-flex">
        <div class="staff__item"
             v-for="director in directors"
             :key="director.staffId">
          <img class="staff__pic mb-2" :src="director.posterUrl" :alt="director.nameRu">
          <div class="text-center small">{{ director.nameRu }}</div>
        </div>
      </div>

    </div>
    <div class="staff__block">
      <div class="mb-3">В ролях</div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';
import { defineProps } from 'vue';

interface staffI {
  staffId: number,
  nameRu: string,
  nameEn: string,
  description: string,
  posterUrl: string,
  professionText: string,
  professionKey: string
}

const props = defineProps< {id: number} >();
const store = useStore();
const staff: [staffI] = await store.dispatch('SingleMovie/loadStaff', props.id);
const directors = staff.filter((item) => item.professionKey === 'DIRECTOR');
const actors = staff.filter((item) => item.professionKey === 'ACTOR');
</script>

<style scoped lang="scss">
.staff {
  background-color: white;
  border-radius: 24px;
  line-height: 1.2;

  &__item {
    max-width: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__pic {
    border-radius: 50px;
    width: 50px;
    height: 50px;

  }
}
</style>
