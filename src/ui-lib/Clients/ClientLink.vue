<template>
  <router-link tag="div" class="rounded-list pointer" :to="to">
    {{object.number}} {{object.description}} {{object.status}}
  </router-link>
</template>
<script>
export default {
  name: 'bldrUiClientLink',
  props: {
    object: Object,
    to: Object
  }
}
</script>

<style scoped lang="scss">

</style>
