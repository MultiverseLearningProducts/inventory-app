const {Sequelize} = require('sequelize')
const {sequelize} = require('../db')

const Sauce = sequelize.define("sauce", {
  name: Sequelize.TEXT,
  image: Sequelize.TEXT,
});
// at some point we will need to remove the sauce as this is not needed

const Item = sequelize.define("item", {
  name: Sequelize.TEXT,
  description: Sequelize.TEXT,
  price: Sequelize.REAL, 
  category: Sequelize.TEXT,
  image: Sequelize.TEXT,
});

module.exports = {
  db: sequelize,
  Sauce,
  Item,
};
