const {Sequelize} = require('sequelize')
const {sequelize} = require('../db')

const {Item} = require('./Item')
const {Sauce} = require('./Sauce')



module.exports = {
  db: sequelize,
  Sauce,
  Item
};
