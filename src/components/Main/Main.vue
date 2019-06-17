<template>
  <main v-bind:class="{ logged: authenticated }">
    <slot></slot>
  </main>
</template>

<script>
export default {
  name: 'bldMain',
  props: {
    authenticated: Boolean
  }
}
</script>

<style scoped lang="scss">
main {
  height: 100vh;
  overflow: auto;
  z-index: 1;
  transform: translate(0, -#{$header-height});
  transition: all .3s ease-in-out;
  &.logged {
    height: calc(100vh - #{$header-height});
    transform: translate(0, 0);
  }
}
@media (max-width: 767px) {
  main {
    transform: translate(0, -#{$sm-header-height});
    &.logged {
      height: calc(100vh - #{$sm-header-height});
    }
  }
}
</style>
