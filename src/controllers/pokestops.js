const router = require('express').Router()
const Pokestop = require('../models/pokestop')

router.get('/', async (req, res) => {
    const pokestops = await Pokestop.find({})

    res.json(pokestops)
})

router.get('/:id', async (req, res) => {
    const id = req.params.id

    const pokestop = await Pokestop.findById(id)

    if (pokestop) {
        res.json(pokestop)
    } else {
        res.status(404).end()
    }
})

router.post('/', async (req, res) => {
    const { name, latitude, longitude } = req.body

    const pokestop = new Pokestop({
        name,
        latitude,
        longitude
    })

    const savedPokestop = await pokestop.save()

    res.status(201).json(savedPokestop)
})

router.put('/:id', async (req, res) => {
    const id = req.params.id
    const { name, latitude, longitude } = req.body

    const pokestop = new Pokestop({
        name,
        latitude,
        longitude
    })

    const updatedPokestop = await findByIdAndUpdate(id, pokestop, { new: true, runValidators: true })

    if (updatedPokestop) {
        res.json(updatedPokestop)
    } else {
        res.status(404).end()
    }
})

module.exports = router