<template>
  <div class="home">
    <bldrUiBrand model="full over-primary" />
  </div>
</template>

<script>
import bldrUiBrand from '@/ui-lib/Brand/Brand.vue'

export default {
  name: 'home',
  components: {
    bldrUiBrand
  }
}
</script>

<style scoped lang="scss">
.home {
  padding: 50px 20px;
  text-align: center;
}
</style>
