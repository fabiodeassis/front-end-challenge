<script>
import RsvTesteService from './rsv-teste-service'
import bldrUiBrand from '@/ui-lib/Brand/Brand'

const testeService = new RsvTesteService()

export default {
  name: 'RsvTesteComponent', // vue component name
  components: {
    bldrUiBrand
  },
  data () {
    return {
      counter: testeService.getInitValue()
    }
  },
  methods: {
    setCounter () {
      testeService.setInitValue(this.counter)
    },
    getCounter () {
      return testeService.getInitValue()
    }
  }
}
</script>

<template>
  <div class="rsv-teste-component bg-secondary">
    <bldrUiBrand model="name over-grey-light" label="process.env.SKIN" />
    <p>The counter is set to <b>{{counter}}</b>.</p>
    <button @click="counter += 1">Click +1</button>
    <button @click="counter -= 1">Click -1</button>
    <button class="bg-color-info" @click="counter = getCounter()">Reset</button>
    <button class="bg-color-success" @click="setCounter()">Salvar Valor</button>
  </div>
</template>

<style scoped>
.rsv-teste-component {
  display: block;
  width: 400px;
  margin: 25px auto;
  border: 1px solid var(--primary);
  background: var(--grey-lighter);
  text-align: center;
  padding: 25px;
}
.rsv-teste-component p {
  margin: 0 0 1em;
}
</style>
