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

  if(!errors){
    await Item.create(req.body)
    let findAllItems = await Item.findAll()
    res.json(findAllItems)
  } else {
    res.json({error: errors.array()})
  }
})

// UPDATE
router.put('/:id', async (req, res) => {
  seedData[req.params.id - 1] = req.body
  res.json(seedData)
})

// DELETE
router.delete('/:id', async (req, res) => {
  seedData.splice(req.params.id - 1, 1)
  res.json(seedData)
})

module.exports = router;
