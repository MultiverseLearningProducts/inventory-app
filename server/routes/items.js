const express = require("express")
const router = express.Router()
const { Item } = require('../models/index')
const controller = require('../controllers/ItemControllers')

// Get /item

router.get('/', controller.GetItems)

module.exports = router