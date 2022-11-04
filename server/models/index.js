const {sequelize} = require('../db')

const {Item} = require('./Item')
const {Sauce} = require('./Sauce')

// Relationships

module.exports = {
  db: sequelize,
  Sauce,
  Item
};
