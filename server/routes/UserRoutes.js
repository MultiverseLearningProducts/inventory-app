const express = require("express")
const router = express.Router()
const controller = require('../controllers/UserController')

router.get('/', controller.GetUsers)
router.get('/:id', controller.GetUserById)
router.post('/', controller.CreateUser)
router.put('/:id', controller.UpdateUser)
router.delete('/:id', controller.DeleteUser)

module.exports = router