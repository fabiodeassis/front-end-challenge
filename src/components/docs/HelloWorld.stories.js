/* eslint-disable react/react-in-jsx-scope */

import { storiesOf } from '@storybook/vue'
// import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'

import notes from './notes'

import HelloWorld from './../HelloWorld.vue'

storiesOf('HelloWorld', module).add('to Storybook', () => ({
  components: { HelloWorld },
  template: '<HelloWorld msg="Welcome to Your Vue.js App"/>',
  methods: { }
})
,
{
  notes: {
    markdown: notes
  }
})
