const {Sequelize} = require('sequelize')
const { db } = require('../db')

const Sauce = db.define("sauces", {
  name: Sequelize.STRING,
  image: Sequelize.STRING,
});

module.exports = {
  Sauce
};
