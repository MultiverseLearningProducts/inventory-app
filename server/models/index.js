const {Sequelize} = require('sequelize')
const {sequelize} = require('../db')

const Item = sequelize.define('items', {
  title: Sequelize.STRING,
  price: Sequelize.DECIMAL(10,2),  //Precision specifier
  description: Sequelize.STRING,
  category: Sequelize.STRING,
  image: Sequelize.STRING 
})

module.exports = {
  db: sequelize,
  Item,
};


