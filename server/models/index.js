const {Sequelize} = require('sequelize')
const {sequelize} = require('../db')

const Sauce = sequelize.define("sauces", {
  name: Sequelize.STRING,
  image: Sequelize.STRING,
});
// at some point we will need to remove the sauce as this is not needed

const Item = sequelize.define("item", {
  name: Sequelize.STRING,
  description: Sequelize.STRING,
  price: Sequelize.DOUBLE, //check if float or double is correct for numbers
  catagory: Sequelize.STRING,
  image: Sequelize.STRING,
});

module.exports = {
  db: sequelize,
  Sauce,
  Item,
};
