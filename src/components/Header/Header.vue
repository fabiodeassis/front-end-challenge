<template>
  <header v-bind:class="{ logged: authenticated }">
    <div class="logo">
      <bldrUiBrand model="name over-grey-light" />
    </div>
    <slot></slot>
  </header>
</template>

<script>
import bldrUiBrand from '@/ui-lib/Brand/Brand'

export default {
  name: 'bldHeader',
  components: {
    bldrUiBrand
  },
  props: {
    authenticated: Boolean
  }
}
</script>

<style scoped lang="scss">
header {
  -webkit-box-align: center;
  align-items: center;
  background-color: $grey-lighter;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 2px;
  display: flex;
  height: $header-height;
  -webkit-box-pack: center;
  justify-content: space-between;
  padding: 5px 20px;
  position: relative;
  text-align: center;
  transform: translate(0, -#{$header-height});
  transition: all .3s ease-in-out;
  z-index: 2;
  &.logged {
    transform: translate(0, 0);
  }
}
@media (max-width: 767px) {
  header {
    height: $sm-header-height;
  }
}
</style>
