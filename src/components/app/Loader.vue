<template>
  <div
    class="loader"
    :class="{
      'loader--white': isWhite,
    }"
  >
    <div class="loader__circle"></div>
  </div>
</template>

<script>
export default {
  name: 'Loader',
  props: {
    isWhite: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
.loader {
  position: relative;
  display: flex;
  align-items: center;
  color: $accent;

  &::after,
  &::before {
    content: '';
  }

  &__circle,
  &::after,
  &::before {
    background-color: currentColor;
    display: block;
    border-radius: 50%;
    height: 8px;
    width: 8px;
    animation-name: scale;
    animation-duration: 600ms;
    animation-iteration-count: infinite;
  }

  &::before {
    animation-delay: 100ms;
  }

  &__circle {
    margin: 6px;
    animation-delay: 200ms;
  }

  &::after {
    animation-delay: 300ms;
  }
  // --white
  &--white {
    color: $white;
  }
}
</style>
