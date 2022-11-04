const {Sequelize} = require('sequelize')
const {sequelize} = require('../db')

const Item = sequelize.define("items", {
  name: Sequelize.STRING,
  price: Sequelize.DECIMAL,
  descrption: Sequelize.TEXT,
  category: Sequelize.STRING,
  image: Sequelize.STRING,
});

module.exports = {
  db: sequelize,
  Item,
};
