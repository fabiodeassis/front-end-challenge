<template>
  <div class="brand-logo" v-bind:class="model">
    <img alt="Boulder Co. Logo" src="@/assets/logo.svg">
    <h1>Boulder</h1>
  </div>
</template>
<script>
export default {
  name: 'bldrUiBrand',
  props: {
    model: String
  }
}
</script>

<style scoped lang="scss">
.brand-logo {
  text-align: center;
  img {
    display: block;
    margin: 0 auto;
    max-width: 231px;
  }
  h1 {
    font-family: $font-coursive;
    font-weight: normal;
    line-height: 1em;
    margin: 0;
  }
  // Models
  &.full {
    h1 {
      font-size: 2.5em;
      padding: 1em 0 1.3em;
    }
  }
  &.name {
    img {
      display: none;
    }
    h1 {
      font-size: 20px;
    }
  }
  &.logo {
    h1 {
      display: none;
    }
  }
  // Colors
  &.over-grey-light {
    color: var(--primary)
  }
  &.over-primary {
    color: var(--white);
  }
}
</style>
