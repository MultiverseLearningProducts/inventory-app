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

router.post('/', async (req, res) => {
    let newItem = await Item.create(req.body)
    res.json(newItem);
})

router.delete('/:id', async (req, res) => {
    await Item.destroy({
		where : {id : req.params.id}
	});
	res.send('Item deleted!')
})

router.put('/:id', async (req, res) => {
    await Item.update(req.body, {
        where : {id : req.params.id}
    });
    res.send("item updated")
})



module.exports = router;