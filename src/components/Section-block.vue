<template>
  <div class="section">
    <div class="section__head">
      <div class="section__title">{{title}}</div>
    </div>
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

defineProps<{title: string}>();
</script>

<style lang="scss" scoped>
.section {
  margin-bottom: 24px;

  &__title {
    font-weight: 500;
    font-size: 28px;

    @include lg {
      font-size: 18px;
    }
  }

  &__head {
    margin-bottom: 30px;

    @include lg {
      margin-bottom: 24px;
    }
  }
}
</style>
