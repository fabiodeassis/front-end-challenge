<template>
  <div class="page-container clients">
    <h2 class="page-title">
      Clientes <router-link v-bind:to="{ name: 'new'}">Novo</router-link>
    </h2>
    <bldrUiClientLink v-for="client in clients" :key="client.id" v-bind:to="{ name: 'client', params: { id: client.id }}" v-bind:object="{number: client.id, description: client.name, status: client.status.description}"></bldrUiClientLink>
    <router-view></router-view>
  </div>
</template>

<script>
import Client from './models/clientModel'
import ClientsService from './ClientsServices'
import bldrUiClientLink from '@/ui-lib/Clients/ClientLink'
const service = ClientsService.build()
export default {
  name: 'clients',
  components: {
    bldrUiClientLink
  },
  data () {
    return {
      clients: []
    }
  },
  methods: {
    getClients () {
      service
        .list({})
        .then(this.getClientsSuccess)
    },
    getClientsSuccess (response) {
      if (Array.isArray(response.clients)) {
        this.clients = []
        for (let i = 0; i < response.clients.length; i++) {
          this.clients.push(new Client(response.clients[i]))
        }
        return
      }
      this.clients = []
    }
  },
  mounted () {
    this.getClients()
  }
}
</script>
