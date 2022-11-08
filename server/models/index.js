const {Sequelize} = require('sequelize')
const {sequelize} = require('../db')
// import 'regenerator-runtime/runtime'

const Item = sequelize.define("items", {
  title: Sequelize.STRING,
  price: Sequelize.INTEGER,
  description: Sequelize.TEXT,
  category: Sequelize.STRING,
  image: Sequelize.STRING,
});

module.exports = {
  db: sequelize,
  Item,
};
