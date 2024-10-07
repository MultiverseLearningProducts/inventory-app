const {db, DataTypes, Model} = require('../db');


class Item extends Model {

}

Item.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    category: DataTypes.STRING,
    image: DataTypes.STRING
},{
    sequelize: db,
    modelName: 'Attack'
})

module.exports = {
    Item
};