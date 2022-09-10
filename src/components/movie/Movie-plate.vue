<template>
  <div class="movie-plate">
    <div class="movie-plate__img">
      <img src="https://kinopoiskapiunofficial.tech/images/posters/kp/458.jpg" alt="">
    </div>
    <router-link to="/" class="movie-plate__link stretched-link">Северное сияние. </router-link>
    <div>Corpse Bride</div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.movie-plate {
  max-width: 220px;
  position: relative;

  &:hover {
    .movie-plate__img img {
      opacity: 0.9;
    }
  }
  &__img {
    background: #000;
    overflow: hidden;

    max-height: 300px;
    margin-bottom: 8px;

    img {
      width: 100%;
      opacity: 0.9;
      font-size: 16px;
      font-weight: 500;
      transition: opacity 0.3s;
    }
  }

  &__link {
    font-size: 16px;
    font-weight: 500;
  }
}
</style>
