const express = require("express")
const router = express.Router()
const controller = require('../controllers/UserController')
const { check } = require('express-validator')

router.get('/', controller.GetUsers)
router.get('/:id', controller.GetUserById)
router.post('/',[
    check("username").not().isEmpty().trim(),
    check("email").not().isEmpty().trim(),
    check("password").not().isEmpty().trim(),
], controller.CreateUser)
router.put('/:id', controller.UpdateUser)
router.delete('/:id', controller.DeleteUser)

module.exports = router