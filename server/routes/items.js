const express = require('express')
const router = express.Router()
const { Item } = require('../models')
const { sequelize } = require('../db')
const { items } = require('../seedData')

// GET /items
router.get('/', async (req, res, next) => {
  try {
    const items = await Item.findAll()
    res.send(items)
  } catch (error) {
    next(error)
  }
})

// GET Single Item
router.get('/:id', async (req, res, next) => {
  try {
    const items = await Item.findByPk(req.params.id)
    res.send(items)
  } catch (error) {
    next(error)
  }
})

//Routes to ADD Item
router.post('/', async (req, res, next) => {
  try {
    const addItem = await Item.create(req.body)
    res.send(addItem)
  } catch (error) {
    next(error)
  }
})



module.exports = router
