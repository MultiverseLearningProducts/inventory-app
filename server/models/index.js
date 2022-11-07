const {Sequelize} = require('sequelize')
const {sequelize} = require('../db')

// //initial model
// const Sauce = sequelize.define("sauces", {
//   name: Sequelize.STRING,
//   image: Sequelize.STRING,
// });

const Item = sequelize.define("items", {
  title: Sequelize.STRING,
  description: Sequelize.STRING,
  price: Sequelize.NUMBER,
  category: Sequelize.STRING,
  image: Sequelize.STRING,
});

module.exports = {
  db: sequelize,
  Item,
};
