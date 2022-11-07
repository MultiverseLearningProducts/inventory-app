const express = require('express');
const router = express.Router();
const { Item } = require('../models/Item');

//find all items
router.get('/', async (req, res) => {
	const items = await Item.findAll();
	res.json(items);
});

//find individual item
router.get('/:id', async (req, res) => {
	const item = await Item.findByPk(req.params.id);
	res.json(item);
});

// Creating an item:
router.post('/', async (req, res) => {
	const newItem = await Item.create(req.body);
	return res.json(newItem);
});

// Deleting an item:
router.delete('/:id', async (req, res) => {
	const id = req.params.id;
	const currItem = await Item.findByPk(id);
	await currItem.destroy();
    return res.json(currItem)
});

// Updating an item with a form:
router.put('/:id', async (req, res) => {
	console.log(req.body)
	const id = req.params.id;
	console.log(id);
	const updatedItem = await Item.findByPk(id);
	updatedItem.update(req.body);
	res.json(updatedItem)
});



//EXPORTS
module.exports = router;
