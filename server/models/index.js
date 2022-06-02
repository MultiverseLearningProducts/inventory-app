const {Sequelize} = require('sequelize')
const {sequelize} = require('../db')

//create new properties
const Items = sequelize.define("items", {
  title: Sequelize.STRING,
  description: Sequelize.STRING,
  price: Sequelize.NUMBER,
  category: Sequelize.STRING,
  image: Sequelize.STRING
});

module.exports = {
  db: sequelize,
  Items,
};
