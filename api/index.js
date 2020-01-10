const express = require('express');
var cors = require('cors');
const app = express();
// const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');

const apiData = require('./data');
const models = require('./models')

module.exports = app => {
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());


  /**
   * TODO
   * 1. App Config (need Update)
   * 2. License Login Config
   * 3. User Config
   */

  app.get('/api', function (req, res) {
    res.json(models.response({
      message: { text: 'Texto da mensagem da API!' },
      data: {
        title: 'Desafio Front End',
        version: '1.0.0',
        source: 'https://github.com/RickCardoso/front-end-challenge',
        authors: [
          {
            name: 'Ricardo Cardoso',
            url: 'https://github.com/RickCardoso'
          }
        ]
      }
    }));
  });

  app.get('/api/status/', function (req, res) {
    res.json(models.response({
      data: apiData.status
    }));
  });

  app.post('/api/login', function (req, res) {
    const payload = req.body;

    if (apiData.auth[payload.username] && apiData.auth[payload.username] === payload.password) {
      res.status(200).json(models.response({
        message: {text: 'Login efetuado com sucesso!'},
        data: apiData.users[payload.username]
      }));
    } else {
      res.status(401).json(models.response({
        message: { type: 'error', text: 'Usuário e/ou Senha inválidos!' },
        data: apiData.users[payload.username]
      }));
    }
  });

  app.get('/api/config/', function (req, res) {
    res.json({
      cardBrands: apiData.cardBrands,
      clientStatus: apiData.clientStatus,
      transactionStatus: apiData.transactionStatus,
      components: apiData.components
    });
  });

  app.get('/api/clients/', function (req, res) {
    const mappedClients = apiData.clients.map(client => {
      return {
        id: client.id,
        name: client.name,
        status: client.status
      }
    })
    res.json({ clients: mappedClients });
  });

  app.get('/api/clients/:id', function (req, res) {
    let client = apiData.clients.find((client) => client.id.toString() === req.params.id.toString());
    res.json({ client });
  });

  app.patch('/api/clients/:id', (req, res) => {
    let index = apiData.clients.findIndex((client) => client.id.toString() === req.params.id.toString());
    Object.assign(apiData.clients[index], req.body);
    res.status(200).json({ status: 'success' });
  });

  app.post('/api/clients/', (req, res) => {
    const topId = apiData.clients.map(client => client.id).reduce((a, b) => {
      if (a > b) return a
      else return b
    })

    apiData.clients.push(Object.assign({
      id: topId + 1
    }, req.body));

    res.status(200).json({ status: 'success' });
  });

  app.get('/api/clients/:id/transactions', (req, res) => {
    const transactions = apiData.transaction.filter(transaction => transaction.clientId.toString() === req.params.id.toString());

    res.json(transactions.map(transaction => {
      const clientName = apiData.clients.find(client => client.id === transaction.clientId).name;

      return Object.assign(transaction, {
        clientName
      });
    }));
  });

  /*app.listen(port, function () {
      console.log(`Listening on http://localhost:${port}`)
  });*/
}