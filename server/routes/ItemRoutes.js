const express = require("express")
const router = express.Router()
const controller = require('../controllers/ItemControllers')

// Get /item

router.get('/', controller.GetItems)
router.get('/:id', controller.GetItemById)
router.post('/', controller.CreateItem)
router.put('/:id', controller.UpdateItem)
router.delete('/:id', controller.DeleteItem)

module.exports = router