const express = require('express')
const bodyParser = require('body-parser')
const { init } = require('./db')
const routes = require('./routes')
var cors = require('cors')

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(routes)

init().then(() => {
  console.log('starting server on port 4000')
  app.listen(4000)
})
