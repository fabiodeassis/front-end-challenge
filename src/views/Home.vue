<template>
  <div class="home">
    <bldrUiBrand model="full over-primary" />
    <select v-model="selected">
      <option value="" disabled selected>Escolha uma conta</option>
      <option v-for="type in colorBlindTypes" :key="type.name" :value="type.name">{{ type.label }}</option>
    </select>
    <button v-on:click="changeSkin()">Trocar Skin</button>

    <RsvTesteComponent></RsvTesteComponent>

    <h1>Style Guide</h1>
    <h2>Colors</h2>

    <h3>Primary Pallet</h3>
    <div class="row">
      <div class="box bg-primary"></div>
      <div class="box bg-primary-avid"></div>
      <div class="box bg-primary-vivid"></div>
      <div class="box bg-primary-darth"></div>
    </div>

    <h3>Secondary Pallet</h3>
    <div class="row">
      <div class="box bg-secondary"></div>
      <div class="box bg-secondary-avid"></div>
      <div class="box bg-secondary-vivid"></div>
      <div class="box bg-secondary-darth"></div>
    </div>

    <h3>Grey Scale</h3>
    <div class="row">
      <div class="box bg-white"></div>
      <div class="box bg-grey-lightest"></div>
      <div class="box bg-grey-lighter"></div>
      <div class="box bg-grey-light"></div>
      <div class="box bg-grey"></div>
      <div class="box bg-grey-darker"></div>
      <div class="box bg-grey-darkest"></div>
      <div class="box bg-black"></div>
    </div>

    <h3>System Pallet</h3>
    <div class="row">
      <div class="box bg-color-warning"></div>
      <div class="box bg-color-warn-darth"></div>
      <div class="box bg-color-danger"></div>
      <div class="box bg-color-contrast"></div>
      <div class="box bg-color-success"></div>
      <div class="box bg-color-info"></div>
      <div class="box bg-color-darth"></div>
    </div>
  </div>
</template>

<script>
import bldrUiBrand from '@/ui-lib/Brand/Brand.vue'
import localService from '@/_services/LocalData'
import AsyncComponentLoader from '@/ui-lib/AsyncComponentLoader'

const counter = localService.getConfig().components.counter
const RsvTesteComponent = () => AsyncComponentLoader(counter)

export default {
  name: 'home',
  components: {
    bldrUiBrand,
    RsvTesteComponent
  },
  data () {
    return {
      skin: localService.getSkin(),
      colorBlindTypes: [
        { name: 'default', label: 'Reserve' },
        { name: 'deuteranomalia', label: 'Deuteranomalia' },
        { name: 'deuteranopia', label: 'Deuteranopia' },
        { name: 'protanopia', label: 'Protanopia' },
        { name: 'tritanopia', label: 'Tritanopia' }
      ],
      selected: 'default',
      showModal: false
    }
  },
  methods: {
    changeSkin () {
      const rootEl = document.getElementsByTagName('html')
      if (rootEl[0].classList && rootEl[0].classList.length) {
        const classes = rootEl[0].className.split(' ').filter(c => !c.startsWith('skn-'))
        rootEl[0].className = classes.join(' ').trim()
      }
      rootEl[0].classList.add('skn-' + this.selected)
    }
  }
}
</script>

<style lang="scss">
/*
$main-colour: $primary;
$main-colour-hue: hue($main-colour);
$main-colour-sat: saturation($main-colour);
$main-colour-light: lightness($main-colour);
$pallet-range: 360;

$colour2: hsl($main-colour-hue + ($pallet-range / 3 * 1), $main-colour-sat, $main-colour-light);
$colour3: hsl($main-colour-hue + ($pallet-range / 3 * 2), $main-colour-sat, $main-colour-light);
$primary-contrast: hsl($main-colour-hue + ($pallet-range / 2), $main-colour-sat, $main-colour-light);
$colour5: hsl($main-colour-hue + ($pallet-range / 5 * 4), $main-colour-sat, $main-colour-light);
*/
.home {
  padding: 50px 20px;
  text-align: center;
  h1, h2, h3 {
    font-weight: 100
  }
  .row {
    display: flex;
    justify-content: center;

  }
  .box {
    border: 1px solid var(--dark);
    height: 50px;
    margin: 5px;
    width: 50px;
  }
}
.bg {
  &-primary {
    background-color: var(--primary);
  }
  &-primary-avid {
    background-color: var(--primary-avid);
  }
  &-primary-vivid {
    background-color: var(--primary-vivid);
  }
  &-primary-darth {
    background-color: var(--primary-darth);
  }
  &-secondary {
    background-color: var(--secondary);
  }
  &-secondary-avid {
    background-color: var(--secondary-avid);
  }
  &-secondary-vivid {
    background-color: var(--secondary-vivid);
  }
  &-secondary-darth {
    background-color: var(--secondary-darth);
  }
  &-white {
    background-color: var(--white);
  }
  &-grey-lightest {
    background-color: var(--grey-lightest);
  }
  &-grey-lighter {
    background-color: var(--grey-lighter);
  }
  &-grey-light {
    background-color: var(--grey-light);
  }
  &-grey {
    background-color: var(--grey);
  }
  &-grey-darker {
    background-color: var(--grey-darker);
  }
  &-grey-darkest {
    background-color: var(--grey-darkest);
  }
  &-black {
    background-color: var(--black);
  }
  &-color-warning {
    background-color: var(--color-warning);
  }
  &-color-warn-darth {
    background-color: var(--color-warn-darth);
  }
  &-color-danger {
    background-color: var(--color-danger);
  }
  &-color-contrast {
    background-color: var(--color-contrast);
  }
  &-color-success {
    background-color: var(--color-success);
  }
  &-color-info {
    background-color: var(--color-info);
  }
  &-color-darth {
    background-color: var(--color-darth);
  }
}
</style>
