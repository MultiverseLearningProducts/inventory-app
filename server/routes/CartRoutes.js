const express = require('express')
const router = express.Router()
const controller = require('../controllers/CartController')

router.get('/', controller.GetCarts)
router.get('/:id', controller.GetCartById)
router.post('/', controller.CreateCart)
router.put('/:id', controller.UpdateCart)
router.delete('/:id', controller.DeleteCart)

module.exports = router