const {Sequelize} = require('sequelize')
const {sequelize} = require('../db')

const Item = sequelize.define("items", {
  title: Sequelize.STRING,
  price: Sequelize.INTEGER,
  
});

module.exports = {
  db: sequelize,
  Item,
};
