<template>
  <li class="movie-card card mb-3">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="https://placeimg.com/640/480/any" class="img-fluid rounded-start" alt="...">
      </div>

      <div class="col-md-8">
        <div class="card-body">
          <a href="#" class="card-title movie-card__title">Card title</a>
          <p class=""><small class="text-muted">The last surviviro</small></p>

          <p class="card-text">США, 1984</p>

        </div>
      </div>

    </div>
  </li>
</template>

<script lang="ts">

export default {
};
</script>

<style scoped lang="scss">
.movie-card {
  position: relative;

  &__title {
    font-size: 24px;
  }
}
</style>
