<template>
  <div :class="props.class">{{ str }}
    <button class="readmore__toggle" @click="toggle" v-if="isLongText">{{ toggleTxt }}</button>
  </div>
</template>

<script setup lang="ts">
import {
  computed, defineProps, ref,
} from 'vue';

const props = defineProps<{
  str: string,
  class?: string,
}>();

const hidden = ref(true);
const showMore = 'показать ещё';
const hide = 'скрыть';
const toggleTxt = ref(showMore);
const isLongText = props.str.length > 230;

const str = computed(() => {
  if (hidden.value && isLongText) {
    return `${props.str.slice(0, props.str.indexOf(' ', 200))}...`;
  }
  return props.str;
});

function toggle() {
  hidden.value = !hidden.value;

  toggleTxt.value = toggleTxt.value === showMore ? hide : showMore;
}
</script>

<style scoped lang="scss">
.readmore {
  &__toggle {
    color: #9898ff;
    background: none;
    border: none;
    display: inline;
    padding: 0;
  }
}
</style>
