<template>

  <div class="blog-post o-media movie-card card mb-3">
    <div class="o-media__figure">
      <span class="skeleton-box" style="width:100px;height:100%;"></span>
    </div>
    <div class="o-media__body">
      <div class="o-vertical-spacing">
        <div class="blog-post__headline">
          <span class="skeleton-box" style="width:55%;"></span>
        </div>
        <p>
          <span class="skeleton-box" style="width:40%;"></span>
        </p>
        <div class="blog-post__meta">
          <span class="skeleton-box" style="width:70px;"></span>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.skeleton-box {
  display: inline-block;
  height: 1em;
  position: relative;
  overflow: hidden;
  background-color: #DDDBDD;

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(
        90deg,
        rgba(#fff, 0) 0,
        rgba(#fff, 0.2) 20%,
        rgba(#fff, 0.5) 60%,
        rgba(#fff, 0)
    );
    animation: shimmer 2s infinite;
    content: '';
  }

  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }
}

.blog-post {
  flex-direction: row;
  &__headline {
    font-size: 1.25em;
    font-weight: bold;
  }

  &__meta {
    font-size: 0.85em;
    color: #6b6b6b;
  }
}

.o-media {
  display: flex;
  min-height: 150px;

  &__body {
    flex-grow: 1;
    padding: 10px;
  }
}

.o-vertical-spacing {
  > * + * {
    margin-top: 0.75em;
  }

  &--l {
    > * + * {
      margin-top: 2em;
    }
  }
}

</style>
