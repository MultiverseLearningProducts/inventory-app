const {Sequelize} = require('sequelize')
const {db} = require('../db')
const {Item} = require('./Item')
const {Sauce} = require('./Sauce')
// Define Associations


module.exports = {
  db,
  Sauce,
  Item
};
