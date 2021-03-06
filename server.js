const express = require('express')
const { join } = require('path')
const models = require('./models/exercise')

const app = express()

app.use(express.static(join (__dirname, 'public')))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(require('./routes'))

require('./config')
  .then(() => app.listen(3000))
  .catch(e => console.error(e))