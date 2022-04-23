<template>
  <nav>
    <ul class="pagination">
      <li class="page-item disabled"><a class="page-link" href="#">Предыдущая</a></li>
      <li class="page-item active"><a class="page-link" href="#">1</a></li>
      <li class="page-item"><a class="page-link" href="#">2</a></li>
      <li class="page-item"><a class="page-link" href="#">3</a></li>
      <li class="page-item"><a class="page-link" href="#">Следующая</a></li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({

});
</script>

<style lang="scss" scoped>
  .pagination {
    margin: 30px 0;
  }
</style>
