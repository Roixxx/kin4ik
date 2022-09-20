<template>
  <div class="slider">
    <swiper
      :space-between="30"
      slides-per-view="auto"
      :navigation="navigation"
      :modules="modules"
    >
      <slot></slot>
    </swiper>
    <div class="swiper-button-prev">
    </div>
    <div class="swiper-button-next"></div>
  </div>

</template>

<script setup lang="ts">
import { Swiper } from 'swiper/vue';
import { Navigation } from 'swiper';
import 'swiper/css';

const modules = [Navigation];
const navigation = {
  prevEl: '.swiper-button-prev',
  nextEl: '.swiper-button-next',
};

</script>

<style lang="scss">

.slider {
  position: relative;
}

.swiper-slide {
  width: auto;
}

.swiper-button-next, .swiper-button-prev {
  align-items: center;
  background-color: #fff;
  border: 1px solid #dfe1e6;
  border-radius: 100%;
  display: flex;
  height: 44px;
  justify-content: center;
  min-height: 44px;
  min-width: 44px;
  width: 44px;
  z-index: 3;
  position: absolute;
  transform: translateY(-50%);
  top: 50%;

  &:after {
    content: none;
  }
}

.swiper-button {
  &-prev {
    left: -22px;
  }

  &-next  {
    right: -20px;
  }

}
</style>
