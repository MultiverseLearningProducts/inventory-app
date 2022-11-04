const express = require("express")
const router = express.Router()
const { Item } = require('../models/index')

// Get /item

router.get('/', async (req, res) => {
    try {
        const items = await Item.findAll()
        res.send(items)
    } catch (error) {
        throw(error)
    }
})

module.exports = router