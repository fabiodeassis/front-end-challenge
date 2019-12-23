import Loading from './LoadingComponent'
import ExternalComponent from './ExternalComponent'

export default (component) => ({
  // O componente a carregar (deve ser uma Promise)
  component: ExternalComponent(component),
  // Um componente para usar enquanto o assíncrono é carregado
  loading: Loading,
  // Um componente para usar se o carregamento falhar
  error: Loading,
  // Espera antes de exibir o componente de loading. Padrão: 200ms
  delay: 200,
  // O componente de erro será exibido se um timemout for
  // fornecido e excedido. Padrão: Infinity
  timeout: 30000
})
