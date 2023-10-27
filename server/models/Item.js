const {Sequelize, DECIMAL} = require('sequelize')
const {db, Model, DataTypes} = require('../db')


class Item extends Model {};

Item.init({
    name: DataTypes.STRING,
    price: {
        type: DECIMAL(10, 2),
        field: 'price'
    },
    description:DataTypes.STRING,
    category:DataTypes.STRING,
    image:DataTypes.STRING
},{
    sequelize: db,
    modelName: "Item"
})

// const Item = db.define("items", {
//     name: Sequelize.STRING,
//     price: Sequelize.DECIMAL(10, 2),
//     description:Sequelize.STRING,
//     category:Sequelize.STRING,
//     image:Sequelize.STRING
//   });

module.exports = {
    Item
}