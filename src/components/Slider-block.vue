<template>
  <div class="slider">
    <Swiper
      :space-between="30"
      slides-per-view="auto"
      :navigation="navigation"
      :modules="modules"
      :allowTouchMove="touch"
      @swiper="onSwiper"

    >
      <slot></slot>
    </Swiper>
    <div :class="`swiper-button-prev ${props.name}-prev`">
      <Svg name="left"/>
    </div>
    <div :class="`swiper-button-next ${props.name}-next`">
      <Svg name="right" fill="red"/>
    </div>
  </div>

</template>

<script setup lang="ts">
import { Swiper } from 'swiper/vue';
import { defineProps } from 'vue';
import { Navigation } from 'swiper';
import 'swiper/css';
import Svg from '@/components/Svg.vue';

const props = defineProps({
  touch: { type: Boolean, default: true },
  name: String,
});

const modules = [Navigation];
const navigation = {
  prevEl: `.swiper-button-prev.${props.name}-prev`,
  nextEl: `.swiper-button-next.${props.name}-next`,
};

const onSwiper = (swiper: typeof Swiper) => {
  if (swiper.width >= swiper.virtualSize) {
    swiper.navigation.nextEl.remove();
    swiper.navigation.prevEl.remove();
  }
};
</script>

<style lang="scss">

.slider {
  position: relative;

  @include sm {
    margin-right: -12px;
  }
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
  cursor: pointer;

  &:after {
    content: none;
  }
}

.swiper-button {

  &-prev, &-next {
    border-radius: 16px;
    border: 1px solid #E6EAEB;
    transition: border-color 0.3s;

    @include md {
      display: none;
    }

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
    cursor: default;
    border-color: #E6EAEB !important;
    svg {
      fill: #CFCFD4 !important;
    }
  }

}
</style>
