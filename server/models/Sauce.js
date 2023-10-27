const {Sequelize} = require('sequelize')
const {db, Model, DataTypes} = require('../db')

const Sauce = db.define("sauces", {
  name: Sequelize.STRING,
  image: Sequelize.STRING,
});

module.exports = {
    Sauce
}