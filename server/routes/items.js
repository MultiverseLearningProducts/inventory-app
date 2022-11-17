const express = require("express");
const seedData = require('../seedData.js')
const { Item } = require("../models");
const {check, validationResult} = require('express-validator')

const router = express.Router();

// GET all items
router.get("/", async (req, res, next) => {
  try {
    const items = await Item.findAll();
    res.send(items);
  } catch (error) {
    next(error);
  }
});

// GET one item
router.get('/:id', async (req, res) => {
  const oneItem = await Item.findByPk(req.params.id)
  res.json(oneItem)
})

// CREATE
router.post('/', [
  check('title').not().isEmpty().trim(),
  check('price').not().isEmpty().trim(),
  check('description').not().isEmpty().trim(),
  check('category').not().isEmpty().trim(),
  check('image').not().isEmpty().trim()
], async (req, res) => {
  const errors = validationResult(req)

  if(errors.isEmpty()){
    await Item.create(req.body)
    res.json(await Item.findAll())
  } else {
    res.json({error: errors.array()})
  }
})

// UPDATE
router.put('/:id', async (req, res) => {
  const updateItem = await Item.update(req.body, {
    where:{
      id: req.params.id
    }
  })
  res.json(await Item.findAll())
})

// DELETE
router.delete('/:id', async (req, res) => {
  const deleteItem = await Item.destroy({
    where: {
      id: req.params.id
    }
  })
  res.json(await Item.findAll())
})

module.exports = router;
