const express = require("express");
const router = express.Router();
const {Item} = require('../models/Item')

//find all items
router.get('/', async (req,res) => {
    const items = await Item.findAll()
    res.json(items)
})

module.exports = router;