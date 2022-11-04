const express = require("express");
const router = express.Router();
const {Item} = require('../models/Item')

//find all items
router.get('/', async (req,res) => {
    const items = await Item.findAll()
    res.json(items)
})


//find individual item
router.get('/:id', async (req, res) => {
    const item = await Item.findByPk(req.params.id)
    res.json(item)
})





//EXPORTS
module.exports = router;