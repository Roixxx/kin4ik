<template>
  <teleport to="body">

    <div class="modal fade" :id="props.id" tabindex="-1"
         :aria-labelledby="props.title" aria-hidden="true">

      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">

            <h5 class="modal-title" id="exampleModalLabel">{{ props.title }}</h5>
            <button type="button" class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Закрыть"></button>
          </div>

          <div class="modal-body">
            <slot></slot>
          </div>

          <div class="modal-footer" v-if="slots.footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </div>
  </teleport>

</template>

<script setup lang="ts">
import { defineProps, useSlots } from 'vue';

const props = defineProps<{
  id: string,
  title: string,
}>();
const slots = useSlots();

</script>

<style scoped lang="scss">
.modal {

}
</style>
