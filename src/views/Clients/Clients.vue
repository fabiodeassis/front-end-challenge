<template>
  <div class="clients">
    <h1>This is an Clients page</h1>
    <div v-for="client in clients" :key="client.id">
      <router-link :to="{ name: 'client', params: { id: client.id }}">Ver Cliente</router-link>
      {{client}}
    </div>
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
