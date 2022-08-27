<template>
  <header class="header bg-dark">
    <div class="container">
      <div class="row align-items-center">

        <div class="col-2">
          <router-link class="text-light header__title fs-3" to="/">Kin4ik</router-link>
        </div>
        <div class="col">
          <router-link to="/">Популярные фильмы</router-link>
          <router-link :to="{name: 'top250'}">Топ 250</router-link>
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
    margin-bottom: 64px;

    @include sm {
      margin-bottom: 32px;
    }

    a {
      color: white;
      margin-right: 16px;
      position: relative;
      transition: opacity 0.3s;

      &:hover {
        opacity: 0.7;
      }

      &.active::before {
        content: "";
        position: absolute;
        left: 0;
        bottom: -6px;
        width: 100%;
        height: 3px;
        transform: skew(300deg);
        background: rgba(238, 111, 87, 0.5);
        z-index: -1;
      }
    }

    &__title {
      &.active::before {
        content: none !important;
      }
    }
  }
</style>
