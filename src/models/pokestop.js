const mongoose = require('mongoose')

// cria a model de uma Pokéstop com os dados que ficarão salvos no MongoDB

const pokestopSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    latitude: {
        type: String,
        required: true
    },
    longitude: {
        type: String,
        required: true
    }
})

// altera a função 'toJSON' da schema de Pokéstop, para que não retorne as propriedades _id e __v padrão do MongoDB

pokestopSchema.set('toJSON', {
    transform: (document, returnObj) => {
        returnObj.id = document._id.toString()
        delete returnObj._id
        delete returnObj.__v
    }
})

module.exports = mongoose.model('Pokestop', pokestopSchema)