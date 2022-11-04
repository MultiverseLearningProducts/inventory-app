const Sequelize = require('sequelize');
const {sequelize} = require('../db')


//defining the Item model
const Item = sequelize.define('item', {
    name: Sequelize.STRING,
    description: Sequelize.STRING,
    price: Sequelize.INTEGER,
    category: Sequelize.STRING,
    image: Sequelize.STRING
})

module.exports = {Item}