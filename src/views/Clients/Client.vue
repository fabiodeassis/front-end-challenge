<template>
  <div class="page-container client">
    <h2 class="page-title">Dados do Cliente</h2>
    <div class="rounded-box">
      <h3 class="title">{{client.name}}</h3>
      <p>{{client}}</p>
    </div>
    <router-link :to="{ name: 'transactions', params: { id: client.id }}">Ver Transações</router-link>
  </div>
</template>

<script>
import Client from './models/clientModel'
import ClientsService from './ClientsServices'
const service = ClientsService.build()
export default {
  name: 'clients',
  data () {
    return {
      lastClientId: null,
      client: {}
    }
  },
  methods: {
    getClient () {
      service
        .read(this.$route.params.id)
        .then(this.getClientSuccess)
    },
    getClientSuccess (response) {
      if (response.client) {
        this.client = new Client(response.client)
        return
      }
      this.client = {}
    }
  },
  updated () {
    if (this.lastClientId !== this.$route.params.id) {
      this.getClient()
      this.lastClientId = this.$route.params.id
    }
  },
  mounted () {
    this.getClient()
    this.lastClientId = this.$route.params.id
  }
}
</script>
