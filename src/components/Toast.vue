<template>
  <div v-if="showed" class="toast mb-5 align-items-center fade show w-100"
       role="alert"
       aria-live="assertive" aria-atomic="true">
    <div class="d-flex">
      <div class="toast-body">
        {{ msg }}
      </div>
      <button type="button" class="btn-close me-2 m-auto"
              data-bs-dismiss="toast" aria-label="Close" @click="close"></button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, defineProps } from 'vue';

defineProps<{
  msg: string
}>();

const showed = computed(() => !localStorage.getItem('toastClosed'));

function close() {
  localStorage.setItem('toastClosed', 'true');
}

</script>

<style scoped>
.toast {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.05);
}
</style>
