const { Item } = require('../models/index')
const { post } = require('../routes')

const GetItems = async (req, res) => {
    res.send(await Item.findAll())
}

const GetItemById = async (req, res) => {
    const item = await Item.findByPk(req.params.id)
    res.send(item)
}

const CreateItem = async (req, res) => {
    let postBody = {
        ...req.body
    }
    await Item.create(postBody)
    res.send(await Item.findAll())
}

const UpdateItem = async (req, res) => {

    let itemId = parseInt(req.params.id)

    await Item.update(req.body, {
        where: {id: itemId},
        returning: true
    })
    res.send( await Item.findByPk(itemId))
}

const DeleteItem = async (req, res) => {

    let itemId = parseInt(req.params.id)

    await Item.destroy({
        where: {id: itemId}
    })
    res.send({message: `Deleted item with the if of ${itemId}`})
}

module.exports = {
    GetItems,
    GetItemById,
    CreateItem,
    UpdateItem,
    DeleteItem
}