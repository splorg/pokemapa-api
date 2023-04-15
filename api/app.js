const express = require('express')
const cors = require('cors')
require('express-async-errors')
const mongoose = require('mongoose')
const config = require('./config')
const pokestopRouter = require('./controllers/pokestops')

const app = express()

mongoose.set('strictQuery', false)

try {
  mongoose.connect(config.DATABASE_URI)
} catch (err) {
  console.log('Erro ao conectar com o banco de dados:', err.message)
}

app.use(cors())
app.use(express.json())

app.use('/', express.static('public'))

app.get('/api', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.status(200).json({
    message: 'API PokéMapa',
    version: '1.0.1'
  })
})

app.use('/api/pokestops', pokestopRouter)

module.exports = app