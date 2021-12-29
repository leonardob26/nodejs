const express = require('express')

var apicentros = express.Router();

var pgp = require('pg-promise')(/* options */)
var connOptions = {
    host: '192.168.1.29',
    port: 5432,
    database: 'pe',
    user: 'view',
    password: 'Home9',
    poolSize: 30,
    poolIdleTimeout: 10000
};
var db = pgp(connOptions)

apicentros.get('/', (req, res) => {
    db.manyOrNone('SELECT * FROM centros')
    .then(function (data) {
      res.json(data)
    })
    .catch(function (error) {
      console.log('ERROR:', error)
    })  
})
apicentros.get('/:id', (req, res) => {
    db.many('SELECT * FROM centros where id_centro = $1', req.params.id)
    .then(function (data) {
      res.json(data)
    })
    .catch(function (error) {
      console.log('ERROR:', error)
    })  
 // res.send('Hello World!')
})
apicentros.post('/', function (req, res) {
    res.send('Got a POST request')
})
apicentros.put('/user', function (req, res) {
    res.send('Got a PUT request at /user')
})
apicentros.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user')
})

module.exports = apicentros;