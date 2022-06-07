<template>
  <div class="staff overflow-auto p-4">
    <div class="row row-cols-auto flex-nowrap m-0 justify-content-start">
      <div class="col ps-0">
        <div class="mb-3">Режиссер</div>
        <div class="row row-cols-auto border-end">
          <div class="col staff__item"
               v-for="director in directors.slice(0, 1)"
               :key="director.staffId">
            <img class="staff__pic mb-2" :src="director.posterUrl" :alt="director.nameRu">
            <div class="text-center small">{{ director.nameRu }}</div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="mb-3">В ролях</div>
        <div class="row row-cols-auto flex-nowrap">
          <div class="col staff__item"
               v-for="actor in actors.slice(0, 5)"
               :key="actor.staffId">
            <img class="staff__pic mb-2" :src="actor.posterUrl" :alt="actor.nameRu">
            <div class="text-center small">{{ actor.nameRu }}</div>
          </div>
        </div>
      </div>
    </div>

    <button type="button"
            class="btn btn-secondary mt-3"
            data-bs-toggle="modal"
            data-bs-target="#allStaff">
      Вся съемочная группа
    </button>
  </div>

  <ModalDialog id="allStaff" :title="props.film + ': Съемочная группа'">
    {{staff}}
  </ModalDialog>

</template>

<script setup lang="ts">
import { useStore } from 'vuex';
import { defineProps } from 'vue';
import ModalDialog from '@/components/ModalDialog.vue';

interface staffI {
  staffId: number,
  nameRu: string,
  nameEn: string,
  description: string,
  posterUrl: string,
  professionText: string,
  professionKey: string
}

const props = defineProps< {id: number, film: string} >();
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
  width: fit-content;

  &__item {
    max-width: 105px;
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
