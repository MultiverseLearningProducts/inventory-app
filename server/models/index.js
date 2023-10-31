const {Sequelize} = require('sequelize')
const {db} = require('../db')
const {Item} = require('./Item')
// Define Associations


module.exports = {
  db,
  Item
};
