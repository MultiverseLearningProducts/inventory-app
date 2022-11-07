const { User } = require('../models/User')
const { validationResult } = require('express-validator')

const GetUsers = async (req,res) => {
    res.send(await User.findAll())
}

const GetUserById = async (req, res) => {
    const user = await User.findByPk(req.params.id)
    res.send(user)
}

const CreateUser = async (req, res) => {

    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        res.json({error: errors.array})
    } else {
        
        let postBody = {
            ...req.body 
        }
        await User.create(postBody)
        res.send(await User.findAll())
    }
}

const UpdateUser = async (req, res) => {

    let userId = parseInt(req.params.id)

    await User.update(req.body, {
        where: {id: userId},
        returning: true
    })
    res.send(await User.findByPk(userId))
}

const DeleteUser = async (req, res) => {

    let userId = parseInt(req.params.id)

    await User.destroy({
        where: {id: userId}
    })
    res.send({message: `Deleted User with the id of ${userId}`})
}

module.exports = {
    GetUsers,
    GetUserById,
    CreateUser,
    UpdateUser,
    DeleteUser
}