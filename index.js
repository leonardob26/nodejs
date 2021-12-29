const express = require('express')
const app = express()
const port = 3000

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

app.get('/', (req, res) => {
    db.manyOrNone('SELECT * FROM centros')
    .then(function (data) {
      res.json(data)
    })
    .catch(function (error) {
      console.log('ERROR:', error)
    })  
})
app.get('/:id', (req, res) => {
    db.many('SELECT * FROM centros where id_centro = $1', req.params.id)
    .then(function (data) {
      res.json(data)
    })
    .catch(function (error) {
      console.log('ERROR:', error)
    })  
 // res.send('Hello World!')
})
app.post('/', function (req, res) {
    res.send('Got a POST request')
})
app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user')
})
app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})