<template>
  <footer class="footer bg-dark py-4 py-lg-5">
    <div class="container">
      <div class="row gy-3">

        <div class="col-2">
          <router-link class="text-light footer__title fs-3" to="/">Kin4ik</router-link>
        </div>
        <div class="col-lg-3 d-flex flex-column align-items-start">
          <div class="text-warning fs-6">Фильмы</div>
          <router-link to="/">Популярные фильмы</router-link>
          <router-link :to="{name: 'top250'}">Топ 250</router-link>
        </div>
        <div class="col-lg-3">
          <div class="footer__dev">
            Сайт разработан:
            <a class="text-secondary" target="_blank" href="https://github.com/Roixxx">Roixxx</a>
          </div>
        </div>
      </div>

    </div>
  </footer>
</template>

<style lang="scss">
.footer {

  a {
    color: white;
    transition: opacity 0.3s;

    @include sm {
      font-size: 14px;
    }

    &:hover {
      opacity: 0.7;
    }
  }

  &__title {
    &.active::before {
      content: none !important;
    }
  }

  &__dev {
    font-size: 14px;
    color: white;

    a {
      color: rgba(238, 111, 87, 0.5) !important;
    }
  }
}
</style>
