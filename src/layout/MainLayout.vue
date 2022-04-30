<template>

  <the-header/>
  <div class="container">
    <router-view/>
  </div>

</template>

<script lang="ts">

import TheHeader from '@/components/TheHeader.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { TheHeader },
});

</script>

<style scoped>

</style>
