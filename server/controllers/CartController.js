const {Model, Cart} = require('../models/Cart')

const GetCarts = async (req, res) => {
    res.send(await Cart.findAll())
}

const GetCartById = async (req, res) => {
    const cart = await Cart.findByPk(req.params.id)
    res.send (cart)
}

const CreateCart = async (req, res) => {
    let postBody = {
        ...req.postBody
    }
    await Cart.create(postBody)
    res.send(await Cart.findAll())
}

const UpdateCart = async (req, res) => {

    let cartId = parseInt(req.params.id)

    await Cart.update(req.body, {
        where: {id: cartId},
        returning: true
    })
    res.send(await Cart.findByPk(cartId))
}

const DeleteCart = async (req, res) => {

    let cartId = parseInt(req.params.id)

    await Cart.destroy({
        where: {id: cartId}
    })
    res.send({message: `Deleted Cart with the id of ${cartId}`})
}

module.exports = {
    GetCarts,
    GetCartById,
    CreateCart,
    UpdateCart,
    DeleteCart
}