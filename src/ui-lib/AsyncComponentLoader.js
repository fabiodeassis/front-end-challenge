import bldrUiBrand from '@/ui-lib/Brand/Brand.vue'
import externalComponent from '@/_services/externalComponent'

export default (component) => ({
  // O componente a carregar (deve ser uma Promise)
  component: externalComponent(component),
  // Um componente para usar enquanto o assíncrono é carregado
  loading: bldrUiBrand,
  // Um componente para usar se o carregamento falhar
  error: bldrUiBrand,
  // Espera antes de exibir o componente de loading. Padrão: 200ms
  delay: 200,
  // O componente de erro será exibido se um timemout for
  // fornecido e excedido. Padrão: Infinity
  timeout: 30000
})
