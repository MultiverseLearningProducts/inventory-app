const express = require("express");
const router = express.Router();
const { Item } = require("../models");

//GET/Items

router.get('/', async (req, res) => {
    try {
        const items = await Item.findAll();
        res.send(items);
      } catch (error) {
        next(error);
      }
})

router.get('/:id', async (req, res, next) => {
    let item = await Item.findByPk(req.params.id)
    res.json({item});
})

module.exports = router;