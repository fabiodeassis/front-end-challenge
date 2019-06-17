/* eslint-disable react/react-in-jsx-scope */

import { storiesOf } from '@storybook/vue'
// import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'

import bldrUiBrand from './../Brand.vue'

storiesOf('bldrUiBrand', module)
  .add('Model Full', () => ({
    components: { bldrUiBrand },
    template: '<div class="page-container"><bldrUiBrand model="full"/></div>',
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
  .add('Model Name', () => ({
    components: { bldrUiBrand },
    template: '<div class="page-container"><bldrUiBrand model="name"/></div>',
    methods: { }
  }),
  {
    notes: {
      markdown: `## Mode: name
      Variação da marca apenas com o Texto
      
      \`<bldrUiBrand model="name"/>\``
    }
  })
  .add('Model Logo', () => ({
    components: { bldrUiBrand },
    template: '<div class="page-container"><bldrUiBrand model="logo"/></div>',
    methods: { }
  }),
  {
    notes: {
      markdown: `## Mode: Logo
      Variação da marca apenas com o Logo
      
      \`<bldrUiBrand model="logo"/>\``
    }
  })
