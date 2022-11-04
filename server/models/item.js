//import our db, Model, DataTypes
const {Sequelize} = require('sequelize')
const {sequelize} = require('../db')

//Creating a Item child class from the Model parent class
const Item = sequelize.define("items", {
    title : Sequelize.STRING,
    description: Sequelize.STRING,
    price: Sequelize.NUMBER,
    category: Sequelize.STRING,
    image: Sequelize.STRING,
});

//exports
module.exports = { db: sequelize,Item }

