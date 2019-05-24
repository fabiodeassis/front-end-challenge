const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');

app.get('/', function (req, res) {
    res.json({
        title: 'Desafio Front End',
        version: '1.0.0',
        source: 'https://github.com/RickCardoso/front-end-challenge',
        authors: [
            {
                name: 'Ricardo Cardoso',
                url: 'https://github.com/RickCardoso'
            }
        ]
    });
});

const auth = {
    'john@gmail.com': 'passwd',
    'bill@gmail.com': 'test123'
};

const users = {
    'john@gmail.com': {
        firstName: 'John'
    },
    'bill@gmail.com': {
        firstName: 'Bill'
    }
};

let status = [
    {
        id: 1,
        description: 'Aprovado'
    },
    {
        id: 2,
        description: 'Bloqueado'
    },
    {
        id: 3,
        description: 'Cancelado'
    },
    {
        id: 4,
        description: 'Descredenciado'
    }
]

let clientData = [
    {
        id: 1,
        name: 'Loja da Manu',
        address: 'Av. Que Não Existe 123',
        neighborhood: 'Centro',
        city: 'Rio de Janeiro',
        status: 1,
        document: {
            type: 1,
            number: '12.345.678/0001-00'
        },
        partners: [
            {
                name: 'Manu',
                document: '123.456.789-10'
            }
        ]
    }
];

app.post('/api/user/login', function (req, res) {
    const payload = req.body;

    if(auth[payload.email] && auth[payload.email] === payload.password) {
        res.status(200).json(users[payload.email]);
    } else {
        res.sendStatus(401);
    }
});

app.get('/api/status/', function (req, res) {
    res.json({ status })
});

app.get('/api/curso/:id', function (req, res) {
    let curso = cursos.find((curso) => curso.id === req.params.id);
    res.json({ curso });
});

app.delete('/api/curso/:id', function (req, res) {
    let index = cursos.findIndex((curso) => curso.id === req.params.id);
    cursos.splice(index, 1);
    res.status(200).json({ status: 'success' });
});

app.post('/api/curso/', (req, res) => {
    cursos.push(req.body);
    res.status(200).json({ status: 'success' });
});

app.patch('/api/curso/:id', (req, res) => {
    let index = cursos.findIndex((curso) => curso.id === req.params.id);
    cursos[index] = req.body;
    res.status(200).json({ status: 'success' });
});

app.get('/api/professor', (req, res) => {
   res.json(professores);
});

app.get('/api/sala', (req, res) => {
    res.json(salas);
});

app.listen(port, function () {
    console.log(`Listening on http://localhost:${port}`)
});