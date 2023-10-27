const {Sequelize} = require('sequelize')
const {db, Model, DataTypes} = require('../db')


class Item extends Model {};

Item.init({
    name: DataTypes.STRING,
    Description: DataTypes.STRING,
    Price:DataTypes.INTEGER,
    Category:DataTypes.STRING,
    Image:DataTypes.STRING
},{
    sequelize: db,
    modelName: "Item"
})

module.exports = {
    Item
}