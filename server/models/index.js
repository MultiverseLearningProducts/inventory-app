const {Sequelize} = require('sequelize')
const {sequelize} = require('../db')

const Item = sequelize.define("item", {
  name: Sequelize.STRING,
  image: Sequelize.STRING,
});

module.exports = {
  db: sequelize,
  Sauce,
};
