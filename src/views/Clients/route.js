export default [
  {
    path: '/clients',
    name: 'clients',
    component: () => import(/* webpackChunkName: "clients" */ './Clients.vue')
  },
  {
    path: '/clients/:id',
    name: 'client',
    component: () => import(/* webpackChunkName: "client" */ './Client.vue')
  },
  {
    path: '/clients/:id/transactions',
    name: 'transactions',
    component: () => import(/* webpackChunkName: "transactions" */ './Transactions.vue')
  }
]
