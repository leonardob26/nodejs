const express = require('express')
var app = module.exports = express();
//var app 
const port = 3000

app.use('/centros', require('./controllers/centros'));


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

