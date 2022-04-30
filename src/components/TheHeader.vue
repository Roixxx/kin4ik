<template>
  <header class="header bg-dark mb-4 mb-md-5">
    <div class="container">
      <div class="row">
        <div class="col">
          <router-link class="text-light header__title fs-3" to="/">Kin4ik</router-link>
        </div>
      </div>

    </div>
  </header>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TheHeader',
});

</script>

<style lang="scss">
  .header {
    display: flex;
    align-items: center;
    height: 60px;
    position: sticky;
    top: 0;
    z-index: 20;

    &__title {
      transition: opacity 0.3s;

      &:hover {
        opacity: 0.7;
      }
    }
  }
</style>
