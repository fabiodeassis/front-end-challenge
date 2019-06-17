/* eslint-disable react/react-in-jsx-scope */

import { storiesOf } from '@storybook/vue'
import bldrUiClientLink from './../ClientLink.vue'
import '../../../assets/styles/index.scss'

storiesOf('bldrUiClientLink', module)
  .add('Model Full', () => ({
    components: { bldrUiClientLink },
    template: '<div class="page-container"><bldrUiClientLink v-bind:object="{number:1, description: \'Nome do Item\', status: \'Status\'}" v-bind:to="{}" /></div>',
    methods: { }
  }),
  {
    notes: {
      markdown: `
      # bldrUiBrand
      
      Componente que renderiza a marca e suas variações
      
      ## Mode: full
      Mostra a marca completa, com logo e texto
      
      \`<bldrUiBrand model="full"/>\``
    }
  })
