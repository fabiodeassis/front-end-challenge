export default [
  {
    path: '/clients',
    name: 'clients',
    component: () => import(/* webpackChunkName: "clients" */ './Clients.vue'),
    children: [
      {
        path: 'new',
        name: 'new',
        component: () => import(/* webpackChunkName: "clientsnew" */ './ClientsNew.vue')
      }
    ]
  },
  {
    path: '/clients/:id',
    name: 'client',
    component: () => import(/* webpackChunkName: "client" */ './Client.vue'),
    children: [
      {
        path: 'edit',
        name: 'edit',
        component: () => import(/* webpackChunkName: "clientsnew" */ './ClientsNew.vue')
      }
    ]
  },
  {
    path: '/clients/:id/transactions',
    name: 'transactions',
    component: () => import(/* webpackChunkName: "transactions" */ './Transactions.vue')
  }
]
