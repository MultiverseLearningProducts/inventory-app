const {Sequelize, DECIMAL} = require('sequelize')
const {db, Model, DataTypes} = require('../db')


class Item extends Model {};

Item.init({
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL(10, 2),
    description:DataTypes.STRING,
    category:DataTypes.STRING,
    image:DataTypes.STRING
},{
    sequelize: db,
    modelName: "Item"
})

module.exports = {
    Item
}