//var express = require('../../..');
const express = require('express')

var apicentro = express.Router();

apicentro.get('/', function(req, res) {
  res.send('Hello from APIv2 root route.');
});

apicentro.get('/users', function(req, res) {
  res.send('List of APIv2 users.');
});

module.exports = apicentro;