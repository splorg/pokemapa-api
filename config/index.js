require('dotenv').config()

const DATABASE_URI = process.env.DATABASE_URI || 'mongodb://mongo:27017/pokemapa'
const PORT = process.env.PORT || 3000

module.exports = { DATABASE_URI, PORT }