<template>
  <div class="form-check">
    <input class="form-check-input"
           type="radio"
           :name="name"
           :id="id"
           :value="value"
           v-model="model">
    <label class="form-check-label" :for="id">{{ label }}</label>
  </div>
  {{model}}
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps<{
  name: string,
  id: string,
  value: string | number,
  label: string,
  model: string}>();
</script>
