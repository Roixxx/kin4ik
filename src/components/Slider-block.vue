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
      <Svg name="left"/>
    </div>
    <div class="swiper-button-next">
<!--      <Svg name="right" fill="red"/>-->
    </div>
  </div>

</template>

<script setup lang="ts">
import { Swiper } from 'swiper/vue';
import { Navigation } from 'swiper';
import 'swiper/css';
import Svg from '@/components/Svg.vue';

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

  &-prev, &-next {
    border-radius: 16px;
    border: 1px solid #E6EAEB;
    transition: border-color 0.3s;

    svg {
      fill: #3B4454;
    }

    &:hover {
      border-color: #CFCFD4;
      svg {
        fill: #1C2230;
      }
    }

  }

  &-prev {
    left: -22px;
  }

  &-next  {
    right: -20px;
  }

  &-disabled {
    border-color: #E6EAEB !important;
    svg {
      fill: #CFCFD4 !important;
    }
  }

}
</style>
