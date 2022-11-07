const express = require("express")
const router = express.Router()
const controller = require('../controllers/ItemControllers')
const { check } = require('express-validator')

// Get /item

router.get('/', controller.GetItems)
router.get('/:id', controller.GetItemById)
router.post('/',[
    check("title").not().isEmpty().trim(),
    check("description").not().isEmpty().trim(),
    check("price").not().isEmpty().trim(),
    check("category").not().isEmpty().trim(),
    check("image").not().isEmpty().trim(),
], controller.CreateItem)
router.put('/:id', controller.UpdateItem)
router.delete('/:id', controller.DeleteItem)

module.exports = router