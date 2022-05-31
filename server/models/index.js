const {Sequelize} = require('sequelize')
const {sequelize} = require('../db')

const Item = sequelize.define("items", {
  name: Sequelize.STRING,
  image: Sequelize.STRING,
  category: Sequelize.STRING,
  price: Sequelize.REAL,
  description: Sequelize.STRING,
});

module.exports = {
  db: sequelize,
  Item,
};
