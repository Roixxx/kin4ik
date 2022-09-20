<template>

  <the-header/>

  <div class="container">
    <router-view :key="$route.fullPath"/>
  </div>
  <the-footer/>
</template>

<script lang="ts">

import TheHeader from '@/components/TheHeader.vue';
import { defineComponent } from 'vue';
import TheFooter from '@/components/TheFooter.vue';

export default defineComponent({
  components: { TheFooter, TheHeader },
});

</script>

<style scoped>

</style>
