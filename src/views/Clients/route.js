export default [
  {
    path: '/clients',
    name: 'clients',
    component: () => import(/* webpackChunkName: "clients" */ './Clients.vue')
  },
  {
    path: '/client/:id',
    name: 'client',
    component: () => import(/* webpackChunkName: "client" */ './Client.vue'),
    children: [
      {
        path: 'transactions',
        name: 'transactions',
        component: () => import(/* webpackChunkName: "transactions" */ './Transactions.vue')
      }
    ]
  }
]
