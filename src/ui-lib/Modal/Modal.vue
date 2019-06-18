<template>
  <div class="modal">
    <div class="modal-content">
      <button v-on:click="close()">fechar</button>
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'bldrUiModal',
  methods: {
    close () {
      window.history.back()
    }
  }
}
</script>

<style scoped lang="scss">
.modal {
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  height: calc(100vh - #{$header-height});
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  .modal-content {
    background-color: $grey-lighter;
    border-radius: 1em;
    max-width: 495px;
    padding: 1em;
    width: 90%;
  }
}
@media (max-width: 767px) {
  .modal {
    height: calc(100vh - #{$sm-header-height});
  }
}
</style>
