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
            <div>Сайт разработан:
              <a class="text-secondary" target="_blank" href="https://github.com/Roixxx">Roixxx</a>
            </div>
            <div>Api:
              <a class="text-secondary"  href="https://kinopoiskapiunofficial.tech/" target="_blank">
                Kinopoisk Api Unofficial
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  </footer>
</template>

<style lang="scss">
.footer {
  margin-top: auto;

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
    display: flex;
    flex-wrap: wrap;
    font-size: 14px;
    color: white;
    gap: 4px;

    a {
      color: rgba(238, 111, 87, 0.5) !important;
    }
  }
}
</style>
