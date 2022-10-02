<template>
  <div class="staff__item">
    <img class="staff__pic mb-2" :src="actor.posterUrl" :alt="actor.nameRu">
    <div class="text-center small">{{ actor.nameRu }}</div>
  </div>
</template>

<script setup lang="ts">
import { staffI } from '@/types/types';
import { defineProps } from 'vue';

defineProps<{
  actor: staffI
}>();
</script>

<style lang="scss">
  .staff {
    &__item {
      width: 91px;
      flex-shrink: 0;
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
