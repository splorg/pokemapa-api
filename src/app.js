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

app.use('/pokestops', pokestopRouter)

module.exports = app