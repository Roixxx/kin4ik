<template>
  <div class="form-check">
    <input class="form-check-input"
           type="radio"
           :name="name"
           :id="id"
           :value="value"
           :checked="modelValue == value"
           @input="$emit('update:modelValue', $event.target.value)">
    <label class="form-check-label" :for="id">{{ label }}</label>
  </div>

</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

defineProps<{
  name: string,
  id: string,
  value: string | number,
  label: string,
  modelValue: string | null }>();
</script>
