<template>
  <div class="clients">
    <h1>This is an Transactions page</h1>
    <h2>User {{ $route.params.id }}</h2>
    <div v-for="transaction in transactions" :key="transaction.id">{{transaction}}</div>
  </div>
</template>

<script>
import localData from '@/_services/LocalData'
import TransactionsService from './TransactionsServices'
import Transaction from './models/transactionModel'
let service

export default {
  name: 'clients',
  data () {
    return {
      transactions: [],
      transactionStatus: []
    }
  },
  methods: {
    getTransactions () {
      service
        .all()
        .then(this.getTransactionsSuccess)
    },
    getTransactionsSuccess (response) {
      if (Array.isArray(response)) {
        this.transactions = []
        for (let i = 0; i < response.length; i++) {
          this.transactions.push(new Transaction(response[i]))
        }
        return
      }
      this.transactions = []
    }
  },
  beforeCreate () {
    service = TransactionsService.build({ id: this.$route.params.id })
  },
  beforeUpdate () {
    service = TransactionsService.build({ id: this.$route.params.id })
  },
  updated () {
    if (this.lastClientId !== this.$route.params.id) {
      this.getTransactions()
      this.lastClientId = this.$route.params.id
    }
  },
  mounted () {
    this.getTransactions()
    this.lastClientId = this.$route.params.id
    const config = localData.getConfig()
    this.transactionStatus = config.transactionStatus
  }
}
</script>
