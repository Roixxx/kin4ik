<template>
  <div class="staff p-4">
    <div class="staff__container">
      <div class="me-3">
        <div class="mb-3">Режиссер</div>
        <div class="staff__director">
          <div class="staff__item"
               v-for="director in directors.slice(0, 1)"
               :key="director.staffId">
            <img class="staff__pic mb-2" :src="director.posterUrl" :alt="director.nameRu">
            <div class="small">{{ director.nameRu }}</div>
          </div>
        </div>
      </div>

      <div class="w-100">
        <div class="mb-3">В ролях</div>
        <div class="staff__roles">
          <StaffActor v-for="actor in actors.slice(0, 5)" :key="actor.staffId" :actor="actor"/>
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
    <div class="staff__modal">
      <StaffActor v-for="actor in actors" :key="actor.staffId" :actor="actor"/>
    </div>
  </ModalDialog>

</template>

<script setup lang="ts">
import { useStore } from 'vuex';
import { defineProps } from 'vue';
import ModalDialog from '@/components/ModalDialog.vue';
import { staffI } from '@/types/types';
import StaffActor from '@/components/staff/Staff-actor.vue';

const props = defineProps< {id: number, film: string} >();
const store = useStore();
let staff: staffI[] = await store.dispatch('SingleMovie/loadStaff', props.id);
staff = staff.filter((s) => s.nameRu);
const directors = staff.filter((item) => item.professionKey === 'DIRECTOR');
const actors = staff.filter((item) => item.professionKey === 'ACTOR');
</script>

<style scoped lang="scss">
.staff {
  background-color: white;
  border-radius: 24px;
  line-height: 1.2;
  max-width: 694px;

  &__container {
    display: flex;

    @include md {
      flex-direction: column;
      gap: 16px;
    }
  }

  &__director {
    border-right: 1px solid #ddd9d9;
    padding-right: 16px;

    .staff__item {
      text-align: center;
    }

    @include lg {
      border: none;
      padding-right: 0;

      .staff__item {
        display: flex;
      }
    }

    @include md {
      display: inline-block;
    }
  }

  &__roles {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;

    @include sm {
      flex-wrap: nowrap;
      overflow: auto;
      padding-bottom: 16px;
    }
  }

  &__modal {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
  }
}
</style>
