const { Item } = require('../models/index')

const GetItems = async (req, res) => {
    res.send(await Item.findAll())
}

module.exports = {
    GetItems
}